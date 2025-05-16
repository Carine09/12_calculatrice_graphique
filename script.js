const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const result = document.querySelector("#result");
const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear");
const keys = document.querySelectorAll(".key"); /* c'est un tableau d'éléments => tableau avec tous les chiffres */
const operators = document.querySelectorAll(".operator"); /* c'est un tableau d'éléments => tableau avec tous les chiffres */
let currentOperator = "";
let currentDigit = "";
let digitsArray = [];
let clickCount = 0;

function keepKeys() { /* permet de récupérer les chiffres tapées */
    keys.forEach(key => {
        key.addEventListener("click", () => {
            // console.log(key.value);
            currentDigit += key.value;
            screen.innerHTML = currentDigit;
            console.log(currentDigit);
            // console.log(typeof currentDigit) ==> c'est une string 
            console.log(digitsArray)
            // operators.forEach(operator => {
            //     operator.disabled = false;
            // });
            // if (clickCount < 2) {
            //     console.log("Clic numéro", clickCount + 1);
            //     clickCount++;
            // } else {
            //     console.log("Clics désactivés");
            //     keys.disabled = true; 
            // }
        })
    })
}


function keepOperators() { /* permet de récupérer les opérateurs tapés */
    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            // console.log(operator.value);
            currentOperator += operator.value;
            let currentDigitParse = Number(screen.innerHTML);
            // console.log(typeof currentDigitParse); 
            digitsArray.push(currentDigitParse);
            screen.innerHTML = currentOperator;
            currentDigit= "";
            console.log(currentOperator);
            // operators.disabled = true;
        })
    })
}

function clearScreen() { /* permet d'effacer le contenu du cadran' */
    clear.addEventListener("click", () => {
        screen.innerHTML = "";
        currentDigit = "";
        currentOperator = "";
        digitsArray = [];
        // clickCount = 0;
        console.clear();
    })
}

// function add() {

// }

// function calculate(){
//     result.addEventListener("click", () => {

//     })
// }

clearScreen();
keepKeys();
keepOperators();