import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from './components/layouts/MainLayout/MainLayout';
import Home from './components/pages/HomeProductsList/HomePage';
import SingleProduct from './components/pages/SingleProduct/SingleProductPages';
import FAQ from './components/pages/FAQ/FaqPage';
import Policy from './components/pages/Policy/PolicyPage';
import Contact from './components/pages/Contact/ContactPage';
import Summary from './components/pages/CartSummary/CartSummaryPage';
import Cart from './components/pages/Cart/CartPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {
    render () {
        return (
            <MainLayout>
                <Switch>
                    <Route path="/faq" exact component={FAQ} />
                    <Route path="/policy" exact component={Policy} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/summary" exact component={Summary} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/:id" exact component={SingleProduct} />
                    <Route path="/" exact component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </MainLayout>
        );
    }
}

export default App;
