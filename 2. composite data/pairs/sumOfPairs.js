export const sumOfPairs = (pair1, pair2) =>
  cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));
