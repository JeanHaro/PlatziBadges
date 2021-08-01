import React from 'react';

// Importamos los estilos de la página
import './styles/BadgeNew.css';

// Importamos la imagen
import header from '../images/badge-header.svg';

// Importamos nuestros componentes
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadegeNew extends React.Component {
    // Buscar una técnica para que el estado este en BadgeNew y no en BadgeForm
    // Inicializamos ahora todos los valores
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };

    // En lugar de que lo tenga BadgeForm, ahora le va a pertenecer a BadgeNew
    // El form tenga la información del evento que acaba de ocurrir con nombre y valor
    handleChange = e => {
        // Copia del estado del form
        // El proximo estado del form es igual al estado actual que tiene el form
        // const nextForm = this.state.form;
        // nextForm va a tener un valor en esta llave que va ser igual a este valor
        // nextForm[e.target.name] = e.target.value; 

        this.setState({
            // form: nextForm,
            form: {
                // Dejamos caer todos los valores que tenía el form anteriormente
                // y le añadiremos uno nuevo
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        }) 
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter} 
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://s.gravatar.com/avatar/1642826e0569c0af8fdbc01442fbc752?s=80"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}    
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadegeNew;