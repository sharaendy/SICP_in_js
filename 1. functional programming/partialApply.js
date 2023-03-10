// частичное применение второго аргумента входящей функции
const partialApply = (fn, arg2) => (arg1) => fn(arg1, arg2);

const pow = (a, b) => a ** b;

const f1 = partialApply(pow, 2);
console.log(f1(5));
