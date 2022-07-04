console.log('Hello World');
//DOM SELECTORS
const shipVelBox = document.getElementById("shipV");
const burnTime = document.getElementById("burnT");
const shipAlt = document.getElementById("shipA");
const targetAlt = document.getElementById("targetA");
const submit = document.getElementById("submitMath");
const addBtn = document.querySelector('.submitBtn')
const resultsCont = document.getElementById("RC");
const headerDate = document.getElementById("date");
const clearStorage = document.getElementById('clearStorage');

//EVENT LISTENERS
window.addEventListener('load', dateMaker);
submit.addEventListener('click', checkInput);
//addBtn.addEventListener("keypress", pressEnter);
clearStorage.addEventListener('click', clear)

//FUNCTIONS
function pressEnter(event) {
    if (event.keyCode === 13) {
        checkInput();
        console.log('this is working')
    }
}

function checkInput() {
    if (shipVelBox.value === "" || burnTime.value === "" ||
        shipAlt.value === "" || targetAlt.value === "") {
        alert('Please fill in required fields.')
        return false;
    } else {
        addResults();
    }
}

function addResults(event) {
    const testBox = document.createElement('div');
    testBox.classList.add('holdME')
    testBox.id = "resultsID";
    resultsCont.appendChild(testBox);


    const finalResults = document.createElement('p');
    finalResults.classList.add('results');
    finalResults.innerText = distanceToBurn();
    testBox.appendChild(finalResults);
}

function distanceToBurn() {
    let shipV = shipVelBox.value;
    let burnT = burnTime.value;
    let shipA = shipAlt.value;
    let trgtA = targetAlt.value;


    let trueAlt = altitudeFromTarget(shipA, trgtA);
    console.log(trueAlt);


    let surfaceDistance = (shipV * burnT) / 2;
    let pythag = Math.pow(surfaceDistance, 2) + Math.pow(trueAlt, 2);
    let result = (Math.sqrt(pythag) / 1000).toFixed(2);
    let finalResult = result + "Km";

    //console.log(typeof result);
    return finalResult;
}


function altitudeFromTarget(shipAltitude, targetAltitude) {
    let result = shipAltitude - targetAltitude;
    return result;
}


function clear(e) {
    const item = e.target;
    if (item.id == 'clearStorage') {
        document.getElementById("resultsID").innerHTML = "";
        document.getElementById("shipV").value = "";
        document.getElementById("burnT").value = "";
        document.getElementById("shipA").value = "";
        document.getElementById("targetA").value = "";
    }

}


// DATE FUNCTION THAT RUNS ON PAGE LOAD
function dateMaker() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    let months = ["Jan", "Feb", "March", "April", "May",
        "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    let newDate = new Date();
    let dayOfWeek = days[newDate.getDay()];
    let month = months[newDate.getMonth()];
    let day = newDate.getDate();

    let result = dayOfWeek + ", " + month + " " + day;
    headerDate.innerHTML = result;
}