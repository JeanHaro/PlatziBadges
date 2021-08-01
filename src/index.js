import React from 'react'; // Será el análogo al createElement
import ReactDOM from 'react-dom'; // Será el análogo al appendChild

// Importamos Bootstrap - instalamos bootstrap con "npm install bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

// Importamos el global.css
import './global.css'

// Importamos nuestro componente
import Badge from './components/Badge'

// Este si será igual que arriba
const container = document.getElementById('app');

// Desde acá mandamos como atributos, para poder utilizarlo mediante this.props.[nombre de los atributos]
// Y ubiarlo en donde lo necesitemos
ReactDOM.render(
    <Badge 
        firstName="Jean" 
        lastName="Haro" 
        avatarUrl = "https://s.gravatar.com/avatar/1642826e0569c0af8fdbc01442fbc752?s=80"
        jobTitle="Developer Frontend"
        twitter="JeanPE98"
    />, 
    container
);