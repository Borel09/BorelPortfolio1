const myArray = [1, 2, 3, 4, 5];

function nextInLine(arr, num){
    arr.push(num);
    arr.shift();
    return num
}

console.log(nextInLine(myArray, 3));
