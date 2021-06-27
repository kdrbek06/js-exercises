/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {


//     document.getElementById("run").addEventListener("click", function() {
//         fetch('http://127.0.0.1:5500/_shared/api.json')
//         .then(response => response.json())
//         .then(data => console.log(data));

//     })

// })();

(() => {


    document.getElementById("run").addEventListener("click", () => {
        onClick_1().then(res => console.log(res)).catch(err => console.log(err));
    })

})();

const onClick_1 = () => {
    return new Promise((resolve, reject) => {
        fetch('http://127.0.0.1:5500/_shared/api.json')
        .then(response => response.json())
        .catch(err => reject(err))
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}



