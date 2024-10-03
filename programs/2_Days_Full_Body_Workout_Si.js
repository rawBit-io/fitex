// programs/2_Month_Full_Body_Workout.js

window.programData = [
  {
    title: "Full Body Strength and Core - Day 1",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          {
            name: "Light jogging in place or jumping jacks (3 min)",
            hasPicture: false,
          },
          {
            name: "Arm circles, leg swings, torso twists (4 min)",
            hasPicture: false,
          },
          { name: "Light stretching (3 min)", hasPicture: false },
        ],
      },
      {
        name: "Circuit Training",
        time: "40 min",
        exercises: [
          {
            name: "Circuit (3 rounds, 45 sec work, 15 sec rest between exercises)",
            isCircuit: true,
            circuitExercises: [
              {
                name: "Bodyweight squats",
                asciiArtKey: "squats",
                hasPicture: true,
              },
              {
                name: "Push-ups (on knees if needed)",
                asciiArtKey: "pushUps",
                hasPicture: true,
              },
              {
                name: "Dumbbell rows (light weight, 3-5 kg)",
                asciiArtKey: "dumbbellRows",
                hasPicture: true,
              },
              {
                name: "Plank hold",
                asciiArtKey: "plank",
                hasPicture: true,
              },
              {
                name: "Dumbbell lunges (light weight, 3-5 kg)",
                asciiArtKey: "lunges",
                hasPicture: true,
              },
              { name: "Bicycle crunches", hasPicture: false },
              { name: "Glute bridges", hasPicture: false },
              { name: "Mountain climbers", hasPicture: false },
            ],
          },
        ],
      },
      {
        name: "Core Focus",
        time: "5 min",
        exercises: [
          {
            name: "Russian twists with light dumbbell (2 min)",
            hasPicture: false,
          },
          { name: "Dead bug exercise (2 min)", hasPicture: false },
          { name: "Hollow body hold (1 min)", hasPicture: false },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "5 min",
        exercises: [
          {
            name: "Light stretching for all major muscle groups",
            hasPicture: false,
          },
        ],
      },
    ],
  },
  {
    title: "Full Body Strength and Core - Day 2",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          {
            name: "Brisk walking in place or step-ups (3 min)",
            hasPicture: false,
          },
          {
            name: "Arm crossovers, hip rotations, shoulder rolls (4 min)",
            hasPicture: false,
          },
          { name: "Dynamic stretching (3 min)", hasPicture: false },
        ],
      },
      {
        name: "Circuit Training",
        time: "40 min",
        exercises: [
          {
            name: "Circuit (3 rounds, 45 sec work, 15 sec rest between exercises)",
            isCircuit: true,
            circuitExercises: [
              {
                name: "Bodyweight reverse lunges",
                asciiArtKey: "lunges",
                hasPicture: true,
              },
              {
                name: "Dumbbell shoulder press (light weight, 2-4 kg)",
                hasPicture: false,
              },
              {
                name: "Dumbbell Romanian deadlifts (light weight, 3-5 kg)",
                hasPicture: false,
              },
              {
                name: "Tricep dips (using a chair or bench)",
                hasPicture: false,
              },
              { name: "Lateral lunges", hasPicture: false },
              {
                name: "Dumbbell woodchoppers (light weight, 3-5 kg)",
                hasPicture: false,
              },
              { name: "Superman holds", hasPicture: false },
              { name: "High knees", hasPicture: false },
            ],
          },
        ],
      },
      {
        name: "Core Focus",
        time: "5 min",
        exercises: [
          { name: "Plank to downward dog (2 min)", hasPicture: false },
          {
            name: "Side plank holds (1 min each side)",
            hasPicture: false,
          },
          { name: "Bird dog exercise (1 min)", hasPicture: false },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "5 min",
        exercises: [
          {
            name: "Light stretching for all major muscle groups",
            hasPicture: false,
          },
        ],
      },
    ],
  },
  // Add more days/weeks as needed
];
