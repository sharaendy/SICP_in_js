// реализация инструкции If через каррирование

const If = (f) => f;

const True = (x) => () => x;
const False = () => (y) => y;
