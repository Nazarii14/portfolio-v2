function updateLocalTime() {
    const localTimeElement = document.querySelector('.local-time');
    const options = { timeZone: 'Europe/Kiev', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const localTime = new Date().toLocaleTimeString('en-US', options);
    localTimeElement.textContent = localTime;
}

setInterval(updateLocalTime, 1000);
updateLocalTime();
