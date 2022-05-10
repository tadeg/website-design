const today = document.querySelector('.today')
const hours = document.querySelector(".hours-hand");
const minutes = document.querySelector(".minutes-hand");
const seconds = document.querySelector(".seconds-hand");

const day = new Date();
today.textContent = day.toLocaleDateString("en", {
    weekday: "long"
});

function runClock() {

    const time = new Date();

    const fixSecond = time.getSeconds();
    const fixMinute = time.getMinutes();
    const fixHour = time.getHours();

    const sDeg = (fixSecond / 60) * 360;
    const mDeg = (fixMinute / 60) * 360;
    const hDeg = (fixHour / 12) * 360;


    seconds.style.transform = `rotate(${sDeg}deg)`;
    minutes.style.transform = `rotate(${mDeg}deg)`;
    hours.style.transform = `rotate(${hDeg}deg)`;

}

setInterval(runClock, 1000);