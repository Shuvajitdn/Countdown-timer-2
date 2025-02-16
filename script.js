document.addEventListener("DOMContentLoaded", function () {
    calcTime();
});

let startTimer;

function calcTime(dateInput) {
    clearInterval(startTimer);

    let now = new Date().getTime();
    let targetDate;

    if (!dateInput) {
        targetDate = new Date("2025-01-01").getTime(); // Default: New Year
    } else {
        targetDate = new Date(dateInput).getTime();
    }

    function updateTimer() {
        let currentTime = new Date().getTime();
        let timeRemaining = targetDate - currentTime;

        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.querySelector(".clock-day").textContent = days >= 0 ? days : "00";
        document.querySelector(".clock-hours").textContent = hours >= 0 ? hours : "00";
        document.querySelector(".clock-minutes").textContent = minutes >= 0 ? minutes : "00";
        document.querySelector(".clock-seconds").textContent = seconds >= 0 ? seconds : "00";

        if (timeRemaining < 0) {
            clearInterval(startTimer);
            document.querySelector(".clock-day").textContent = "D";
            document.querySelector(".clock-hours").textContent = "O";
            document.querySelector(".clock-minutes").textContent = "N";
            document.querySelector(".clock-seconds").textContent = "E";
        }
    }

    updateTimer();
    startTimer = setInterval(updateTimer, 1000);
}
