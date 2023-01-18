const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('button');
let calculationSet = [];
let collectedCalculationSet;
let result;


function calculate(btn) {

    let value = btn.textContent;

    if (value === "c") {
        calculationSet = [];
        screen.textContent = "_";

    } else if (value === "=") {
        result = eval(collectedCalculationSet);
        if (collectedCalculationSet.includes("*") || collectedCalculationSet.includes("/")) {
            screen.textContent = result.toFixed(2);
        } else {
            screen.textContent = result;
        }

    } else {
        calculationSet.push(value);
        collectedCalculationSet = calculationSet.join('')
        screen.textContent = collectedCalculationSet;
        // console.log(calculationSet);
        // console.log(collectedCalculationSet);
    }

}


btns.forEach(btn => btn.addEventListener('click', () => calculate(btn)))