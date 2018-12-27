import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './config/index'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'

const userTheme = createMuiTheme(theme);
ReactDOM.render(
    <MuiThemeProvider theme={ userTheme }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
