//console.log('radi');

/*

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



const hightMark = 1.76;
const massMark = 95;

const hightJohn = 1.88;
const massJohn = 95;

const markBMI = massMark / hightMark ** 2;
const johnBMI = massJohn / hightJohn ** 2;


if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`);
} else {
    console.log(`john's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`)
};



const avgDolphins = (97 + 112 + 101) / 3
const avgKoalas = (109 + 95 + 123) / 3

if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log('Koalas wins');

} else if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log('dolphins wins');
} else {
    console.log('nobody wins');
};





const dan = 'subota';


switch (dan) {
    case 'ponedeljak':
        console.log('laganica trcanje');
        console.log('na posao u vu');
        break;
    case 'utorak':
        console.log('trening snage i rame');
        break;
    case 'srijeda':
    case 'cetvrtak':
        console.log('lagano trcanje');
        break;
    case 'petak':
        console.log('trening snaage i rame');
        break;
    case 'subota':
    case 'nedjelja':
        console.log('negdje na izlet');
        break;
    default:
        console.log('nevazeci dan');
}



const dan = 'cetvrtak';

if (dan === 'ponedeljak') {
    console.log('laganica trcanje, na posao u vu');
} else if (dan === 'utorak') {
    console.log('trening snage i rame');
} else if (dan === 'srijeda' || dan === 'cetvrtak') {
    console.log('lagano trcanje');
} else if (dan === 'petak') {
    console.log('trening snage i rame');
} else if (dan === 'subota' || dan === 'nedjelja') {
    console.log('negdje na izlet');
} else {
    console.log('nevazeci dan');
}


const age = 17;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
};
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);




const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`the bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);



'use strict';


function fruitProcessor(apples, oranges) {
    const jucie = `juice with ${apples} apples and ${oranges} oranges.`;
    return jucie;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 7));

function describeCountry(country, population, capitality) {
    const description = `${country} has ${population} million people nad its capital citiy is ${capitality}`
    return description;
}


const country1 = describeCountry('Finland', 6, 'Helsinki');
console.log(country1);
const country2 = describeCountry('Hrvatska', 4, 'Zagreb'); console.log(country2);



function calcAge1(birthYear) {
    return 2037 - birthYear;
};

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);



const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Domagoj'));

*/