/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var list = [];


    fetch('http://127.0.0.1:5500/_shared/api.json')
  .then(response => response.json())
  .then(data => {
      list = data.heroes;
      /* console.log(list) */
      
  });

 /*  document.getElementById('run').addEventListener('click', () =>{
    let userInput = parseInt(document.getElementById("hero-id").value);
    if(userInput <= 5){   
        console.log(list[userInput -1]);
    } else {
        alert("The ID number must be between 1-5. Please input correct ID number.")

    }
}); */

document.getElementById('run').addEventListener('click', () =>{
    let userInput = parseInt(document.getElementById("hero-id").value);
    for(let i = 0; i < list.length; i++){
        if(userInput <= 5 && userInput !== 0){   
            console.log(list[userInput -1]);
        } else {
            alert("The ID number must be between 1-5. Please input correct ID number.");
            break;
    
        }
        if(userInput === list[i].id){
            console.log(list[i]);
            document.querySelector("#target").innerHTML = `<li class="hero">
            <h4 class="title">
                <strong class="name">${list[i].name}</strong>
                <em class="alter-ego">${list[i].alterEgo}</em>
            </h4>
            <p class="powers">${list[i].abilities}</p>
        </li>`
        };
        
 
    };

});

    /* 
});
 */
})();
