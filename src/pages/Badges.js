import React from 'react';
// Importamos Link
import { Link } from 'react-router-dom';

// Importando los estilos
import './styles/Badges.css'

// Importando las imagenes
import confLogo from '../images/badge-header.svg';

// Importando los componentes
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

// Importamos el API
import api from '../api';

class Badges extends React.Component {
    state = {
        // Loading - cuando cargue la página, es lo primero que va hacer, cargar los datos
        loading: true,
        // Aún no hay error
        error: null,
        data: undefined,
    }

    // El mejor lugar para iniciar una petición de una API es en el componentDidMount()
    // Eso nos asegura que el código de nuestro componente ya está listo
    /* Así que cualquier efecto secundario llamada exterior de una API, ya la podemos hacer con seguridad 
    que nuestros datos están listos para recibirlos */
    componentDidMount() {
        this.fetchData();

        // Para que cargue la página y se actualice y muestre los cambios automáticamente
        this.intervalId = setInterval(this.fetchData, 5000);
    }

    // Para que cuando pasemos de página, se cancele el interval
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        // Declarar al estado con loading tru y error null
        // Es posible que en un futuro volvamos a llamar a fetchData
        // Loading se había vuelto falso hay que regresarlo a cierto
        // Error si ya existía, hay que cancelarlo
        this.setState({ loading: true, error: null });

        // Llamada a la API
        try {
            // api.badges.list() - una llamada a badges donde queremos toda la lista de los badgess
            // Esta llamada es asincrona, regresa una promesa
            // Si acá resulta error, entonces esta llamada será rechazada y tira error en catch
            const data = await api.badges.list();
            // const data = [];
            // Voy a recibir datos y esos datos lo guardamos en el estado
            // El loading ya acabó, y los datos se guardan en data
            this.setState({ loading: false, data: data });
        } catch (error) {
            // Loading ya acabó, pero esta vez tenemos un error
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        // Loading sea cierto y los datos son undefined o no existan, solamente ahí hará el efecto de carga
        // Regresamos Loading
        // Cuando loading acabe nuestros datos quizás ya estén
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        //  Si hay error
        if (this.state.error) {
            return <PageError error={this.state.error}/>;
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                                className="Badges_conf-logo" 
                                src={confLogo} 
                                alt="Conf Logo" 
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                
                    <div className="Badges__list">
                        <div className="Badges_container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;