const formEl = document.getElementById("addForm");
const ulEl = document.getElementById("items");
const filterInput = document.getElementById("filter");

formEl.addEventListener("submit", runEvent);

// Delete item
ulEl.addEventListener("click", removeItem);

filterInput.addEventListener("keyup", filterItems);

function runEvent(e) {
  e.preventDefault();
  const inputEl = document.getElementById("item").value;
  console.log(inputEl);

  // create element
  let newLi = document.createElement("li");

  newLi.className = "list-group-item";

  newLi.appendChild(document.createTextNode(inputEl));

  // create del button
  const dltBtn = document.createElement("button");

  dltBtn.className = "btn btn-danger btn-sm delete float-end";

  dltBtn.appendChild(document.createTextNode("X"));

  newLi.appendChild(dltBtn);

  ulEl.appendChild(newLi);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const li = e.target.parentElement;
      ulEl.removeChild(li);
    }
  }
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();

  const liItems = ulEl.getElementsByTagName("li");

  let liItemsArr = Array.from(liItems);

  liItemsArr.forEach(function (item) {
    let itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
