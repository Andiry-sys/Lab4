let _num = +prompt(`Enter number`)


function Easy(num) {
    let _flag = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            _flag = false
            return _flag
        }
        else {
            return _flag
        }

    }
}


console.log(Easy(_num));