import React from 'react';

import Navbar from './Navbar';

// Los componentes funcionales, los props vienen como su unico argumento
function Layout (props) {
    // const children = props.children;
    // Regresamos lo que está interno al layout

    return (
        // Ahora ya está nuestro Navbar que es el que será el mismo para Badges y BadgeNew
        // El props.children es el contenido que está dentro de Badge y BadgeNew
        // Esta parte tiene que estar rodeada por un bloque
        // Pero con un div nos genera muchos div, así que usaremos React.Fragment
        /* <div>
            <Navbar />
            {props.children}
        </div> */
        // React.Fragment es un componente especial que va ser que podamos regresar mas de un elemento
        // Pero parece que solo regresamos uno
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;