// Get the canvas and its 2D rendering context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the starting position of the path in the center of the canvas
const startingX = canvas.width / 2;
const startingY = canvas.height / 2;

// Initialize the current position variables
let currentX = startingX;
let currentY = startingY;

// Move the path based on the provided direction
function move(direction) {
    const stepSize = 10;

    // Start a new path
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);

    // Update the current position based on the direction
    switch (direction) {
        case 'forward':
            currentY -= stepSize;
            break;
        case 'backward':
            currentY += stepSize;
            break;
        case 'right':
            currentX += stepSize;
            break;
        case 'left':
            currentX -= stepSize;
            break;
    }

    // Draw a line to the new position
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = '#007BFF'; // Set line color to blue
    ctx.lineWidth = 2; // Set line width to 2 pixels
    ctx.stroke();
}

// Add event listeners to the control panel buttons
document.getElementById('btnForward').addEventListener('click', () => move('forward'));
document.getElementById('btnBackward').addEventListener('click', () => move('backward'));
document.getElementById('btnRight').addEventListener('click', () => move('right'));
document.getElementById('btnLeft').addEventListener('click', () => move('left'));