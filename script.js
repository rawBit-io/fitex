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
    <div id="exercises${dayIndex + 1}" class="exercises">
      ${day.categories
        .map(
          (category, catIndex) => `
          <h3>${category.name} (${category.time})</h3>
          <ul>
            ${category.exercises
              .map((exercise, exIndex) => {
                const hasSubExercises = exercise.exercises;
                const hasAsciiArt = exercise.asciiArt;
                return `
                  <li class="exercise-item ${
                    hasSubExercises
                      ? "has-subexercises"
                      : hasAsciiArt
                      ? "has-ascii"
                      : ""
                  }">
                    <span onclick="toggleAsciiArt(event, ${dayIndex}, ${catIndex}, ${exIndex})">${
                  exercise.name || exercise
                }</span>
                    ${
                      hasSubExercises
                        ? `
                          <ul class="subexercises">
                            ${exercise.exercises
                              .map((subExercise, subIndex) => {
                                const subHasAsciiArt = subExercise.asciiArt;
                                return `
                                  <li class="exercise-item ${
                                    subHasAsciiArt ? "has-ascii" : ""
                                  }">
                                    <span onclick="toggleAsciiArt(event, ${dayIndex}, ${catIndex}, ${exIndex}, ${subIndex})">${
                                  subExercise.name || subExercise
                                }</span>
                                    ${
                                      subHasAsciiArt
                                        ? `<pre class="ascii-art" id="ascii-${dayIndex}-${catIndex}-${exIndex}-${subIndex}"></pre>`
                                        : ""
                                    }
                                  </li>
                                `;
                              })
                              .join("")}
                          </ul>
                        `
                        : hasAsciiArt
                        ? `<pre class="ascii-art" id="ascii-${dayIndex}-${catIndex}-${exIndex}"></pre>`
                        : ""
                    }
                  </li>
                `;
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

function toggleAsciiArt(event, dayIndex, catIndex, exIndex, subIndex) {
  event.stopPropagation();
  const asciiId =
    subIndex !== undefined
      ? `ascii-${dayIndex}-${catIndex}-${exIndex}-${subIndex}`
      : `ascii-${dayIndex}-${catIndex}-${exIndex}`;
  const asciiElement = document.getElementById(asciiId);
  if (asciiElement) {
    if (asciiElement.classList.contains("show")) {
      asciiElement.classList.remove("show");
      asciiElement.textContent = "";
    } else {
      asciiElement.classList.add("show");
      loadAsciiArt(asciiElement);
    }
  }
}

function loadAsciiArt(element) {
  element.textContent = asciiArtContent;
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

function resetProgress() {
  localStorage.setItem("weekCount", "0");
  updateWeekCounterDisplay();
  resetCheckboxes();
  updateWeekCompletedButton();
}

// Timer functionality
const timerElement = document.getElementById("timer");
const timerOptions = document.getElementById("timer-options");
let countdownInterval;
let timeLeft = 60;
let lastSetValue = 60;
let isTimerRunning = false;
let pressTimer;

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
    countdownInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay(timeLeft);

      if (timeLeft <= 0) {
        stopTimer();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(countdownInterval);
  timerElement.classList.add("blink-red");
  setTimeout(() => timerElement.classList.remove("blink-red"), 500);
  isTimerRunning = false;
  timeLeft = lastSetValue;
  updateTimerDisplay(timeLeft);
}

function setTimer(seconds) {
  lastSetValue = seconds;
  timeLeft = seconds;
  updateTimerDisplay(timeLeft);
  timerOptions.style.display = "none";
}

function toggleTimerOptions() {
  if (
    timerOptions.style.display === "none" ||
    timerOptions.style.display === ""
  ) {
    timerOptions.style.display = "flex";
  } else {
    timerOptions.style.display = "none";
  }
}

// Event listeners for timer interactions
timerElement.addEventListener("mousedown", (event) => {
  event.preventDefault();
  pressTimer = setTimeout(() => {
    toggleTimerOptions();
  }, 500);
});

timerElement.addEventListener("mouseup", (event) => {
  event.preventDefault();
  clearTimeout(pressTimer);
  if (timerOptions.style.display !== "flex") {
    if (isTimerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }
});

timerElement.addEventListener("mouseleave", () => {
  clearTimeout(pressTimer);
});

// Touch events for mobile devices
let touchStartTime;

timerElement.addEventListener("touchstart", (event) => {
  event.preventDefault();
  touchStartTime = new Date().getTime();
  pressTimer = setTimeout(() => {
    toggleTimerOptions();
  }, 500);
});

timerElement.addEventListener("touchend", (event) => {
  event.preventDefault();
  clearTimeout(pressTimer);
  const touchEndTime = new Date().getTime();
  const touchDuration = touchEndTime - touchStartTime;

  if (touchDuration < 500 && timerOptions.style.display !== "flex") {
    if (isTimerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }
});

timerElement.addEventListener("touchcancel", () => {
  clearTimeout(pressTimer);
});

document.addEventListener("click", (event) => {
  if (
    !timerElement.contains(event.target) &&
    !timerOptions.contains(event.target)
  ) {
    timerOptions.style.display = "none";
  }
});

// Initialize the application when the page loads
updateTimerDisplay(timeLeft);
loadProgress();
updateWeekCompletedButton();
updateWeekCounterDisplay();

// Event listeners for buttons
document
  .getElementById("weekCompletedBtn")
  .addEventListener("click", incrementWeekCounter);

document.getElementById("resetBtn").addEventListener("click", resetProgress);

// Event listener for checkbox changes
document.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    saveProgress(event);
  }
});
