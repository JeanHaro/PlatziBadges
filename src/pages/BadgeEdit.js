import React from 'react';

// Importamos los estilos de la página
import './styles/BadgeEdit.css';

// Importamos la imagen
import header from '../images/platziconf-logo.svg';

// Importamos nuestros componentes
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';

// Importamos el API porque usaremos una llamada
import api from '../api';

// El loading va ser true ya que será una petición
class BadegeEdit extends React.Component {
    state = { 
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        } 
    };

    // Cuando el componentDidMount ocurra voy a buscar los datos
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });

        // Read va a tomar el id del badge que nos interesa
        /* Cada una de esas variables que insertamos en el Path que declaramos en la ruta, lo 
        podemos acceder dentro del objeto params */
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState( {loading: false, form: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

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
        // En update() actualizaremos todo lo que cambiamos
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading: false });

            // irnos del formulario, irnos a la lista de badges
            // Las rutas pasan 3 props, math, history y location
            // history redirigir al usuario con push
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    // Si loading se enciende no queremos regresar el formulario
    // Queremos regresar la visualizacion el loader
    // El error lo vamos a localizar dentro del formulario
    // El error estará en BadgeForm y lo recibiremos ahi mismo
    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit_hero-image img-fluid" src={header} alt="logo"/>
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
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form} 
                                error={this.state.error}   
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadegeEdit;