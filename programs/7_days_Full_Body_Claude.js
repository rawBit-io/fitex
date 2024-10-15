window.programData = [
  {
    title: "Full Body Strength and Cardio",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jumping jacks" },
          { name: "High knees" },
          { name: "Mountain climbers" },
          { name: "Squats" },
          { name: "Arm circles" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Circuit (3 rounds, 45 sec each exercise, 15 sec rest between exercises, 2 min rest between rounds)",
            isCircuit: true,
            circuitExercises: [
              { name: "Pull-ups/Chin-ups" },
              { name: "Push-ups" },
              { name: "Squats" },
              { name: "Lunges" },
              { name: "Plank" },
            ],
          },
          {
            name: "Cardio (30 min)",
            isCircuit: true,
            circuitExercises: [
              { name: "Jump rope (15 min)" },
              { name: "Mountain climbers (5 min)" },
              { name: "Burpees (5 min)" },
              { name: "High knees (5 min)" },
            ],
          },
          { name: "Russian twists: 3 sets of 20 reps" },
          { name: "Superman: 3 sets of 12 reps" },
          { name: "Hyperextensions: 3 sets of 12 reps" },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Standing forward bend" },
          { name: "Lunge with spinal twist" },
          { name: "Cat-cow stretch" },
          { name: "Child's pose" },
        ],
      },
    ],
  },
  {
    title: "Upper Body and Balance",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jumping jacks" },
          { name: "Arm circles" },
          { name: "Mountain climbers" },
          { name: "Push-ups" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          { name: "Pull-ups/Chin-ups: 5 sets of max reps" },
          { name: "Pike push-ups: 3 sets of 10 reps" },
          { name: "Dips: 3 sets of 10 reps" },
          { name: "Inverted rows: 3 sets of 12 reps" },
          {
            name: "Balance (20 min)",
            isCircuit: true,
            circuitExercises: [
              { name: "Single-leg stand: 3 sets of 30 sec each leg" },
              { name: "Walking lunges: 3 sets of 20 steps" },
              { name: "Single-leg deadlift: 3 sets of 10 each leg" },
              { name: "Plank with alternating leg lift: 3 sets of 20 reps" },
            ],
          },
          {
            name: "Cardio: Jump rope intervals (30 min, 1 min fast, 1 min slow)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Downward facing dog" },
          { name: "Cobra stretch" },
          { name: "Butterfly stretch" },
          { name: "Side lunges" },
        ],
      },
    ],
  },
  {
    title: "Lower Body and Core",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "High knees" },
          { name: "Squats" },
          { name: "Lunges" },
          { name: "Glute bridge" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          { name: "Goblet squats: 4 sets of 12 reps" },
          { name: "Romanian deadlifts: 4 sets of 10 reps" },
          { name: "Lunges with dumbbells: 3 sets of 10 each leg" },
          { name: "Calf raises: 3 sets of 15 reps" },
          { name: "Plank: 3 sets of 45 sec" },
          { name: "Russian twists: 3 sets of 20 reps" },
          { name: "Mountain climbers: 3 sets of 30 sec" },
          {
            name: "Cardio (30 min)",
            isCircuit: true,
            circuitExercises: [
              { name: "Burpees (10 min)" },
              { name: "Squat jumps (10 min)" },
              { name: "High knees (10 min)" },
            ],
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Pigeon pose" },
          { name: "Standing forward bend" },
          { name: "World's greatest stretch" },
          { name: "Cat-cow stretch" },
        ],
      },
    ],
  },
  {
    title: "HIIT and Upper Body",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jumping jacks" },
          { name: "Arm circles" },
          { name: "Mountain climbers" },
          { name: "Push-ups" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "HIIT Circuit (30 min, 40 sec work, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Burpees" },
              { name: "Mountain climbers" },
              { name: "Jump squats" },
              { name: "Push-ups" },
              { name: "High knees" },
              { name: "Plank" },
            ],
          },
          { name: "Pull-ups/Chin-ups: 5 sets of max reps" },
          { name: "Dumbbell chest press: 3 sets of 12 reps" },
          { name: "Shoulder press: 3 sets of 10 reps" },
          { name: "Tricep extensions: 3 sets of 12 reps" },
          { name: "Russian twists: 3 sets of 20 reps" },
          { name: "Superman: 3 sets of 12 reps" },
          { name: "Hyperextensions: 3 sets of 12 reps" },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Downward facing dog" },
          { name: "Child's pose" },
          { name: "Cobra stretch" },
          { name: "Butterfly stretch" },
        ],
      },
    ],
  },
  {
    title: "Lower Body and Balance",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "High knees" },
          { name: "Squats" },
          { name: "Lunges" },
          { name: "Glute bridge" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          { name: "Goblet squats: 4 sets of 12 reps" },
          { name: "Romanian deadlifts: 4 sets of 10 reps" },
          { name: "Dumbbell squat to press: 3 sets of 10 reps" },
          { name: "Single-arm dumbbell row: 3 sets of 10 each arm" },
          {
            name: "Balance (20 min)",
            isCircuit: true,
            circuitExercises: [
              { name: "Single-leg stand: 3 sets of 30 sec each leg" },
              { name: "Bosu ball squats: 3 sets of 12 reps" },
              { name: "Walking lunges: 3 sets of 20 steps" },
              { name: "Plank with alternating leg lift: 3 sets of 20 reps" },
            ],
          },
          {
            name: "Cardio (30 min)",
            isCircuit: true,
            circuitExercises: [
              { name: "Jump rope (20 min)" },
              { name: "Mountain climbers (5 min)" },
              { name: "Burpees (5 min)" },
            ],
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Standing forward bend" },
          { name: "Lunge with spinal twist" },
          { name: "Pigeon pose" },
          { name: "World's greatest stretch" },
        ],
      },
    ],
  },
  {
    title: "Full Body Strength and Core",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jumping jacks" },
          { name: "High knees" },
          { name: "Mountain climbers" },
          { name: "Squats" },
          { name: "Arm circles" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Circuit (4 rounds, 40 sec each exercise, 20 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Pull-ups/Chin-ups" },
              { name: "Push-ups" },
              { name: "Goblet squats" },
              { name: "Renegade rows" },
              { name: "Lunges" },
              { name: "Russian twists" },
            ],
          },
          { name: "Plank: 3 sets of 45 sec" },
          { name: "Superman: 3 sets of 12 reps" },
          { name: "Hyperextensions: 3 sets of 12 reps" },
          {
            name: "Cardio (30 min)",
            isCircuit: true,
            circuitExercises: [
              { name: "Jumping jacks (10 min)" },
              { name: "Burpees (10 min)" },
              { name: "Mountain climbers (10 min)" },
            ],
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Cat-cow stretch" },
          { name: "Downward facing dog" },
          { name: "Child's pose" },
          { name: "Side lunges" },
        ],
      },
    ],
  },
  {
    title: "Active Recovery and Flexibility",
    categories: [
      {
        name: "Light Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jogging in place" },
          { name: "Arm circles" },
          { name: "Leg swings" },
        ],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          {
            name: "Light Cardio: Alternating 5 min of light jump rope and 5 min of walking in place (30 min)",
          },
          {
            name: "Flexibility and Mobility Work (40 min)",
            isCircuit: true,
            circuitExercises: [
              { name: "Standing forward bend" },
              { name: "Lunge with spinal twist" },
              { name: "Cat-cow stretch" },
              { name: "Downward facing dog" },
              { name: "Pigeon pose" },
              { name: "Child's pose" },
              { name: "Cobra stretch" },
              { name: "Butterfly stretch" },
              { name: "World's greatest stretch" },
              { name: "Side lunges" },
            ],
          },
        ],
      },
      {
        name: "Cool-down",
        time: "10 min",
        exercises: [
          { name: "Gentle full body stretch" },
          { name: "Deep breathing exercises" },
        ],
      },
    ],
  },
];
