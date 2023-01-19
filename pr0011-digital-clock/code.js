const date = document.querySelector(".date");
const time = document.querySelector(".time");
let today = new Date();


const displayDate = (now) => {

    let monthsNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    let daysNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let dayOfWeek = daysNames[now.getDay()];
    let dayOfMonth = now.getDate();
    let month = monthsNames[now.getMonth()];
    let year = now.getFullYear();

    return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
}



const displayTime = () => {

    let current = new Date();

    let hour = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();
    let ampm = "AM";

    if (hour === 0) {
        hour = 12
    } else if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    time.innerHTML = `${hour}:${minutes}:${seconds} ${ampm}`;
}


date.innerHTML = displayDate(today);
setInterval(displayTime, 1000);