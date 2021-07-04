let movies = [
    `The Godfather`,
    `The Shawshank Redemption`,
    `Schindler's List`,
    `Raging Bull`,
    `Casablanca`,
    `Citizen Kane`,
    `Gone with the Wind`,
    `The Wizard of Oz`,
    `One Flew Over the Cuckoo's Nest`,
    `Lawrence of Arabia`
    ]



movies.reverse();
for(let i = 0; i<movies.length; i++){
    movies[i] = movies[i].toLowerCase();
};
console.log(movies);



// OTHER WAY

// movies = movies.reverse().map((film)=>{
//     return film.toLowerCase();
// });

// console.log(movies);