"use strict";
const books = [
    ["The Catcher in the Rye", "J.D. Salinger", "1951"],
    ["To Kill a Mockingbird", "Harper Lee", "1960"],
    ["1984", "George Orwell", "1949"]
];

function createTable(books) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    const ths = ["Id", "Title", "Author", "Year", "Action"]

    // TODO: create a table based on the array received as a parameter

    for (let i = 0; i < 5; i++) {
        let th = document.createElement('th');
        th.textContent = ths[i];
        tr.append(th);
    }
    thead.append(tr);


    for (let i = 0; i < books.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = [i];
        tr.appendChild(td);
        for (let j = 0; j < books.length; j++) {
            let td = document.createElement('td');
            td.textContent = books[i][j];
            tr.appendChild(td);
        }
        let deleteButton = document.createElement('button');
        let tdDelete = document.createElement('td');
        deleteButton.textContent = "Delete";
        tr.appendChild(deleteButton);
        
        tbody.appendChild(tr);
    }

    table.append(thead);
    table.append(tbody);
    return table;
}

function deleteTable() {
    let table = document.querySelector('table');



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