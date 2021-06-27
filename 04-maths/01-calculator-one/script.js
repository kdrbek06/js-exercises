/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value





    document.getElementById("addition").addEventListener("click", function() {
        let input1 = document.getElementById('op-one').value;
        let input2 = document.getElementById('op-two').value;
        let addition = parseInt(input1) + parseInt(input2);
        alert("Result:" + addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let input1 = document.getElementById('op-one').value;
        let input2 = document.getElementById('op-two').value;
        let subsraction = parseInt(input1) - parseInt(input2);
        alert("Result:" + subsraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let input1 = document.getElementById('op-one').value;
        let input2 = document.getElementById('op-two').value;
        let multiplication = parseInt(input1) * parseInt(input2);
        alert("Result:" + multiplication);// perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        let input1 = document.getElementById('op-one').value;
        let input2 = document.getElementById('op-two').value;
        let division = parseInt(input1) / parseInt(input2);
        alert("Result:" + division);
        // perform an division
    });
})();
