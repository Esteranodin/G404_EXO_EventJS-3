const resultParagraph = document.querySelector('#resultat');
// utilisation d'un tableau dit set car il ne peut y avoir qu'une fois la même valeur !
const KeyPressed = new Set();


document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {

    const key = event.key.toUpperCase();

    if (key === "B" || key === "G") {
        KeyPressed.add(key);
    }

    if (KeyPressed.has('B') && KeyPressed.has('G')) {
        resultParagraph.innerText = "Youhou !"
    }
    // has pour un set (qui est un objet) = contains d'un tableau
};


document.addEventListener('keyup', handleKeyUp);

function handleKeyUp(event) {
    const key = event.key.toUpperCase();

    if (key === "B" || key === "G") {
        KeyPressed.delete(key);
        resultParagraph.innerText = "";
    }
};