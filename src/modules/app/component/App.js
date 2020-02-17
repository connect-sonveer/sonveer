import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { Chart } from 'react-chartjs-2';
import { chartjs } from '../../../helpers';
import theme from '../../admin/theme';
import validate from 'validate.js';
import validators from '../../../common/validators';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

class Application extends Component {
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}

export default Application;
