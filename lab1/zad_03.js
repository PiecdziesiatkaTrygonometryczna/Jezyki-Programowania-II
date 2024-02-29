const array = [1, 5, 8, -3, -4 ,9, -15]

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let min = array[0];
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
    if (array[i] > max) {
        max = array[i];
    }
}

console.log("min: " + min + ", max: " + max);

let arry2 = []

for (let i = 0; i < array.length; i++) {
    arry2.push(array[array.length - i - 1]);
}
console.log(arry2)