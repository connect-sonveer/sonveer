import React from 'react';
import { BrowserRouter as Router , Switch, Redirect, Route } from 'react-router-dom';
import { RouteWithLayout } from '../../admin/components';
import { Main as MainLayout, Minimal as MinimalLayout } from '../../admin/layouts';
import Main from "../../portfolio/component/Main";
import Blog from "../../blog/component/home/index";

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from '../../admin/views';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/blog' component={Blog} />
      {/* <Router>
        <Route exact path='/' component={Main} />
      </Router>
      <Router>
        <Route exact path='/blog' component={Blog} />
      </Router> */}
      <Redirect
        exact
        from="/admin"
        to="/admin/sign-in"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/admin/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/admin/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/admin/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/admin/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/admin/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/admin/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/admin/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/admin/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/admin/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/admin/not-found"
      />
      <Redirect to="/admin/not-found" />
    </Switch>
  )
};

export default Routes;
