export const makeSegment = (point1, point2) => cons(point1, point2);

export const startSegment = (segment) => car(segment);

export const endSegment = (segment) => cdr(segment);

export const segmentToString = (segment) =>
  `[${pointToString(startSegment(segment))}, ${pointToString(
    endSegment(segment)
  )}]`;

export const midpointSegment = (segment) => {
  const startPoint = startSegment(segment);
  const endPoint = endSegment(segment);
  const x = (getX(startPoint) + getX(endPoint)) / 2;
  const y = (getY(startPoint) + getY(endPoint)) / 2;

  return makePoint(x, y);
};
