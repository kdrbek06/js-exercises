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
  `Lawrence of Arabia`,
];

// document.write(`<ol>`);
// for (let i = 0; i < movies.length; i++) {
//   document.write(`<li>${movies[i]}</li>`);
// }
// document.write(`</ol>`);


// document.write(`<ol>`);
// for (var s of movies) {
//   document.write(`<li>${s}</li>`);
// }
// document.write(`</ol>`);

document.write(`<ol>`);
movies.forEach(s => document.write(`<li>${s}</li>`))
document.write(`</ol>`);
