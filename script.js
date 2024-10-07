// script.js

// Initialize the current program and available programs
let currentProgram = null;
let availablePrograms = [];
let currentProgramData = null; // Store the current program data

// Create a cache object to store loaded ASCII arts
const asciiArtCache = {};

// Initialize the current circuit
let currentCircuit = null;

// Function to display the list of available programs
function displayProgramList() {
  const programDiv = document.getElementById("program");
  programDiv.innerHTML = ""; // Clear previous content

  // Hide other UI elements when no program is selected
  document.getElementById("timer-count-wrapper").style.display = "none";
  document.getElementById("week-completed-container").style.display = "none";
  document.getElementById("program-title").style.display = "none";

  const programListDiv = document.createElement("div");
  programListDiv.className = "program-list";

  // Fetch the list of programs from index.json
  fetch("programs/index.json")
    .then((response) => response.json())
    .then((programs) => {
      // Save the programs list for later use
      availablePrograms = programs;

      programs.forEach((program) => {
        const programButton = document.createElement("button");
        programButton.textContent = program.name;
        programButton.onclick = () => {
          loadProgram(program);
        };
        programListDiv.appendChild(programButton);
      });

      programDiv.appendChild(programListDiv);

      // Check if a program was selected before
      const savedProgramName = localStorage.getItem("selectedProgramName");
      if (savedProgramName) {
        const savedProgram = programs.find((p) => p.name === savedProgramName);
        if (savedProgram) {
          loadProgram(savedProgram);
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching programs:", error);
    });
}

// Function to load the selected program
function loadProgram(programMeta) {
  currentProgram = programMeta;
  localStorage.setItem("selectedProgramName", programMeta.name);
  document.getElementById("program-title").textContent = programMeta.name;

  // Show the UI elements when a program is selected
  document.getElementById("timer-count-wrapper").style.display = "flex";
  document.getElementById("week-completed-container").style.display = "flex";
  document.getElementById("program-title").style.display = "block";

  // Load the program data
  loadProgramData(programMeta)
    .then((programData) => {
      currentProgramData = programData; // Store the program data
      generateProgramContent(programData);
      loadProgress();
      updateWeekCompletedButton();
      updateWeekCounterDisplay();
    })
    .catch((error) => {
      console.error("Error loading program data:", error);
    });
}

// Function to load program data from the program file
function loadProgramData(programMeta) {
  return new Promise((resolve, reject) => {
    // Remove any previously added program script
    const existingScript = document.getElementById("program-script");
    if (existingScript) {
      existingScript.parentNode.removeChild(existingScript);
    }

    // Create a new script element to load the program file
    const script = document.createElement("script");
    script.id = "program-script";
    script.src = `programs/${programMeta.file}`;
    script.onload = () => {
      // Assume that the program data is assigned to a global variable named 'programData'
      if (window.programData) {
        resolve(window.programData);
        // Clean up the global variable to avoid conflicts
        delete window.programData;
      } else {
        reject("Program data not found in the script.");
      }
    };
    script.onerror = () => {
      reject("Failed to load the program script.");
    };

    document.body.appendChild(script);
  });
}

// Function to generate the program content
function generateProgramContent(days) {
  const programDiv = document.getElementById("program");
  programDiv.innerHTML = ""; // Clear previous content

  days.forEach((day, dayIndex) => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.innerHTML = `
      <div class="day-header">
        <div class="checkbox-container">
          <input type="checkbox" id="day${
            dayIndex + 1
          }" onchange="saveProgress(event)">
        </div>
        <h2>Day ${dayIndex + 1}: ${day.title}</h2>
      </div>
      <div id="exercises${
        dayIndex + 1
      }" class="exercises" style="display: none;">
        ${day.categories
          .map(
            (category, catIndex) => `
              <h3>${category.name} (${category.time})</h3>
              <ul>
                ${category.exercises
                  .map((exercise, exIndex) => {
                    if (typeof exercise === "string") {
                      return `<li class="exercise-item no-bullet">${exercise}</li>`;
                    } else if (exercise.isDescription) {
                      return `<li class="exercise-description">${exercise.name}</li>`;
                    } else if (exercise.isCircuit) {
                      return `
                      <li class="exercise-circuit">
                        <span>${exercise.name}</span>
                        <button class="start-circuit-button" onclick="startCircuit(${dayIndex}, ${catIndex}, ${exIndex})">Start Circuit</button>
                        <ul>
                          ${exercise.circuitExercises
                            .map(
                              (circuitExercise, circuitIndex) => `
                              <li class="exercise-item ${
                                circuitExercise.hasPicture
                                  ? "picture-available"
                                  : ""
                              }">
                                <span onclick="toggleAsciiArt(event, ${dayIndex}, ${catIndex}, ${exIndex}, ${circuitIndex}, '${
                                circuitExercise.asciiArtKey || ""
                              }')">${circuitExercise.name}</span>
                                ${
                                  circuitExercise.hasPicture
                                    ? `<pre class="ascii-art" id="ascii-${dayIndex}-${catIndex}-${exIndex}-${circuitIndex}"></pre>`
                                    : ""
                                }
                              </li>
                            `
                            )
                            .join("")}
                        </ul>
                      </li>
                    `;
                    } else {
                      return `
                      <li class="exercise-item ${
                        exercise.hasPicture ? "picture-available" : ""
                      }">
                        <span onclick="toggleAsciiArt(event, ${dayIndex}, ${catIndex}, ${exIndex}, undefined, '${
                        exercise.asciiArtKey || ""
                      }')">${exercise.name}</span>
                        ${
                          exercise.hasPicture
                            ? `<pre class="ascii-art" id="ascii-${dayIndex}-${catIndex}-${exIndex}"></pre>`
                            : ""
                        }
                      </li>
                    `;
                    }
                  })
                  .join("")}
              </ul>
            `
          )
          .join("")}
      </div>
    `;
    programDiv.appendChild(dayDiv);

    // Add click event listener to the day header
    dayDiv.querySelector(".day-header").addEventListener("click", (event) => {
      if (!event.target.matches('input[type="checkbox"]')) {
        event.preventDefault();
        event.stopPropagation();
        toggleExercises(dayIndex + 1);
      }
    });
  });
}

