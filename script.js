// script.js

// Initialize the current program and available programs
let currentProgram = null;
let availablePrograms = [];

// Create a cache object to store loaded ASCII arts
const asciiArtCache = {};

// Normalize the asciiArtPaths keys (Assuming asciiArtPaths is defined in ascii-art.js)
const normalizedAsciiArtPaths = asciiArtPaths;

// Function to normalize exercise names
function normalizeExerciseName(name) {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, "") // Remove text in parentheses
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Split camelCase
    .replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove non-alphanumeric characters except spaces
    .trim()
    .split(/\s+/) // Split by one or more spaces
    .join("");
}

// Singularize function
function singularize(word) {
  if (word.length > 3 && word.endsWith("ies")) {
    return word.slice(0, -3) + "y"; // e.g., "bodies" to "body"
  }
  if (word.length > 3 && word.endsWith("s")) {
    return word.slice(0, -1);
  }
  return word;
}

// Initialize elements and variables
const timerElement = document.getElementById("timer");
const timerOptions = document.getElementById("timer-options");
const countButton = document.getElementById("count-button");
const countValue = document.getElementById("count-value");
const weekCounterElement = document.getElementById("weekCounter");
let timeLeft = 60;
let lastSetValue = 60;
let isTimerRunning = false;
let timerStartTime;
let timerEndTime;
let timerAnimationFrame;
let longPressTimer;
const longPressDuration = 500; // milliseconds
let isLongPress = false;
let count = 0;
let countLongPressTimer;
let isCountLongPress = false;
let weekCount = 0;
let weekCountLongPressTimer;
let isWeekCountLongPress = false;

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

  // Add 'Load your own program' button
  const loadProgramButton = document.createElement("button");
  loadProgramButton.textContent = "Load your own program";
  loadProgramButton.onclick = () => {
    showProgramInputModal();
  };
  programListDiv.appendChild(loadProgramButton);

  // Add 'Info' button
  const infoButton = document.createElement("button");
  infoButton.textContent = "Info";
  infoButton.onclick = () => {
    showInfoModal();
  };
  programListDiv.appendChild(infoButton);

  // Fetch the list of programs from index.json
  fetch("programs/index.json")
    .then((response) => response.json())
    .then((programs) => {
      // Save the programs list for later use
      availablePrograms = programs;

      // Load custom programs from localStorage
      const customPrograms = loadCustomPrograms();
      availablePrograms = availablePrograms.concat(customPrograms);

      // Display programs
      availablePrograms.forEach((program) => {
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
        const savedProgram = availablePrograms.find(
          (p) => p.name === savedProgramName
        );
        if (savedProgram) {
          loadProgram(savedProgram);
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching programs:", error);
    });
}

// Function to load custom programs from localStorage
function loadCustomPrograms() {
  const customPrograms = [];
  const customProgramsData =
    JSON.parse(localStorage.getItem("customPrograms")) || [];
  customProgramsData.forEach((programMeta) => {
    customPrograms.push(programMeta);
  });
  return customPrograms;
}

// Function to save custom program to localStorage
function saveCustomProgram(programMeta) {
  let customPrograms = JSON.parse(localStorage.getItem("customPrograms")) || [];
  // Add new program without overwriting existing ones
  customPrograms.push(programMeta);
  localStorage.setItem("customPrograms", JSON.stringify(customPrograms));
}

// Function to generate a unique program name
function generateUniqueProgramName(baseName) {
  let customPrograms = JSON.parse(localStorage.getItem("customPrograms")) || [];
  const programNames = customPrograms.map((p) => p.name);

  // Also include names of built-in programs
  const builtInProgramNames = availablePrograms
    .filter((p) => !p.isCustom)
    .map((p) => p.name);
  const allProgramNames = programNames.concat(builtInProgramNames);

  let version = 1;
  let uniqueName = baseName;
  while (allProgramNames.includes(uniqueName)) {
    version++;
    uniqueName = `${baseName} v${version}`;
  }
  return uniqueName;
}

// Function to show the program input modal
function showProgramInputModal() {
  const modal = document.getElementById("program-input-modal");
  modal.style.display = "block";
}

// Function to show the info modal
function showInfoModal() {
  const modal = document.getElementById("info-modal");
  modal.style.display = "block";

  // Load the example program data in Markdown format
  const exampleProgram = `
# Full Body Strength and Cardio

## Dynamic Warm-up (10 min)
- Light jog
- Arm circles
- Leg swings
- Bodyweight squats

## Main Workout (65 min)

### Circuit (3 rounds, 45 sec each exercise, 15 sec rest between exercises, 2 min rest between rounds)
- Pull-ups or assisted pull-ups
- Push-ups
- Bodyweight squats
- Dumbbell rows (10kg)
- Lunges
- Plank

- Cardio: 15 min moderate-intensity running or cycling
- Hyperextensions: 3 sets of 10 reps (bodyweight)

## Cool-down and Stretching (15 min)
- Full body stretch, focus on back and legs
`;

  const exampleProgramPre = document.getElementById("example-program");
  exampleProgramPre.textContent = exampleProgram;
}

// Function to hide modals
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Event listeners for modal close buttons
document.getElementById("info-modal-close").onclick = function () {
  hideModal("info-modal");
};

document.getElementById("program-input-modal-close").onclick = function () {
  hideModal("program-input-modal");
};

// Function to parse Markdown input into program data
function parseMarkdownProgram(markdownText) {
  const lines = markdownText.split("\n");
  let programData = [];
  let currentDay = null;
  let currentCategory = null;
  let currentExercise = null;
  let inCircuit = false;

  const headerRegex = /^#\s+(.+)/;
  const subHeaderRegex = /^##\s+(.+)/;
  const subSubHeaderRegex = /^###\s+(.+)/;
  const listItemRegex = /^-\s+(.+)/;
  const horizontalRuleRegex = /^---+$/;

  for (let line of lines) {
    line = line.trim();

    if (horizontalRuleRegex.test(line)) {
      // Skip horizontal rules
      continue;
    } else if (headerRegex.test(line)) {
      // New Day
      currentExercise = null;
      inCircuit = false;
      const title = line.match(headerRegex)[1];
      currentDay = { title: title, categories: [] };
      programData.push(currentDay);
      currentCategory = null;
    } else if (subHeaderRegex.test(line)) {
      // New Category
      currentExercise = null;
      inCircuit = false;
      const categoryLine = line.match(subHeaderRegex)[1];
      const timeMatch = categoryLine.match(/\(([^)]+)\)/);
      const name = categoryLine.replace(/\([^)]+\)/, "").trim();
      const time = timeMatch ? timeMatch[1] : "";
      currentCategory = { name: name, time: time, exercises: [] };
      if (currentDay) {
        currentDay.categories.push(currentCategory);
      } else {
        console.warn("Category without a day:", line);
      }
    } else if (subSubHeaderRegex.test(line)) {
      // New Sub-Category or Circuit
      currentExercise = null;
      inCircuit = false;
      const exerciseLine = line.match(subSubHeaderRegex)[1];
      if (exerciseLine.toLowerCase().includes("circuit")) {
        // It's a circuit
        inCircuit = true;
        currentExercise = {
          name: exerciseLine,
          isCircuit: true,
          circuitExercises: [],
        };
        if (currentCategory) {
          currentCategory.exercises.push(currentExercise);
        } else {
          console.warn("Circuit without a category:", line);
        }
      } else {
        // Regular sub-category (optional handling)
        inCircuit = false;
      }
    } else if (listItemRegex.test(line)) {
      // Exercise Item
      const exerciseName = line.match(listItemRegex)[1];
      if (inCircuit && currentExercise && currentExercise.isCircuit) {
        // Add to circuit exercises
        currentExercise.circuitExercises.push({ name: exerciseName });
      } else {
        // Regular exercise
        if (currentCategory) {
          currentCategory.exercises.push({ name: exerciseName });
        } else {
          console.warn("Exercise without a category:", line);
        }
      }
    } else if (line === "") {
      // Empty line; do nothing
    } else {
      // Unrecognized line; log a warning
      console.warn("Unrecognized line:", line);
    }
  }

  // After parsing, link ASCII art if available
  programData.forEach((day) => {
    day.categories.forEach((category) => {
      category.exercises.forEach((exercise) => {
        if (exercise.isCircuit) {
          exercise.circuitExercises.forEach((circuitExercise) => {
            linkAsciiArt(circuitExercise);
          });
        } else {
          linkAsciiArt(exercise);
        }
      });
    });
  });

  console.log("Parsed Program Data:", programData);
  return programData;
}

