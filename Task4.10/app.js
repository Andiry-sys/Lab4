let _day = prompt(`Enter day `)
let _month = prompt(`Enter month `)
let _year = prompt(`Enter year `)

let _date = _day + "." + _month + "." + _year

if (_year % 4 != 0 || _year % 100 == 0 & _year % 400 != 0) {
    alert(`${_date} not a leap year`);
}
else {
    alert(`${_date} leap year`);
}