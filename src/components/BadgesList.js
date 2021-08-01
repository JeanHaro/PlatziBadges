import React from 'react';

// Importamos los estilos
import './styles/BadgesList.css'

// Importamos las imagenes
import logoTwitter from '../images/twitter.png';


// Por cada uno de los elementos que tengo en data, quiero convertirlo de un objeto a un elemento
/* key - Es un prop que ayuda a react y lo ayuda para poder determinar cuando el elemento se vuelve a 
renderizar, ver si se mantuvo en la lista o si cambio */
// Se le pone badge.id porque tiene que ser único
// Con FirstName tenemos el riesgo que dos personas se llamen igual y el id se repita
class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <div className="img-container">
                                <img src={badge.avatarUrl} alt="Avatar" />
                            </div>

                            <div className="info-container">
                                <p>{badge.firstName} {badge.lastName}</p>
                                <p className="info-twitter"><img src={logoTwitter} alt="Logo Twitter" />@{badge.twitter}</p>
                                <p>{badge.jobTitle}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
}
}

export default BadgesList;