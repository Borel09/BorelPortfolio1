const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', '±', 'X', '%', 'AC', '=', '÷'];

let firstValue = ''; // represents the first value before a symbol (+,-,/,*)
let secondValue = ''; // represents the symbol that is clicked
let symbol = ''; 
let result = '';

const calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if(symbol === '+'){
        result = firstValue + secondValue;
    }

    if(symbol === '-'){
        result = firstValue - secondValue;
    }

    if(symbol === 'X'){
        result = firstValue * secondValue;
    }

    if(symbol === '÷'){
        result = firstValue / secondValue;
    }

    if(symbol === '%'){
        result = firstValue % secondValue;
    }
    display.innerText = result;
    firstValue = result;
    secondValue = '';
}

// literally listens for click and is connected to the display terminal
for(let button of controlButtons){
    button.addEventListener('click', () => {
        const btnObj = {innerText: btnValue} = button;
        const btnIsSymbol = allSymbols.includes(btnValue)

        if(!secondValue && btnValue === '=') return null;

        if(btnValue === 'AC'){
            firstValue = secondValue = symbol = '';
            return display.innerText = ''
        }

        if(firstValue && btnIsSymbol){
            secondValue && calculate();
            symbol = btnValue
        }




        else if (!symbol) {firstValue += btnValue;}
        else if(symbol){secondValue += btnValue;};


        
        









        if(btnValue !== '=') display.innerText += btnValue;

        console.log(btnIsSymbol)

        // const btnObj = {
        //     innerText: buttonValue
        // };
        // btnObj = button;
        // display.innerText += buttonValue;; // this line connects to display 
        
        // console.log(btnIsSymbol)


    })
}