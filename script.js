// script.js

// Generate the program content
const programDiv = document.getElementById("program");

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
    <div id="exercises${dayIndex + 1}" class="exercises" style="display: none;">
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
                  <ul>
                    ${exercise.circuitExercises
                      .map(
                        (circuitExercise, circuitIndex) => `
                      <li class="exercise-item ${
                        circuitExercise.hasPicture ? "picture-available" : ""
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

function loadAsciiArt(element, asciiArtKey) {
  element.textContent = asciiArts[asciiArtKey] || "ASCII art not found";
  scaleAsciiArt(element);
}

function scaleAsciiArt(asciiElement) {
  const dayBox = asciiElement.closest(".day");
  const dayBoxWidth = dayBox.offsetWidth;
  const asciiLines = asciiElement.textContent.split("\n");
  const maxLineLength = Math.max(...asciiLines.map((line) => line.length));

  // Calculate the scaling factor
  const scaleFactor = dayBoxWidth / (maxLineLength * 8); // Assuming 8px as base font size

  // Apply the scaling
  asciiElement.style.fontSize = `${scaleFactor * 10}px`;
  asciiElement.style.lineHeight = "1";
}

// Functions to handle progress saving and loading
function saveProgress(event) {
  event.stopPropagation();
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const progress = Array.from(checkboxes).map((checkbox) => checkbox.checked);
  localStorage.setItem("fitnessProgress", JSON.stringify(progress));
  updateWeekCompletedButton();
}

function loadProgress() {
  const savedProgress = localStorage.getItem("fitnessProgress");
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
    "fitnessProgress",
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
  let weekCount = parseInt(localStorage.getItem("weekCount") || "0");
  weekCount++;
  localStorage.setItem("weekCount", weekCount);
  updateWeekCounterDisplay();
  resetCheckboxes();
}

function updateWeekCounterDisplay() {
  const weekCount = localStorage.getItem("weekCount") || "0";
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
  timeLeft = lastSetValue;
  updateTimerDisplay(timeLeft);
}

function updateTimer() {
  if (isTimerRunning) {
    const now = Date.now();
    const remainingTime = Math.max(0, Math.ceil((timerEndTime - now) / 1000));

    if (remainingTime > 0) {
      timeLeft = remainingTime;
      updateTimerDisplay(timeLeft);
      requestAnimationFrame(updateTimer);
    } else {
      stopTimer();
    }
  }
}

function setTimer(seconds) {
  lastSetValue = seconds;
  timeLeft = seconds;
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
  // Reset timer
  stopTimer();
  timeLeft = 60;
  lastSetValue = 60;
  updateTimerDisplay(timeLeft);

  // Reset count
  resetCount();

  // Reset week progress
  localStorage.setItem("weekCount", "0");
  updateWeekCounterDisplay();
  resetCheckboxes();
  updateWeekCompletedButton();

  // Reset theme to default
  loadTheme("Default (Solarized Dark)");
  localStorage.removeItem("selectedTheme");

  // Make the complete button blink red
  const weekCompletedBtn = document.getElementById("weekCompletedBtn");
  weekCompletedBtn.classList.add("blink-red");
  setTimeout(() => weekCompletedBtn.classList.remove("blink-red"), 500);

  // Add a small delay before reloading to ensure all clearing operations are complete
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

// Theme switching functionality
function loadTheme(themeName) {
  const themeStylesheet = document.getElementById("theme-stylesheet");

  if (themeName === "Default (Solarized Dark)") {
    // Default theme is already in styles.css, no need to load additional file
    themeStylesheet.href = "";
    return;
  }

  const theme = availableThemes.find((t) => t.name === themeName);
  if (theme && theme.file) {
    themeStylesheet.href = theme.file;
  }
}

function populateThemeMenu() {
  const themeOptions = document.getElementById("theme-options");
  availableThemes.forEach((theme) => {
    const button = document.createElement("button");
    button.textContent = theme.name;
    button.onclick = () => {
      loadTheme(theme.name);
      localStorage.setItem("selectedTheme", theme.name);
      hideThemeMenu();
    };
    themeOptions.appendChild(button);
  });
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
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    loadTheme(savedTheme);
  }
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
  loadProgress();
  updateWeekCompletedButton();
  updateWeekCounterDisplay();
  addTimerEventListeners();
  addCountEventListeners();
  initializeTheme();

  // Event listeners for buttons
  document
    .getElementById("weekCompletedBtn")
    .addEventListener("click", incrementWeekCounter);
  document.getElementById("resetBtn").addEventListener("click", resetAll);

  // Event listener for checkbox changes
  document.addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      saveProgress(event);
    }
  });

  // Add a window resize event listener to rescale ASCII art
  window.addEventListener("resize", () => {
    const asciiElements = document.querySelectorAll(".ascii-art.show");
    asciiElements.forEach(scaleAsciiArt);
  });
});
