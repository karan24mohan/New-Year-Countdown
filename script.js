let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function countdown() {
    let newyeardate = new Date("January 1 2024 00:00:00");
    let currentdate = new Date();
    let diff = newyeardate - currentdate;

    let diffDate = Math.floor(diff / (1000 * 60 * 60 * 24));

    let diffHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    let diffSeconds = Math.floor((diff % (1000 * 60)) / 1000);

    days.innerHTML = diffDate + " days";
    hours.innerHTML = diffHours + " hours";
    minutes.innerHTML = diffMinutes + " minutes";
    seconds.innerHTML = diffSeconds + " seconds";
}

setInterval(countdown, 1000);