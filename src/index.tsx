import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './config/index'
const userTheme = createMuiTheme(theme);

ReactDOM.render(
  <MuiThemeProvider theme={ userTheme }>
    <App />
  </MuiThemeProvider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
