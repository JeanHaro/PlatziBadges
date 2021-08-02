import React from 'react';

import Navbar from './Navbar';

// Los componentes funcionales, los props vienen como su unico argumento
function Layout (props) {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;