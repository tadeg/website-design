const addItemBtn = document.querySelector('.add-item-btn');
const deleteAllBtn = document.querySelector('.delete-all-btn');
const saveItemBtn = document.querySelector('.save-item-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const deleteItemsBtns = document.getElementsByClassName('.delete-item-btn');
const noteWrapper = document.querySelector('.notes-wrapper');
const notePopup = document.querySelector('.note-popup');
const theme = document.querySelector('#theme');
const textArea = document.querySelector('#text');
const errorMsg = document.querySelector('.error-msg');

let selectedValue;
let noteID = 0;


const openPopup = () => {
    notePopup.style.display = 'flex';
}

const closePopup = () => {
    notePopup.style.display = 'none';
    errorMsg.style.visibility = 'hidden';
    textArea.value = '';
    theme.selectedIndex = 0;
}


const addItem = () => {
    if (textArea.value !== '' && theme.options[theme.selectedIndex].value !== '0') {
        createItem();
        errorMsg.style.visibility = 'hidden'
    } else {
        errorMsg.style.visibility = 'visible'
    }
}

const createItem = () => {
    const newItem = document.createElement('div');
    newItem.classList.add('note');
    newItem.setAttribute('id', noteID);

    newItem.innerHTML = `
            <div class="note-heading">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-item-btn" onClick="deleteItem(${noteID})">
                <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="note-content">
            ${textArea.value}
            </div>`


    noteWrapper.appendChild(newItem);
    noteID++;
    textArea.value = '';
    theme.selectedIndex = 0;
    notePopup.style.display = 'none';
    checkColor(newItem);
}

const selectValue = () => {
    selectedValue = theme.options[theme.selectedIndex].text;
}


const checkColor = item => {
    switch (selectedValue) {
        case 'Job':
            item.style.backgroundColor = 'rgb(51, 51, 51';
            break;
        case 'Hobby':
            item.style.backgroundColor = 'rgb(100, 155, 137)';
            break;
        case 'Reading':
            item.style.backgroundColor = ' rgb(119, 8, 8)';
            break;
        case 'Sport':
            item.style.backgroundColor = 'rgb(9, 79, 141)';
            break;
        case 'Shopping':
            item.style.backgroundColor = 'rgb(131, 22, 104)';
            break;
    }
}

const deleteItem = id => {
    const itemToDelete = document.getElementById(id);
    noteWrapper.removeChild(itemToDelete);
}

const deleteAllItems = () => {
    noteWrapper.textContent = '';
}


addItemBtn.addEventListener('click', openPopup);
cancelBtn.addEventListener('click', closePopup);
saveItemBtn.addEventListener('click', addItem);
deleteAllBtn.addEventListener('click', deleteAllItems);