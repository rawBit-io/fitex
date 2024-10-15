// data.js

window.programData = [
  // Day 1: Upper Body Strength and Core
  {
    title: "Upper Body Strength and Core",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "Jumping jacks" },
          { name: "High knees" },
          { name: "Mountain climbers" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 40 sec work, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Push-ups" },
              { name: "Pull-ups/Chin-ups" },
              { name: "Dips" },
              { name: "Pike push-ups" },
              { name: "Inverted rows" },
              { name: "Bicep curls" },
            ],
          },
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 15 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Russian twists" },
              { name: "Ab wheel rollouts" },
              { name: "Superman" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [
              { name: "15 min rowing" },
              { name: "15 min jump rope" },
            ],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [
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
          { name: "Standing forward bend" },
          { name: "Child's pose" },
          { name: "Doorway chest stretch" },
        ],
      },
    ],
  },

  // Day 2: Lower Body Strength and Balance
  {
    title: "Lower Body Strength and Balance",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Squats" },
          { name: "High knees" },
          { name: "Lunges" },
          { name: "Glute bridge" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Goblet squats" },
              { name: "Romanian deadlifts" },
              { name: "Lunges with dumbbells" },
              { name: "Calf raises" },
              { name: "Farmer's walks" },
              { name: "Glute bridge" },
            ],
          },
          // Balance Circuit
          {
            name: "Balance Circuit (3 sets, 10 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Bosu ball squats" },
              { name: "Single-leg deadlift" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [{ name: "30 min step climber" }],
          },
          // Core Exercise
          {
            name: "Core Exercise",
            exercises: [
              { name: "Plank with alternating leg lift: 3 sets of 30 seconds" },
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
          { name: "Hamstring stretch" },
          { name: "Hip flexor stretch" },
        ],
      },
    ],
  },

  // Day 3: Cardio and Core
  {
    title: "Cardio and Core",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "High knees" },
          { name: "Jumping jacks" },
          { name: "Mountain climbers" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "85 min",
        exercises: [
          // HIIT Circuit
          {
            name: "HIIT Circuit (4 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Burpees" },
              { name: "Mountain climbers" },
              { name: "Squat jumps" },
              { name: "Russian twists" },
              { name: "High knees" },
              { name: "Plank with alternating leg lift" },
            ],
          },
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 12 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Ab wheel rollouts" },
              { name: "Pallof press" },
              { name: "Superman" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [
              { name: "10 min running" },
              { name: "10 min rowing" },
              { name: "10 min jump rope" },
            ],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [
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
          { name: "Cat-cow stretch" },
          { name: "Child's pose" },
          { name: "Cobra stretch" },
        ],
      },
    ],
  },

  // Day 4: Upper Body Strength and Balance
  {
    title: "Upper Body Strength and Balance",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "Jumping jacks" },
          { name: "High knees" },
          { name: "Burpees" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Chest press" },
              { name: "Pull-ups/Chin-ups" },
              { name: "Dips" },
              { name: "Lateral raises" },
              { name: "Pike push-ups" },
              { name: "Bent-over rows" },
            ],
          },
          // Additional Circuit
          {
            name: "Additional Circuit (3 rounds, 10 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Shoulder press" },
              { name: "Inverted rows" },
              { name: "Bicep curls" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [{ name: "30 min jump rope" }],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [
              { name: "Single-leg deadlift: 3 sets of 8 reps each leg" },
            ],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Standing forward bend" },
          { name: "Doorway chest stretch" },
          { name: "World's greatest stretch" },
        ],
      },
    ],
  },

  // Day 5: Lower Body Strength and Core
  {
    title: "Lower Body Strength and Core",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Squats" },
          { name: "High knees" },
          { name: "Side lunges" },
          { name: "Glute bridge" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Squats" },
              { name: "Romanian deadlifts" },
              { name: "Walking lunges" },
              { name: "Calf raises" },
              { name: "Farmer's walks" },
              { name: "Glute bridge" },
            ],
          },
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 12 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Hanging leg raises" },
              { name: "Russian twists" },
              { name: "Superman" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [
              { name: "15 min running" },
              { name: "15 min step climber" },
            ],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [{ name: "Bosu ball squats: 3 sets of 10 reps" }],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Pigeon pose" },
          { name: "Hamstring stretch" },
          { name: "Lunge with spinal twist" },
        ],
      },
    ],
  },

  // Day 6: Full Body Functional Training
  {
    title: "Full Body Functional Training",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "Jumping jacks" },
          { name: "High knees" },
          { name: "Squats" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Functional Circuit
          {
            name: "Functional Circuit (3 rounds, 50 sec work, 10 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Push-ups" },
              { name: "Goblet squats" },
              { name: "Pull-ups/Chin-ups" },
              { name: "Lunges" },
              { name: "Dips" },
              { name: "Russian twists" },
            ],
          },
          // Additional Circuit
          {
            name: "Additional Circuit (3 rounds, 10 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Farmer's walks" },
              { name: "Shoulder press" },
              { name: "Romanian deadlifts" },
              { name: "Bent-over rows" },
              { name: "Ab wheel rollouts" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [
              { name: "15 min rowing" },
              { name: "15 min jump rope" },
            ],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [
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
          { name: "Downward facing dog" },
          { name: "Child's pose" },
          { name: "World's greatest stretch" },
        ],
      },
    ],
  },

  // Day 7: Active Recovery and Flexibility
  {
    title: "Active Recovery and Flexibility",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Cat-cow stretch" },
          { name: "Arm circles" },
          { name: "Side lunges" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Light Full Body Circuit
          {
            name: "Light Full Body Circuit (2 rounds, 30 sec work, 30 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Squats" },
              { name: "Push-ups" },
              { name: "Glute bridge" },
              { name: "Plank with alternating leg lift" },
              { name: "Lunges" },
              { name: "Superman" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [{ name: "30 min light intensity running" }],
          },
          // Balance and Flexibility Exercises
          {
            name: "Balance and Flexibility",
            exercises: [
              { name: "Single-leg stand: 3 sets of 30 seconds each leg" },
              { name: "Standing forward bend: 60 seconds" },
              { name: "Lunge with spinal twist: 30 seconds each side" },
              { name: "Downward facing dog: 60 seconds" },
              { name: "Pigeon pose: 30 seconds each side" },
              { name: "Child's pose: 60 seconds" },
              { name: "Cobra stretch: 30 seconds" },
              { name: "World's greatest stretch: 30 seconds each side" },
              { name: "Hip flexor stretch: 30 seconds each side" },
              { name: "Hamstring stretch: 30 seconds each side" },
              { name: "Doorway chest stretch: 30 seconds" },
            ],
          },
        ],
      },
      // Cool-down
      {
        name: "Cool-down",
        time: "5 min",
        exercises: [
          { name: "Seated forward bend: 60 seconds" },
          { name: "Seated spinal twist: 30 seconds each side" },
          { name: "Butterfly stretch: 60 seconds" },
        ],
      },
    ],
  },

  // Day 8: Upper Body Strength and Core Variation
  {
    title: "Upper Body Strength and Core Variation",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "Jump rope" },
          { name: "High knees" },
          { name: "Mountain climbers" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 40 sec work, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Chest press" },
              { name: "Shoulder press" },
              { name: "Bent-over rows" },
              { name: "Lateral raises" },
              { name: "Pull-ups/Chin-ups" },
              { name: "Push-ups" },
            ],
          },
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 12 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Pallof press" },
              { name: "Hanging leg raises" },
              { name: "Hyperextensions" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [{ name: "30 min rowing" }],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [
              { name: "Single-leg deadlift: 3 sets of 8 reps each leg" },
            ],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Standing forward bend" },
          { name: "Doorway chest stretch" },
          { name: "Child's pose" },
        ],
      },
    ],
  },

  // Day 9: Lower Body Strength and Balance Variation
  {
    title: "Lower Body Strength and Balance Variation",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Squat jumps" },
          { name: "High knees" },
          { name: "Mountain climbers" },
          { name: "Glute bridge" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Squats" },
              { name: "Romanian deadlifts" },
              { name: "Lunges" },
              { name: "Calf raises" },
              { name: "Hyperextensions" },
              { name: "Glute bridge" },
            ],
          },
          // Balance Circuit
          {
            name: "Balance Circuit (3 sets, 30 sec each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Single-leg stand" },
              { name: "Plank with alternating leg lift" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [{ name: "30 min step climber" }],
          },
          // Core Exercise
          {
            name: "Core Exercise",
            exercises: [{ name: "Russian twists: 3 sets of 15 reps" }],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Pigeon pose" },
          { name: "Hamstring stretch" },
          { name: "Hip flexor stretch" },
        ],
      },
    ],
  },

  // Day 10: Cardio and Core Variation
  {
    title: "Cardio and Core Variation",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "High knees" },
          { name: "Jumping jacks" },
          { name: "Mountain climbers" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "85 min",
        exercises: [
          // HIIT Circuit
          {
            name: "HIIT Circuit (4 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Burpees" },
              { name: "Mountain climbers" },
              { name: "Squat jumps" },
              { name: "Russian twists" },
              { name: "High knees" },
              { name: "Glute bridge" },
            ],
          },
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 12 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Ab wheel rollouts" },
              { name: "Pallof press" },
              { name: "Superman" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [
              { name: "10 min running" },
              { name: "10 min rowing" },
              { name: "10 min jump rope" },
            ],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [{ name: "Bosu ball squats: 3 sets of 10 reps" }],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Cat-cow stretch" },
          { name: "Child's pose" },
          { name: "Cobra stretch" },
        ],
      },
    ],
  },

  // Day 11: Upper Body Strength and Balance Variation
  {
    title: "Upper Body Strength and Balance Variation",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "Jump rope" },
          { name: "High knees" },
          { name: "Burpees" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Push-ups" },
              { name: "Pull-ups/Chin-ups" },
              { name: "Inverted rows" },
              { name: "Pike push-ups" },
              { name: "Dips" },
              { name: "Lateral raises" },
            ],
          },
          // Additional Circuit
          {
            name: "Additional Circuit (3 rounds, 12 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Chest press" },
              { name: "Bicep curls" },
              { name: "Bent-over rows" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [{ name: "30 min jump rope" }],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [
              { name: "Single-leg deadlift: 3 sets of 8 reps each leg" },
            ],
          },
        ],
      },
      // Cool-down and Stretching
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Standing forward bend" },
          { name: "Doorway chest stretch" },
          { name: "World's greatest stretch" },
        ],
      },
    ],
  },

  // Day 12: Lower Body Strength and Core Variation
  {
    title: "Lower Body Strength and Core Variation",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Squats" },
          { name: "High knees" },
          { name: "Side lunges" },
          { name: "Glute bridge" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Strength Circuit
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Goblet squats" },
              { name: "Romanian deadlifts" },
              { name: "Walking lunges" },
              { name: "Calf raises" },
              { name: "Farmer's walks" },
              { name: "Glute bridge" },
            ],
          },
          // Core Circuit
          {
            name: "Core Circuit (3 rounds, 15 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Hanging leg raises" },
              { name: "Russian twists" },
              { name: "Superman" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [
              { name: "15 min running" },
              { name: "15 min step climber" },
            ],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [
              { name: "Plank with alternating leg lift: 3 sets of 30 seconds" },
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
          { name: "Hamstring stretch" },
          { name: "Lunge with spinal twist" },
        ],
      },
    ],
  },

  // Day 13: Full Body Functional Training Variation
  {
    title: "Full Body Functional Training Variation",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles" },
          { name: "Jumping jacks" },
          { name: "High knees" },
          { name: "Squat jumps" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "85 min",
        exercises: [
          // Functional Circuit
          {
            name: "Functional Circuit (3 rounds, 50 sec work, 10 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Push-ups" },
              { name: "Goblet squats" },
              { name: "Pull-ups/Chin-ups" },
              { name: "Lunges" },
              { name: "Dips" },
              { name: "Russian twists" },
            ],
          },
          // Additional Circuit
          {
            name: "Additional Circuit (3 rounds, 10 reps each exercise)",
            isCircuit: true,
            circuitExercises: [
              { name: "Farmer's walks" },
              { name: "Shoulder press" },
              { name: "Romanian deadlifts" },
              { name: "Bent-over rows" },
              { name: "Ab wheel rollouts" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [
              { name: "10 min rowing" },
              { name: "10 min jump rope" },
              { name: "10 min running" },
            ],
          },
          // Balance Exercise
          {
            name: "Balance Exercise",
            exercises: [
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
          { name: "Downward facing dog" },
          { name: "Child's pose" },
          { name: "World's greatest stretch" },
        ],
      },
    ],
  },

  // Day 14: Active Recovery and Flexibility
  {
    title: "Active Recovery and Flexibility",
    categories: [
      // Warm-up
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Cat-cow stretch" },
          { name: "Arm circles" },
          { name: "Side lunges" },
        ],
      },
      // Main Workout
      {
        name: "Main Workout",
        time: "75 min",
        exercises: [
          // Light Full Body Circuit
          {
            name: "Light Full Body Circuit (2 rounds, 30 sec work, 30 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Squats" },
              { name: "Push-ups" },
              { name: "Glute bridge" },
              { name: "Plank with alternating leg lift" },
              { name: "Lunges" },
              { name: "Superman" },
            ],
          },
          // Cardio Circuit
          {
            name: "Cardio Circuit",
            isCircuit: true,
            circuitExercises: [{ name: "30 min light intensity running" }],
          },
          // Balance and Flexibility Exercises
          {
            name: "Balance and Flexibility",
            exercises: [
              { name: "Single-leg stand: 3 sets of 30 seconds each leg" },
              { name: "Standing forward bend: 60 seconds" },
              { name: "Lunge with spinal twist: 30 seconds each side" },
              { name: "Downward facing dog: 60 seconds" },
              { name: "Pigeon pose: 30 seconds each side" },
              { name: "Child's pose: 60 seconds" },
              { name: "Cobra stretch: 30 seconds" },
              { name: "World's greatest stretch: 30 seconds each side" },
              { name: "Hip flexor stretch: 30 seconds each side" },
              { name: "Hamstring stretch: 30 seconds each side" },
              { name: "Doorway chest stretch: 30 seconds" },
            ],
          },
        ],
      },
      // Cool-down
      {
        name: "Cool-down",
        time: "5 min",
        exercises: [
          { name: "Seated forward bend: 60 seconds" },
          { name: "Seated spinal twist: 30 seconds each side" },
          { name: "Butterfly stretch: 60 seconds" },
        ],
      },
    ],
  },
];
