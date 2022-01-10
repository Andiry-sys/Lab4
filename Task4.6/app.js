let _num1 = +prompt(`Enter number`)
let _num2 = +prompt(`Enter number`)

function Fun(num1, num2) {
    if (num2 == 0) {
        return
    }
    else if ((num1 - (num1 / num2) * num2) == 0) {
        return true
    }
    else {
        return false
    }


}


console.log(Fun(_num1, _num2));
