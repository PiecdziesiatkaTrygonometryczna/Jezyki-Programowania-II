let rry = [4, 5, 9]


let a = rry[0]
let b = rry[1]
let c = rry[2]
let temp = 0

if (a > b) {
    temp = a
    a = b
    b = temp
}

if (b > c) {
    temp = b
    b = c
    c = temp
}

if (c > b) {
    temp = a
    a = b
    b = temp
}

if (a + b > c) {
    console.log("mozna zbudowac trojkat")
} else {
    console.log("nie mozna")
}
