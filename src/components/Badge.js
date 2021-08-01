// Lo primero que vamos a hacer es el componente que representa el badge
import React from 'react';

// Importar el css
import './styles/Badge.css';

// Traemos la imagen
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/>
                    <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;