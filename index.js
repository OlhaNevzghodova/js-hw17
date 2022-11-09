const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Task #1

const sum = array.filter(item => item > 0).reduce((sum, current) => sum + current, 0);
console.log(sum);

// Task #2

const minNumber = Math.min(...array);
const serialNumberOfMinNumber = array.indexOf(minNumber) + 1;
console.log(`${minNumber}, ${serialNumberOfMinNumber}`);

// Task #3

const maxNumber = Math.max(...array);
const serialNumberOfMaxNumber = array.indexOf(maxNumber) + 1;
console.log(`${minNumber}, ${serialNumberOfMaxNumber}`);

// Task #4

let quantityOfNegativeElements = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        quantityOfNegativeElements++;
    }
}
console.log(quantityOfNegativeElements);

// Task #5

let quantityOfPositiveOddNumbers = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        quantityOfPositiveOddNumbers++;
    }
}
console.log(quantityOfPositiveOddNumbers);

// Task #6

let quantityOfPositiveEvenNumbers = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        quantityOfPositiveEvenNumbers++;
    }
}
console.log(quantityOfPositiveEvenNumbers);

// Task #7

const sumOfEvenPositiveNumbers = array.filter(item =>
    item > 0 && item % 2 === 0).reduce((sum, current) => sum + current, 0);
console.log(sumOfEvenPositiveNumbers);

// Task #8

const sumOfOddPositiveNumbers = array.filter(item =>
    item > 0 && item % 2 !== 0).reduce((sum, current) => sum + current, 0);
console.log(sumOfOddPositiveNumbers);

// Task #9

const arrayOfPositiveNumbers = array.filter(item => item > 0);
let productOfPositiveNumbers = 1;
for (i = 0; i < arrayOfPositiveNumbers.length; i++) {
    productOfPositiveNumbers = productOfPositiveNumbers * arrayOfPositiveNumbers[i];
}
console.log(productOfPositiveNumbers);

// Task #10

let newArray = array.map((element) => {
        if (element !== maxNumber) {           // maxNumber has been found in task #3
            return 0
        } else {
            return maxNumber
        }
    }
);
console.log(newArray);
