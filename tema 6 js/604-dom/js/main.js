"use strict";
function main() {

    let links = document.querySelectorAll('a');
    let paragraphs = document.querySelectorAll('p');// Select all paragraphs
    let ol = document.querySelector('#info ol');





    //1. The number of paragraphs on the page.

    //Count the paragraphs
    function countParagraphs(){
        let solution = document.createTextNode("Number of paragraphs : " +paragraphs.length);
        return solution;
    }

    //2. The text of the second paragraph.

    //To select a specific paragraph
    function selectParagraph(putNumber){
        let paragraph = paragraphs[putNumber]; //Select the paragraph depending the number
        let solution = document.createTextNode("Second paragraph  : "+paragraph.textContent);
        return solution;
    }

    
    //3. The number of links on the page.

    //Count the links
    function countLinks(){
        let solution = document.createTextNode("Number of links : " + links.length);
        return solution;
    }

    //4. The address of the first link.
    
    //For select a specific link
    function selectLink(putNumber){
        let link = links[putNumber]; //Select the link depending the number 
        let solution = document.createTextNode(" link  : "+link.textContent);
        return solution;
    }
    
    
    //6. The number of links pointing to ttps://www.pewresearch.org.
    
    //Count the number of links depending de href
    function countLinksByHref(){
        let numberOfLinks = 0;
        for(let i = 0; i<links.length; i++){
            if(links[i].href === 'https://www.pewresearch.org')
                numberOfLinks ++;
            }
            return numberOfLinks;
        }
        



    //Here is create the li 
    function createLi(metod){
        let li = document.createElement('li');
        ol.append(li);
        li.append(metod);
    }
    //7. The number of links in the first paragraph.
    function countNumberOflinksOnParag(putNumber){
        let linkalgo = paragraphs[putNumber].querySelector("a");
        let countLinkAlgo = document.createTextNode(linkalgo.length)
        return countLinkAlgo;
    }
        //Here is the solutions added to the div
        createLi(countParagraphs());
        createLi(selectParagraph(1));
        createLi(countLinks());
        createLi(selectLink(1));
        createLi(selectLink(links.length-1 ));
        createLi(countLinksByHref());
       // createLi(countNumberOflinksOnParag(0));


}
document.addEventListener('DOMContentLoaded', main);
document.addEventListener('DOMContentLoaded', main);
