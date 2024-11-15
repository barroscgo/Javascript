/*
1) Classificação por Idade: Escreva um programa que classifica uma pessoa
em categorias de idade: 'criança' (menos de 13 anos), 'adolescente' (entre 13 e
17 anos), 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a
estrutura if/else/else if.

------------------------------------------------------------
let pessoas = {
    nome : "Gabriel",
    idade : 22
};
if ( pessoas.idade < 13 ){
    console.log(`A pessoa ${pessoas.nome} é criança`)
} else if (pessoas.idade <= 17 ){
    console.log(`A pessoa ${pessoas.nome} é adolescente`)
} else if (pessoas.idade <= 64){
    console.log(`A pessoa ${pessoas.nome} é adulta`)
} else {
    console.log(`A pessoa ${pessoas.nome} é idosa`)
}
------------------------------------------------------------
*/

/*
2) Jogo de Adivinhação com Switch: Desenvolva um jogo simples de
adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. Use
switch para verificar a escolha e imprimir se acertou ou não.

------------------------------------------------------------
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const numeroSecreto = parseInt(Math.random() * 5) +1; 

rl.question(`Qual o numero sorteado ? entre 1 e 5`, palpite => {
    
    const palpiteInt = parseInt(palpite) ;
    switch (palpiteInt) {

        case numeroSecreto:
            console.log("Parabens você acertou!")
        break;
        case 2:
            console.log("Você errou!")
        break;
        default:
            console.log("Por favor insira um numero valido")
    }
    rl.close;
});
------------------------------------------------------------
*/

/*
3) Avaliação de Notas: Crie um programa que, dada uma nota de um aluno,
classifica a nota como 'Reprovado' (menos de 6), 'Recuperação' (entre 6 e 7),
ou 'Aprovado' (mais de 7). Use switch.
*/

const aluno = {
    nome: "Gabriel",
    nota: 9
}

switch (aluno.nota){
    case 6 || 7:
        console.log(`O Aluno ${aluno.nome} está em recuperação`)
    break;
    case 8 || 9 || 10:
        console.log(`O Aluno ${aluno.nome} está Aprovado`)
    break;
    default:
        console.log(`O Aluno ${aluno.nome} está reprovado`)
}