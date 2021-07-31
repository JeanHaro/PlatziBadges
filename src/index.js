// Eso es sin usar React

/* // createElement - Para crear un elemento 
// Como parámetro se coloca el tipo de elemento que queremos crear
// Esto se guardará dentro de una variable constante
const element = document.createElement('h1');

// innerText - nos permite dar un texto al elemento
element.innerText = 'Hello, Platzi Badges!';

// Al elemento lo colocamos dentro de este container
// Que es otro elemento que es referenciado por una id
// Ya que en (public > index.html) es el único elemento que tenemos ahí
const container = document.getElementById('app');

// appendChild - nos sirve para colocar o añadir elementos dentro de otro elemento
// En este caso añadimos element dentro del container
container.appendChild(element); */

// -----------------------------------------------------------

// Usando React

// importamos React que nos vamos a traer desde el modulo react
import React from 'react'; // Será el análogo al createElement
// importamos ReactDOM que nos vamos a traer desde react-dom
import ReactDOM from 'react-dom'; // Será el análogo al appendChild

// JSX - por esto importamos React
const element = <h1>Hello, Platzi Badges from React</h1>

// Este si será igual que arriba
const container = document.getElementById('app');

// appendChild
// El ReactDOM utilizando el metodo render es como usar appendChild
// En donde en el primer parámetro será que elemento queremos posicionar
// Y en segundo parámetro es en donde queremos posicionar ese elemento
ReactDOM.render(element, container); 