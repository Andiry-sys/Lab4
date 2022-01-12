function sum() {
    let add = 0;
    for (let a = 0; a < arguments.length; a++) {
        let Addindex = arguments[a];
        add += Addindex;
    }
    return add;
}

console.log(sum(1, 2, 3, 4, 5));