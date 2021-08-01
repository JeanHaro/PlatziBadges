import React from 'react';

import './styles/Navbar.css'

import logo from '../images/logo.svg';

class Navbar extends React.Component {
    // Acá realizaremos el componente
    // Algunas clases no está en css, porque son de brootstrap
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                        <span className="fw-lighter">Platzi</span>
                        <span className="fw-bolder">Conf</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;