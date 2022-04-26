const today = document.querySelector('.today')
const fact = document.querySelector('.fact')

const facts = [
    'Fizyka to nauka, która zajmuje się badaniem i wyjaśnianiem podstawowych praw przyrody, zjawisk w niej zachodzących oraz właściwości materii.',
    'Wielkości fizyczne są stosowane do ilościowego opisu cech ciał i zjawisk.',
    'Wartości wielkości fizycznych są podawane  wraz z ich jednostkami.',
    'Tor ruchu to linia wyznaczana przez poruszające się ciało. Droga to długość toru ruchu.'
]


//01. dayli - day of the week, some fact/idea -------------------------

const day = new Date();
today.textContent = day.toLocaleDateString("en", {
    weekday: "long"
});
const dispFact = () => {
    const item = Math.floor(Math.random() * (facts.length - 1));
    console.log(item);
    fact.textContent = facts[item];
}
dispFact();


//02. weather ---------------------------------------------------------

const inputCity = document.querySelector('input.city-input');
const btnGetWea = document.querySelector('button.get-wea');
const cityRes = document.querySelector('h3.city');
const warningWea = document.querySelector('p.wea-warning');
const imageWea = document.querySelector('img.wea-ico');
const weather = document.querySelector('.weathercondition');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

// API call:
// 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '39bd524e8ea5aa0cbe08005f91409f8b'
const API_UNITS = '&units=metric'

const getWeaInf = () => {
    const city = inputCity.value || 'Porto'
    // nazwa miasta wprowadzana przez uzytkownika || domyslna
    const URL = API_LINK + city + '&appid=' + API_KEY + API_UNITS
    // console.log(city);

    axios
        .get(URL)
        .then(res => {
            // console.log(res.data);
            const tempfApi = res.data.main.temp;
            const humfApi = res.data.main.humidity;
            const weaConditionfApi = Object.assign({}, ...res.data.weather);

            cityRes.textContent = res.data.name;
            temperature.textContent = Math.floor(tempfApi) + '℃';
            humidity.textContent = humfApi + '%';
            weather.textContent = weaConditionfApi.main;

            warningWea.textContent = '';
            inputCity.value = '';
            // //dzięki temu: 
            // //po wpisaniu poprawnej nazwy miasta: nie ma błędu; nie ma te nzwy miasta w inpucie
            // //po wpisaniu błędnej nawy miasta: wyświetla się błąd


            // // warunki pogodowe vs. ico
            if (weaConditionfApi.id >= 200 && weaConditionfApi.id < 300) {
                // Group 2xx: Thunderstorm
                imageWea.setAttribute('src', './img/thunderstorm.png')

            } else if (weaConditionfApi.id >= 300 && weaConditionfApi.id < 400) {
                // Group 3xx: Drizzle
                imageWea.setAttribute('src', './img/drizzle.png')

            } else if (weaConditionfApi.id >= 500 && weaConditionfApi.id < 600) {
                // Group 5xx: Rain
                imageWea.setAttribute('src', './img/rain.png')

            } else if (weaConditionfApi.id >= 600 && weaConditionfApi.id < 700) {
                // Group 6xx: Snow
                imageWea.setAttribute('src', './img/snow.png')

            } else if (weaConditionfApi.id >= 700 && weaConditionfApi.id < 800) {
                // Group 7xx: Atmosphere
                imageWea.setAttribute('src', './img/fog.png')

            } else if (weaConditionfApi.id === 800) {
                // Group 8xx: Clear
                imageWea.setAttribute('src', './img/sun.png')

            } else if (weaConditionfApi.id >= 800 && weaConditionfApi.id < 900) {
                // Group 8xx: Clouds
                imageWea.setAttribute('src', './img/cloud.png')

            } else {
                imageWea.setAttribute('src', './img/unknown.png')
            }
        })

        .catch(() => (warningWea.textContent = 'Enter proper city name!'))
}


const verKeyEnter = (e) => {
    if (e.key === 'Enter') {
        getWeaInf()
    }
}


inputCity.addEventListener('keyup', verKeyEnter);
btnGetWea.addEventListener('click', getWeaInf)
getWeaInf()






//03.todo & notes -----------------------------------------------------

let noteInput //pole do wpisywania tresci zadania, notatki
let errorInfo // informacja o braku zadań / konieczności wpisania tekstu
let addBtn // przycisk ADD - dodaje zadania, notatki do listy
let ulList // lista zadań ul
let newNote // nowo dodawane zadanie, notatka - nowy li

