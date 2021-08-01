import React from 'react';
// Importamos el Browser Router, Switch y el Route
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importamos las páginas
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';


function App() {
    return (
        // Acá dentro tenemos que colocar las rutas
        // La ruta se colocará en el path
        // Estas rutas se usaran para entrar al enlace
        /* El Switch va a tomar la dirección que está en el navegador y a renderizar solamente una ruta, 
        la primera que coincida con esa dirección */
        // Le decimos que la ruta es exacta, para que cuando coincida completamente como está en la ruta, entre
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;