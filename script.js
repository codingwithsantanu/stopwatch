const timeElement = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let lastTime = performance.now();
let time = 0;
let running = false;

function updateTime() {
    requestAnimationFrame(updateTime);
    
    if (running) {
        const now = performance.now();
        const dt = (performance.now() - lastTime) / 1000;
        time += dt;
        lastTime = now;
    }
    
    timeElement.innerHTML = String(time.toFixed(2));
}

updateTime();

startButton.addEventListener("click", (event) => {
    // Avoid reseting when running.
    if (running)
        return;

    time = 0;
    lastTime = performance.now();
    running = true;
});

stopButton.addEventListener("click", (event) => {
    running = false;
});

resetButton.addEventListener("click", (event) => {
    time = 0;
    running = false;
});