

const formEl = document.getElementById('addForm');
const inputEl = document.getElementById('item');
const ulEl = document.getElementById('items');
const submitBtn = formEl.querySelector("input[type='submit']");

submitBtn.addEventListener('click',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log(inputEl.value)
    console.log(newLi)
}



// create element
let newLi = document.createElement('li');

newLi.className = 'ist-group-item d-flex justify-content-between align-items-center';

let newDivText = document.createTextNode(inputEl.value);
newLi.appendChild(newDivText)

