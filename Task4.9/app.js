let _min = +prompt(`Enter min range values`)
let _max = +prompt(`Enter max range values`)

const range = (min, max) => {
    const arr = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    return arr;
}

let array = range(_min, _max)
let _flag = Boolean()
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        _flag = true
        console.log(array[i] + " " + _flag);
    }
    else if (array[i] % 2 != 0) {
        _flag = false
        console.log(array[i] + " " + _flag);
    }
}