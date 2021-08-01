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

// Otra alternativa es ====
// React.createElement
// Primer parámetro es el tipo de elemento
// Segundo parámetro es son los atributos(En react se llaman props o propertys)
// Tercer atributo es el children(parecido al innerText o innerHTML)
/* const element = React.createElement('h1', {}, 'Hola Soy los children.');
*/

// ------------------------------------------------------------

// Con atributo ====
/* const enlace = React.createElement('a', { href: 'https://platzi.com' }, 'Ir a Platzi'); */

// ------------------------------------------------------------

// Con variables ====
/* const name = 'Jean';
const element = React.createElement('h1', {}, `Hola, soy ${name}`); */

// ------------------------------------------------------------

// JSX - por esto importamos React
/* const jsx = <h1>Hello, Platzi Badges from React</h1> */

// ------------------------------------------------------------

const name = 'Jean';
const jsx = <h1>Hola soy, {name}</h1> // Hola soy, Jean

// ------------------------------------------------------------

const jsx2 = <h1>Hola soy, {2 + 2}</h1> // Hola soy, 4

// ------------------------------------------------------------

const sum = () => 3 + 3;
const jsx3 = <h1>Hola soy, {sum()}</h1> // Hola soy, 6

// ------------------------------------------------------------

const jsx4 = (
    <div>
        <h1>Hola, soy Jean</h1>
        <p>Soy un desarrollador</p>
    </div>
);

// ------------------------------------------------------------

const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, soy Jean'),
    React.createElement('p', {}, 'Soy un desarrollador')
);

// Este si será igual que arriba
const container = document.getElementById('app');

// appendChild
// El ReactDOM utilizando el metodo render es como usar appendChild
// En donde en el primer parámetro será que elemento queremos posicionar
// Y en segundo parámetro es en donde queremos posicionar ese elemento
ReactDOM.render(element, container);