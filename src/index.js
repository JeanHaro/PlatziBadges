import React from 'react'; // Será el análogo al createElement
import ReactDOM from 'react-dom'; // Será el análogo al appendChild

// Importamos Bootstrap - instalamos bootstrap con "npm install bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

// Importamos el global.css
import './global.css'

// Importamos nuestras páginas - La moveremos al componente App donde usamos el Browser Router
/* import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges'; */

// Importamos nuevo componente - Acá añadiré Browser Router y mis rutas
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);