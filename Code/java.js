// Get the canvas element
var canvas = document.getElementById("canvas");

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the canvas context
var ctx = canvas.getContext("2d");

// Set the initial position and size of the lines
var lines = [
{x: -50, y: canvas.height / 2, width: 50, height: 50},
{x: canvas.width + 50, y: canvas.height / 2, width: 50, height: 50},
{x: canvas.width / 2, y: -50, width: 50, height: 50},
{x: canvas.width / 2, y: canvas.height + 50, width: 50, height: 50}
];

// Set the animation speed
var speed = 5;

// Set the mouse position
var mouse = {x: 0, y: 0};

// Update the mouse position on mousemove
canvas.addEventListener("mousemove", function(event) {
mouse.x = event.clientX;
mouse.y = event.clientY;
});

// Animate the lines
function animate() {
// Clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Draw the lines
for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    ctx.fillRect(line.x, line.y, line.width, line.height);

    // Update the line position
    if (i === 0 || i === 1) {
        line.x += speed;
    } else {
        line.y += speed;
    }
    // Check if the line is close to the mouse cursor
    if (Math.abs(line.x - mouse.x) < 50 && Math.abs(line.y - mouse.y) < 50) {
        ctx.fillStyle = "blue";
    } else {
        ctx.fillStyle = "white";
    }

    // Check if the line has moved off the canvas
    if (line.x > canvas.width || line.y > canvas.height) {
        line.x = -50;
        line.y = -50;
    }
}

// Call the animate function again
requestAnimationFrame(animate);

}

// start the animation
window.onload = animate;