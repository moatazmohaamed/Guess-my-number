`use strict`;

const startGuessing = document.getElementById(`startGuessing`);
const number = document.getElementById(`number`);
const score = document.getElementById(`score`);
const check = document.getElementById(`check`);
const highScore = document.getElementById(`highScore`);
const guessInput = document.getElementById(`guess`);

const again = document.getElementById(`again`);


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guessNumber;

function displayMsg(message) {
    startGuessing.textContent = message;
}

check.addEventListener(`click`, () => {
    guessNumber = +guessInput.value;
    if (!guessNumber) {
        displayMsg(`⚠️ No number! `)
    } else if (guessNumber === secretNumber) {
        startGuessing.textContent = `🥳 Correct Number! `
        number.textContent = secretNumber;
        document.body.style.backgroundColor = `#60b347`;
        number.style.width = `20rem`;
        if (highScore.textContent < score.textContent) {
            highScore.textContent = score.textContent
        }

    } else if (guessNumber !== secretNumber) {
        displayMsg(guessNumber < secretNumber ? `🤷‍♀️ Try Higher.. ` : `🤷‍♀️ Try Lower.. `)
        score.textContent -= 1
    } else {
        displayMsg(`📛 You lost the game! `)
        score.textContent = 20;
    }
})

again.addEventListener(`click`, () => {
    score.textContent = 20;
    document.body.style.backgroundColor = `#222`
    guessInput.value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMsg("Start guessing...")
    number.textContent = `?`;
})