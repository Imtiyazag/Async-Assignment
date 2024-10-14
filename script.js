const logElement = document.getElementById("log");
const startButton = document.getElementById("start");

// Function to append messages to the log
function logMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    logElement.appendChild(p);
}

// Event handler for the button
startButton.addEventListener("click", async () => {
    logMessage("1. Starting...");

    // setTimeout to delay the log message by 1 second
    setTimeout(() => {
        logMessage("2. This message is delayed by 1 second (setTimeout)");
    }, 1000);

    // Promise that resolves after 2 seconds
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("3. Promise resolved after 2 seconds");
        }, 2000);
    });

    // Wait for the promise to resolve using async/await
    const result = await promise;
    logMessage(result);

    logMessage("4. Async/Await finished.");
    logMessage("5. Program End.");
});
