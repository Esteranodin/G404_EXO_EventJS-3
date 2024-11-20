const buttonDisplay = document.querySelector('.button');
const bodyBackGround = document.querySelector('body');
const caseText = document.querySelector('.case')

buttonDisplay.addEventListener('click', handleDisplayText);

function handleDisplayText(event) {
   
    caseText.classList.replace('case', 'caseDisplay');
    bodyBackGround.classList.add('bodyGrey');
    event.stopPropagation();
};

bodyBackGround.addEventListener('click', handleReset);

function handleReset (event){   
    if (event.target !== caseText && event.target !== document.querySelector('#text')) {
bodyBackGround.classList.remove('bodyGrey');
caseText.classList.toggle('case');
};

};


