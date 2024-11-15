/*
Função que Calcula a Área de um Retângulo: Crie uma função que
calcula a área de um retângulo dado largura e altura.

----------------------------------------------------------
const calcularAreaRetangulo = (largura, altura) => {
    return largura * altura;
  };
  
  const largura = 5;
  const altura = 10; 
  const area = calcularAreaRetangulo(largura, altura);
  console.log(`A área do retângulo é: ${area}`);
----------------------------------------------------------

Função para Verificar Número Par: Faça uma função que recebe um
número e retorna true se for par e false se for ímpar.

----------------------------------------------------------
function isPar (numero) {
    if (numero % 2 == 0){
        return true
    } else {
        return false
    }
  };

  const numero = 5; 
  const resultado = isPar(numero);
  console.log(`${numero} é par? ${resultado}`);
----------------------------------------------------------

Converter Polegadas em Centímetros: Escreva uma função que
converte polegadas em centímetros.

----------------------------------------------------------
let polegadas = 100
function conversor (polegadas) {
    let centimetros = (polegadas*2.54)
    return centimetros;
}
console.log(`${polegadas} polegadas em igual a ${conversor(polegadas)} em centimetros`);
----------------------------------------------------------

IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC)

----------------------------------------------------------
function calculaIMC (peso, altura) {

    let imc = peso / (altura ** 2);

    if (imc >= 18.5 && imc <= 24.9){
         console.log("Você está no imc ideal");
    } else {
         console.log("Você está fora do imc ideal");
    }
}
let peso = 63;
let altura = 1.8;
calculaIMC(peso, altura);
----------------------------------------------------------

 Maiúsculas para Minúsculas: Crie uma função que recebe uma string e
retorna a mesma string em letras minúsculas.

----------------------------------------------------------
function converteMaiusculas (frase) {
    console.log(frase.toLowerCase());
}
let frase = "AI MEU DEUS";
converteMaiusculas(frase);
----------------------------------------------------------

Crie uma arrow function chamada multiplicaPorDez que recebe um
número como parâmetro e retorna o valor multiplicado por 10.
*/

let numero = 10;
let multiplicaPorDez = (numero) =>  numero * 10; 
console.log(multiplicaPorDez(numero))

