let _array = [1, 2, 3, 4, 5]
function Max(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    console.log(max)
}
Max(_array)
