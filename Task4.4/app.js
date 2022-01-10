let _num = +prompt(`Enter number`)
let _flag = true
function Easy(num) {
    for (let i = 0; i < _num; i++) {
        if (_num % i == 0) {
            _flag = false
            break
        }

    }
}
console.log(_flag);