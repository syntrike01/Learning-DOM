const formEl = document.getElementById("addForm");
const ulEl = document.getElementById("items");
const submitBtn = formEl.querySelector("input[type='submit']");

submitBtn.addEventListener("click", runEvent);

function runEvent(e) {
  e.preventDefault();
  const inputEl = document.getElementById("item");
  console.log(inputEl.value);

  // create element
  let newLi = document.createElement('li');

  newLi.className = 'list-group-item d-flex justify-content-between align-items-center';

  let newDivText = document.createTextNode(inputEl.value);
  newLi.appendChild(newDivText);

  // create del button
  const dltBtn = document.createElement('button');

  dltBtn.className = 'btn btn-danger btn-sm delete';

  dltBtn.appendChild(document.createTextNode('X'));

  newLi.appendChild(dltBtn);

  ulEl.appendChild(newLi);
}
