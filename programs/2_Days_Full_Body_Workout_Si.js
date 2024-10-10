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
          },
          {
            name: "Arm circles, leg swings, torso twists (4 min)",
          },
          { name: "Light stretching (3 min)" },
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
                name: "Squats",
                repetitions: 0,
              },
              {
                name: "Push-ups (on knees if needed)",
                repetitions: 0,
              },
              {
                name: "Dumbbell rows (light weight, 3-5 kg)",
                repetitions: 0,
              },
              {
                name: "Plank",
                repetitions: 0,
              },
              {
                name: "Dumbbell lunges (light weight, 3-5 kg)",
                repetitions: 0,
              },
              {
                name: "Bicycle crunches",
                repetitions: 0,
              },
              {
                name: "Glute bridges",
                repetitions: 0,
              },
              {
                name: "Mountain climbers",
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
          },
          { name: "Dead bug exercise (2 min)" },
          { name: "Hollow body hold (1 min)" },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "5 min",
        exercises: [
          {
            name: "Light stretching for all major muscle groups",
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
          },
          {
            name: "Arm crossovers, hip rotations, shoulder rolls (4 min)",
          },
          { name: "Dynamic stretching (3 min)" },
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
                repetitions: 0,
              },
              {
                name: "Dumbbell shoulder press (light weight, 2-4 kg)",
                repetitions: 0,
              },
              {
                name: "Dumbbell Romanian deadlifts (light weight, 3-5 kg)",
                repetitions: 0,
              },
              {
                name: "Tricep dips (using a chair or bench)",
                repetitions: 0,
              },
              {
                name: "Lateral lunges",
                repetitions: 0,
              },
              {
                name: "Dumbbell woodchoppers (light weight, 3-5 kg)",
                repetitions: 0,
              },
              {
                name: "Superman holds",
                repetitions: 0,
              },
              {
                name: "High knees",
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
          { name: "Plank to downward dog (2 min)" },
          {
            name: "Side plank holds (1 min each side)",
          },
          { name: "Bird dog exercise (1 min)" },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "5 min",
        exercises: [
          {
            name: "Light stretching for all major muscle groups",
          },
        ],
      },
    ],
  },
];
