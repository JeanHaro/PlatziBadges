import React from 'react';
import ReactDOM from 'react-dom';

// Importando estilos
import './styles/Modal.css';

// El contenido va a depender de lo que haga cada modal y va a venir a través de los children
// Al poner children va a permitir que en un futuro vamos a especificar de que es este modal
// Esa tecnica de usar componentes genericos para luego crear uno nuevo especializado se llama composición
function Modal (props) {
    // Si no está isOpen
    if (!props.isOpen) {
        // Regresamos null
        return null;
    }

    return (
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                    <button onClick={props.onClose} className="Modal__close-button">
                        X
                    </button>

                    {props.children}
                </div>
            </div>, 
            document.getElementById('modal')
        )
    )
}

export default Modal;