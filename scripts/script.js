const circle = document.getElementById("circle");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});

// ---------------Headers----------------

const AsideButton = document.querySelector(".inaside");
const ElmentAside = document.querySelector(".aside");
const close = document.querySelector(".aside-close");

AsideButton.addEventListener("click", () => {
  ElmentAside.classList.add("visible");
  ElmentAside.classList.add("slide-in");
  ElmentAside.classList.remove("slide-out");
});

function Buttonclose() {
  ElmentAside.classList.remove("visible");
  ElmentAside.classList.add("slide-out");
  ElmentAside.classList.remove("slide-in");
}

close.addEventListener("click", Buttonclose);

// -------------mode claire et sombre--------------

const body = document.body;
const changeMode = document.querySelector(".button-mode");
const changeModeSombre = document.querySelector(".button-mode-sombre");
const togglleButtonClair = document.querySelector(".toggleButton");
const modchangebuttonSombre = document.querySelector(
  ".toggleButton-mode-clair"
);
console.log(modchangebuttonSombre);

changeMode.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    togglleButtonClair.classList.add("visible");
    modchangebuttonSombre.classList.add("visible");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    togglleButtonClair.classList.remove("visible");
    modchangebuttonSombre.classList.remove("visible");
  }
});

//   ----------------dur moi -------------
const outils = document.querySelector(".outils");
const elements = outils.querySelectorAll("div");

const zoneWidth = outils.offsetWidth; // Largeur de la zone
const elementWidth = 10; // Largeur des éléments (carrés)

elements.forEach((element, index) => {
  // Position verticale fixe pour une seule ligne
  element.style.top = "25px"; // Centré verticalement dans une zone de 100px

  // Démarrer l'animation
  let position = -elementWidth; // Position initiale (en dehors de la zone à gauche)

  function animate() {
    position += 2; // Vitesse de déplacement en pixels
    if (position > zoneWidth) {
      position = -elementWidth; // Réinitialiser à gauche
    }
    element.style.right = `${position}px`;

    // Appeler la fonction pour la prochaine image
    requestAnimationFrame(animate);
  }

  // Décaler le démarrage des animations pour chaque élément
  setTimeout(() => {
    animate();
  }, index * -200); // Décalage de 200ms entre chaque élément
});

//   ----------------sur moi -------------
const images = [
  "/Images/Javascript_Logo_PNG-removebg-preview.png",
  "/Images/Laravel_Logo_PNG-removebg-preview.png",
  "/Images/Node_JS_PNG_Logo-removebg-preview.png",
  "/Images/Firebase_Logo_PNG-removebg-preview.png",
  "/Images/Python_Programming_Language_Icon_PNG___SVG_Design_For_T-Shirts-removebg-preview.png",
];

images.forEach((src, index) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = src;
  div.appendChild(img);
  div.style.animationDelay = `${index * -2}s`;
  outils.appendChild(div);
});

// ----------------contour slyde -------------
