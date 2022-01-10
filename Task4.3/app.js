let _num1 = +prompt(`Enter number `)
let _num2 = +prompt(`Enter number `)
let _sym = prompt(`Enter symvol (+,-,*,/)`)

function calc(a, b, sym) {
    switch (sym) {
        case '+':
            {
                return a + b
            }
        case '-':
            {
                return a - b
            }
        case '*':
            {
                return a * b
            }
        case '/':
            {
                if (b > 0) {
                    return a / b
                }
                else {
                    console.log('ERROR');
                }
            }


    }
}

console.log(calc(_num1, _num2, _sym));
