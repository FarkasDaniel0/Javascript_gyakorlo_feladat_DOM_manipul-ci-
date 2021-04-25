
let index = 0;
var test = "1";
document.getElementById("myInput").value = test;

let btnAdd = document.querySelector("#add");



function addHeader() {
  let mainDiv = document.querySelector(".vh-100");
  let newHeader = document.createElement("h1");
  // newHeader.innerText = test;
  mainDiv.appendChild(newHeader);
  function addRow(tableID) {
    // Get a reference to the table
    let tableRef = document.getElementById(tableID);
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
  
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
  
    // Append a text node to the cell
    let newText = document.createTextNode(test);
    newCell.appendChild(newText);
  }
  
  // Call addRow() with the table's ID
  addRow('my-table');
  index++;
}

btnAdd.addEventListener("click", addHeader);

let btnDelete = document.querySelector("#delete");

function deleteChild() {
  if (index > 0) {
    let mainDiv = document.querySelector(".vh-100");
    let lastChild = mainDiv.lastChild;
    mainDiv.removeChild(lastChild);
    let table = document.querySelector('table');

// Delete second row
table.deleteRow(1);
    index--;
  }
}

btnDelete.addEventListener("click", deleteChild);

