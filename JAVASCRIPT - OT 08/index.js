/*
Criar e Adicionar Valores ao Set: Crie um Set chamado frutas e
adicione nele três frutas diferentes. Depois, tente adicionar uma fruta
que já está no Set.

------------------------------------------
let meuSet = new Set();
meuSet.add('maça');
meuSet.add('banana');
meuSet.add('laranja');
meuSet.add('maça');
console.log(meuSet)
------------------------------------------

/*
Verificar Valores no Set: Use o método has para verificar se uma fruta
específica está no seu Set frutas.

------------------------------------------
console.log(meuSet.has('maça'))
------------------------------------------

/*
 Remover Valores do Set: Use o método delete para remover uma fruta
do seu Set frutas.

------------------------------------------
meuSet.delete('maça')
console.log(meuSet)
------------------------------------------

. Limpar o Set: Use o método clear para limpar todo o seu Set frutas.

------------------------------------------
meuSet.clear();
console.log(meuSet)
------------------------------------------

Tamanho do Set: Crie um Set com vários valores e use a propriedade
size para imprimir o número de elementos no Set

------------------------------------------
console.log(meuSet.size)
------------------------------------------

Iterar Sobre um Set: Use um loop for...of para iterar sobre o seu Set
e imprimir cada valor.

------------------------------------------
for ( novoSet of meuSet){
    console.log(novoSet)
}
------------------------------------------

Criar um Set a Partir de um Array: Crie um array com alguns valores
duplicados. Em seguida, crie um Set a partir desse array para remover
as duplicatas.
*/

let meuArray = ['casa', 'carro', 'moto', 'carro']
console.log(meuArray);
let meuSet = new Set(meuArray)
console.log(meuSet)