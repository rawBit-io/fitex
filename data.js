// data.js

const fullBodyProgram = [
  {
    title: "Full Body Strength and Cardio",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog", hasPicture: false },
          { name: "Arm circles", hasPicture: false },
          { name: "Leg swings", hasPicture: false },
          { name: "Bodyweight squats", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Circuit (3 rounds, 45 sec each exercise, 15 sec rest between exercises, 2 min rest between rounds)",
            isCircuit: true,
            circuitExercises: [
              {
                name: "Pull-ups or assisted pull-ups",
                asciiArtKey: "pullUps",
                hasPicture: true,
              },
              { name: "Push-ups", asciiArtKey: "pushUps", hasPicture: true },
              {
                name: "Bodyweight squats",
                asciiArtKey: "squats",
                hasPicture: true,
              },
              {
                name: "Dumbbell rows (10kg)",
                asciiArtKey: "dumbbellRows",
                hasPicture: true,
              },
              { name: "Lunges", asciiArtKey: "lunges", hasPicture: true },
              { name: "Plank", asciiArtKey: "plank", hasPicture: true },
            ],
          },
          {
            name: "Cardio: 15 min moderate-intensity running or cycling",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (bodyweight)",
            asciiArtKey: "hyperextensions",
            hasPicture: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          {
            name: "Full body stretch, focus on back and legs",
            hasPicture: false,
          },
        ],
      },
    ],
  },
  {
    title: "HIIT and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jump rope", hasPicture: false },
          { name: "High knees", hasPicture: false },
          { name: "Butt kicks", hasPicture: false },
          { name: "Arm swings", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "HIIT (20 min): 30 sec work, 30 sec rest",
            isCircuit: true,
            circuitExercises: [
              { name: "Burpees", hasPicture: false },
              { name: "Mountain climbers", hasPicture: false },
              { name: "Jump squats", hasPicture: false },
              { name: "High knees", hasPicture: false },
            ],
          },
          {
            name: "Core Circuit (3 rounds, 45 sec each exercise, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              {
                name: "Russian twists (5kg dumbbell)",
                hasPicture: false,
              },
              { name: "Bicycle crunches", hasPicture: false },
              { name: "Leg raises", hasPicture: false },
              { name: "Side plank (each side)", hasPicture: false },
            ],
          },
          {
            name: "Balance work: Single-leg stance with eyes closed, 3 sets of 30 sec each leg",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (5kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Focus on core and lower back", hasPicture: false },
        ],
      },
    ],
  },
  {
    title: "Lower Body and Cardio",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog", hasPicture: false },
          { name: "Leg swings", hasPicture: false },
          { name: "Ankle rotations", hasPicture: false },
          { name: "Bodyweight lunges", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Goblet squats: 3 sets of 12 reps (15kg dumbbell)",
            hasPicture: false,
          },
          {
            name: "Romanian deadlifts: 3 sets of 10 reps (two 15kg dumbbells)",
            hasPicture: false,
          },
          {
            name: "Step-ups: 3 sets of 10 each leg (bodyweight)",
            hasPicture: false,
          },
          { name: "Calf raises: 3 sets of 15 reps", hasPicture: false },
          {
            name: "Cardio: 20 min interval training on bike or rowing machine (1 min hard, 1 min easy)",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (10kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "Focus on legs and lower back", hasPicture: false },
        ],
      },
    ],
  },
  {
    title: "Upper Body and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles", hasPicture: false },
          { name: "Shoulder rolls", hasPicture: false },
          { name: "Cat-cow stretch", hasPicture: false },
          { name: "Light resistance band work", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Pull-ups or assisted pull-ups: 3 sets of max reps (aim for 5-8)",
            hasPicture: false,
          },
          { name: "Push-ups: 3 sets of 10-15 reps", hasPicture: false },
          {
            name: "Dumbbell shoulder press: 3 sets of 10 reps (8kg dumbbells)",
            hasPicture: false,
          },
          {
            name: "Dips or bench dips: 3 sets of 8-12 reps",
            hasPicture: false,
          },
          {
            name: "Face pulls with resistance band: 3 sets of 15 reps",
            hasPicture: false,
          },
          {
            name: "Plank variations: 3 sets of 30-45 sec (standard, side, bird-dog)",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (15kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Upper body and back focus", hasPicture: false }],
      },
    ],
  },
  {
    title: "Plyometrics and Flexibility",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog", hasPicture: false },
          { name: "High knees", hasPicture: false },
          { name: "Butt kicks", hasPicture: false },
          { name: "Arm swings", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Plyometric circuit (3 rounds, 30 sec work, 30 sec rest):",
            isCircuit: true,
            circuitExercises: [
              {
                name: "Box jumps (or step-ups for lower impact)",
                hasPicture: false,
              },
              {
                name: "Plyometric push-ups (or regular push-ups)",
                hasPicture: false,
              },
              { name: "Skater hops", hasPicture: false },
              { name: "Medicine ball slams", hasPicture: false },
            ],
          },
          {
            name: "Flexibility work (30 min): Yoga flow focusing on sun salutations and warrior poses",
            hasPicture: false,
          },
          {
            name: "Balance work: Single-leg Romanian deadlifts, 3 sets of 8 each leg (light dumbbell)",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 2 sets of 12 reps (bodyweight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [{ name: "Full body stretch", hasPicture: false }],
      },
    ],
  },
  {
    title: "Active Recovery",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          {
            name: "Light movements to wake up the body",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          {
            name: "30 min low-intensity swimming, cycling, or brisk walking",
            hasPicture: false,
          },
          {
            name: "30 min yoga flow focusing on balance and flexibility",
            hasPicture: false,
          },
          {
            name: "10 min foam rolling session",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Gentle full body stretch", hasPicture: false }],
      },
    ],
  },
  {
    title: "Cardio Endurance and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog", hasPicture: false },
          { name: "Arm circles", hasPicture: false },
          { name: "Leg swings", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Cardio: 30 min steady-state run or row at moderate intensity",
            hasPicture: false,
          },
          {
            name: "Core circuit (3 rounds, 45 sec work, 15 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "Planks", hasPicture: false },
              {
                name: "Russian twists (7.5kg dumbbell)",
                hasPicture: false,
              },
              { name: "Mountain climbers", hasPicture: false },
              { name: "Supermans", hasPicture: false },
            ],
          },
          {
            name: "Balance work: Bosu ball squats, 3 sets of 10 (or regular squats if no Bosu ball)",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (20kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Focus on back and core", hasPicture: false }],
      },
    ],
  },
  {
    title: "Full Body Strength",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jumping jacks", hasPicture: false },
          { name: "Arm circles", hasPicture: false },
          { name: "Leg swings", hasPicture: false },
          { name: "Bodyweight squats", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Circuit (4 rounds, 40 sec each exercise, 20 sec rest):",
            isCircuit: true,
            circuitExercises: [
              {
                name: "Pull-ups or inverted rows",
                hasPicture: false,
              },
              {
                name: "Dumbbell bench press (or push-ups if no bench)",
                hasPicture: false,
              },
              {
                name: "Goblet squats (20kg dumbbell)",
                hasPicture: false,
              },
              {
                name: "Dumbbell rows (12kg dumbbells)",
                hasPicture: false,
              },
              {
                name: "Lunges with dumbbells (8kg each hand)",
                hasPicture: false,
              },
              { name: "Plank to downward dog", hasPicture: false },
            ],
          },
          {
            name: "Farmer's walks: 3 sets of 30 sec (heavy dumbbells)",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (25kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Full body stretch", hasPicture: false }],
      },
    ],
  },
  {
    title: "HIIT and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Jump rope", hasPicture: false },
          { name: "High knees", hasPicture: false },
          { name: "Butt kicks", hasPicture: false },
          { name: "Arm swings", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "HIIT (25 min): 40 sec work, 20 sec rest",
            isCircuit: true,
            circuitExercises: [
              { name: "Burpees", hasPicture: false },
              { name: "Mountain climbers", hasPicture: false },
              { name: "Squat jumps", hasPicture: false },
              { name: "Push-ups", hasPicture: false },
              { name: "High knees", hasPicture: false },
            ],
          },
          {
            name: "Core Circuit (3 rounds, 45 sec each exercise, 15 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "V-ups", hasPicture: false },
              {
                name: "Pallof press with resistance band",
                hasPicture: false,
              },
              { name: "Bird-dog crunch", hasPicture: false },
              { name: "Dead bug", hasPicture: false },
            ],
          },
          {
            name: "Balance work: Pistol squat progression, 3 sets of 5 each leg",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (20kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "Focus on core and lower back", hasPicture: false },
        ],
      },
    ],
  },
  {
    title: "Lower Body and Cardio",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog", hasPicture: false },
          { name: "Leg swings", hasPicture: false },
          { name: "Ankle rotations", hasPicture: false },
          { name: "Bodyweight lunges", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Bulgarian split squats: 3 sets of 10 each leg",
            hasPicture: false,
          },
          {
            name: "Single-leg Romanian deadlifts: 3 sets of 8 each leg (light dumbbells)",
            hasPicture: false,
          },
          { name: "Glute bridges: 3 sets of 15 reps", hasPicture: false },
          { name: "Calf raises: 3 sets of 20 reps", hasPicture: false },
          {
            name: "Cardio: 20 min hill or stair climbs (or incline treadmill)",
            hasPicture: false,
          },
          {
            name: "Balance work: Bosu ball single-leg stance, 3 sets of 30 sec each leg",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (30kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Lower body focus", hasPicture: false }],
      },
    ],
  },
  {
    title: "Upper Body and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Arm circles", hasPicture: false },
          { name: "Shoulder rolls", hasPicture: false },
          { name: "Cat-cow stretch", hasPicture: false },
          { name: "Light resistance band work", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Pull-ups: 4 sets of max reps (aim for 6-10)",
            hasPicture: false,
          },
          { name: "Push-ups: 4 sets of 12-18 reps", hasPicture: false },
          {
            name: "Dumbbell shoulder press: 3 sets of 10 reps (10kg dumbbells)",
            hasPicture: false,
          },
          { name: "Dips: 3 sets of 10-15 reps", hasPicture: false },
          {
            name: "Face pulls with resistance band: 3 sets of 15 reps",
            hasPicture: false,
          },
          {
            name: "Core circuit (3 rounds, 40 sec work, 20 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "Plank with shoulder taps", hasPicture: false },
              {
                name: "Russian twists (10kg dumbbell)",
                hasPicture: false,
              },
              {
                name: "Hanging leg raises (or lying leg raises)",
                hasPicture: false,
              },
              { name: "Side plank rotations", hasPicture: false },
            ],
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (25kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [{ name: "Upper body and back focus", hasPicture: false }],
      },
    ],
  },
  {
    title: "Plyometrics and Flexibility",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog", hasPicture: false },
          { name: "High knees", hasPicture: false },
          { name: "Butt kicks", hasPicture: false },
          { name: "Arm swings", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Plyometric circuit (3 rounds, 30 sec work, 30 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "Squat jumps", hasPicture: false },
              {
                name: "Clap push-ups (or regular push-ups)",
                hasPicture: false,
              },
              { name: "Lateral bounds", hasPicture: false },
              {
                name: "Medicine ball chest pass against wall",
                hasPicture: false,
              },
            ],
          },
          {
            name: "Flexibility work (30 min): Yoga flow focusing on hip openers and spinal twists",
            hasPicture: false,
          },
          {
            name: "Balance work: Single-leg hops, 3 sets of 10 each leg",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 2 sets of 15 reps (15kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Full body stretch", hasPicture: false }],
      },
    ],
  },
  {
    title: "Cardio Endurance and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog", hasPicture: false },
          { name: "Arm circles", hasPicture: false },
          { name: "Leg swings", hasPicture: false },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Cardio: 35 min fartlek run (alternating 3 min moderate pace, 1 min high intensity)",
            hasPicture: false,
          },
          {
            name: "Core circuit (3 rounds, 45 sec work, 15 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "Plank jacks", hasPicture: false },
              { name: "Bicycle crunches", hasPicture: false },
              { name: "Reverse crunches", hasPicture: false },
              { name: "Back extensions", hasPicture: false },
            ],
          },
          {
            name: "Balance work: Slacklining or tandem stance walking, 10 min",
            hasPicture: false,
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (35kg weight)",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "Focus on back, hips, and legs", hasPicture: false },
        ],
      },
    ],
  },
  {
    title: "Active Recovery and Mobility",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          {
            name: "Light movements to wake up the body",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          {
            name: "30 min low-intensity swimming or cycling",
            hasPicture: false,
          },
          {
            name: "30 min mobility work (focusing on hips, shoulders, and spine)",
            hasPicture: false,
          },
          {
            name: "10 min self-massage with foam roller or massage ball",
            hasPicture: false,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Full body gentle stretching", hasPicture: false }],
      },
    ],
  },
];
