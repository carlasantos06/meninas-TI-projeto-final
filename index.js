/* console.log(prompt("Qual é o seu nome"));

var variavel = 100;
const variavelconstante = 200;

variavel = 400


const corDeFundo = "#fefefe";


const nome = "Gabriel";
const idade = 30;
console.log("olá!", "meu nome é", nome, "e eu tenho", idade, "anos");
 */

/* const altura = 1.79;
const temperatura = -20;

const nome = "Yuzo";
var idade = "23"; 

 */

/* var souUmboolean = true;
console.log(souUmboolean);
souUmboolean = false;
console.log(souUmboolean); */

/* const nome = "carla";
const SobreNome = "santos";
const idade = 17;
const souEstudante = true;
console.log("Nome: ", nome, "SobreNome: ", SobreNome, "idade: ", idade, "é estudante? ", souEstudante); 

console.log("Nome: " + nome + " Sobrenome: " + SobreNome + " Idade: " + idade + " é estudante? " + souEstudante);
var todoTexto = "Nome: " + nome + " Sobrenome: " + SobreNome + " Idade: " + idade + " é estudante? " + souEstudante;

console.log(todoTexto)

console.log(typeof(nome));
console.log(typeof(sobreNome));
console.log(typeof(idade));
console.log(typeof(souEstudante)); */

/* const idadeNumero = 23;
const idadeTexto = idadeNumero.toString();

console.log(typeof idadeNumero);
console.log(typeof idadeTexto);
 */

/* const idadeTexto = "23";
const idadeNumero = Number(idadeTexto);

console.log(typeof idadeTexto);
console.log(typeof idadeNumero); */
/* 
var n1 = 10;
var n2 = 5;
var n3 = 3;


var soma, subtracao, divisao, multiplicacao;

soma = n1+ n2; //15
subtracao = n1- n2;
divisao = n1/ n2;
multiplicacao = n1 * n2;

console.log(soma)
console.log(subtracao)
console.log(divisao)
console.log(multiplicacao) */

/* var numero = 7;
console.log(numero % 2); */

/*  var n1 = 2;
var n2 = 44456;
var n3 = 2;
var n4 = 3; */
/*
console.log(n1 === n2);
console.log(n1 === n3);

console.log(n1 !== n2);
console.log(n1 !== n3);
 */

/* console.log(n1 > n3);
console.log(n1 >= n3); 

console.log(n1 === n2 && n1 === n3)
console.log(n1 === n2 || n1 === n3) 
var a = true;
var b = false;
var c = true;

console.log(a && b);
console.log(b && c);
console.log(a && c);
console.log(a && b && c);

console.log(a || b);
console.log(b || c);
console.log(a || c);
console.log(a || b || c);

console.log(!a);/*/

/* var nome = "carlaNUJVBVJGH";
var outronome = " gfhfgbgsndkwafnwr    "
var idade = 17;
var anoAtual = 2023;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("É maior de idade?: " + (idade >=18));
console.log("Idade em 2050: " + (idade + (2050 - anoAtual)));

console.log(nome.length);

console.log(nome.toLowerCase())
console.log(outronome.trim())

const frase = "Hoje comi cenoura"
console.log(frase.includes("cenoura"));//true
console.log(frase.includes("batata"));//false */
/* 
const frase = "Hoje comi cenoura, adoro cenoura";
const novaFrase = frase.replaceAll("cenoura", "batata");
console.log(novaFrase); */

const listaDeCompras = ["batata", "alface", "queijo"];
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60];
listaDeCompras.push("cenoura");
listaDeCompras[4] = "papel";
listaDeCompras[listaDeCompras.length] = "cebola";
listaDeCompras[1] = "tomate";
/* listaDeCompras.pop(); */


listaDeCompras.splice(3, 2);
console.log(listaDeCompras);
console.log(listaDeCompras[0]);
console.log(listaDeCompras[1]);
console.log(listaDeCompras[2]);

console.log(listaDeCompras.length);


