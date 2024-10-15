window.programData = [
  // Day 1: Upper Body Strength and Cardio
  {
    title: "Upper Body Strength and Cardio",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jumping jacks" },
          { name: "Mountain climbers" },
          { name: "Push-ups" },
          { name: "Cat-cow stretch" },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Strength Training",
            exercises: [
              { name: "Pull-ups/Chin-ups: 3 sets of max reps" },
              { name: "Push-ups: 3 sets of 12-15 reps" },
              { name: "Dips: 3 sets of 12 reps" },
              { name: "Bent-over rows: 3 sets of 10 reps (dumbbells)" },
              { name: "Shoulder press: 3 sets of 10 reps (dumbbells)" },
              { name: "Bicep curls: 3 sets of 12 reps (dumbbells)" },
              { name: "Tricep extensions: 3 sets of 12 reps (dumbbells)" },
            ],
          },
          {
            name: "Cardio: 30 min running or jump rope",
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "Child's pose" },
          { name: "Cobra stretch" },
          { name: "Standing forward bend" },
        ],
      },
    ],
  },
  // Day 2: Lower Body Strength and Core
  {
    title: "Lower Body Strength and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "High knees" },
          { name: "Squat jumps" },
          { name: "Side lunges" },
          { name: "Lunges" },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Strength Training",
            exercises: [
              { name: "Goblet squats: 3 sets of 12 reps (dumbbell)" },
              { name: "Romanian deadlifts: 3 sets of 10 reps (dumbbells)" },
              { name: "Lunges with dumbbells: 3 sets of 10 each leg" },
              { name: "Calf Raises: 3 sets of 15 reps" },
              { name: "Glute bridge: 3 sets of 15 reps" },
              { name: "Single-leg deadlift: 3 sets of 8 each leg" },
            ],
          },
          {
            name: "Core Circuit (3 rounds, 45 sec each exercise, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Plank" },
              { name: "Russian twists" },
              { name: "Mountain climbers" },
              { name: "Superman" },
            ],
          },
          {
            name: "Cardio: 30 min stair stepping or running",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "Pigeon pose" },
          { name: "Butterfly stretch" },
          { name: "World's greatest stretch" },
        ],
      },
    ],
  },
  // Day 3: Active Recovery and Flexibility
  {
    title: "Active Recovery and Flexibility",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jump rope" },
          { name: "Side lunges" },
          { name: "Cat-cow stretch" },
        ],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          { name: "Cardio: 30 min low-intensity cycling or brisk walking" },
          {
            name: "Flexibility Work (40 min): Yoga flow focusing on balance and flexibility",
            exercises: [
              { name: "Downward facing dog" },
              { name: "Lunge with spinal twist" },
              { name: "Child's pose" },
              { name: "Cobra stretch" },
              { name: "Butterfly stretch" },
            ],
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Gentle full body stretch" }],
      },
    ],
  },
  // Day 4: HIIT and Core (Upper Body Focus)
  {
    title: "HIIT and Core (Upper Body Focus)",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jumping jacks" },
          { name: "High knees" },
          { name: "Mountain climbers" },
          { name: "Push-ups" },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "HIIT Circuit (20 min): 40 sec work, 20 sec rest",
            isCircuit: true,
            circuitExercises: [
              { name: "Burpees" },
              { name: "Push-ups" },
              { name: "Mountain climbers" },
              { name: "High knees" },
            ],
          },
          {
            name: "Core Circuit (3 rounds, 45 sec each exercise, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Plank" },
              { name: "Russian twists" },
              { name: "Superman" },
              { name: "Mountain climbers" },
            ],
          },
          {
            name: "Balance Work: Plank with alternating leg lift, 3 sets of 30 sec",
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps",
          },
          {
            name: "Cardio: 30 min jump rope",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "Child's pose" },
          { name: "Cat-cow stretch" },
          { name: "Cobra stretch" },
        ],
      },
    ],
  },
  // Day 5: Lower Body HIIT and Balance
  {
    title: "Lower Body HIIT and Balance",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "High knees" },
          { name: "Jumping jacks" },
          { name: "Lunges" },
          { name: "Side lunges" },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "HIIT Circuit (20 min): 30 sec work, 30 sec rest",
            isCircuit: true,
            circuitExercises: [
              { name: "Jump squats" },
              { name: "Lunges" },
              { name: "Mountain climbers" },
              { name: "Squats" },
            ],
          },
          {
            name: "Balance Work: Single-leg stand, 3 sets of 30 sec each leg",
          },
          {
            name: "Light Core Engagement",
            exercises: [{ name: "Plank: 3 sets of 30 sec" }],
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps",
          },
          {
            name: "Cardio: 30 min stair stepping or running",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "Standing forward bend" },
          { name: "Pigeon pose" },
          { name: "Butterfly stretch" },
        ],
      },
    ],
  },
  // Day 6: Active Recovery and Mobility
  {
    title: "Active Recovery and Mobility",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jump rope" },
          { name: "Side lunges" },
          { name: "Cat-cow stretch" },
        ],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          { name: "Cardio: 30 min low-intensity cycling or brisk walking" },
          {
            name: "Flexibility Work (40 min): Yoga flow focusing on hips, shoulders, and spine",
            exercises: [
              { name: "Downward facing dog" },
              { name: "Child's pose" },
              { name: "Cobra stretch" },
              { name: "Lunge with spinal twist" },
            ],
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Gentle full body stretch" }],
      },
    ],
  },
  // Day 7: Full Body Functional Training
  {
    title: "Full Body Functional Training",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jumping jacks" },
          { name: "Mountain climbers" },
          { name: "Squats" },
          { name: "Lunges" },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Functional Circuit (3 rounds, 40 sec each exercise, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Farmer's walks: 30 sec (dumbbells)" },
              { name: "Single-leg deadlift: 8 reps each leg" },
              { name: "Push-ups" },
              { name: "Walking lunges" },
              { name: "Inverted rows" },
              { name: "Squats" },
            ],
          },
          {
            name: "Cardio: 30 min running or jump rope",
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "World's greatest stretch" },
          { name: "Child's pose" },
          { name: "Cobra stretch" },
        ],
      },
    ],
  },
];
