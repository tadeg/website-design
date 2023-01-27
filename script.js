const amtOne = document.querySelector('.amnt-one');
const currOne = document.querySelector('#curr-one');
const amtTwo = document.querySelector('.amnt-two');
const currTwo = document.querySelector('#curr-two');
const swapBtn = document.querySelector('.swap-btn');
const exchRateInf = document.querySelector('.exch-rate-inf')


const count = () => {

    fetch(`https://api.exchangerate.host/latest?base=${currOne.value}&symbols=${currTwo.value}`)
        .then(res => res.json())
        .then(result => {

            console.log(result);

            const curr1 = currOne.value;
            const curr2 = currTwo.value;

            console.log(curr1);
            console.log(curr2);

            const exchRate = result.rates[curr2];
            console.log(result.rates[curr2]);
            exchRateInf.textContent = `1 ${curr1} = ${exchRate.toFixed(4)} ${curr2}`;
            amtTwo.value = (amtOne.value * exchRate).toFixed(2);
        })
};


const swap = () => {
    const bufferValue = currOne.value;
    currOne.value = currTwo.value;
    currTwo.value = bufferValue;
    count();
}


currOne.addEventListener('change', count);
currTwo.addEventListener('change', count);
amtOne.addEventListener('input', count);
swapBtn.addEventListener('click', swap);

count();