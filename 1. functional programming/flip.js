// принимает функцию с двумя аргументами и меняет их местами
const flip = (f) => (a, b) => f(b, a);

const sub = (a, b) => a - b;
const reversedSub = flip(sub);
console.log(sub(10, 20));
console.log(reversedSub(10, 20));
