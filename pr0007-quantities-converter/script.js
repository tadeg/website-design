const homeBtn = document.querySelector(".home-btn");
const wrapper = document.querySelector(".wrapper");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");

const qToQ = document.querySelector(".quant-to-quant");
const quantOne = document.querySelector(".quant-one");
const quantTwo = document.querySelector(".quant-two");
const quantcalc = document.querySelector("#quantcalc");
const result = document.querySelector(".result");

const convertBtn = document.querySelector(".convert");
const clearBtn = document.querySelector(".clear");
const swapBtn = document.querySelector(".swap");


let meters;
let feet;
let centimeters;
let inches;
let kilometers;
let miles;
let celsius;
let fahrenheit;
let kilograms;
let pounds;
let grams;
let ounces;


// ------- COMMON -------

homeBtn.addEventListener("click", () => {
    qToQ.classList.remove("on");
    wrapper.classList.remove("off");
    quantcalc.value = '';
    result.textContent = '';
    quantOne.innerHTML = '';
    quantTwo.innerHTML = '';
})

const quantConversion = () => {
    if (quantcalc.value !== '') {
        if (quantOne.textContent === 'm') {
            toFeet()
        } else if (quantOne.textContent === 'ft') {
            toMeters()
        } else if (quantOne.textContent === 'cm') {
            toInches()
        } else if (quantOne.textContent === 'in') {
            toCentimeters()
        } else if (quantOne.textContent === 'km') {
            toMiles()
        } else if (quantOne.textContent === 'mi') {
            toKilometers()
        } else if (quantOne.textContent === '℃') {
            toFahrenheit()
        } else if (quantOne.textContent === '℉') {
            toCelsius()
        } else if (quantOne.textContent === 'kg') {
            toPounds()
        } else if (quantOne.textContent === 'lb') {
            toKilograms()
        } else if (quantOne.textContent === 'g') {
            toOunces()
        } else if (quantOne.textContent === 'oz') {
            toGrams()
        }

    } else {
        result.textContent = 'Please, enter some number!'
    }

}


const swap = () => {
    if (quantOne.textContent === 'm') {
        quantOne.textContent = 'ft';
        quantTwo.textContent = 'm';
        result.textContent = '';
    } else if (quantOne.textContent === 'ft') {
        quantOne.textContent = 'm';
        quantTwo.textContent = 'ft';
        result.textContent = '';
    } else if (quantOne.textContent === 'cm') {
        quantOne.textContent = 'in';
        quantTwo.textContent = 'cm';
        result.textContent = '';
    } else if (quantOne.textContent === 'in') {
        quantOne.textContent = 'cm';
        quantTwo.textContent = 'in';
        result.textContent = '';
    } else if (quantOne.textContent === 'km') {
        quantOne.textContent = 'mi';
        quantTwo.textContent = 'km';
        result.textContent = '';
    } else if (quantOne.textContent === 'mi') {
        quantOne.textContent = 'km';
        quantTwo.textContent = 'mi';
        result.textContent = '';
    } else if (quantOne.textContent === '℃') {
        quantOne.textContent = '℉';
        quantTwo.textContent = '℃';
        result.textContent = '';
    } else if (quantOne.textContent === '℉') {
        quantOne.textContent = '℃';
        quantTwo.textContent = '℉';
        result.textContent = '';
    } else if (quantOne.textContent === 'kg') {
        quantOne.textContent = 'lb';
        quantTwo.textContent = 'kg';
        result.textContent = '';
    } else if (quantOne.textContent === 'lb') {
        quantOne.textContent = 'kg';
        quantTwo.textContent = 'lb';
        result.textContent = '';
    } else if (quantOne.textContent === 'g') {
        quantOne.textContent = 'oz';
        quantTwo.textContent = 'g';
        result.textContent = '';
    } else if (quantOne.textContent === 'oz') {
        quantOne.textContent = 'g';
        quantTwo.textContent = 'oz';
        result.textContent = '';
    }
}



const clear = () => {
    quantcalc.value = '';
    result.textContent = '';
}


// ----- Comnverter1: Meters to Feet -----
// 1 m = 3.28084 ft
// 1 ft = 0.3048 m

btn1.addEventListener("click", () => {
    qToQ.classList.add("on");
    wrapper.classList.add("off");
    quantOne.innerHTML = 'm';
    quantTwo.innerHTML = 'ft';
})

