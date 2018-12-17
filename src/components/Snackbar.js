import * as React from 'react';
import * as ReactDOM from 'react-dom';
import amber from '@material-ui/core/colors/amber';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles, createStyles } from '@material-ui/core/styles';



const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const style1 = (theme) => createStyles({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});



class MySnackbarContent extends React.Component {

   render() {
    const { classes, className, message, onClose, variant, ...other } = this.props;
    console.log(this.props)
    const Icon = variantIcon[variant];
    return (
      <SnackbarContent
        className={ classNames(classes[variant], className) }
        aria-describedby="client-snackbar"

        message={
          <span id="client-snackbar" className={ classes.message }>
            <Icon className={ classNames(classes.icon, classes.iconVariant) } />
            { message }
          </span>
        }
        action={ [
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={ classes.close }
            onClick={ onClose }
          >
            <CloseIcon className={ classes.icon } />
          </IconButton>,
        ] }
        { ...other }
      />
    );
  }
}

const MySnackbarContentWrapper = withStyles(style1)(MySnackbarContent);

function Mes(props, type = 'success') {
  const close = (...args) => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  const div = document.createElement('div');

  document.body.appendChild(div);

  if (typeof props === 'string') {
    props = {
      message: props
    };
  }
  // const that = this as any
  const component = React.createElement(
    Snackbar,
    {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      autoHideDuration: 2000,
      onClose: close,
      open: true,
    },
    <MySnackbarContentWrapper
      variant={ type }
      message={ props.message }
      onClose={ close }
    />
  )
  ReactDOM.render(component, div);
}


Mes.success = (options) => {
  return Mes(options, 'success')
}
Mes.warning = (options) => {
  return Mes(options, 'warning')
}
Mes.info = (options) => {
  return Mes(options, 'info')
}
Mes.error = (options) => {
  console.log('12312')
  return Mes(options, 'error')
}


// ['success', 'warning', 'info', 'error'].forEach((type) => {
//   Mes[type] = (options = {}) => {
//     return Mes(options, type);
//   };
// });
export default Mes
