function compact(arr) {
    if (arr.length > 10)
        return arr.slice(0, 10);
    return arr;
}
console.log(compact(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']));
