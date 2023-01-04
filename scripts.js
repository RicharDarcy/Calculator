const memoryElt = document.querySelector("#memory");
const screenElt = document.querySelector("#screen");

// Storage of the previous valor on screen
let previous = 0;

// Storage of the screen display
let display = "";

// Storage of the op
let operation = null;

// Initialization of the memory
let memory;

window.onload = () => {
    // Listen clicks on touches
    let touches = document.querySelectorAll("span");

    for(let touche of touches){
        touche.addEventListener("click", getTouches);
    }
}
// React to the clicks on touches
function getTouches(){
    console.log("clic");
}