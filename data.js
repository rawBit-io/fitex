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
            name: "Circuit (3 rounds, 45 sec each exercise, 15 sec rest between exercises, 2 min rest between rounds)",
            isDescription: true,
          },
          { name: "Pull-ups or assisted pull-ups", asciiArt: true },
          { name: "Push-ups", asciiArt: true },
          { name: "Bodyweight squats", asciiArt: true },
          { name: "Dumbbell rows (10kg)", asciiArt: true },
          { name: "Lunges", asciiArt: true },
          { name: "Plank", asciiArt: true },
          { name: "Cardio: 15 min moderate-intensity running or cycling" },
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
  // ... other days would follow
];
