// data.js

window.programData = [
  {
    title: "Full Body Strength and Cardio",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog" },
          { name: "Arm circles" },
          { name: "Leg swings" },
          { name: "Bodyweight squats" },
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
              { name: "Pull-ups" },
              { name: "Push-ups" },
              { name: "Bodyweight squats" },
              { name: "Dumbbell rows (10kg)" },
              { name: "Lunges" },
              { name: "Plank" },
            ],
          },
          {
            name: "Cardio: 15 min moderate-intensity running or cycling",
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (bodyweight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          {
            name: "Full body stretch, focus on back and legs",
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
          { name: "Jump rope" },
          { name: "High knees" },
          { name: "Butt kicks" },
          { name: "Arm swings" },
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
              { name: "Burpees" },
              { name: "Mountain climbers" },
              { name: "Jump squats" },
              { name: "High knees" },
            ],
          },
          {
            name: "Core Circuit (3 rounds, 45 sec each exercise, 15 sec rest)",
            isCircuit: true,
            circuitExercises: [
              { name: "Russian twists (5kg dumbbell)" },
              { name: "Bicycle crunches" },
              { name: "Leg raises" },
              { name: "Side plank (each side)" },
            ],
          },
          {
            name: "Balance work: Single-leg stance with eyes closed, 3 sets of 30 sec each leg",
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (5kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Focus on core and lower back" }],
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
          { name: "Light jog" },
          { name: "Leg swings" },
          { name: "Ankle rotations" },
          { name: "Bodyweight lunges" },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Goblet squats: 3 sets of 12 reps (15kg dumbbell)",
          },
          {
            name: "Romanian deadlifts: 3 sets of 10 reps (two 15kg dumbbells)",
          },
          {
            name: "Step-ups: 3 sets of 10 each leg (bodyweight)",
          },
          { name: "Calf raises: 3 sets of 15 reps" },
          {
            name: "Cardio: 20 min interval training on bike or rowing machine (1 min hard, 1 min easy)",
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (10kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [{ name: "Focus on legs and lower back" }],
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
          { name: "Arm circles" },
          { name: "Shoulder rolls" },
          { name: "Cat-cow stretch" },
          { name: "Light resistance band work" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Pull-ups or assisted pull-ups: 3 sets of max reps (aim for 5-8)",
          },
          { name: "Push-ups: 3 sets of 10-15 reps" },
          {
            name: "Dumbbell shoulder press: 3 sets of 10 reps (8kg dumbbells)",
          },
          {
            name: "Dips or bench dips: 3 sets of 8-12 reps",
          },
          {
            name: "Face pulls with resistance band: 3 sets of 15 reps",
          },
          {
            name: "Plank variations: 3 sets of 30-45 sec (standard, side, bird-dog)",
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (15kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Upper body and back focus" }],
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
          { name: "Light jog" },
          { name: "High knees" },
          { name: "Butt kicks" },
          { name: "Arm swings" },
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
              },
              {
                name: "Plyometric push-ups (or regular push-ups)",
              },
              { name: "Skater hops" },
              { name: "Medicine ball slams" },
            ],
          },
          {
            name: "Flexibility work (30 min): Yoga flow focusing on sun salutations and warrior poses",
          },
          {
            name: "Balance work: Single-leg Romanian deadlifts, 3 sets of 8 each leg (light dumbbell)",
          },
          {
            name: "Hyperextensions: 2 sets of 12 reps (bodyweight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [{ name: "Full body stretch" }],
      },
    ],
  },
  {
    title: "Active Recovery",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [{ name: "Light movements to wake up the body" }],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          {
            name: "30 min low-intensity swimming, cycling, or brisk walking",
          },
          {
            name: "30 min yoga flow focusing on balance and flexibility",
          },
          {
            name: "10 min foam rolling session",
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
  {
    title: "Cardio Endurance and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          { name: "Light jog" },
          { name: "Arm circles" },
          { name: "Leg swings" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Cardio: 30 min steady-state run or row at moderate intensity",
          },
          {
            name: "Core circuit (3 rounds, 45 sec work, 15 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "Planks" },
              { name: "Russian twists (7.5kg dumbbell)" },
              { name: "Mountain climbers" },
              { name: "Supermans" },
            ],
          },
          {
            name: "Balance work: Bosu ball squats, 3 sets of 10 (or regular squats if no Bosu ball)",
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (20kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Focus on back and core" }],
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
          { name: "Jumping jacks" },
          { name: "Arm circles" },
          { name: "Leg swings" },
          { name: "Bodyweight squats" },
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
              { name: "Pull-ups or inverted rows" },
              {
                name: "Dumbbell bench press (or push-ups if no bench)",
              },
              { name: "Goblet squats (20kg dumbbell)" },
              { name: "Dumbbell rows (12kg dumbbells)" },
              { name: "Lunges with dumbbells (8kg each hand)" },
              { name: "Plank to downward dog" },
            ],
          },
          {
            name: "Farmer's walks: 3 sets of 30 sec (heavy dumbbells)",
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (25kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Full body stretch" }],
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
          { name: "Jump rope" },
          { name: "High knees" },
          { name: "Butt kicks" },
          { name: "Arm swings" },
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
              { name: "Burpees" },
              { name: "Mountain climbers" },
              { name: "Squat jumps" },
              { name: "Push-ups" },
              { name: "High knees" },
            ],
          },
          {
            name: "Core Circuit (3 rounds, 45 sec each exercise, 15 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "V-ups" },
              { name: "Pallof press with resistance band" },
              { name: "Bird-dog crunch" },
              { name: "Dead bug" },
            ],
          },
          {
            name: "Balance work: Pistol squat progression, 3 sets of 5 each leg",
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (20kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [{ name: "Focus on core and lower back" }],
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
          { name: "Light jog" },
          { name: "Leg swings" },
          { name: "Ankle rotations" },
          { name: "Bodyweight lunges" },
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          { name: "Bulgarian split squats: 3 sets of 10 each leg" },
          {
            name: "Single-leg Romanian deadlifts: 3 sets of 8 each leg (light dumbbells)",
          },
          { name: "Glute bridges: 3 sets of 15 reps" },
          { name: "Calf raises: 3 sets of 20 reps" },
          {
            name: "Cardio: 20 min hill or stair climbs (or incline treadmill)",
          },
          {
            name: "Balance work: Bosu ball single-leg stance, 3 sets of 30 sec each leg",
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (30kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Lower body focus" }],
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
          { name: "Arm circles" },
          { name: "Shoulder rolls" },
          { name: "Cat-cow stretch" },
          { name: "Light resistance band work" },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          { name: "Pull-ups: 4 sets of max reps (aim for 6-10)" },
          { name: "Push-ups: 4 sets of 12-18 reps" },
          {
            name: "Dumbbell shoulder press: 3 sets of 10 reps (10kg dumbbells)",
          },
          { name: "Dips: 3 sets of 10-15 reps" },
          {
            name: "Face pulls with resistance band: 3 sets of 15 reps",
          },
          {
            name: "Core circuit (3 rounds, 40 sec work, 20 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "Plank with shoulder taps" },
              { name: "Russian twists (10kg dumbbell)" },
              { name: "Hanging leg raises (or lying leg raises)" },
              { name: "Side plank rotations" },
            ],
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (25kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [{ name: "Upper body and back focus" }],
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
          { name: "Light jog" },
          { name: "High knees" },
          { name: "Butt kicks" },
          { name: "Arm swings" },
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
              { name: "Squat jumps" },
              { name: "Clap push-ups (or regular push-ups)" },
              { name: "Lateral bounds" },
              {
                name: "Medicine ball chest pass against wall",
              },
            ],
          },
          {
            name: "Flexibility work (30 min): Yoga flow focusing on hip openers and spinal twists",
          },
          {
            name: "Balance work: Single-leg hops, 3 sets of 10 each leg",
          },
          {
            name: "Hyperextensions: 2 sets of 15 reps (15kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Full body stretch" }],
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
          { name: "Light jog" },
          { name: "Arm circles" },
          { name: "Leg swings" },
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Cardio: 35 min fartlek run (alternating 3 min moderate pace, 1 min high intensity)",
          },
          {
            name: "Core circuit (3 rounds, 45 sec work, 15 sec rest):",
            isCircuit: true,
            circuitExercises: [
              { name: "Plank jacks" },
              { name: "Bicycle crunches" },
              { name: "Reverse crunches" },
              { name: "Back extensions" },
            ],
          },
          {
            name: "Balance work: Slacklining or tandem stance walking, 10 min",
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (35kg weight)",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [{ name: "Focus on back, hips, and legs" }],
      },
    ],
  },
  {
    title: "Active Recovery and Mobility",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [{ name: "Light movements to wake up the body" }],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          {
            name: "30 min low-intensity swimming or cycling",
          },
          {
            name: "30 min mobility work (focusing on hips, shoulders, and spine)",
          },
          {
            name: "10 min self-massage with foam roller or massage ball",
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [{ name: "Full body gentle stretching" }],
      },
    ],
  },
];