let modal // popup-modal
let modalInfo // tekst w modalu-popup'ie - wyświetlany po dodaniu pustego tekstu
let editedNote // edytowany toDo-note
let modalInput // input w modalu-popup'ie
let modalAddBtn // przycisk zatwierdź w popup'ie
let modalCancelBtn // przycisk anuluj w popup'ie



const main = () => {
    prepareElements()
    prepareEvents()
}

const prepareElements = () => {
    // pobranie elementów
    noteInput = document.querySelector('.note-input');
    errorInfo = document.querySelector('.error-inf');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todo-down ul');
    modal = document.querySelector('.todo-modal');
    modalInfo = document.querySelector('.modal-info');
    modalInput = document.querySelector('.modal-input');
    modalAddBtn = document.querySelector('.ok');
    modalCancelBtn = document.querySelector('.cancel');
}


const prepareEvents = () => {
    // nasłuhiwanie df
    addBtn.addEventListener('click', addNewNote);
    ulList.addEventListener('click', verClick);
    modalAddBtn.addEventListener('click', updateNoteText);
    modalCancelBtn.addEventListener('click', closeModal);
    noteInput.addEventListener('keyup', verMainKeyEnter);
    modalInput.addEventListener('keyup', verModalKeyEnter);
}

/*
// Funkcja - dodanie nowego elementu
// 1. utworzenie nowego elementu li
// 2. dodanie nowego, utworzonego elementu li do listy ul
// 3. uruchamiana na click przycisku ADD
// 4. przechwytywanie treści z inputa i umieszczanie go w nowo utworzonym li
// 5. zabezpieczenie przed dodawaniem do listy pustego todo/notatki
*/

const addNewNote = () => {
    if (noteInput.value !== '') {
        newNote = document.createElement('li');
        newNote.textContent = noteInput.value;
        createNoteToolsArea() //wywołanie funkcji tworzącej div'a (noteTools) z narzędziami

        ulList.append(newNote);
        noteInput.value = '';
        errorInfo.textContent = '';

    } else {
        errorInfo.textContent = "Enter the task or note!"
    }
}


const createNoteToolsArea = () => {

    const toolsArea = document.createElement('div');
    toolsArea.classList.add('note-tools');
    newNote.append(toolsArea); //podpięcie div'a toolsArea do li (newNote)

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done');
    doneBtn.innerHTML = '<i class="fa-solid fa-square-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    toolsArea.append(doneBtn, editBtn, deleteBtn);
}

// Sprawdzenie, który przycisk kliknięto (na tools'ach)

const verClick = e => {
    if (e.target.matches('.done')) {
        e.target.closest('li').classList.toggle('task-done');
        e.target.classList.toggle('bt-done'); //wyszarzanie check'a

    } else if (e.target.matches('.edit')) {
        editNote(e)
    } else if (e.target.matches('.delete')) {
        deleteNote(e)
    }
}


const editNote = e => {
    modal.style.display = 'flex';
    editedNote = e.target.closest('li');
    modalInput.value = editedNote.firstChild.textContent;
    console.log(editedNote.firstChild);
    // firstChild to tekst, który ma zostać wstawiony do inputa; celem korekty
}

const closeModal = () => {
    modal.style.display = 'none';
    modalInfo.textContent = '';
}


const updateNoteText = () => {
    if (modalInput.value !== '') {
        editedNote.firstChild.textContent = modalInput.value
        //przypisanie wartości z input'a modal'a do todo-note'a
        modal.style.display = 'none';
        modalInfo.textContent = ''
    } else {
        modalInfo.textContent = 'You have to enter some content!'
    }
}


const deleteNote = (e) => {
    e.target.closest('li').remove()

    //sprawdzenie czy usunięte wszystkie li na stroonie
    const allNotes = ulList.querySelectorAll('li');
    if (allNotes.length === 0) {
        errorInfo.textContent = "There are no tasks or notes on the list!"
    }
}

const verMainKeyEnter = (e) => {
    if (e.key === 'Enter') {
        addNewNote()
    }
}

const verModalKeyEnter = (e) => {
    if (e.key === 'Enter') {
        updateNoteText()
    }
}




document.addEventListener('DOMContentLoaded', main)