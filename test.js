const fs = require("fs");
const path = require("path");

// ASCII art paths
const asciiArtPaths = {
  pushups: "ascii-art/pushups.txt",
  squats: "ascii-art/squats.txt",
  lunges: "ascii-art/lunges.txt",
  burpees: "ascii-art/burpees.txt",
  mountain_climbers: "ascii-art/mountain_climbers.txt",
  pullups: "ascii-art/pullups.txt",
  dips: "ascii-art/dips.txt",
  russian_twists: "ascii-art/russian_twists.txt",
  glute_bridge: "ascii-art/glute_bridge.txt",
  pike_pushups: "ascii-art/pike_pushups.txt",
  inverted_rows: "ascii-art/inverted_rows.txt",
  superman: "ascii-art/superman.txt",
  hyperextensions: "ascii-art/hyperextensions.txt",
  hanging_leg_raises: "ascii-art/hanging_leg_raises.txt",
  walking_lunges: "ascii-art/walking_lunges.txt",
  side_lunges: "ascii-art/side_lunges.txt",
  jumping_jacks: "ascii-art/jumping_jacks.txt",
  ab_wheel_rollouts: "ascii-art/ab_wheel_rollouts.txt",
  pallof_press: "ascii-art/pallof_press.txt",
  goblet_squats: "ascii-art/goblet_squats.txt",
  romanian_deadlifts: "ascii-art/romanian_deadlifts.txt",
  chest_press: "ascii-art/chest_press.txt",
  shoulder_press: "ascii-art/shoulder_press.txt",
  bicep_curls: "ascii-art/bicep_curls.txt",
  lateral_raises: "ascii-art/lateral_raises.txt",
  bent_over_rows: "ascii-art/bent_over_rows.txt",
  farmers_walks: "ascii-art/farmers_walks.txt",
  calf_raises: "ascii-art/calf_raises.txt",
  lunges_with_dumbbells: "ascii-art/lunges_with_dumbbells.txt",
  single_leg_stand: "ascii-art/single_leg_stand.txt",
  single_leg_deadlift: "ascii-art/single-leg-deadlift.txt",
  plank_with_alternating_leg_lift:
    "ascii-art/plank_with_alternating_leg_lift.txt",
  bosu_ball_squats: "ascii-art/bosu_ball_squats.txt",
  standing_forward_bend: "ascii-art/standing_forward_bend.txt",
  lunge_with_spinal_twist: "ascii-art/lunge_with_spinal_twist.txt",
  cat_cow_stretch: "ascii-art/cat_cow_stretch.txt",
  downward_facing_dog: "ascii-art/downward_facing_dog.txt",
  pigeon_pose: "ascii-art/pigeon_pose.txt",
  childs_pose: "ascii-art/childs_pose.txt",
  cobra_stretch: "ascii-art/cobra_stretch.txt",
  worlds_greatest_stretch: "ascii-art/worlds_greatest_stretch.txt",
  hip_flexor_stretch: "ascii-art/hip_flexor_stretch.txt",
  hamstring_stretch: "ascii-art/hamstring_stretch.txt",
  doorway_chest_stretch: "ascii-art/doorway_chest_stretch.txt",
  arm_circles: "ascii-art/arm_circles.txt",
  butterfly_stretch: "ascii-art/butterfly_stretch.txt",
  seated_forward_bend: "ascii-art/seated_forward_bend.txt",
  seated_spinal_twist: "ascii-art/seated_spinal_twist.txt",
  high_knees: "ascii-art/high_knees.txt",
  jump_rope: "ascii-art/jump_rope.txt",
  squat_jumps: "ascii-art/squat_jumps.txt",
  running: "ascii-art/running.txt",
  rowing: "ascii-art/rowing.txt",
  step_climber: "ascii-art/step_climber.txt",
  jumping_jacks_cardio: "ascii-art/jumping_jacks_cardio.txt",
  logo: "ascii-art/logo.txt",
};

// Function to check if a file exists
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Check all files
console.log("Checking ASCII art files...");
console.log("----------------------------");

let missingFiles = 0;
let existingFiles = 0;

for (const [key, filePath] of Object.entries(asciiArtPaths)) {
  const fullPath = path.join(__dirname, filePath);
  if (fileExists(fullPath)) {
    console.log(`✅ ${key}: File exists`);
    existingFiles++;
  } else {
    console.log(`❌ ${key}: File not found (${filePath})`);
    missingFiles++;
  }
}

console.log("----------------------------");
console.log(
  `Check complete. ${existingFiles} file(s) found, ${missingFiles} file(s) missing.`
);
