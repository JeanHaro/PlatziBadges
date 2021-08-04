import React from 'react';

// Importando estilos
import './styles/PageError.css';

function PageError (props) {
    return <div className="PageError">❌{props.error.message}😱</div>
}

export default PageError;