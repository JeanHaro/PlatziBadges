// Lo primero que vamos a hacer es el componente que representa el badge
import React from 'react';

// Traemos la imagen
import confLogo from '../images/badge-header.svg';

// La Clase Badge extiende a la clase React.Component
class Badge extends React.Component {
    // Todos los componentes requieren por lo menos un método que es obligatorio
    // Ese método es el render
    // Render() - define cual va ser el resultado que vamos a ver en pantalla
    // {confLogo} - así llamaríamos a la imagen, se llama props
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Jean <br/> Haro</h1>
                </div>

                <div>
                    <p>Desarrollador Frontend</p>
                    <p>@jeanc98</p>
                </div>

                <div>
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;