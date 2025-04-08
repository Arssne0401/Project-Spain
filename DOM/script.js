/* Obtener un elemento/nodo del DOM */

const element = document.getElementsByTagName("h1");
console.log(element[0]);

const elementID =document.getElementsByID('noticia1');
console.log(elementID);

const elementClass = document.getElementsByClassName('titulo');
console.log(elementClass[0]);

/* querySelector */
/*Syntax:document.querySelector('selectorCSS') */
/* */
const h1=document.querySelector('h1');
console.log(h1);

const h1Byclass =document.querySelector('titulo');

h1.textContent ="Camblado desda JS";