// Functions to handle exercise toggling and ASCII art display
function toggleExercises(dayNumber) {
  const exercisesDiv = document.getElementById(`exercises${dayNumber}`);
  if (
    exercisesDiv.style.display === "none" ||
    exercisesDiv.style.display === ""
  ) {
    exercisesDiv.style.display = "block";
  } else {
    exercisesDiv.style.display = "none";
  }
}

function toggleAsciiArt(
  event,
  dayIndex,
  catIndex,
  exIndex,
  circuitIndex,
  asciiArtKey
) {
  event.stopPropagation();
  const asciiId =
    circuitIndex !== undefined
      ? `ascii-${dayIndex}-${catIndex}-${exIndex}-${circuitIndex}`
      : `ascii-${dayIndex}-${catIndex}-${exIndex}`;
  const asciiElement = document.getElementById(asciiId);
  if (asciiElement) {
    if (asciiElement.classList.contains("show")) {
      asciiElement.classList.remove("show");
      asciiElement.textContent = "";
    } else {
      asciiElement.classList.add("show");
      loadAsciiArt(asciiElement, asciiArtKey);
    }
  }
}

// Function to load ASCII art
function loadAsciiArt(element, asciiArtKey) {
  // Check if the ASCII art is already in the cache
  if (asciiArtCache[asciiArtKey]) {
    element.textContent = asciiArtCache[asciiArtKey];
    scaleAsciiArt(element);
    return;
  }

  const filePath = asciiArtPaths[asciiArtKey];
  if (filePath) {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not load ASCII art for key: ${asciiArtKey}`);
        }
        return response.text();
      })
      .then((asciiArtContent) => {
        // Store the ASCII art content in the cache
        asciiArtCache[asciiArtKey] = asciiArtContent;
        element.textContent = asciiArtContent;
        scaleAsciiArt(element);
      })
      .catch((error) => {
        console.error(error);
        element.textContent = "ASCII art not found";
      });
  } else {
    element.textContent = "ASCII art not found";
  }
}

// Function to scale ASCII art
function scaleAsciiArt(asciiElement) {
  const container = asciiElement.parentElement;

  // Reset font size and line height to default values
  asciiElement.style.fontSize = "";
  asciiElement.style.lineHeight = "";

  const containerWidth = container.offsetWidth;
  const asciiLines = asciiElement.textContent.split("\n");
  const maxLineLength = Math.max(...asciiLines.map((line) => line.length));

  // Define multipliers and base font size for exercise ASCII arts
  const widthMultiplier = 8;
  const baseFontSize = 10;

  // Calculate the scaling factor
  const widthScale = containerWidth / (maxLineLength * widthMultiplier);
  const scaleFactor = widthScale;

  // Apply the scaling
  asciiElement.style.fontSize = `${scaleFactor * baseFontSize}px`;
  asciiElement.style.lineHeight = "1";
}

// Functions to handle progress saving and loading
function saveProgress(event) {
  event.stopPropagation();
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const progress = Array.from(checkboxes).map((checkbox) => checkbox.checked);
  localStorage.setItem(
    `fitnessProgress_${currentProgram.name}`,
    JSON.stringify(progress)
  );
  updateWeekCompletedButton();
}

function loadProgress() {
  const savedProgress = localStorage.getItem(
    `fitnessProgress_${currentProgram.name}`
  );
  if (savedProgress) {
    const progress = JSON.parse(savedProgress);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
      checkbox.checked = progress[index];
    });
    updateWeekCompletedButton();
  }
}

function resetCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  localStorage.setItem(
    `fitnessProgress_${currentProgram.name}`,
    JSON.stringify(new Array(checkboxes.length).fill(false))
  );
  updateWeekCompletedButton();
}

function updateWeekCompletedButton() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allChecked = Array.from(checkboxes).every(
    (checkbox) => checkbox.checked
  );
  const weekCompletedBtn = document.getElementById("weekCompletedBtn");
  weekCompletedBtn.disabled = !allChecked;

  // Add blinking effect when all checkboxes are checked
  if (allChecked) {
    weekCompletedBtn.classList.add("blink-green");
    setTimeout(() => weekCompletedBtn.classList.remove("blink-green"), 500);
  }
}

function incrementWeekCounter() {
  let weekCount = parseInt(
    localStorage.getItem(`weekCount_${currentProgram.name}`) || "0"
  );
  weekCount++;
  localStorage.setItem(`weekCount_${currentProgram.name}`, weekCount);
  updateWeekCounterDisplay();
  resetCheckboxes();
}

function updateWeekCounterDisplay() {
  const weekCount =
    localStorage.getItem(`weekCount_${currentProgram.name}`) || "0";
  document.getElementById("weekCounter").textContent = weekCount;
}

// Timer functionality
const timerElement = document.getElementById("timer");
const timerOptions = document.getElementById("timer-options");
let timeLeft = 60;
let lastSetValue = 60;
let isTimerRunning = false;
let timerStartTime;
let timerEndTime;
let timerAnimationFrame;
let longPressTimer;
const longPressDuration = 500; // milliseconds
let isLongPress = false;

function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

function startTimer() {
  if (!isTimerRunning) {
    timerElement.classList.add("blink-green");
    setTimeout(() => timerElement.classList.remove("blink-green"), 500);

    isTimerRunning = true;
    timerStartTime = Date.now();
    timerEndTime = timerStartTime + timeLeft * 1000;

    updateTimer();
  }
}

function stopTimer() {
  timerElement.classList.add("blink-red");
  setTimeout(() => timerElement.classList.remove("blink-red"), 500);
  isTimerRunning = false;
  cancelAnimationFrame(timerAnimationFrame); // Stop the animation frame
  updateTimerDisplay(timeLeft);
}

function updateTimer() {
  if (isTimerRunning) {
    const now = Date.now();
    const remainingTime = Math.max(0, Math.ceil((timerEndTime - now) / 1000));

    if (remainingTime > 0) {
      timeLeft = remainingTime;
      updateTimerDisplay(timeLeft);
      timerAnimationFrame = requestAnimationFrame(updateTimer);
    } else {
      stopTimer();
      timeLeft = lastSetValue; // Reset timeLeft after timer ends
    }
  }
}

function setTimer(seconds) {
  lastSetValue = seconds;
  timeLeft = seconds;

  if (isTimerRunning) {
    isTimerRunning = false; // Stop the timer
    cancelAnimationFrame(timerAnimationFrame); // Stop the animation frame
    timerElement.classList.add("blink-red");
    setTimeout(() => timerElement.classList.remove("blink-red"), 500);
  }

  updateTimerDisplay(timeLeft);
  timerOptions.style.display = "none";
}

function showTimerOptions() {
  timerOptions.style.display = "flex";
}

function hideTimerOptions() {
  timerOptions.style.display = "none";
}

// Long press functionality for timer
function handleTimerStart(event) {
  event.preventDefault();
  isLongPress = false;
  longPressTimer = setTimeout(() => {
    isLongPress = true;
    showTimerOptions();
  }, longPressDuration);
}

function handleTimerEnd(event) {
  event.preventDefault();
  clearTimeout(longPressTimer);
  if (!isLongPress) {
    if (isTimerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }
}

function addTimerEventListeners() {
  let touchStarted = false;

  timerElement.addEventListener("mousedown", handleTimerStart);
  timerElement.addEventListener("mouseup", handleTimerEnd);
  timerElement.addEventListener("mouseleave", () =>
    clearTimeout(longPressTimer)
  );

  timerElement.addEventListener(
    "touchstart",
    (e) => {
      if (!touchStarted) {
        touchStarted = true;
        handleTimerStart(e);
      }
    },
    { passive: false }
  );

  timerElement.addEventListener(
    "touchend",
    (e) => {
      if (touchStarted) {
        touchStarted = false;
        handleTimerEnd(e);
      }
    },
    { passive: false }
  );
}

// Count button functionality
const countButton = document.getElementById("count-button");
const countValue = document.getElementById("count-value");
let count = 0;
let countLongPressTimer;
let isCountLongPress = false;

function updateCountDisplay() {
  countValue.textContent = count;
}

function incrementCount() {
  count++;
  updateCountDisplay();
  countButton.classList.add("blink-green");
  setTimeout(() => countButton.classList.remove("blink-green"), 500);
}

function resetCount() {
  count = 0;
  updateCountDisplay();
  countButton.classList.add("blink-red");
  setTimeout(() => countButton.classList.remove("blink-red"), 500);
}

function handleCountStart(event) {
  event.preventDefault();
  isCountLongPress = false;
  countLongPressTimer = setTimeout(() => {
    isCountLongPress = true;
    resetCount();
  }, longPressDuration);
}

function handleCountEnd(event) {
  event.preventDefault();
  clearTimeout(countLongPressTimer);
  if (!isCountLongPress) {
    incrementCount();
  }
}

function addCountEventListeners() {
  let touchStarted = false;

  countButton.addEventListener("mousedown", handleCountStart);
  countButton.addEventListener("mouseup", handleCountEnd);
  countButton.addEventListener("mouseleave", () =>
    clearTimeout(countLongPressTimer)
  );

  countButton.addEventListener(
    "touchstart",
    (e) => {
      if (!touchStarted) {
        touchStarted = true;
        handleCountStart(e);
      }
    },
    { passive: false }
  );

  countButton.addEventListener(
    "touchend",
    (e) => {
      if (touchStarted) {
        touchStarted = false;
        handleCountEnd(e);
      }
    },
    { passive: false }
  );
}

// Reset all functionality
function resetAll() {
  // Clear all data saved by the website
  localStorage.clear();

  // Optionally clear session storage if used
  sessionStorage.clear();

  // Reload the page from the server to get fresh content
  window.location.href =
    window.location.href.split("?")[0] + "?nocache=" + new Date().getTime();
}

// Go back to program list functionality
function goBackToProgramList() {
  // Reset selected program
  localStorage.removeItem("selectedProgramName");
  currentProgram = null;
  displayProgramList();
}

// Theme switching functionality
function loadTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("selectedTheme", themeName);
}

function populateThemeMenu() {
  const themeOptions = document.getElementById("theme-options");
  themeOptions.innerHTML = ""; // Clear previous content

  const themes = getAvailableThemes();

  themes.forEach((themeName) => {
    const button = document.createElement("button");
    button.textContent = themeName;
    button.onclick = () => {
      loadTheme(themeName);
      hideThemeMenu();
    };
    themeOptions.appendChild(button);
  });
}

function getAvailableThemes() {
  const themes = [];
  for (let sheet of document.styleSheets) {
    if (sheet.href && sheet.href.includes("themes.css")) {
      try {
        for (let rule of sheet.cssRules) {
          if (rule.selectorText) {
            const regex = /\[data-theme="(.+?)"\]/g;
            let match;
            while ((match = regex.exec(rule.selectorText)) !== null) {
              if (match[1] && !themes.includes(match[1])) {
                themes.push(match[1]);
              }
            }
          }
        }
      } catch (e) {
        console.warn("Could not read CSS rules from themes.css:", e);
      }
    }
  }
  return themes;
}

function toggleThemeMenu() {
  const themeOptions = document.getElementById("theme-options");
  if (
    themeOptions.style.display === "none" ||
    themeOptions.style.display === ""
  ) {
    themeOptions.style.display = "flex";
  } else {
    hideThemeMenu();
  }
}

function hideThemeMenu() {
  const themeOptions = document.getElementById("theme-options");
  themeOptions.style.display = "none";
}

// Initialize theme
function initializeTheme() {
  let savedTheme = localStorage.getItem("selectedTheme") || "Solarized Dark";
  if (savedTheme === "Default") {
    savedTheme = "Solarized Dark";
    localStorage.setItem("selectedTheme", savedTheme);
  }
  loadTheme(savedTheme);
  populateThemeMenu();
}

// Handle visibility change for timer
function handleVisibilityChange() {
  if (!document.hidden && isTimerRunning) {
    const now = Date.now();
    const elapsedTime = Math.floor((now - timerStartTime) / 1000);
    timeLeft = Math.max(0, lastSetValue - elapsedTime);
    timerEndTime = now + timeLeft * 1000;
    updateTimer();
  }
}

// Add visibility change event listener
document.addEventListener("visibilitychange", handleVisibilityChange);

// Hide timer options and theme menu when clicking anywhere else
document.addEventListener("click", (event) => {
  if (
    !timerElement.contains(event.target) &&
    !timerOptions.contains(event.target)
  ) {
    hideTimerOptions();
  }

  const themeButton = document.getElementById("theme-button");
  const themeOptions = document.getElementById("theme-options");
  if (
    !themeButton.contains(event.target) &&
    !themeOptions.contains(event.target)
  ) {
    hideThemeMenu();
  }
});

// Prevent clicks within the timer options from closing the menu immediately
timerOptions.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Initialize the application when the page loads
document.addEventListener("DOMContentLoaded", () => {
  updateTimerDisplay(timeLeft);
  updateCountDisplay();
  initializeTheme();
  addTimerEventListeners();
  addCountEventListeners();

  // Event listeners for buttons
  document
    .getElementById("weekCompletedBtn")
    .addEventListener("click", incrementWeekCounter);
  document.getElementById("resetBtn").addEventListener("click", resetAll);
  document
    .getElementById("goBackBtn")
    .addEventListener("click", goBackToProgramList);

  // Event listener for checkbox changes
  document.addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      saveProgress(event);
    }
  });

  // Add a window resize event listener to rescale ASCII art
  window.addEventListener("resize", () => {
    const asciiElements = document.querySelectorAll(".ascii-art.show");
    asciiElements.forEach(scaleAsciiArt); // Rescale exercises
    if (currentCircuit && document.getElementById("circuit-ascii-art")) {
      scaleAsciiArt(document.getElementById("circuit-ascii-art"));
    }
  });

  // Start by displaying the program list
  displayProgramList();
});

// Function to start the circuit (now embedded in the same page)
function startCircuit(dayIndex, catIndex, exIndex) {
  // Retrieve the circuit exercise data
  const day = currentProgramData[dayIndex];
  const category = day.categories[catIndex];
  const exercise = category.exercises[exIndex];

  // Hide main content
  document.getElementById("program").style.display = "none";
  document.getElementById("timer-count-wrapper").style.display = "none";
  document.getElementById("week-completed-container").style.display = "none";
  document.getElementById("program-title").style.display = "none";

  // Show circuit content
  document.getElementById("circuit-page").style.display = "block";

  // Initialize circuit
  initializeCircuit(exercise);
}

// Circuit functionality (adjusted to allow exercise selection)

// Function to initialize the circuit
function initializeCircuit(exercise) {
  // Extract circuit details
  const rounds = exercise.rounds || 1;
  const workTime = exercise.workTime || 30; // default to 30 seconds
  const restTime = exercise.restTime || 15; // default to 15 seconds
  const restBetweenRounds = exercise.restBetweenRounds || 60; // default to 60 seconds
  const circuitExercises = exercise.circuitExercises;

  // Update the circuit description (remove 'Circuit' and parentheses)
  let description = exercise.name
    .replace(/Circuit/g, "")
    .replace(/[()]/g, "")
    .trim();
  document.getElementById("circuit-description").textContent = description;

  // Update total rounds
  document.getElementById("circuit-total-rounds").textContent = rounds;

  // Initialize circuit variables
  currentCircuit = {
    rounds,
    workTime,
    restTime,
    restBetweenRounds,
    circuitExercises,
    currentRound: 1,
    currentExerciseIndex: 0,
    selectedExerciseIndex: 0, // New property to track selected exercise
    isExercise: true, // true if currently in exercise time, false if in rest
    timeLeft: workTime,
    timerInterval: null,
    isTimerRunning: false,
  };

  // Display the list of circuit exercises
  displayCircuitExerciseList();

  // Update the display
  updateCircuitDisplay();
  updateCircuitTimerDisplay();
}

// Function to display the list of circuit exercises
function displayCircuitExerciseList() {
  const circuit = currentCircuit;
  const exerciseListDiv = document.getElementById("circuit-exercise-list");
  exerciseListDiv.innerHTML = "";

  // Create a container similar to the exercise boxes in the main program
  const exerciseBox = document.createElement("div");
  exerciseBox.className = "exercise-box";

  circuit.circuitExercises.forEach((exercise, index) => {
    const exerciseItem = document.createElement("div");
    exerciseItem.className = "circuit-exercise-item";
    exerciseItem.textContent = exercise.name;
    exerciseItem.id = `exercise-item-${index}`;
    exerciseItem.dataset.index = index; // Store the index for reference

    // Add click event listener to make the exercise selectable
    exerciseItem.addEventListener("click", (event) => {
      selectCircuitExercise(index);
    });

    exerciseBox.appendChild(exerciseItem);
  });

  exerciseListDiv.appendChild(exerciseBox);

  // Set the default selected exercise to the first one
  circuit.selectedExerciseIndex = 0;
  highlightSelectedExercise();
}

// Function to highlight the selected exercise
function highlightSelectedExercise() {
  const circuit = currentCircuit;
  const exerciseItems = document.querySelectorAll(".circuit-exercise-item");

  exerciseItems.forEach((item) => {
    const itemIndex = parseInt(item.dataset.index, 10);
    if (itemIndex === circuit.selectedExerciseIndex) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });
}

// Function to handle exercise selection
function selectCircuitExercise(index) {
  const circuit = currentCircuit;
  circuit.selectedExerciseIndex = index;
  highlightSelectedExercise();
}

// Function to start the circuit timer
function startCircuitTimer() {
  const circuit = currentCircuit;

  if (circuit.isTimerRunning) {
    // Timer is already running
    return;
  }

  // Set the current exercise index to the selected one at the start
  if (circuit.currentRound === 1 && circuit.currentExerciseIndex === 0) {
    circuit.currentExerciseIndex = circuit.selectedExerciseIndex;
  }

  circuit.isTimerRunning = true;
  updateCircuitDisplay();

  circuit.timerInterval = setInterval(() => {
    circuit.timeLeft--;
    updateCircuitTimerDisplay();

    if (circuit.timeLeft <= 0) {
      if (circuit.isExercise) {
        // Finished work time, start rest time
        circuit.isExercise = false;
        circuit.timeLeft = circuit.restTime;
        updateCircuitDisplay("Rest");
      } else {
        // Finished rest time, move to next exercise
        circuit.isExercise = true;
        circuit.currentExerciseIndex++;
        if (circuit.currentExerciseIndex >= circuit.circuitExercises.length) {
          // Finished all exercises in this round
          circuit.currentExerciseIndex = 0;
          circuit.currentRound++;
          if (circuit.currentRound > circuit.rounds) {
            // Finished all rounds
            clearInterval(circuit.timerInterval);
            circuit.isTimerRunning = false;
            alert("Circuit completed!");
            stopCircuit();
            return;
          } else {
            // Rest between rounds
            circuit.isExercise = false;
            circuit.timeLeft = circuit.restBetweenRounds;
            updateCircuitDisplay("Rest between rounds");
          }
        }
        // Skip to selected exercise if starting a new round
        if (
          circuit.currentExerciseIndex === 0 &&
          circuit.currentRound > 1 &&
          circuit.selectedExerciseIndex > 0
        ) {
          circuit.currentExerciseIndex = circuit.selectedExerciseIndex;
        }
        circuit.timeLeft = circuit.workTime;
        updateCircuitDisplay();
      }
    }
  }, 1000);

  document.getElementById("circuit-start-button").disabled = true;
  document.getElementById("circuit-pause-button").disabled = false;
}

// Function to pause the circuit timer
function pauseCircuitTimer() {
  const circuit = currentCircuit;

  if (!circuit.isTimerRunning) {
    // Timer is not running
    return;
  }

  circuit.isTimerRunning = false;
  clearInterval(circuit.timerInterval);

  document.getElementById("circuit-start-button").disabled = false;
  document.getElementById("circuit-pause-button").disabled = true;
}

// Function to update the circuit display
function updateCircuitDisplay(status) {
  const circuit = currentCircuit;
  document.getElementById("circuit-round").textContent = circuit.currentRound;
  const exerciseNameElement = document.getElementById("circuit-exercise-name");
  const asciiArtElement = document.getElementById("circuit-ascii-art");

  if (status === "Rest") {
    exerciseNameElement.textContent = "Rest";
    asciiArtElement.textContent = "";
  } else if (status === "Rest between rounds") {
    exerciseNameElement.textContent = "Rest between rounds";
    asciiArtElement.textContent = "";
  } else {
    const exercise = circuit.circuitExercises[circuit.currentExerciseIndex];
    exerciseNameElement.textContent = exercise.name;

    // Load ASCII art if available
    if (exercise.hasPicture && exercise.asciiArtKey) {
      loadAsciiArt(asciiArtElement, exercise.asciiArtKey);
    } else {
      asciiArtElement.textContent = "";
    }
  }

  updateActiveExerciseInList();
}

// Function to update the active exercise in the list
function updateActiveExerciseInList() {
  const circuit = currentCircuit;

  // Remove 'active' class from all exercises
  const exerciseItems = document.querySelectorAll(".circuit-exercise-item");
  exerciseItems.forEach((item) => item.classList.remove("active"));

  // Add 'active' class to the current exercise
  const currentExerciseItem = document.getElementById(
    `exercise-item-${circuit.currentExerciseIndex}`
  );
  if (currentExerciseItem) {
    currentExerciseItem.classList.add("active");
  }
}

// Function to update the circuit timer display
function updateCircuitTimerDisplay() {
  const circuit = currentCircuit;
  const minutes = Math.floor(circuit.timeLeft / 60);
  const seconds = circuit.timeLeft % 60;
  document.getElementById("circuit-timer").textContent = `${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Function to stop the circuit
function stopCircuit() {
  const circuit = currentCircuit;
  if (circuit.timerInterval) {
    clearInterval(circuit.timerInterval);
  }

  // Hide circuit content
  document.getElementById("circuit-page").style.display = "none";

  // Show main content
  document.getElementById("program").style.display = "block";
  document.getElementById("timer-count-wrapper").style.display = "flex";
  document.getElementById("week-completed-container").style.display = "flex";
  document.getElementById("program-title").style.display = "block";

  // Reset currentCircuit
  currentCircuit = null;
}

// Ensure that theme is applied when circuit is initialized
function applySelectedTheme() {
  let savedTheme = localStorage.getItem("selectedTheme") || "Solarized Dark";
  if (savedTheme === "Default") {
    savedTheme = "Solarized Dark";
    localStorage.setItem("selectedTheme", savedTheme);
  }
  loadTheme(savedTheme);
}

// Add event listener for window load to apply theme
window.addEventListener("load", () => {
  applySelectedTheme();
});
