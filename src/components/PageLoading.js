import React from 'react';

// Importamos estilos
import './styles/PageLoading.css';

// Importamos componente, donde está la animación
import Loader from './Loader';

function PageLoading() {
    return (
        <div className="PageLoading">
            <Loader />
        </div>
    )
}

export default PageLoading;