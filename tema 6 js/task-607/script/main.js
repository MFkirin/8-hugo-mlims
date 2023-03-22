"use strict";
const books = [
    ["The Catcher in the Rye", "J.D. Salinger", "1951"],
    ["To Kill a Mockingbird", "Harper Lee", "1960"],
    ["1984", "George Orwell", "1949"]
  ];

console.log(books[0][0]); // "The Catcher in the Rye"
console.log(books[1][1]); // "Harper Lee"
console.log(books[2][2]); // "1949"
    
function createTable(books) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    const ths = ["Id", "Title", "Author", "Year", "Action"]
    // TODO: create a table based on the array received as a parameter

    for(let i= 0; i<5; i++){
        let th = document.createElement('th');
        th.textContent = ths[i];
        tr.appendChild(th); 
    }
    thead.appendChild(tr);
    table.appendChild(thead)
    return table;
}

function deleteTable() {
    let table = document.querySelector('table');

    tbody 
    tr
    td

    // TODO: delete the table
    
}

function newBook() {
    let book = [];
    // TODO: create an array with data received 
    // TODO: add some basic validation
    return book;
}

function main() {
    const table = createTable(books);
    document.body.append(table);
}

document.addEventListener('DOMContentLoaded', main);