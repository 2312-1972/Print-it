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
// creation de la function pour ajout via le DOM
function bannerFirstImage() {
  const banner = document.getElementById("banner");
  // création arrow left
  const arrowLeft = document.createElement("img");
  arrowLeft.id = "arrow_left";
  arrowLeft.classname = "arrow_left";
  arrowLeft.src = "./assets/images/arrow_left.png";
  arrowLeft.alt = "arrow_left";
  // creation image
  const imgBanner = document.createElement("img");
  imgBanner.className = "banner-img";
  imgBanner.src = "./assets/images/slideshow/slide1.jpg";
  imgBanner.alt = "arrow_right";

  //creation p et span
  const tagLine = document.createElement("p");
  tagLine.className = "banner-txt";
  tagLine.txt = "Impressions tous formats ";
  const spanTagLine = document.createElement("span");

  // //creation arrow right
  const arrowRight = document.createElement("img");
  arrowRight.id = "arrow_right";
  arrowRight.className = "arrow_right";
  arrowRight.src = "./assets/images/arrow_right.png";
  arrowRight.alt = "arrow_right";

  banner.appendChild(arrowLeft);
  banner.appendChild(imgBanner);
  banner.appendChild(tagLine);
  tagLine.appendChild(spanTagLine);
  banner.appendChild(arrowRight);
 
}
bannerFirstImage();

//------déclaration des variables globales pour interagir sur le mvt.
const leftArrow = document.getElementById("arrow_left");
const rightArrow = document.getElementById("arrow_right");
const dots = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const txt = document.querySelector(".banner-txt");
banner.appendChild(dots);

//---- déclaration de la variable de position a 0 point de départ du comptage de la boucle "for".
let positionSlide = 0;

//--- ajoutn add event listener arrow left
leftArrow.addEventListener("click", function () {
  //-----ecoute de l'évènement de arrow left
  console.log("vous avez cliqué à gauche");
  //---décrementation de positionSlide
  positionSlide--;
  //  conditions de position sur les slides
  if (positionSlide === -1) {
    positionSlide = slides.length - 1;
  }
  //img.src = slides[positionSlide].image;
  img.src = `./assets/images/slideshow/${slides[positionSlide].image}`;

  txt.innerHTML = slides[positionSlide].tagLine;
  console.log(" flèche de gauche");
  newDots();
});
//---controle de la taille du tableau (array!!)
console.log(slides.length);

//---ajout add event listener arrow right
rightArrow.addEventListener("click", function () {
  //-----ecoute de l'évènement arrow right.
  console.log("Vous avez cliqué à droite");
  //----incrémentation de positionSlide
  positionSlide++;

  if (positionSlide === slides.length) {
    positionSlide = 0;
  }
  img.src = `./assets/images/slideshow/${slides[positionSlide].image}`;
  txt.innerHTML = slides[positionSlide].tagLine;
  console.log(" flèche de droite");
  newDots();
});
//---- boucle 1- j'initialise le compteur 2- condition d'arret 3- mise à jour du compteur a chaque tour
for (let i = 0; i < slides.length; i++) {
  console.log(i);
  //--création via createlement d'une div avec class "dot"
  const newDot = document.createElement("div");
  newDot.classList = "dot";
  //---affiliation de newdot avec appendchild
  dots.appendChild(newDot);
  //--nex event avec newdot au click
  newDot.addEventListener("click", function () {
    positionSlide = i;
    img.src = `./assets/images/slideshow/${slides[positionSlide].image}`;
    txt.innerHTML = slides[positionSlide].tagLine;
    newDots();
  });
}
//---- déclaration de dot  via les class css et ajout de dot_selected
let dot = document.querySelectorAll(".dot");
dot[0].classList.add("dot_selected");
//----function pour le mouvement du dot_selected
function newDots() {
  for (let i = 0; i < dot.length; i++) {
    if (i === positionSlide) {
      dot[i].classList.add("dot_selected");
    } else {
      dot[i].classList.remove("dot_selected");
    }
  }
}
