// programs/2_Days_Full_Body_Workout_Si.js

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
            name: "Circuit (3 rounds, 45 sec work, 15 sec rest between exercises, 1 min rest between rounds)",
            isCircuit: true,
            rounds: 2,
            workTime: 2,
            restTime: 1,
            restBetweenRounds: 1,
            circuitExercises: [
              {
                name: "Bodyweight squats",
                asciiArtKey: "squats",
                hasPicture: true,
                repetitions: 0,
              },
              {
                name: "Push-ups (on knees if needed)",
                asciiArtKey: "pushUps",
                hasPicture: true,
                repetitions: 0,
              },
              {
                name: "Dumbbell rows (light weight, 3-5 kg)",
                asciiArtKey: "dumbbellRows",
                hasPicture: true,
                repetitions: 0,
              },
              {
                name: "Plank hold",
                asciiArtKey: "plank",
                hasPicture: true,
                repetitions: 0,
              },
              {
                name: "Dumbbell lunges (light weight, 3-5 kg)",
                asciiArtKey: "lunges",
                hasPicture: true,
                repetitions: 0,
              },
              {
                name: "Bicycle crunches",
                hasPicture: false,
                repetitions: 0,
              },
              {
                name: "Glute bridges",
                hasPicture: false,
                repetitions: 0,
              },
              {
                name: "Mountain climbers",
                hasPicture: false,
                repetitions: 0,
              },
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
            name: "Circuit (3 rounds, 45 sec work, 15 sec rest between exercises, 1 min rest between rounds)",
            isCircuit: true,
            rounds: 3,
            workTime: 45,
            restTime: 15,
            restBetweenRounds: 60,
            circuitExercises: [
              {
                name: "Bodyweight reverse lunges",
                asciiArtKey: "lunges",
                hasPicture: true,
                repetitions: 0,
              },
              {
                name: "Dumbbell shoulder press (light weight, 2-4 kg)",
                hasPicture: false,
                repetitions: 0,
              },
              {
                name: "Dumbbell Romanian deadlifts (light weight, 3-5 kg)",
                hasPicture: false,
                repetitions: 0,
              },
              {
                name: "Tricep dips (using a chair or bench)",
                hasPicture: false,
                repetitions: 0,
              },
              {
                name: "Lateral lunges",
                hasPicture: false,
                repetitions: 0,
              },
              {
                name: "Dumbbell woodchoppers (light weight, 3-5 kg)",
                hasPicture: false,
                repetitions: 0,
              },
              {
                name: "Superman holds",
                hasPicture: false,
                repetitions: 0,
              },
              {
                name: "High knees",
                hasPicture: false,
                repetitions: 0,
              },
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
];
