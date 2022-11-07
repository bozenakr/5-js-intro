/*
Ciklo for panaudojimas
1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
a.	0 … 0
b.	0 … 4
c.	0 … 100
d.	574 … 815
e.	-50 … 50
f.	-70 … 30
*/

// ---1---
console.clear ()


const list = [
    [0, 0],
    [0, 4],
    [0, 100],
    [574, 815],
    [-50, 50],
    [-70, 30],
]

let suma = [];
for (let i = 0; i < list.length; i = i + 1) {
  suma = suma + list[i];
}
console.log(suma);
