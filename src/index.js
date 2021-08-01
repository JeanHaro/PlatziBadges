import React from 'react'; // Será el análogo al createElement
import ReactDOM from 'react-dom'; // Será el análogo al appendChild

// Importamos Bootstrap - instalamos bootstrap con "npm install bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

// Importamos el global.css
import './global.css'

// Importamos nuestra página
import BadgeNew from './pages/BadgeNew'

const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);