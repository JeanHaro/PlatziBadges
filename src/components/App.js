import React from 'react';
// Importamos el Browser Router, Switch y el Route
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importamos el componente Layout
import Layout from '../components/Layout';

// Importamos las páginas
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
// Importamos la página de 404
import NotFound from '../pages/NotFound';

// En layout quiero que tenga contenido propio que sea parte del layout
// Pero también que tenga contenido interno
// Cómo hacemos lo que está dentro de la etiqueta de Layout aparezca en Layout
// Para eso colocamos un props especial en el componente Layout.js

// El 404, es la ruta que vamos a renderizar cuando ninguna otra coincida con la dirección del internet
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;