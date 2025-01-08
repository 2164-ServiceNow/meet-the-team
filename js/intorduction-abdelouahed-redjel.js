function updateDynamicMessage() {
    const messageElement = document.getElementById('dynamic-message');
    const currentTime = new Date();
    messageElement.textContent = `Welcome! The current time is ${currentTime.toLocaleTimeString()}`;
}