// Function to link ASCII art based on exercise name
function linkAsciiArt(exercise) {
  const normalizedName = normalizeExerciseName(exercise.name);
  if (normalizedAsciiArtPaths.hasOwnProperty(normalizedName)) {
    exercise.asciiArtKey = normalizedName;
    exercise.hasPicture = true;
  } else {
    exercise.hasPicture = false;
  }
}
// Function to process program data and link ASCII art
function processProgramData(programData) {
  programData.forEach((day) => {
    day.categories.forEach((category) => {
      category.exercises.forEach((exercise) => {
        if (exercise.isCircuit) {
          exercise.circuitExercises.forEach((circuitExercise) => {
            linkAsciiArt(circuitExercise);
          });
        } else {
          linkAsciiArt(exercise);
        }
      });
    });
  });
}

// Event listener for loading the user's own program
document.getElementById("load-program-button").onclick = function () {
  const textarea = document.getElementById("program-input-textarea");
  let userProgramData;
  try {
    userProgramData = parseMarkdownProgram(textarea.value);
  } catch (e) {
    alert("Error parsing Markdown format. Please check your program data.");
    console.error(e);
    return;
  }

  // Prompt the user to enter a name for the custom program
  let programName = prompt(
    "Enter a name for your custom program:",
    "My Custom Program"
  );
  if (!programName) {
    alert("Program name cannot be empty.");
    return;
  }

  // Generate a unique program name if necessary
  programName = generateUniqueProgramName(programName);

  // Create a program metadata object
  const programMeta = {
    name: programName,
    data: userProgramData,
    isCustom: true,
  };

  // Save the custom program to localStorage
  saveCustomProgram(programMeta);

  // Add the program to the available programs list
  availablePrograms.push(programMeta);

  // Load the program
  loadProgram(programMeta);

  // Close the modal
  hideModal("program-input-modal");

  // Clear the textarea
  textarea.value = "";
};

