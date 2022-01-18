//console.log('Hello World');

//DOM SELECTORS
const colorBtn = document.querySelector('.colorChanger');

//EVENT LISTENERS
colorBtn.addEventListener('click', changeColor);

//FUNCTIONS
function changeColor(array){
    const colors = ['Red', 'Green', 'Purple', 'Orange', 'Black', 'Indigo', 'Violet', 'Yellow', 'Blue'];
    const background = document.getElementById('everything');
    const spanValue = document.querySelector('.hexCode');
    let randIndex = Math.floor(Math.random() * colors.length);
    let color = colors[randIndex];
    background.style.backgroundColor = color;
    spanValue.innerHTML = color;
    spanValue.style.color = color;
}


