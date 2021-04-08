//console.log('radi');



const hightMark = 1.88;
const massMark = 95;

const hightJohn = 1.88;
const massJohn = 95;

const markBMI = massMark / hightMark ** 2;
const johnBMI = massJohn / hightJohn ** 2;
console.log(markBMI, johnBMI);

const higherBMI = markBMI > johnBMI;

console.log(higherBMI);

if (markBMI > johnBMI) {
    console.log('Mark has higher BMI');
} else if (markBMI === johnBMI) {
    console.log('Theirs BMI is equal');
} else {
    console.log('john has higher BMI');
}