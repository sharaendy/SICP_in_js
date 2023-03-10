//var 1

const apply = (callCount, callback, arg) => {
    let count = callCount;
    let data = arg;

    while (count > 0) {
        data = callback(data);
        count -= 1;
    }

    return data;
}

console.log(apply(3, (a) => a * 10, 5));

// var 2

const apply2 = (callCount, callback, arg) => {
    if (callCount === 0) {
        return arg;
    }
    if (callCount === 1) {
        return callback(arg);
    }
    return apply2(callCount - 1, callback, callback(arg));
}

console.log('answer is', apply2(3, (a) => a * 10, 3));


// var 3

const apply3 = (count, fn, value) => (
    count === 0 ? value : apply3(count - 1, fn, fn(value))
);

export default apply;