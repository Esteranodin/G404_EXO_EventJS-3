// je stock dans une variable sur quel endroit du html je veux qu'il y ait un event
const casesColor = document.querySelectorAll('.cases > a');

// mes classes css dans un tableau que forEach pourra parcourir
const colors = ['colorBlue', 'colorYellow', 'colorPink', 'colorGreen', 'colorRed'];
// je déclare une variable pour pouvoir l'incrémenter plus tard
let i = 0;

//grace au forEach je déclenche un event au click sur un element + j'appelle ma focntion
casesColor.forEach((caseUnique) => {
  caseUnique.addEventListener('click', handleChangeColor)
});

//je déclare ma fonction
function handleChangeColor(event) {

// je supprime les couleurs
  colors.forEach(element => {
    event.target.classList.remove(element)
  });

// j'ajoute une couleur 
  event.target.classList.add(colors[i])
  i += 1;
// je pose une condition pour réinitialiser mon i 
  if (i > 4) { i = 0 };
}

// possible de stocker event.target dans une variable pour la réutiliser plus simplement (avec un nom qui a du sens)
