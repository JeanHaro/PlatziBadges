import React from 'react';
// Importamos el link
import { Link } from 'react-router-dom';

// Importamos los estilos
import './styles/BadgesList.css'

// Importamos las imagenes
import logoTwitter from '../images/twitter.png';

// Importamos componentes
import Gravatar from './Gravatar';

class BadgesList extends React.Component {
    render() {
        // No hubo ningún dato
        // Si no hubo ningún dato en la data, se mostrará esto
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }

        // Damos un Link a todo el contenido del LI, y le damos que redireccione por su id al edit
        // Le ponemos clase de bootstrap para que quite los colores azules
        // Y una clase propia para editar el entorno
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link className="link-list text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <Gravatar 
                                    className="img-container"
                                    email={badge.email}
                                    alt="Avatar"
                                />

                                <div className="info-container">
                                    <p>{badge.firstName} {badge.lastName}</p>
                                    <p className="info-twitter"><img src={logoTwitter} alt="Logo Twitter" />@{badge.twitter}</p>
                                    <p>{badge.jobTitle}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
}
}

export default BadgesList;