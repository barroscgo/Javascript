/*
Criar e Adicionar Pares Chave-Valor no Map: Crie um Map chamado
livros e adicione nele três pares de chave-valor, onde a chave é o
título do livro e o valor é o autor.
--------------------------------------


let meuMap = new Map();
meuMap.set('titulo', 'Hobbit');
meuMap.set('valor', 39.99);
meuMap.set('autor', 'Tolkien')
console.log(meuMap);
/*
--------------------------------------
 Acessar Valor no Map: Acesse o valor associado a uma das chaves no
Map livros que você criou e imprima o nome do autor.

--------------------------------------
console.log(meuMap.get('autor'));
--------------------------------------

 Iterar Sobre um Map: Use um loop for...of para iterar sobre o Map
livros e imprimir todos os pares chave-valor.

--------------------------------------
for (let [chave, valor] of meuMap){
    console.log(`${chave}: ${valor}`);
}
--------------------------------------

Usando Métodos do Map: size, delete, has: No seu Map livros, use o
método size para imprimir o número de livros, delete para remover um
livro pelo título e has para verificar se um livro ainda está no Map.

--------------------------------------
console.log(meuMap.size)
meuMap.delete('autor')
console.log(meuMap.has('autor'))
--------------------------------------

 Map com Tipos de Chaves Diferentes: Crie um Map chamado colecao
que contém diferentes tipos de chaves (como string, number, object)
e seus respectivos valores.

--------------------------------------
let casa = { 'rua': 'rua dos perdidos', 'numero': 8000}
let colecao = new Map()
colecao.set('nome','vinicius')
colecao.set('idade', 22)
colecao.set('ano', 2024)
colecao.set( 10, 9)
colecao.set( casa, { bairro: "petrópolis"})
console.log(colecao);
--------------------------------------

*/