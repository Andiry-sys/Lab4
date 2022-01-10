function sum(numArray) {
    let add = 0;
    for (let a = 0; a < numArray.length; a++) {
        let Addindex = numArray[a];
        add += Addindex;
    }
    return add;
}

console.log(sum([1, 2, 3, 4, 5]));