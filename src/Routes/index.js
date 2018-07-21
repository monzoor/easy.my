import React from 'react';
import { Route, Switch} from 'react-router-dom';

import MainLayout from '../components/Layout/';
import Home from '../components/Pages/Home/';
import AdDetails from '../components/Pages/ads';
import NotFound from './../components/404';

/**
 * Create layout structure and show error pages
 * @param {JSX} component [Componet to load]
 * @param {JSX} layout    [Mail layout found in layout folder]
 * @param {[array]} rest
 */
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    /**
     * Get status code from redirect method
     * @type {[number]}
     */
    const status = Object.values({...rest.location.state})[0];
    if (status === 404) {
        return (
            <Route {...rest} render={ props => (
                    <Layout>
                        <NotFound/>
                    </Layout>
                )} />
            )
    }
    return (
        <Route {...rest} render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )} />
        )
}

// Router lists
export default () => (
    <Switch>
        <AppRoute path="/" exact layout={MainLayout} component={Home} />
        <AppRoute path="/ads/:adSlug=:uid" exact layout={MainLayout} component={AdDetails} />
        <AppRoute path="*" exact layout={MainLayout} component={NotFound} status={404} />
    </Switch>
);
