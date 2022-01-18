//DOM SELECTORS
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const currCount = document.querySelector('span');
const bodyBg = document.getElementById('bg-change')
const audio = document.getElementById('audio');



//EVENT LISTENERS
increase.addEventListener('click', increaseCount);
decrease.addEventListener('click', decreaseCount);
reset.addEventListener('click', resetCount);


//FUNCTIONS
let count = 0;

function resetCount(event) {
    count = 0;
    currCount.innerHTML = count;
    styledCount(count);
}

function increaseCount(event) {
    count++;
    currCount.innerHTML = count;
    styledCount(count);
}

function decreaseCount(event) {
    count--;
    currCount.innerHTML = count;
    styledCount(count);
}

function styledCount(count) {
    if (count > 0) {
        currCount.style.color = "green";
    } else if (count < 0) {
        currCount.style.color = "red";
    } else if (count === 0) {
        currCount.style.color = "black";
    }
    if (count === 69) {
        changeBg();
        playAudio();
    }
    if (count === 70 || count === 68) {
        revertBg();
    }
}


function revertBg(count) {
    bodyBg.style.backgroundImage = "none";
    bodyBg.style.backgroundColor = 'black';
}

function changeBg(event) {
    console.log('test');
    bodyBg.style.backgroundImage = "url('/images/download.jpg')";
    bodyBg.style.backgroundSize = 'cover';
}

function playAudio(event) {
    audio.play();
}