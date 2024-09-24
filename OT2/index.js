let animais = ['Leão', 'Zebra', 'Porco'];

animais.push('Gambá'); //adicionar elemento ao array
console.log(animais)
animais.shift(); //Tirar o primeiro elemento do array
console.log(animais);
animais.unshift('Canguru'); // Adicionar na primeira posição da array
console.log(animais);
animais[1] = 'Coala'; //Alterar elemento especifico na array 
console.log(animais);

let frutas = ['Laranja', 'Maça', 'Limão'];
let totalFrutas = frutas.length;

console.log(totalFrutas);

for(let i = 0; i<frutas.length; i++){
    console.log(frutas[i]); //Mostra cada fruta
}