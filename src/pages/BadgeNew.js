import React from 'react';

import './styles/BadgeNew.css';

import header from '../images/badge-header.svg';

// Importamos nuestros componentes
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadegeNew extends React.Component {
    // Acá realizaremos la página
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Jean" 
                                lastName="Haro" 
                                twitter="JeanPE98" 
                                jobTitle="Developer Frontend"
                                avatarUrl="https://s.gravatar.com/avatar/1642826e0569c0af8fdbc01442fbc752?s=80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadegeNew;