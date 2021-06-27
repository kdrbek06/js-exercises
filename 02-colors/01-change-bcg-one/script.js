/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    /* let red = document.getElementById('red');
    red.addEventListener('click', () =>{
        let body = document.getElementsByTagName('body');
        body[0].style.backgroundColor = "red";
    
    });
    let green = document.getElementById('green');
    green.addEventListener('click', () =>{
        let body = document.getElementsByTagName('body');
        body[0].style.backgroundColor = "green";
    
    });
    let yellow = document.getElementById('yellow');
    yellow.addEventListener('click', () =>{
        let body = document.getElementsByTagName('body');
        body[0].style.backgroundColor = "yellow";
    
    });
    let blue = document.getElementById('blue');
    blue.addEventListener('click', () =>{
        let body = document.getElementsByTagName('body');
        body[0].style.backgroundColor = "blue";
    
    }); */


const colors = ['red', 'green', 'yellow','blue'];

// FIRST WAY TO CALL ELEMENT
// var body = document.getElementsByTagName('body');

var body = document.querySelector("body");
for(let i = 0; i < colors.length; i++){
    
    let button = document.getElementById(colors[i]);
    button.addEventListener('click', () =>{
        body.style.backgroundColor = colors[i];
    
    });
}

})();

