import React from 'react';
// Importamos el Browser Router, Switch y el Route
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importamos el componente Layout
import Layout from '../components/Layout';

// Importamos las páginas
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';

// Importamos la página de 404
import NotFound from '../pages/NotFound';

/* el /badges/edit, esta pagina va ser edit, pero el EDIT tiene que trabajar sobre un badge en específico para este
caso tenemos que trabajar en un id, en este caso vamos a declarar en :badgeId como una variable, ese badgeId va
ser un valor que si va a estar definido en la URL, pero va ser genérico, puede ser el 1, 2 y el 3
Cuando eso ocurra presentamos el componente BadgeEdit */
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;