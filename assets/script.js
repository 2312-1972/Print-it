const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// let dot = document.querySelectorAll("dot");
// dot.addEventListener("click", () => {
//   console.log("bravo");
// });

// let dots = document.querySelector("dots");
// dots.addEventListener("click", () => {
//   console.log("bravo");
// });

let dotSelected = document.querySelector(".dot_selected");

let left = document.getElementById("arrow_left");
left.addEventListener("click", () => {
  console.log("Vous avez cliqué sur le bouton gauche");
});

let right = document.getElementById("arrow_right");
right.addEventListener("click", () => {
  console.log("vous avez cliqué sur le bouton droit");
});