// Modify loadProgram function to handle user-loaded programs
function loadProgram(programMeta) {
  currentProgram = programMeta;
  localStorage.setItem("selectedProgramName", programMeta.name);
  document.getElementById("program-title").textContent = programMeta.name;

  // Show the UI elements when a program is selected
  document.getElementById("timer-count-wrapper").style.display = "flex";
  document.getElementById("week-completed-container").style.display = "flex";
  document.getElementById("program-title").style.display = "block";

  if (programMeta.data) {
    // If program data is already available (user-loaded program)
    processProgramData(programMeta.data); // <-- Add this line
    generateProgramContent(programMeta.data);
    loadProgress();
    updateWeekCounterDisplay();
  } else {
    // Load the program data
    loadProgramData(programMeta)
      .then((programData) => {
        processProgramData(programData); // <-- Add this line
        generateProgramContent(programData);
        loadProgress();
        updateWeekCounterDisplay();
      })
      .catch((error) => {
        console.error("Error loading program data:", error);
      });
  }
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
            <h3>${category.name} ${
              category.time ? "(" + category.time + ")" : ""
            }</h3>
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

// Function to handle exercise toggling
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

// Function to handle ASCII art display
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

// Load ASCII art with caching
function loadAsciiArt(element, asciiArtKey) {
  // Check if the ASCII art is already in the cache
  if (asciiArtCache[asciiArtKey]) {
    element.textContent = asciiArtCache[asciiArtKey];
    scaleAsciiArt(element);
    return;
  }

  // Use normalizedAsciiArtPaths instead of asciiArtPaths
  const filePath = normalizedAsciiArtPaths[asciiArtKey];
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

// Scale ASCII art
function scaleAsciiArt(asciiElement) {
  const container = asciiElement.parentElement;

  // Reset font size and line height to default values
  asciiElement.style.fontSize = "";
  asciiElement.style.lineHeight = "";

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const asciiLines = asciiElement.textContent.split("\n");
  const maxLineLength = Math.max(...asciiLines.map((line) => line.length));

  // Define multipliers and base font size for exercise ASCII arts
  const widthMultiplier = 8;
  const heightMultiplier = 16;
  const baseFontSize = 10;

  // Calculate the scaling factor
  const widthScale = containerWidth / (maxLineLength * widthMultiplier);
  const heightScale = containerHeight / (asciiLines.length * heightMultiplier);
  const scaleFactor = Math.min(widthScale, heightScale);

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
  checkAllChecked();
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
  }
}

function resetCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  localStorage.setItem(
    `fitnessProgress_${currentProgram.name}`,
    JSON.stringify(new Array(checkboxes.length).fill(false))
  );
}

