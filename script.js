// Fetch elements from the document.
const textElement = document.querySelector(".text");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

// Variables for tracking time.
let time = 0.0;
let running = false;

// Main update loop.
let lastTime = 0.0;

function updateTime(currentTime = performance.now()) {
    requestAnimationFrame(updateTime);

    // Calculate delta time.
    const dt = (currentTime - lastTime) / 1000.0;
    lastTime = currentTime;

    // Update the timer if running.
    if (running) {
        time += dt;
        updateTimerText();
    }
}

updateTime(0.0);
updateTimerText();

// Function to update the timer text.
function updateTimerText() {
    textElement.innerHTML = time.toFixed(3);
}

// Add event listeners for buttons.
startButton.addEventListener("click", (event) => {
    // Avoid reseting time when clicking start.
    if (running) return;

    running = true;
});

stopButton.addEventListener("click", (event) => {
    running = false;
});

resetButton.addEventListener("click", (event) => {
    running = false;
    time = 0.0;
    updateTimerText();
});