// data.js

const days = [
  {
    title: "Full Body Strength and Cardio",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: [
          "Light jog",
          "Arm circles",
          "Leg swings",
          "Bodyweight squats",
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Circuit (3 rounds, 45 sec each exercise, 15 sec rest between exercises, 2 min rest between rounds):",
            exercises: [
              { name: "Pull-ups or assisted pull-ups", asciiArt: true },
              { name: "Push-ups", asciiArt: true },
              { name: "Bodyweight squats", asciiArt: true },
              { name: "Dumbbell rows (10kg)", asciiArt: true },
              { name: "Lunges", asciiArt: true },
              { name: "Plank", asciiArt: true },
            ],
          },
          "Cardio: 15 min moderate-intensity running or cycling",
          {
            name: "Hyperextensions: 3 sets of 10 reps (bodyweight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: ["Full body stretch, focus on back and legs"],
      },
    ],
  },
  {
    title: "HIIT and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: ["Jump rope", "High knees", "Butt kicks", "Arm swings"],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "HIIT (20 min): 30 sec work, 30 sec rest",
            exercises: [
              "Burpees",
              "Mountain climbers",
              "Jump squats",
              "High knees",
            ],
          },
          {
            name: "Core Circuit (3 rounds, 45 sec each exercise, 15 sec rest):",
            exercises: [
              { name: "Russian twists (5kg dumbbell)", asciiArt: true },
              { name: "Bicycle crunches", asciiArt: true },
              { name: "Leg raises", asciiArt: true },
              { name: "Side plank (each side)", asciiArt: true },
            ],
          },
          "Balance work: Single-leg stance with eyes closed, 3 sets of 30 sec each leg",
          {
            name: "Hyperextensions: 3 sets of 10 reps (5kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: ["Focus on core and lower back"],
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
          "Light jog",
          "Leg swings",
          "Ankle rotations",
          "Bodyweight lunges",
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Goblet squats: 3 sets of 12 reps (15kg dumbbell)",
            asciiArt: true,
          },
          {
            name: "Romanian deadlifts: 3 sets of 10 reps (two 15kg dumbbells)",
            asciiArt: true,
          },
          {
            name: "Step-ups: 3 sets of 10 each leg (bodyweight)",
            asciiArt: true,
          },
          { name: "Calf raises: 3 sets of 15 reps", asciiArt: true },
          "Cardio: 20 min interval training on bike or rowing machine (1 min hard, 1 min easy)",
          {
            name: "Hyperextensions: 3 sets of 10 reps (10kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: ["Focus on legs and lower back"],
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
          "Arm circles",
          "Shoulder rolls",
          "Cat-cow stretch",
          "Light resistance band work",
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Pull-ups or assisted pull-ups: 3 sets of max reps (aim for 5-8)",
            asciiArt: true,
          },
          { name: "Push-ups: 3 sets of 10-15 reps", asciiArt: true },
          {
            name: "Dumbbell shoulder press: 3 sets of 10 reps (8kg dumbbells)",
            asciiArt: true,
          },
          { name: "Dips or bench dips: 3 sets of 8-12 reps", asciiArt: true },
          "Face pulls with resistance band: 3 sets of 15 reps",
          {
            name: "Plank variations: 3 sets of 30-45 sec (standard, side, bird-dog)",
            asciiArt: true,
          },
          {
            name: "Hyperextensions: 3 sets of 10 reps (15kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: ["Upper body and back focus"],
      },
    ],
  },
  {
    title: "Plyometrics and Flexibility",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: ["Light jog", "High knees", "Butt kicks", "Arm swings"],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Plyometric circuit (3 rounds, 30 sec work, 30 sec rest):",
            exercises: [
              "Box jumps (or step-ups for lower impact)",
              "Plyometric push-ups (or regular push-ups)",
              "Skater hops",
              "Medicine ball slams",
            ],
          },
          "Flexibility work (30 min): Yoga flow focusing on sun salutations and warrior poses",
          "Balance work: Single-leg Romanian deadlifts, 3 sets of 8 each leg (light dumbbell)",
          {
            name: "Hyperextensions: 2 sets of 12 reps (bodyweight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: ["Full body stretch"],
      },
    ],
  },
  {
    title: "Active Recovery",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: ["Light movements to wake up the body"],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          "30 min low-intensity swimming, cycling, or brisk walking",
          "30 min yoga flow focusing on balance and flexibility",
          "10 min foam rolling session",
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: ["Gentle full body stretch"],
      },
    ],
  },
  {
    title: "Cardio Endurance and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: ["Light jog", "Arm circles", "Leg swings"],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          "Cardio: 30 min steady-state run or row at moderate intensity",
          {
            name: "Core circuit (3 rounds, 45 sec work, 15 sec rest):",
            exercises: [
              { name: "Planks", asciiArt: true },
              { name: "Russian twists (7.5kg dumbbell)", asciiArt: true },
              { name: "Mountain climbers", asciiArt: true },
              { name: "Supermans", asciiArt: true },
            ],
          },
          "Balance work: Bosu ball squats, 3 sets of 10 (or regular squats if no Bosu ball)",
          {
            name: "Hyperextensions: 3 sets of 10 reps (20kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: ["Focus on back and core"],
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
          "Jumping jacks",
          "Arm circles",
          "Leg swings",
          "Bodyweight squats",
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Circuit (4 rounds, 40 sec each exercise, 20 sec rest):",
            exercises: [
              { name: "Pull-ups or inverted rows", asciiArt: true },
              {
                name: "Dumbbell bench press (or push-ups if no bench)",
                asciiArt: true,
              },
              { name: "Goblet squats (20kg dumbbell)", asciiArt: true },
              { name: "Dumbbell rows (12kg dumbbells)", asciiArt: true },
              { name: "Lunges with dumbbells (8kg each hand)", asciiArt: true },
              { name: "Plank to downward dog", asciiArt: true },
            ],
          },
          "Farmer's walks: 3 sets of 30 sec (heavy dumbbells)",
          {
            name: "Hyperextensions: 3 sets of 12 reps (25kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: ["Full body stretch"],
      },
    ],
  },
  {
    title: "HIIT and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: ["Jump rope", "High knees", "Butt kicks", "Arm swings"],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "HIIT (25 min): 40 sec work, 20 sec rest",
            exercises: [
              "Burpees",
              "Mountain climbers",
              "Squat jumps",
              "Push-ups",
              "High knees",
            ],
          },
          {
            name: "Core Circuit (3 rounds, 45 sec each exercise, 15 sec rest):",
            exercises: [
              { name: "V-ups", asciiArt: true },
              "Pallof press with resistance band",
              { name: "Bird-dog crunch", asciiArt: true },
              { name: "Dead bug", asciiArt: true },
            ],
          },
          "Balance work: Pistol squat progression, 3 sets of 5 each leg",
          {
            name: "Hyperextensions: 3 sets of 12 reps (20kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: ["Focus on core and lower back"],
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
          "Light jog",
          "Leg swings",
          "Ankle rotations",
          "Bodyweight lunges",
        ],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Bulgarian split squats: 3 sets of 10 each leg",
            asciiArt: true,
          },
          {
            name: "Single-leg Romanian deadlifts: 3 sets of 8 each leg (light dumbbells)",
            asciiArt: true,
          },
          { name: "Glute bridges: 3 sets of 15 reps", asciiArt: true },
          { name: "Calf raises: 3 sets of 20 reps", asciiArt: true },
          "Cardio: 20 min hill or stair climbs (or incline treadmill)",
          "Balance work: Bosu ball single-leg stance, 3 sets of 30 sec each leg",
          {
            name: "Hyperextensions: 3 sets of 12 reps (30kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: ["Lower body focus"],
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
          "Arm circles",
          "Shoulder rolls",
          "Cat-cow stretch",
          "Light resistance band work",
        ],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          {
            name: "Pull-ups: 4 sets of max reps (aim for 6-10)",
            asciiArt: true,
          },
          { name: "Push-ups: 4 sets of 12-18 reps", asciiArt: true },
          {
            name: "Dumbbell shoulder press: 3 sets of 10 reps (10kg dumbbells)",
            asciiArt: true,
          },
          { name: "Dips: 3 sets of 10-15 reps", asciiArt: true },
          "Face pulls with resistance band: 3 sets of 15 reps",
          {
            name: "Core circuit (3 rounds, 40 sec work, 20 sec rest):",
            exercises: [
              { name: "Plank with shoulder taps", asciiArt: true },
              { name: "Russian twists (10kg dumbbell)", asciiArt: true },
              {
                name: "Hanging leg raises (or lying leg raises)",
                asciiArt: true,
              },
              { name: "Side plank rotations", asciiArt: true },
            ],
          },
          {
            name: "Hyperextensions: 3 sets of 12 reps (25kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: ["Upper body and back focus"],
      },
    ],
  },
  {
    title: "Plyometrics and Flexibility",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: ["Light jog", "High knees", "Butt kicks", "Arm swings"],
      },
      {
        name: "Main Workout",
        time: "70 min",
        exercises: [
          {
            name: "Plyometric circuit (3 rounds, 30 sec work, 30 sec rest):",
            exercises: [
              { name: "Squat jumps", asciiArt: true },
              { name: "Clap push-ups (or regular push-ups)", asciiArt: true },
              { name: "Lateral bounds", asciiArt: true },
              "Medicine ball chest pass against wall",
            ],
          },
          "Flexibility work (30 min): Yoga flow focusing on hip openers and spinal twists",
          "Balance work: Single-leg hops, 3 sets of 10 each leg",
          {
            name: "Hyperextensions: 2 sets of 15 reps (15kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: ["Full body stretch"],
      },
    ],
  },
  {
    title: "Cardio Endurance and Core",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: ["Light jog", "Arm circles", "Leg swings"],
      },
      {
        name: "Main Workout",
        time: "65 min",
        exercises: [
          "Cardio: 35 min fartlek run (alternating 3 min moderate pace, 1 min high intensity)",
          {
            name: "Core circuit (3 rounds, 45 sec work, 15 sec rest):",
            exercises: [
              { name: "Plank jacks", asciiArt: true },
              { name: "Bicycle crunches", asciiArt: true },
              { name: "Reverse crunches", asciiArt: true },
              { name: "Back extensions", asciiArt: true },
            ],
          },
          "Balance work: Slacklining or tandem stance walking, 10 min",
          {
            name: "Hyperextensions: 3 sets of 12 reps (35kg weight)",
            asciiArt: true,
          },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: ["Focus on back, hips, and legs"],
      },
    ],
  },
  {
    title: "Active Recovery and Mobility",
    categories: [
      {
        name: "Dynamic Warm-up",
        time: "10 min",
        exercises: ["Light movements to wake up the body"],
      },
      {
        name: "Main Activity",
        time: "70 min",
        exercises: [
          "30 min low-intensity swimming or cycling",
          "30 min mobility work (focusing on hips, shoulders, and spine)",
          "10 min self-massage with foam roller or massage ball",
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: ["Full body gentle stretching"],
      },
    ],
  },
];
