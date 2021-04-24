
let index = 0;

let btnAdd = document.querySelector("#add");

function addHeader() {
  let mainDiv = document.querySelector(".vh-100");
  let newHeader = document.createElement("h1");
  newHeader.innerText = "Szia Javascript!";
  mainDiv.appendChild(newHeader);
  index++;
}

btnAdd.addEventListener("click", addHeader);

let btnDelete = document.querySelector("#delete");

function deleteChild() {
  if (index > 0) {
    let mainDiv = document.querySelector(".vh-100");
    let lastChild = mainDiv.lastChild;
    mainDiv.removeChild(lastChild);
    index--;
  }
}

btnDelete.addEventListener("click", deleteChild);
