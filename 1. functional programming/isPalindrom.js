const isPalindrom = (word) => {
    if (word.length < 2) {
        return true;
    }
    const firstIndex = 0;
    const lastIndex = word.length - 1;

    const firstLetter = word[firstIndex];
    const lastLetter = word[lastIndex];

    if (firstLetter !== lastLetter) {
        return false;
    }

    return isPalindrom(word.substring(firstIndex + 1, lastIndex))
};

export default isPalindrom;