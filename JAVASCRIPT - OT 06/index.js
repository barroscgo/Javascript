/*
Criar e Acessar um Objeto: Crie um objeto chamado carro com
propriedades como marca, modelo e ano. Em seguida, acesse e
imprima a propriedade modelo do objeto.
---------------------------------------------------

let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 1993
}
console.log(carro);
/*
---------------------------------------------------
Adicionar e Modificar Propriedades de um Objeto: A partir do objeto
carro criado, adicione uma propriedade cor e modifique o ano do
carro. Imprima o objeto modificado.

---------------------------------------------------
carro.cor = "preto";
carro.ano = 1999;
console.log(carro);
---------------------------------------------------

Criar um Método em um Objeto: Crie um objeto chamado calculadora
com um método soma que aceite dois números e retorne a soma deles.

---------------------------------------------------
let calculadora = {
    soma: function(num1, num2){
        return num1+num2;
    }
}
console.log(calculadora.soma(2,2));
---------------------------------------------------

/*
Iterar Sobre as Propriedades de um Objeto: Dado um objeto, use um
loop for...in para iterar sobre todas as suas propriedades e imprimir
cada uma delas.

---------------------------------------------------
for (let chave in carro){
    console.log(`${chave}: ${carro[chave]}`);
}
---------------------------------------------------

/*
 Entendendo Referências de Objetos: Crie um objeto livro com
propriedades como titulo e autor. Em seguida, crie outra variável
que referencie o objeto livro e modifique a propriedade titulo.
Verifique se o objeto original foi alterado.
 
---------------------------------------------------
let livro = {
    titulo: "Hobbit",
    autor: "J.R.R. Tolkien"
}
let copia = livro;
copia.titulo = "Senhor dos Anéis";
console.log( livro )
console.log( copia )
---------------------------------------------------

Usando Métodos Avançados de Objeto: Dado um objeto, use o método
Object.keys() para listar todas as chaves do objeto. Repita o
processo com Object.values() para listar todos os valores.
*/

let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 1993
}

console.log(Object.keys(carro));
console.log(Object.values(carro));
console.log(Object.entries(carro));