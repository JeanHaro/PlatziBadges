import React from 'react';

// Importamos los estilos de la página
import './styles/BadgeNew.css';

// Importamos la imagen
import header from '../images/platziconf-logo.svg';

// Importamos nuestros componentes
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

// Importamos el API porque usaremos una llamada
import api from '../api';

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

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });

        // try porque vamos hacer una llamada
        // En create() le damos los datos del nuevo badge
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    // Quitamos el Navbar
    // || -> Si este valor no existe le damos su valor
    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew_hero-image img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'twitter'} 
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://s.gravatar.com/avatar/1642826e0569c0af8fdbc01442fbc752?s=80"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
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