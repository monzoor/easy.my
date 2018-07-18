import React from 'react';
import { Route, Switch} from 'react-router-dom';
import MainLayout from '../components/Layout/index'

import Home from '../components/Pages/Home/Home';
import AdDetails from '../components/Pages/ads';

import FourOFour from './../components/404'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

export default () => (
    <Switch>
        // <AppRoute path="/" exact layout={MainLayout} component={Home} />
        <AppRoute path="/ads/:adSlug" exact layout={MainLayout} component={AdDetails} />

        <AppRoute path="*" exact layout={MainLayout} component={FourOFour} />
    </Switch>
);
