/*
KINTAMIEJI 
const
let
*/



// console.log('Numbers...');
// console.log('Aprasymas...');


// const a = 0;
// const b = 1;
// const c = 99;
// const d = 9999;

// const neigiamas = -1;
// const begalybe = Infinity;
// const neskaicius = NaN;
// const dalybaIsNulio = 7 / 0;

// console.log(dalybaIsNulio);


// const nesamone = 2;
// const day1 = 5;
// const day2 = 15;
// const day3 = nesamone;
// const totalSum = day1 + day2 + day3;

// console.log(totalSum);

// const laipsnis3 = 2 ** 4;
// console.log(laipsnis3);


// const saknis9 = Math.sqrt(9);
// console.log(saknis9);


// const nr1 = 0.9;


// const round1 = Math.round(nr1);
// console.log(nr1, '-->', round1);

// const nr2 = 0.499999;
// const round2 = Math.round(nr2);
// console.log(nr2, '==>', round2);


// const nr3 = 1.9;

// const ceil1 = Math.floor(nr3);
// console.log(nr3, '-->', ceil1);

// const nr4 = 5.499999;
// const round4 = Math.floor(nr4);
// console.log(nr4, '==>', round4);


// const min = Math.min(2,5,6,1.2,8);
// console.log(min);


// const nr11 = 10;
// const nr12 = 12;
// const nr13 = 25;

// const maziausias = Math.min(nr11, nr12);
// console.log(maziausias);

// const saknis = Math.sqrt(nr13);
// console.log(saknis);

// const kvadratas = Math.PI * nr11;
// console.log(kvadratas);


// const round = Math.pow(2,3);
// console.log(round);

// console.log('777');
// console.log(777);
// console.log('999999');


// const a = 2;
// const b = 5;
// const sum = a + b;

// console.log(sum);


//=================LIEKANA==========================
// console.log('#### Liekana');

// 7 / 3 = 1
// 7 / 2 = 1
// 9 / 4 = 1
// 9 / 5 = 4
// 13 / 5 = 3

// const n73 = 7 % 3;
// console.log(n73);

// const n95 = 9 % 5;
// console.log(n95);

// const n135 = 13 % 5;
// console.log(n135);

// const n105 = 10 % 5;
// console.log(n105);


//=================AR LYGINIS========================
// function arLyginis(n) {
//     return n % 2 === 0;
// }

// console.log(arLyginis(2), '->', true);
// console.log(arLyginis(22), '->', true);
// console.log(arLyginis(21), '->', false);
// console.log(arLyginis(7), '->', false);
// console.log(arLyginis(7.77), '->', false);
// console.log(arLyginis(3.14), '->', false);
// console.log(arLyginis(4.001), '->', false);

// function sveikaDalis(skaicius, daliklis) {
//     return (skaicius - (skaicius % daliklis)) / daliklis;
// }

// console.log(sveikaDalis(7, 3), '->', 2);
// console.log(sveikaDalis(17, 5), '->', 3);
// console.log(sveikaDalis(2, 2), '->', 1);
// console.log(sveikaDalis(2, 5), '->', 0);


//===============SKAICIUS I TEKSTA============================
// console.log('#### Skaicius i teksta');
// const g1 = 7;
// const numberAsString1 = g1.toString();
// console.log(numberAsString1);

// const g2 = 7;
// const numberAsString2 = '' + g2;
// console.log(numberAsString2);



// console.log('#### Apvalinimas po kablelio');

// const a = (2 / 3).toFixed(2);
// console.log(a);

// console.clear();
///===============IS STRINGO I NUMBER====PARSINIMAS=====================
console.log('#### Skaiciaus parsinimas (is ne skaiciaus atstatymas i skaiciu)');
const sp1 = '777';
const sp1n = parseInt(sp1);
console.log(sp1, sp1n);

const sp2 = '777.77';
const sp2n = parseInt(sp2);
console.log(sp2, sp2n);

const sp3 = '777.77';
const sp3n = parseFloat(sp3);
console.log(sp3, sp3n);

const sp4 = '777';
const sp4n = parseFloat(sp4);
console.log(sp4, sp4n);

const sp5 = '888';
const sp5n = +sp5;
console.log(sp5, sp5n);

const sp6 = '888.88';
const sp6n = +sp6;
console.log(sp6, sp6n);

console.log('----------');

console.log(parseInt(1));
console.log(parseInt(3.14));
console.log(parseInt('1'));
console.log(parseInt('3.14'));
console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt(''));
console.log(parseInt([]));
console.log(parseInt([10]));
console.log(parseInt([10, 20]));
console.log(parseInt([10, 20, 30]));
console.log(parseInt(['10']));
console.log(parseInt(['10', '20']));
console.log(parseInt(['10', '20', '30']));
console.log(parseInt([[[[[100]]]]]));
console.log(parseInt({}));
console.log(parseInt({ a: 1 }));
console.log(parseInt({ a: '1' }));
console.log(parseInt({ 1: 'a' }));
console.log(parseInt({ 1: 1 }));

console.log('----------');

console.log(parseFloat(1));
console.log(parseFloat(3.14));
console.log(parseFloat('1'));
console.log(parseFloat('3.14'));
console.log(parseFloat(true));
console.log(parseFloat(false));
console.log(parseFloat(''));
console.log(parseFloat([]));
console.log(parseFloat([10]));
console.log(parseFloat([10, 20]));
console.log(parseFloat([10, 20, 30]));
console.log(parseFloat(['10']));
console.log(parseFloat(['10', '20']));
console.log(parseFloat(['10', '20', '30']));
console.log(parseFloat([[[[[100]]]]]));
console.log(parseFloat({}));
console.log(parseFloat({ a: 1 }));
console.log(parseFloat({ a: '1' }));
console.log(parseFloat({ 1: 'a' }));
console.log(parseFloat({ 1: 1 }));

console.log('----------');

console.log(+1);
console.log(+3.14);
console.log(+'1');
console.log(+'3.14');
console.log(+true);
console.log(+false);
console.log(+'');
console.log(+[]);
console.log(+[10]);
console.log(+[10, 20]);
console.log(+[10, 20, 30]);
console.log(+['10']);
console.log(+['10', '20']);
console.log(+['10', '20', '30']);
console.log(+[[[[[100]]]]]);
console.log(+{});
console.log(+{ a: 1 });
console.log(+{ a: '1' });
console.log(+{ 1: 'a' });
console.log(+{ 1: 1 });


console.clear();
//PHP uzduotis-testas
// masyvas 10 elementu atsitiktiniai nuo 1 iki 11 kiekviena karta sugeneruoja naujus atsitiktinius skaicius

//===========1 sprendimas==========
// let masyvas = [];

// for (let i = 0; i < 12; i++) {
//     masyvas.push(Math.floor(Math.random() * 11) + 1)
//     // masyvas.push(i);
// }
// console.log(masyvas);

//========2 sprendimas=============
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const masyvas = [...Array(10)].map(() => random(1, 11));

console.log(masyvas);



