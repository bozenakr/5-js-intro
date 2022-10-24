/*
ARRAY - sąrašas, masyvas, matrica (default 2D, 3D, 4D....)
*/


/*=====================================================
const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;
const p5 = 6;
const p6 = 10;

const vidurkis = (p1 + p2 + p3 + p4 + p5 + p6) / 6;
console.log(`vidurkis:${vidurkis}`);
*/

const mokiniai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const mokiniuKiekis = mokiniai.length;
console.log(`mokiniu Kiekis: ${mokiniuKiekis}`);
const turiPapeikima = [true, false, false, true];

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

const ap1 = pazymiai[0]; 
const ap2 = pazymiai[1];
const ap3 = pazymiai[2];
const ap4 = pazymiai[3];
const ap5 = pazymiai[4];

const kiekis = pazymiai.length;

console.log(ap1, ap2, ap3, ap4, ap5,);


const pazymiuVidurkis = (ap1 + ap2 + ap3 + ap4 + ap5) / kiekis;


console.log(`pazymiu Vidurkis: ${pazymiuVidurkis}`);

/*
const pirkiniai = [
    ['agurkas', 3],
    ['pomidoras', 20],
    ['burokelis', 2],
    ['kefyras', 2],
    ['druska', 1],
    ['bliudas', 1],
    ['saukstas', 15],
    ['bulves', 30],
    ['kiausiniai', 10],
    ['grietine', 1],
];

console.log(pirkiniai);


// Reikia nupirkti 3 agurkas
// Reikia nupirkti 2 burokelis


const prekesIndex = 0;
const preke = pirkiniai[prekesIndex];
const prekesKiekis = preke[1];
const prekesPavadinimas = preke[0];


const prekesAprasas = `Reikia nupirkti ${prekesKiekis} ${prekesPavadinimas}.`;
console.log(preke);
console.log(prekesAprasas);

======================================================*/

// mokykla > klases > mokiniai > tevus > telefonai
const mokykla = [
    [1, [
        ['Petras', [
            ['Petro tete', [
                112,
            ]],
            ['Petro mama', [
                911,
            ]],
        ]],
        ['Maryte', [
            ['Marytes tete', [
                123456,
                123457,
                123458,
            ]],
            ['Marytes mama', [
                654321,
                654320,
            ]],
        ]],
    ]],
    [2, [
        ['Jonas', [
            ['Jono tete', []],
            ['Jono mama', [1111]],
        ]],
        ['Ona', [
            ['Onos tete', [
                99999,
            ]],
            ['Onos mama', []],
        ]],
    ]],
];

// Jono mamos tel kiekis
/*const klase = 2;
const mokinioIndex = 0;
const tevuIndex = 1;
const tevuTelefonaiIndex = 1;

const telefonai = mokykla[klase-1][1][mokinioIndex][1][tevuIndex][1];
console.log(telefonai);*/


// Marytes tecio telefono nr
/*const klase = 1;
const mokinioIndex = 1;
const tevuIndex = 1;

const telefonai = mokykla[klase-1][1][mokinioIndex][1][tevuIndex][1].length;
console.log(telefonai);
*/

// kiek mokykloje klasiu
/*const klase = 2;
const kiekKlasiu = mokykla.length;
console.log(kiekKlasiu);
*/
