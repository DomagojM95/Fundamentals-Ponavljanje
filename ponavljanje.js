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



function fruitCutPieces(fruit) {
    return fruit * 7;
};

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutPieces(apples);
    const orangesPieces = fruitCutPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`koalas wins (${avgKoalas} vs ${avgDolphins})`);
    }
}

const winner = checkWinner(150, 70);



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const ages = [1990, 1965, 2005, 2010, 2020];

const age1 = calcAge(ages[0]);
const age2 = calcAge(ages[3]);
const age3 = calcAge(ages[ages.length - 1]);

console.log(age1, age2, age3);
const years = [calcAge(ages[0]), calcAge(ages[2]), calcAge(ages[ages.length - 1])];

console.log(years);



const friends = ['Michael', 'Steven', 'Peter'];
// Add elements


friends.push('Jay');
console.log(friends);
const newLenght = friends.unshift('Bob');
console.log(friends);
console.log(newLenght);

// Remove elements

friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));

if (friends.includes('Steven')) {
    console.log('I have friend called Steven');
}



const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [(bills[0] + calcTip(bills[0])), (bills[1] + calcTip(bills[1])), (bills[2] + calcTip(bills[2]))];

console.log(totals);


const domagoj = {
    firstName: 'Domagoj',
    lastName: 'Marković',
    age: 2021 - 1995,
    job: 'Tehničar',
    friends: ['bob', 'kevin', 'mike', 'steve']
};

const intrestedIn = prompt('what do you whant to know aobut Domagoj? firstName, lastName, age, job, friends?');
//console.log(domagoj[intrestedIn]);

if (domagoj[intrestedIn]) {
    console.log(domagoj[intrestedIn]);
} else {
    console.log('wrong reguest! what do you whant to know aobut Domagoj? firstName, lastName, age, job, friends?')
}

domagoj.location = 'Đakovo';
domagoj['fejs'] = 'marka78';

console.log(domagoj);

console.log(`${domagoj.firstName} has ${domagoj.friends.length} and his best friend is ${domagoj.friends[0]}`);

*/

const domagoj = {
    firstName: 'Domagoj',
    lastName: 'Marković',
    birthYear: 1995,
    job: 'Tehničar',
    friends: ['bob', 'kevin', 'mike', 'steve'],
    hasDriversLicence: false,

    // calcAge: function () {
    //     return 2037 - this.birthYear
    //  }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${domagoj.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence`
    }
};
domagoj.calcAge()

console.log(domagoj.age);

console.log(domagoj.getSummary());
