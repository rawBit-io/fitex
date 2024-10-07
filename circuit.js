// circuit.js

// Function to initialize the circuit, called from the main window
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
  window.currentCircuit = {
    rounds,
    workTime,
    restTime,
    restBetweenRounds,
    circuitExercises,
    currentRound: 1,
    currentExerciseIndex: 0,
    isExercise: true, // true if currently in exercise time, false if in rest
    timeLeft: workTime,
    timerInterval: null,
    isTimerRunning: false,
  };

  // Display the list of circuit exercises
  displayCircuitExerciseList();

  // Apply the selected theme
  applySelectedTheme();

  // Update the display
  updateCircuitDisplay();
  updateCircuitTimerDisplay();

  // Start the circuit timer automatically
  startCircuitTimer();
}

// Function to display the list of circuit exercises
function displayCircuitExerciseList() {
  const circuit = window.currentCircuit;
  const exerciseListDiv = document.getElementById("circuit-exercise-list");
  exerciseListDiv.innerHTML = "";

  circuit.circuitExercises.forEach((exercise, index) => {
    const exerciseItem = document.createElement("div");
    exerciseItem.className = "circuit-exercise-item";
    exerciseItem.textContent = exercise.name;
    exerciseItem.id = `exercise-item-${index}`;
    exerciseListDiv.appendChild(exerciseItem);
  });
}

// Function to update the active exercise in the list
function updateActiveExerciseInList() {
  const circuit = window.currentCircuit;

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

// Function to start the circuit timer
function startCircuitTimer() {
  const circuit = window.currentCircuit;

  if (circuit.isTimerRunning) {
    // Timer is already running
    return;
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
            window.close();
            return;
          } else {
            // Rest between rounds
            circuit.isExercise = false;
            circuit.timeLeft = circuit.restBetweenRounds;
            updateCircuitDisplay("Rest between rounds");
          }
        } else {
          // Start next exercise
          circuit.timeLeft = circuit.workTime;
          updateCircuitDisplay();
        }
      }
    }
  }, 1000);
}

// Function to update the circuit display
function updateCircuitDisplay(status) {
  const circuit = window.currentCircuit;
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

// Function to update the circuit timer display
function updateCircuitTimerDisplay() {
  const circuit = window.currentCircuit;
  const minutes = Math.floor(circuit.timeLeft / 60);
  const seconds = circuit.timeLeft % 60;
  document.getElementById("circuit-timer").textContent = `${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Function to stop the circuit
function stopCircuit() {
  const circuit = window.currentCircuit;
  if (circuit.timerInterval) {
    clearInterval(circuit.timerInterval);
  }
  if (confirm("Do you want to stop the circuit?")) {
    window.close();
  } else {
    if (!circuit.isTimerRunning) {
      startCircuitTimer();
    }
  }
}

// Function to apply the selected theme
function applySelectedTheme() {
  const savedTheme = localStorage.getItem("selectedTheme") || "Solarized Dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Function to load ASCII art (similar to the one in script.js)
function loadAsciiArt(element, asciiArtKey) {
  // Check if the ASCII art is already in the cache
  if (window.asciiArtCache && window.asciiArtCache[asciiArtKey]) {
    element.textContent = window.asciiArtCache[asciiArtKey];
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
        if (!window.asciiArtCache) {
          window.asciiArtCache = {};
        }
        window.asciiArtCache[asciiArtKey] = asciiArtContent;
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
  // Similar to the one in script.js
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

// Expose the initializeCircuit function to be called from the main window
window.initializeCircuit = initializeCircuit;

// Add event listener for window load to apply theme
window.addEventListener("load", () => {
  applySelectedTheme();
});

// Add a window resize event listener to rescale ASCII art
window.addEventListener("resize", () => {
  const asciiElement = document.getElementById("circuit-ascii-art");
  if (asciiElement && asciiElement.textContent) {
    scaleAsciiArt(asciiElement);
  }
});
