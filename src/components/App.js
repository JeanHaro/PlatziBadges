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