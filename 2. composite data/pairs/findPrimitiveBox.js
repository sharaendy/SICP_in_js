export const findPrimitiveBox = (pair) => {
  const isCarPair = isPair(car(pair));
  const isCdrPair = isPair(cdr(pair));

  if (!isCarPair && !isCdrPair) {
    return pair;
  }

  if (isCarPair) {
    return findPrimitiveBox(car(pair));
  }

  if (isCdrPair) {
    return findPrimitiveBox(cdr(pair));
  }
};
