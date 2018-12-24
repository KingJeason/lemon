import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import loginImgUrl from '../assets/imgs/lemon2.png';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});



class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginname: null,
            pass: null
        }

    }
    handleChangeLoginName = (e) => {
        this.setState({ loginname: e.target.value });
    }

    handleChangePass = (e) => {
        // console.log(e.target.value)
        this.setState({ pass: e.target.value });
    }
    submit = async (e) => {
        const { loginname, pass } = this.state
        e.preventDefault()
        this.props.onSubmit(loginname, pass)
        this.props.onClose()
    }

    render () {
        const { classes } = this.props;

        return (
            <main className={ classes.main }>
                <CssBaseline />
                <Paper className={ classes.paper }>
                    <Avatar
                        className={ classes.avatar }
                        alt="Lemon"
                        src={ loginImgUrl }
                    >
                        {/* <LockIcon /> */ }
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome back!
                    </Typography>
                    <form className={ classes.form }>
                        <FormControl margin="normal" required={ true } fullWidth={ true }>
                            <InputLabel htmlFor="email">邮箱/登录名</InputLabel>
                            <Input onChange={ this.handleChangeLoginName } id="email" name="email" autoComplete="email" autoFocus={ true } />
                        </FormControl>
                        <FormControl margin="normal" required={ true } fullWidth={ true }>
                            <InputLabel htmlFor="password">密码</InputLabel>
                            <Input onChange={ this.handleChangePass } name="password" type="password" id="password" autoComplete="current-password" />
                        </FormControl>
                        <FormControlLabel
                            control={ <Checkbox value="remember" color="primary" /> }
                            label="记住我"
                        />
                        <Button
                            type="button"
                            fullWidth={ true }
                            variant="contained"
                            color="primary"
                            className={ classes.submit }
                            onClick={ this.submit }
                        >
                            登录
                        </Button>
                    </form>
                </Paper>
            </main>

        );
    }
}
export default withStyles(styles)(Login);