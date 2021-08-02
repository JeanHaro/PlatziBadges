import React from 'react';
// Importamos Link
import { Link } from 'react-router-dom';

// Importando los estilos
import './styles/Badges.css'

// Importando las imagenes
import confLogo from '../images/badge-header.svg';

// Importando los componentes
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
    // El constructor es donde inicializamos el estado
    constructor (props) {
        // super clase
        super(props);
        console.log('1. constructor()');

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        console.log('3. componentDidMount()')

        // Vuelve a llamar a Render, porque cambio la información
        // El setTimeout nos va a regresar un valor
        // this para que se pueda utilizar la variable en toda la clase
        this.timeoutId = setTimeout(() => {
            // Actualizar el estado
            this.setState({
                data: [{
                    id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                    firstName: "Freda",
                    lastName: "Grady",
                    email: "Leann_Berge@gmail.com",
                    jobTitle: "Legacy Brand Director",
                    twitter: "FredaGrady",
                    avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                },
                {
                    id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                    firstName: "Major",
                    lastName: "Rodriguez",
                    email: "Ilene66@hotmail.com",
                    jobTitle: "Human Research Architect",
                    twitter: "ajorRodriguez",
                    avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                },
                {
                    id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                    firstName: "Daphney",
                    lastName: "Torphy",
                    email: "Ron61@hotmail.com",
                    jobTitle: "National Markets Officer",
                    twitter: "DaphneyTorphy",
                    avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                }]
            })
        }, 3000);
    }

    // Primer argumento, los props que teníamos antes
    // Segundo argumento, el state que teníamos antes
    componentDidUpdate (prevProps, prevState) {
        console.log('5. componentDidUpdate()')
        // Vemos los props y la data vacia
        console.log({
            prevProps: prevProps, prevState: prevState
        })
        // Vemos los props y la data con lo que se añadio en el montaje
        console.log({
            props: this.props, state: this.state
        })
    }

    // Es antes de que se vaya el componente del DOM - que salga de escena
    componentWillUnmount() {
        console.log('6. componentWillUnmount()');

        // Va a recibir el id del setTimeout que está en componentDidMount()
        // Si existe ese id 
        // Y ese trabajo está pendiente lo cancela y lo libera para no perder memoria
        clearTimeout(this.timeoutId);
    }

    render() {
        console.log('2/4. render()')
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