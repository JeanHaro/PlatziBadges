import React from 'react';

// Importamos los estilos de la página
import './styles/BadgeNew.css';

// Importamos la imagen
import header from '../images/badge-header.svg';

// Importamos nuestros componentes
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadegeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };

    handleChange = e => {
        this.setState({
            form: {
                // Dejamos caer todos los valores que tenía el form anteriormente
                // y le añadiremos uno nuevo
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        }) 
    }

    // Quitamos el Navbar
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

export default BadegeNew;