const movies = [
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


// -----Normal for loop

/* document.write(`<ul>`);
for ( let i=0; i < movies.length; i++){
    document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ul>`); */




// ----For of loop

/* document.write(`<ul>`);
for (const film of movies){
    document.write(`<li>${film}</li>`);
}
document.write(`</ul>`); */


// forEach 

document.write(`<ul>`);

movies.forEach(movies => document.write(`<li>${movies}</li>`))

document.write(`</ul>`);












