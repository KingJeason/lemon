import  React from 'react';
import  ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './config/index'
const userTheme = createMuiTheme(theme);

ReactDOM.render(
    <MuiThemeProvider theme={ userTheme }>
        <App />
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
