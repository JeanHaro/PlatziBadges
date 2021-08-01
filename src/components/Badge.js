// Lo primero que vamos a hacer es el componente que representa el badge
import React from 'react';

// Importar el css
import './styles/Badge.css';

// Traemos la imagen
import confLogo from '../images/badge-header.svg';

// La Clase Badge extiende a la clase React.Component
class Badge extends React.Component {
    // Para nombrar las clases en JavaScript a cada etiqueta es con className=""
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Jean <br/> Haro</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Desarrollador Frontend</h3>
                    <div>@jeanc98</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;