function checkAllChecked() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allChecked = Array.from(checkboxes).every(
    (checkbox) => checkbox.checked
  );
  if (allChecked && checkboxes.length > 0) {
    // Highlight day headers
    checkboxes.forEach((checkbox) => {
      const dayHeader = checkbox.closest(".day-header");
      if (dayHeader) {
        dayHeader.classList.add("highlight");
      }
    });

    incrementWeekCounter();

    // After a delay, reset checkboxes and remove highlights
    setTimeout(() => {
      resetCheckboxes();
      checkboxes.forEach((checkbox) => {
        const dayHeader = checkbox.closest(".day-header");
        if (dayHeader) {
          dayHeader.classList.remove("highlight");
        }
      });
    }, 1000); // 1-second delay
  }
}

// Week counter functionality
function updateWeekCounterDisplay() {
  weekCount = localStorage.getItem(`weekCount_${currentProgram.name}`) || "0";
  weekCounterElement.textContent = weekCount;
}

function incrementWeekCounter() {
  weekCount = parseInt(weekCount) + 1;
  localStorage.setItem(`weekCount_${currentProgram.name}`, weekCount);
  updateWeekCounterDisplay();
  weekCounterElement.classList.add("blink-green");
  setTimeout(() => weekCounterElement.classList.remove("blink-green"), 500);
}

function resetWeekCount() {
  weekCount = 0;
  localStorage.setItem(`weekCount_${currentProgram.name}`, weekCount);
  updateWeekCounterDisplay();
  weekCounterElement.classList.add("blink-red");
  setTimeout(() => weekCounterElement.classList.remove("blink-red"), 500);
}

function handleWeekCountStart(event) {
  event.preventDefault();
  isWeekCountLongPress = false;
  weekCountLongPressTimer = setTimeout(() => {
    isWeekCountLongPress = true;
    resetWeekCount();
  }, longPressDuration);
}

function handleWeekCountEnd(event) {
  event.preventDefault();
  clearTimeout(weekCountLongPressTimer);
}

function addWeekCountEventListeners() {
  let touchStarted = false;

  weekCounterElement.addEventListener("mousedown", handleWeekCountStart);
  weekCounterElement.addEventListener("mouseup", handleWeekCountEnd);
  weekCounterElement.addEventListener("mouseleave", () =>
    clearTimeout(weekCountLongPressTimer)
  );

  weekCounterElement.addEventListener(
    "touchstart",
    (e) => {
      if (!touchStarted) {
        touchStarted = true;
        handleWeekCountStart(e);
      }
    },
    { passive: false }
  );

  weekCounterElement.addEventListener(
    "touchend",
    (e) => {
      if (touchStarted) {
        touchStarted = false;
        handleWeekCountEnd(e);
      }
    },
    { passive: false }
  );
}

// Timer functionality
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
  addWeekCountEventListeners();

  // Event listeners for buttons
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
  });

  // Start by displaying the program list
  displayProgramList();
});
