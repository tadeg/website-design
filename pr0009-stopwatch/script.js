const btnInfo = document.querySelector('.info');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnResults = document.querySelector('.results');
const btnCloseModal = document.querySelector('.btn-close-modal');
const btnCloseModalTimekeeping = document.querySelector('.btn-close-modal-timekeeping');
const btnClear = document.querySelector('.btn-clear');
const timingDisp = document.querySelector('.timing');
let timekeepingDisp = document.querySelector('.timekeeping');
const ulListTimekeeping = document.querySelector('.list-timekeeping');
const modalTimekeeping = document.querySelector('.modal-timekeeping');
const modalWrap = document.querySelector('.modal-wrap');
let timeCount;
let seconds = 0;
let minutes = 0;
let timeMeasurements = [];

timekeepingDisp.style.visibility = 'hidden';

const startHandle = () => {
    // console.log('Go!');
    clearInterval(timeCount);

    timeCount = setInterval(() => {

        if (seconds < 9) {
            seconds++;
            timingDisp.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            timingDisp.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            timingDisp.textContent = `${minutes}:00`
        }
    }, 1000);

}

const pauseHandle = () => {
    // console.log('Pause!');
    clearInterval(timeCount);
}

const stopHandle = () => {
    // console.log('Stop!');

    timekeepingDisp.innerHTML = `Last time: ${timingDisp.textContent}`

    if (timingDisp.textContent !== '0:00') {
        timekeepingDisp.style.visibility = 'visible';
        timeMeasurements.push(timingDisp.textContent);
    }

    resetValues();
}

const clearHandle = () => {
    timekeepingDisp.style.visibility = 'hidden';
    timeMeasurements = [];
    resetValues();
}


const resetValues = () => {
    clearInterval(timeCount);
    timingDisp.textContent = '0:00';
    ulListTimekeeping.textContent = '';
    seconds = 0;
    minutes = 0;
}

const timekeepingPrint = () => {
    // console.log('History!');

    ulListTimekeeping.textContent = '';
    let numb = 1;

    timeMeasurements.forEach(timekeeping => {
        const newTimekeeping = document.createElement('li');
        newTimekeeping.innerHTML = `Measurement no. ${numb}: <span>${timekeeping}</span>`
        ulListTimekeeping.appendChild(newTimekeeping);
        numb++;
    })
}



const timekeepingDisplay = () => {
    if (!(modalTimekeeping.style.display === 'block')) {
        modalTimekeeping.style.display = 'block';
    } else {
        modalTimekeeping.style.display = 'none';
    }
    modalTimekeeping.classList.toggle('modal-animation');
    timekeepingPrint();
}


const modalDisplay = () => {
    if (!(modalWrap.style.display === 'block')) {
        modalWrap.style.display = 'block';
    } else {
        modalWrap.style.display = 'none';
    }
    modalWrap.classList.toggle('modal-animation')
}



btnStart.addEventListener('click', startHandle);
btnPause.addEventListener('click', pauseHandle);
btnStop.addEventListener('click', stopHandle);
btnResults.addEventListener('click', timekeepingDisplay);
btnInfo.addEventListener('click', modalDisplay);
btnClear.addEventListener('click', clearHandle);
btnCloseModal.addEventListener('click', modalDisplay);
btnCloseModalTimekeeping.addEventListener('click', timekeepingDisplay);
window.addEventListener('click', e => e.target === modalWrap ? modalDisplay() : false);
window.addEventListener('click', e => e.target === modalTimekeeping ? timekeepingDisplay() : false);