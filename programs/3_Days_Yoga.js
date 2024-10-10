// programs/3_Days_Yoga.js

window.programData = [
  {
    title: "Vinyasa Flow for Strength and Flexibility",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Cat-Cow Stretch" },
          { name: "Gentle Twists" },
          { name: "Sun Salutation A (2 rounds)" },
        ],
      },
      {
        name: "Main Practice",
        time: "40 min",
        exercises: [
          {
            name: "Standing Poses Sequence",
            isCircuit: true,
            circuitExercises: [
              { name: "Warrior I" },
              { name: "Warrior II" },
              { name: "Triangle Pose" },
              { name: "Extended Side Angle Pose" },
            ],
          },
          {
            name: "Balance Poses",
            isCircuit: true,
            circuitExercises: [{ name: "Tree Pose" }, { name: "Warrior III" }],
          },
          {
            name: "Core Work",
            isCircuit: true,
            circuitExercises: [
              { name: "Plank Pose (30 seconds)" },
              { name: "Side Plank (15 seconds each side)" },
              { name: "Boat Pose (30 seconds)" },
            ],
          },
          { name: "Sun Salutation B (3 rounds)" },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "10 min",
        exercises: [
          { name: "Seated Forward Fold" },
          { name: "Supine Twist" },
          { name: "Happy Baby Pose" },
          { name: "Savasana (Corpse Pose)" },
        ],
      },
    ],
  },
  {
    title: "Gentle Hatha Yoga for Relaxation",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Seated Breathing Exercise" },
          { name: "Neck and Shoulder Rolls" },
          { name: "Seated Side Stretch" },
        ],
      },
      {
        name: "Main Practice",
        time: "35 min",
        exercises: [
          {
            name: "Standing Poses",
            isCircuit: true,
            circuitExercises: [
              { name: "Mountain Pose" },
              { name: "Standing Forward Bend" },
              { name: "Warrior I" },
            ],
          },
          {
            name: "Floor Poses",
            isCircuit: true,
            circuitExercises: [
              { name: "Child's Pose" },
              { name: "Cat-Cow Stretch" },
              { name: "Sphinx Pose" },
              { name: "Seated Forward Fold" },
            ],
          },
          {
            name: "Gentle Backbends",
            isCircuit: true,
            circuitExercises: [{ name: "Cobra Pose" }, { name: "Bridge Pose" }],
          },
          { name: "Reclined Bound Angle Pose" },
        ],
      },
      {
        name: "Cool-down and Meditation",
        time: "15 min",
        exercises: [
          { name: "Legs-Up-the-Wall Pose" },
          { name: "Reclined Spinal Twist" },
          { name: "Savasana with Guided Relaxation" },
        ],
      },
    ],
  },
  {
    title: "Power Yoga for Strength and Endurance",
    categories: [
      {
        name: "Warm-up",
        time: "10 min",
        exercises: [
          { name: "Sun Salutation A (3 rounds)" },
          { name: "Sun Salutation B (2 rounds)" },
        ],
      },
      {
        name: "Main Practice",
        time: "45 min",
        exercises: [
          {
            name: "Standing Strength Sequence",
            isCircuit: true,
            circuitExercises: [
              { name: "Chair Pose" },
              { name: "Warrior II" },
              { name: "Reverse Warrior" },
              { name: "Extended Side Angle" },
            ],
          },
          {
            name: "Balancing Poses",
            isCircuit: true,
            circuitExercises: [
              { name: "Warrior III" },
              { name: "Half Moon Pose" },
            ],
          },
          {
            name: "Core Power",
            isCircuit: true,
            circuitExercises: [
              { name: "High Plank (45 seconds)" },
              { name: "Side Plank (30 seconds each side)" },
              { name: "Boat Pose (45 seconds)" },
            ],
          },
          {
            name: "Flow Sequence (3 rounds)",
            isCircuit: true,
            circuitExercises: [
              { name: "Chaturanga" },
              { name: "Upward Facing Dog" },
              { name: "Downward Facing Dog" },
            ],
          },
          { name: "Crow Pose Practice" },
        ],
      },
      {
        name: "Cool-down and Stretching",
        time: "15 min",
        exercises: [
          { name: "Pigeon Pose" },
          { name: "Seated Forward Fold" },
          { name: "Reclined Spinal Twist" },
          { name: "Savasana" },
        ],
      },
    ],
  },
];
