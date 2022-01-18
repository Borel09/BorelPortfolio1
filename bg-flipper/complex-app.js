//DOM SELECTORS
const colorBtn = document.querySelector('.colorChanger');
const spanValue = document.querySelector('.hexCode');

//EVENT LISTENERS
colorBtn.addEventListener('click', colorChange);


//FUNCTIONS
function colorChange(arr){
    const background = document.getElementById('everything');
    const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let charLimit = 6;
    let result = "#";

    for(let i = 0; i < charLimit; i++){
        let randIndex = Math.floor(Math.random() * chars.length)
        result += chars[randIndex]
    }
    background.style.backgroundColor = result;
    spanValue.innerHTML = result;
}

