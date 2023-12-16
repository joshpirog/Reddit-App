//Generate random number between min and max
export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

//Shortens number to use letters for thousand, millions, billions, etc.
export const shortenNumber = (num, digits)  => {
    const units = ['k', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'];

    for (let i = units.length - 1; i >= 0; i -= 1) {
        const decimal = 1000 ** (i + 1);

        if (num <= -decimal || num >= decimal) {
            return +(num / decimal).toFixed(digits) + units[i];
        }

    }

    return num;
}