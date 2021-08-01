// importamos React que nos vamos a traer desde el modulo react
import React from 'react'; // Será el análogo al createElement
// importamos ReactDOM que nos vamos a traer desde react-dom
import ReactDOM from 'react-dom'; // Será el análogo al appendChild

// Acostumbrarnos a que los componentes vivan en su propio archivo
// Importamos nuestro componente
import Badge from './components/Badge'

/* const element = (
    <div>
        <h1>Hola, soy Jean</h1>
        <p>Soy un desarrollador</p>
    </div>
); */

// Este si será igual que arriba
const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);