const toFeet = () => {
    feet = quantcalc.value * 3.28084;
    result.textContent = `${quantcalc.value} m = ${feet.toFixed(5)} ft`
    quantcalc.value = '';
}

const toMeters = () => {
    meters = quantcalc.value * 0.3048;
    result.textContent = `${quantcalc.value} ft = ${meters.toFixed(4)} m`
    quantcalc.value = '';
}


// ----- Comnverter2: Centimeters to Inches -----
// 1 cm = 0.393700787 in
// 1 in = 2.54 cm

btn2.addEventListener("click", () => {
    qToQ.classList.add("on");
    wrapper.classList.add("off");
    quantOne.innerHTML = 'cm';
    quantTwo.innerHTML = 'in';
})

const toInches = () => {
    inches = quantcalc.value * 0.393700787;
    result.textContent = `${quantcalc.value} cm = ${inches.toFixed(2)} in`;
    quantcalc.value = '';
}

const toCentimeters = () => {
    centimeters = quantcalc.value * 2.54;
    result.textContent = `${quantcalc.value} in = ${centimeters.toFixed(2)} cm`;
    quantcalc.value = '';
}


// ----- Comnverter3: Kilometers to Miles -----
// 1 km = 0.62137119224 mi
// 1 mi = 1.609344 km

btn3.addEventListener("click", () => {
    qToQ.classList.add("on");
    wrapper.classList.add("off");
    quantOne.innerHTML = 'km';
    quantTwo.innerHTML = 'mi';
})

const toMiles = () => {
    miles = quantcalc.value * 0.62137119224;
    result.textContent = `${quantcalc.value} km = ${miles.toFixed(2)} mi`;
    quantcalc.value = '';
}

const toKilometers = () => {
    kilometers = quantcalc.value * 1.609344;
    result.textContent = `${quantcalc.value} mi = ${kilometers.toFixed(2)} km`;
    quantcalc.value = '';
}



// ----- Comnverter4: Celsius to Fahrenheit -----
// 1 ℃ = (1 ℃ * 9) / 5 + 32
// 1 ℉ = (1 ℉ - 32) * 5 / 9

btn4.addEventListener("click", () => {
    qToQ.classList.add("on");
    wrapper.classList.add("off");
    quantOne.innerHTML = '℃';
    quantTwo.innerHTML = '℉';
})

const toFahrenheit = () => {
    fahrenheit = (quantcalc.value * 9) / 5 + 32;
    result.textContent = `${quantcalc.value} ℃ = ${fahrenheit.toFixed(2)} ℉`;
    quantcalc.value = '';
}

const toCelsius = () => {
    celsius = (quantcalc.value - 32) * 5 / 9;
    result.textContent = `${quantcalc.value} ℉ = ${celsius.toFixed(2)} ℃`;
    quantcalc.value = '';
}


// ----- Comnverter5: Kilograms to Pounds -----
// 1 kg = 1lb * 0.45359237
// 1 lb = 1kg / 0.45359237

btn5.addEventListener("click", () => {
    qToQ.classList.add("on");
    wrapper.classList.add("off");
    quantOne.innerHTML = 'kg';
    quantTwo.innerHTML = 'lb';
})

const toPounds = () => {
    pounds = quantcalc.value / 0.45359237;
    result.textContent = `${quantcalc.value} kg = ${pounds.toFixed(2)} lb`;
    quantcalc.value = '';
}

const toKilograms = () => {
    kilograms = quantcalc.value * 0.45359237;
    result.textContent = `${quantcalc.value} lb = ${kilograms.toFixed(2)} kg`;
    quantcalc.value = '';
}



// ----- Comnverter6: Grams to Ounces -----
// 1 g = 1 oz * 28.34952
// 1 oz = 1 g / 28.34952

btn6.addEventListener("click", () => {
    qToQ.classList.add("on");
    wrapper.classList.add("off");
    quantOne.innerHTML = 'g';
    quantTwo.innerHTML = 'oz';
})

const toOunces = () => {
    ounces = quantcalc.value / 28.34952;
    result.textContent = `${quantcalc.value} g = ${ounces.toFixed(2)} oz`;
    quantcalc.value = '';
}

const toGrams = () => {
    grams = quantcalc.value * 28.34952;
    result.textContent = `${quantcalc.value} oz = ${grams.toFixed(2)} g`;
    quantcalc.value = '';
}






// ------- Listener -------

convertBtn.addEventListener('click', quantConversion);
swapBtn.addEventListener('click', swap);
clearBtn.addEventListener('click', clear);