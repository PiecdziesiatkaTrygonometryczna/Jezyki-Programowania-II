'use strict';
const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

const wystapily = []
for (let i in numbers) {
    let flag = false
    for (let j in wystapily){
        if (numbers[i] == wystapily[j]) {
            flag = true
        }
    }
    if (flag == false) {
        wystapily[wystapily.length] = numbers[i]
    }
}

console.log(wystapily)


// czy mozna uzyc push?