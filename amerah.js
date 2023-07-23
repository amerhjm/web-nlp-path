// Get elements
const joint = document.querySelector('.joint');
const arm = document.querySelector('.arm');
const gripper = document.querySelector('.gripper');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

// Constants
const JOINT_ANGLE = 45;
const ARM_ANGLE = -45;
const GRIPPER_ANGLE = 45;

// Functions
const moveJoint = (angle) => {
  joint.style.transform = `translateX(-50%) translateY(-50%) rotate(${angle}deg)`;
};

const moveArm = (angle) => {
  arm.style.transform = `translateX(-50%) translateY(-50%) rotate(${angle}deg)`;
};

const moveGripper = (angle) => {
  gripper.style.transform= `translateX(-50%) translateY(-50%) rotate(${angle}deg)`;
};

// Event listeners
upButton.addEventListener('click', () => {
  moveJoint(-JOINT_ANGLE);
});

downButton.addEventListener('click', () => {
  moveJoint(JOINT_ANGLE);
});

leftButton.addEventListener('click', () => {
  moveArm(ARM_ANGLE);
});

rightButton.addEventListener('click', () => {
  moveArm(0);
});

openButton.addEventListener('click', () => {
  moveGripper(-GRIPPER_ANGLE);
});

closeButton.addEventListener('click', () => {
  moveGripper(GRIPPER_ANGLE);
});