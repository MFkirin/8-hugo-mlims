"use strict";
function main() {

    let paragraphs = document.querySelectorAll('p');// Select all paragraphs
    let ul = document.querySelector('.resolvedTask ul');


    //1. The number of paragraphs on the page.

    countParagraphs();//Count the paragraphs

    function countParagraphs(){
        let solution = document.createTextNode(paragraphs.length);
        return solution;
    }

    //2. The text of the second paragraph.

    function selectParagraph(putNumber){
        let paragraph = paragraphs[putNumber]; //Select the paragraph whith the number it have
        let solution = document.createTextNode(paragraph.textContent);
        return solution;
    }

    //Here is create the li 
    function createLi(metod){
        let li = document.createElement('li');
        ul.append(li);
        li.append(metod);
    }


    //Here is the solutions added to the div
    createLi(countParagraphs());
    createLi(selectParagraph(1));

}
document.addEventListener('DOMContentLoaded', main);