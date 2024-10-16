window.programData = [
  // Day 1: Full Body Strength
  {
    title: "Full Body Strength",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "Jumping jacks" },
          { name: "Squats" },
          { name: "High knees" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "80 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Push-ups" },
              { name: "Goblet squats" },
              { name: "Pull-ups/Chin-ups" },
              { name: "Lunges" },
              { name: "Dips" },
              { name: "Romanian deadlifts" },
              { name: "Bent-over rows" },
              { name: "Glute bridge" },
              { name: "Russian twists" },
              { name: "Superman" },
            ],
          },
          // Cardio
          {
            name: "Cardio",
            isCircuit: true,
            circuitExercises: [{ name: "30 min running" }],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Child's pose" },
          { name: "Hamstring stretch" },
          { name: "Doorway chest stretch" },
        ],
      },
    ],
  },

  // Day 2: Cardio and Core
  {
    title: "Cardio and Core",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "High knees" },
          { name: "Jumping jacks" },
          { name: "Mountain climbers" },
          { name: "Burpees" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 40 sec work, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Russian twists" },
              { name: "Plank with alternating leg lift" },
              { name: "Ab wheel rollouts" },
              { name: "Hanging leg raises" },
              { name: "Pallof press" },
              { name: "Superman" },
              { name: "Glute bridge" },
            ],
          },
          // Cardio
          {
            name: "Cardio",
            isCircuit: true,
            circuitExercises: [
              { name: "15 min rowing" },
              { name: "15 min jump rope" },
            ],
          },
          // Balance
          {
            name: "Balance",
            isCircuit: true,
            circuitExercises: [
              { name: "Single-leg stand: 3 sets of 30 seconds each leg" },
            ],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Pigeon pose" },
          { name: "Hip flexor stretch" },
          { name: "Cobra stretch" },
        ],
      },
    ],
  },

  // Day 3: Functional Training
  {
    title: "Functional Training",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Squats" },
          { name: "Arm circles" },
          { name: "High knees" },
          { name: "Side lunges" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "80 min",
        exercises: [
          // Functional Circuit
          {
            name: "Functional Circuit (3 rounds, 50 sec work, 10 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Farmer's walks" },
              { name: "Bosu ball squats" },
              { name: "Single-leg deadlift" },
              { name: "Inverted rows" },
              { name: "Pike push-ups" },
              { name: "Lunges with dumbbells" },
              { name: "Russian twists" },
              { name: "Plank with alternating leg lift" },
            ],
          },
          // Cardio
          {
            name: "Cardio",
            isCircuit: true,
            circuitExercises: [{ name: "30 min step climber" }],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Downward facing dog" },
          { name: "Child's pose" },
          { name: "World's greatest stretch" },
        ],
      },
    ],
  },
];
