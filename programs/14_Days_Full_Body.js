// data.js

window.programData = [
  // Day 1: Upper Body Strength and Core
  {
    title: "Upper Body Strength and Core",
    categories: [
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Core Exercises",
            exercises: [
              { name: "Russian twists: 3 sets of 15 reps" },
              { name: "Ab wheel rollouts: 3 sets of 10 reps" },
              { name: "Superman: 3 sets of 12 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "15 min rowing" }, { name: "15 min jump rope" }],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [
          { name: "Single-leg stand: 3 sets of 30 seconds each leg" },
        ],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Goblet squats" },
              { name: "Romanian deadlifts" },
              { name: "Lunges with dumbbells" },
              { name: "Calf raises" },
              { name: "Hyperextensions" },
              { name: "Glute bridge" },
            ],
          },
          {
            name: "Balance Exercises",
            exercises: [
              { name: "Bosu ball squats: 3 sets of 10 reps" },
              { name: "Single-leg deadlift: 3 sets of 8 reps each leg" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "30 min step climber" }],
      },
      {
        name: "Core",
        time: "5 min",
        exercises: [
          { name: "Plank with alternating leg lift: 3 sets of 30 seconds" },
        ],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Core Exercises",
            exercises: [
              { name: "Ab wheel rollouts: 3 sets of 10 reps" },
              { name: "Pallof press: 3 sets of 12 reps each side" },
              { name: "Superman: 3 sets of 15 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [
          { name: "10 min running" },
          { name: "10 min rowing" },
          { name: "10 min jump rope" },
        ],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [
          { name: "Single-leg stand: 3 sets of 30 seconds each leg" },
        ],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Additional Exercises",
            exercises: [
              { name: "Shoulder press: 3 sets of 10 reps" },
              { name: "Inverted rows: 3 sets of 12 reps" },
              { name: "Bicep curls: 3 sets of 12 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "30 min jump rope" }],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [{ name: "Single-leg deadlift: 3 sets of 8 reps each leg" }],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Squats" },
              { name: "Romanian deadlifts" },
              { name: "Walking lunges" },
              { name: "Calf raises" },
              { name: "Hyperextensions" },
              { name: "Glute bridge" },
            ],
          },
          {
            name: "Core Exercises",
            exercises: [
              { name: "Hanging leg raises: 3 sets of 10 reps" },
              { name: "Russian twists: 3 sets of 15 reps" },
              { name: "Superman: 3 sets of 12 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [
          { name: "15 min running" },
          { name: "15 min step climber" },
        ],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [{ name: "Bosu ball squats: 3 sets of 10 reps" }],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Additional Exercises",
            exercises: [
              { name: "Shoulder press: 3 sets of 10 reps" },
              { name: "Romanian deadlifts: 3 sets of 10 reps" },
              { name: "Bent-over rows: 3 sets of 10 reps" },
              { name: "Ab wheel rollouts: 3 sets of 8 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "15 min rowing" }, { name: "15 min jump rope" }],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [
          { name: "Single-leg stand: 3 sets of 30 seconds each leg" },
        ],
      },
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
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Cat-cow stretch" },
          { name: "Arm circles" },
          { name: "Side lunges" },
        ],
      },
      {
        name: "Light Full Body Circuit",
        time: "20 min",
        exercises: [
          {
            name: "Circuit (2 rounds, 30 sec work, 30 sec rest)",
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
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "30 min light intensity running" }],
      },
      {
        name: "Balance and Flexibility",
        time: "25 min",
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
      {
        name: "Cool-down",
        time: "5 min",
        exercises: [{ name: "Gentle full body stretch" }],
      },
    ],
  },
  // Day 8: Upper Body Strength and Core Variation
  {
    title: "Upper Body Strength and Core Variation",
    categories: [
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Core Exercises",
            exercises: [
              { name: "Pallof press: 3 sets of 12 reps each side" },
              { name: "Hanging leg raises: 3 sets of 10 reps" },
              { name: "Hyperextensions: 3 sets of 12 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "30 min rowing" }],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [{ name: "Single-leg deadlift: 3 sets of 8 reps each leg" }],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Balance Exercises",
            exercises: [
              { name: "Single-leg stand: 3 sets of 30 seconds each leg" },
              { name: "Plank with alternating leg lift: 3 sets of 30 seconds" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "30 min step climber" }],
      },
      {
        name: "Core",
        time: "5 min",
        exercises: [{ name: "Russian twists: 3 sets of 15 reps" }],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Core Exercises",
            exercises: [
              { name: "Ab wheel rollouts: 3 sets of 10 reps" },
              { name: "Pallof press: 3 sets of 12 reps each side" },
              { name: "Superman: 3 sets of 15 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [
          { name: "10 min running" },
          { name: "10 min rowing" },
          { name: "10 min jump rope" },
        ],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [{ name: "Bosu ball squats: 3 sets of 10 reps" }],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Additional Exercises",
            exercises: [
              { name: "Chest press: 3 sets of 10 reps" },
              { name: "Bicep curls: 3 sets of 12 reps" },
              { name: "Bent-over rows: 3 sets of 10 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "30 min jump rope" }],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [{ name: "Single-leg deadlift: 3 sets of 8 reps each leg" }],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
          {
            name: "Strength Circuit (3 rounds, 45 sec work, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Goblet squats" },
              { name: "Romanian deadlifts" },
              { name: "Walking lunges" },
              { name: "Calf raises" },
              { name: "Hyperextensions" },
              { name: "Glute bridge" },
            ],
          },
          {
            name: "Core Exercises",
            exercises: [
              { name: "Hanging leg raises: 3 sets of 10 reps" },
              { name: "Russian twists: 3 sets of 15 reps" },
              { name: "Superman: 3 sets of 12 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [
          { name: "15 min running" },
          { name: "15 min step climber" },
        ],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [
          { name: "Plank with alternating leg lift: 3 sets of 30 seconds" },
        ],
      },
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
      {
        name: "Main Workout",
        time: "40 min",
        exercises: [
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
          {
            name: "Additional Exercises",
            exercises: [
              { name: "Shoulder press: 3 sets of 10 reps" },
              { name: "Romanian deadlifts: 3 sets of 10 reps" },
              { name: "Bent-over rows: 3 sets of 10 reps" },
              { name: "Ab wheel rollouts: 3 sets of 8 reps" },
            ],
          },
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [
          { name: "10 min rowing" },
          { name: "10 min jump rope" },
          { name: "10 min running" },
        ],
      },
      {
        name: "Balance",
        time: "5 min",
        exercises: [
          { name: "Single-leg stand: 3 sets of 30 seconds each leg" },
        ],
      },
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
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Cat-cow stretch" },
          { name: "Arm circles" },
          { name: "Side lunges" },
        ],
      },
      {
        name: "Light Full Body Circuit",
        time: "20 min",
        exercises: [
          {
            name: "Circuit (2 rounds, 30 sec work, 30 sec rest)",
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
        ],
      },
      {
        name: "Cardio",
        time: "30 min",
        exercises: [{ name: "30 min light intensity running" }],
      },
      {
        name: "Balance and Flexibility",
        time: "25 min",
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
      {
        name: "Cool-down",
        time: "5 min",
        exercises: [{ name: "Gentle full body stretch" }],
      },
    ],
  },
];
