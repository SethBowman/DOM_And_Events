let main = document.getElementsByTagName("main");

let headings = document.getElementsByClassName("heading");

let paras = document.getElementsByClassName("content");

let a = document.getElementById("navigation");

let firstChild = document.getElementById("firstSection");

console.log(main);
console.log(headings);
console.log(paras);
console.log(a);
console.log(main[0]);

paras[0].textContent = "I just changed you";
paras[0].style.color = "red";
main[0].id = "homeContent";

let newElement = document.createElement("section");

// main[0].appendChild(newElement);
main[0].insertBefore(newElement, firstChild);

// removeChild();

// replaceChild(newNode, oldNode);

let button = document.createElement("button");
button.textContent = "Sign Up";

firstChild.replaceChild(button, paras[0]);
// firstChild.removeChild(a); // removes a tag

firstChild.style.position = "absolute";
let pos = 0;

let interval = setInterval(function () 
{
    pos+= 100;
    firstChild.style.left += `${pos}px`;
}, 4000);


let pressButton = document.getElementById("pressMe");

pressButton.addEventListener("click", function (event) 
    {
        alert(event);
    });