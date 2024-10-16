window.programData = [
  // Day 1: Core and Upper Body Strength
  {
    title: "Core and Upper Body Strength",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" }, // 2 minutes
          { name: "Jumping jacks" }, // 3 minutes
          { name: "High knees" }, // 3 minutes
          { name: "Mountain climbers" }, // 2 minutes
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 40 sec work, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Push-ups" }, // Targets chest, shoulders, triceps
              { name: "Dips" }, // Targets triceps, chest, shoulders
              { name: "Bicep curls" }, // Targets biceps
              { name: "Chest press" }, // Targets chest, shoulders, triceps
              { name: "Shoulder press" }, // Targets shoulders, triceps
              { name: "Lateral raises" }, // Targets shoulders
              { name: "Russian twists" }, // Targets obliques and core
              { name: "Superman" }, // Targets lower back, glutes, shoulders
            ],
          },
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 40 sec work, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Plank with alternating leg lift" }, // Targets core, glutes
              { name: "Russian twists" }, // Targets obliques and core
              { name: "Superman" }, // Targets lower back, glutes, shoulders
              { name: "Glute bridge" }, // Targets glutes, lower back
            ],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Standing forward bend" }, // 2 minutes
          { name: "Child's pose" }, // 2 minutes
          { name: "Doorway chest stretch" }, // 2 minutes
          { name: "Seated spinal twist" }, // 2 minutes (1 minute each side)
          { name: "Butterfly stretch" }, // 2 minutes
        ],
      },
    ],
  },

  // Day 2: Core and Lower Body Strength
  {
    title: "Core and Lower Body Strength",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Squats" }, // 2 minutes
          { name: "High knees" }, // 3 minutes
          { name: "Lunges" }, // 3 minutes
          { name: "Glute bridge" }, // 2 minutes
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Goblet squats" }, // Targets quads, glutes
              { name: "Romanian deadlifts" }, // Targets hamstrings, glutes, lower back
              { name: "Lunges with dumbbells" }, // Targets quads, glutes, hamstrings
              { name: "Calf raises" }, // Targets calves
              { name: "Farmer's walks" }, // Targets grip, shoulders, core
              { name: "Glute bridge" }, // Targets glutes, lower back
              { name: "Single-leg deadlift" }, // Targets hamstrings, glutes, balance
              { name: "Plank with alternating leg lift" }, // Targets core, glutes
            ],
          },
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 40 sec work, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Russian twists" }, // Targets obliques and core
              { name: "Superman" }, // Targets lower back, glutes, shoulders
              { name: "Plank with alternating leg lift" }, // Targets core, glutes
              { name: "Glute bridge" }, // Targets glutes, lower back
            ],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Pigeon pose" }, // 2 minutes (1 minute each side)
          { name: "Hamstring stretch" }, // 2 minutes (1 minute each side)
          { name: "Hip flexor stretch" }, // 2 minutes (1 minute each side)
          { name: "Seated forward bend" }, // 2 minutes
          { name: "Doorway chest stretch" }, // 2 minutes
        ],
      },
    ],
  },
];
