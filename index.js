let row = 1;
let flag = true;
const add = document.getElementById("add-btn");
add.addEventListener("click", displayDeatils);
let totalPrice = 0;
function displayDeatils() {
    if (!flag) return;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    if (!name || !price) {
        alert("Please, fill all the fields");
        return 0;
    }
    totalPrice += parseInt(price);
    let displayData = document.getElementById("display-table");
    let newRow = displayData.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = price;

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    if (row % 2 === 0) newRow.style.backgroundColor = "#ddd";
    else newRow.style.backgroundColor = "#eee";

    row += 1;
}

const grandTotal = document.getElementById("total-btn");
grandTotal.addEventListener("click", calculateTotal);
function calculateTotal() {
    if (!flag) return;
    flag = false;
    let displayData = document.getElementById("display-table");
    let newRow = displayData.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = "Grand Total";
    cell2.innerHTML = totalPrice;
    newRow.style.backgroundColor = "#1c7640";
    cell1.style.color = "#fff";
    cell2.style.color = "#fff";
}
