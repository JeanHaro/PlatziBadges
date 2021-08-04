import React from 'react';
// Importamos el link
import { Link } from 'react-router-dom';

// Importamos los estilos
import './styles/BadgesList.css'

// Importamos las imagenes
import logoTwitter from '../images/twitter.png';

// Importamos componentes
import Gravatar from './Gravatar';

// Custom Hooks
function useSearchBadges (badges) {
    // Le damos un useState vacío
    const [query, setQuery ] = React.useState('');

    // Guardamos los resultados en esta variable
    // No recomendable
    /* const filteredBadges = badges.filter(badge => {
        // Preguntamos si el badge incluye el query(el texto) que colocamos en el input
        // Buscamos por nombre en minusculas y mayusculas
        // return badge.firstName.toLowerCase().includes(query.toLowerCase());
        // Buscamos por nombre y apellido en minusculas y mayusculas
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    }) */

    // El valor inicial va ser la lista completa de los badges
    const [filteredBadges, setFilteredBadges] = React.useState(badges)
    // Con Hooks del React que te da
    // Argumentos que son una lista, siempre que sean iguales la constetación si ya está memorizada te la regresa de inmediato
    // Si no la calcula por primera vez
    // Si el query o badges cambia, se vuelve a calcular
    React.useMemo( () => {
        const result = badges.filter(badge => {
            // Preguntamos si el badge incluye el query(el texto) que colocamos en el input
            // Buscamos por nombre en minusculas y mayusculas
            // return badge.firstName.toLowerCase().includes(query.toLowerCase());
            // Buscamos por nombre y apellido en minusculas y mayusculas
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        })
        setFilteredBadges(result)
        
    }, [ badges, query ]);

    // setQuery, parametro, es una forma de poner el query
    // filteredBadges, es una lista que filtramos
    return { query, setQuery, filteredBadges }
}

// Le damos query como value al input
// y el value de ahí recibirá setQuery(e.target.value), este valor
function BadgesList (props) {
    const badges = props.badges;

    // Utilización del Custom Hooks
    const { query, setQuery, filteredBadges } = useSearchBadges(badges); 

    // Ya no estamos pendiente a todos los badges solo a los filtrados
    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value)
                        }} 
                    />
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </div>
        )
    }

    // Solo a los filteredBadges, a lo que se filtran queremos mostrar
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                    }} 
                />
            </div>

            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
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
        </div>
    )
}

export default BadgesList;