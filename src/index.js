import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello e-Leve!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//Escopo de variável global
//É aquela que pode ser acessada em qualquel lugar

var animal = 'cat';
console.log(animal);

//Escopo de variavel local
//Só pode ser acessada dentro da função

function sayAnimal () {
  var cachorro = 'Buldog';
  console.log(cachorro);
}

sayAnimal(); //para chamar a funçao

//outro exemplo de variavel

var city = 'RJ';
console.log(city);

//let = variavel de escopo local (so pode ser acessada dentro da funcão) 
let cidade = 'caxias';
console.log(cidade);

//Constante 
const valor = 50;
console.log(valor);

//Objeto
const Ana = {
  name: 'Ana Beatriz',
  age: 23
};

console.log(Ana);


Ana.age = '24'; /*alterando o valor da constante. Que só é possivel com objetos */
Ana.name = 'Bia';

Object.freeze(Ana);/*congelando a partir desse ponto o objeto, para que ele não possa ser alterado */

//Tipos de Dados

let A = 1; //inteiro
let B = 3.14;//float - nº flutuantes
let C = 'Caracter';//string - caracteres
console.log(A);
console.log(B);
console.log(C);

//Variaveis booleans
//tem dois tipos tre e false. Lembre-se do 0 e 1!
let ok = true;
let cancel = false;

//teste de condições de boolean
let x = 4;

if (x >= 5) {
  console.log(ok);
} else console.log(cancel);

//Concatenação (Antes do ES6)
const rio = {
  live: 'RJ',
  love: 'Arraial do Cabo'
}

const text = 'Eu moro em ' + rio.live + ' e sou apaixonada por ' + rio.love +'!';
console.log(text);

//Concatenação com ES6
const newtex = `E moro em ${rio.live} e sou apaixonada por ${rio.love}!`;
console.log(newtex);

//Pulando linha (Ante do ES6)
const fruits = 'banana' + "\n" + 'orange' + "\n" + 'apple';
console.log(fruits);

//Pulando linha com ES6
const newfruits = `banana
orange
apple`;
console.log(newfruits)