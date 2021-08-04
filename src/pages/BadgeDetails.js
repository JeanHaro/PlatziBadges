import React from 'react';
import { Link } from 'react-router-dom';

// Importando estilos
import './styles/BadgeDetails.css';

// Importando imagenes
import confLogo from '../images/platziconf-logo.svg'

// Importando componentes
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal.js'

function BadgeDetails (props) {
    const badge = props.badge;
    // Si se despliega o no en isOpen, que será el estado que mandarán del Container
    // Si se clickea en el button se despliega por el onclick
    // onClose mediante la función que se da en el container
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName={badge.firstName} 
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>

                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal} 
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;