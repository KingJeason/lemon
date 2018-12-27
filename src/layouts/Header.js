import * as React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/AddCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Nav from './nav'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { appName } from '../config';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
// import { login } from '../services/api';
// import Mes from '../components/Snackbar'
import Login from '../components/login'
import { connect } from 'react-redux'
import lemonPng from '../assets/imgs/lemon.png'
// import { addTodo } from '../store/actions'
const styles = (theme) => createStyles({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    avatar: {
        margin: 10,
        cursor: 'pointer'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    add: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.down('sm')]: {
            display: 'none'

        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 70,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[0],
        padding: theme.spacing.unit * 4,
        '&:focus': {
            outline: 'none'
        },
    },
})


class Header extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        isLogin: false,
        open: false,
        anchorElLogin: null
    };
    // constructor(props) {
    //     super(props);
    // }

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };
    handleOpen = () => {
        this.setState({ open: true });
        // this.props.dispatch({
        //     type: 'GET_USER'
        // })
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit = async (loginname, pass) => {
        try {
            this.props.dispatch({
                type: 'LOGIN',
                params: {
                    loginname,
                    pass
                }
            })
        } catch (error) {
            // Mes.error(error)
        }

    }
    handleCloseLoginMenu = () => {
        this.setState({ anchorElLogin: null });
    }
    handleClickLoginMenu = event => {
        this.setState({ anchorElLogin: event.currentTarget });
    }

    render () {
        const { anchorEl, mobileMoreAnchorEl, anchorElLogin } = this.state;
        const { classes, user } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={ anchorEl }
                anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
                transformOrigin={ { vertical: 'top', horizontal: 'right' } }
                open={ isMenuOpen }
                onClose={ this.handleMenuClose }
            >
                <MenuItem onClick={ this.handleMenuClose }>Profile</MenuItem>
                <MenuItem onClick={ this.handleMenuClose }>My account</MenuItem>
            </Menu>
        );

        const loginMenu = (
            <div>
                <Avatar onClick={ this.handleClickLoginMenu } alt="Remy Sharp" src={ user && user.avatar } className={ classes.avatar } />
                <Menu
                    id="fade-menu"
                    anchorEl={ anchorElLogin }
                    open={ Boolean(anchorElLogin) }
                    onClose={ this.handleCloseLoginMenu }
                >
                    <MenuItem onClick={ this.handleCloseLoginMenu }>Profile</MenuItem>
                    <MenuItem onClick={ this.handleCloseLoginMenu }>My account</MenuItem>
                    <MenuItem onClick={ this.handleCloseLoginMenu }>Logout</MenuItem>
                </Menu>
            </div>
        )

        const renderLogin = user ? loginMenu : (<Button onClick={ this.handleOpen } variant="outlined" color="inherit">Login</Button>)

        const renderMobileMenu = (
            <Menu
                anchorEl={ mobileMoreAnchorEl }
                anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
                transformOrigin={ { vertical: 'top', horizontal: 'right' } }
                open={ isMobileMenuOpen }
                onClose={ this.handleMobileMenuClose }
            >
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={ 4 } color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={ 11 } color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={ this.handleProfileMenuOpen }>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        const renderLoginModal = (
            <Modal
                open={ this.state.open }
                onClose={ this.handleClose }
            >

                <Login onClose={ this.handleClose } onSubmit={ this.handleSubmit } />
            </Modal>
        )


        return (
            <React.Fragment>
                <div className={ classes.root }>
                    {/* <AppBar position="static" color="default"> */ }
                    <Toolbar>
                        {/* <IconButton className={ classes.menuButton } color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton> */}
                        {/* <Typography className={ classes.title } variant="h6" color="inherit" noWrap={ true }>
                            { appName }
                        </Typography> */}
                        <img src={ lemonPng } alt="lemon" style={{width: '120px'}}/>
                        <div className={ classes.grow } />
                        <div className={ classes.add }>
                            <div className={ classes.searchIcon }>
                                <AddIcon />
                            </div>
                        </div>
                        <div className={ classes.search }>
                            <div className={ classes.searchIcon }>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={ {
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                } }
                            />
                        </div>
                        { renderLogin }
                        <div className={ classes.sectionDesktop }>
                            <IconButton color="inherit">
                                {/* <Badge badgeContent={ 0 } color="secondary"> */ }
                                <MailIcon />
                                {/* </Badge> */ }
                            </IconButton>
                            <IconButton color="inherit">
                                {/* < Badge badgeContent={ 0 } color="secondary"> */ }
                                <NotificationsIcon />
                                {/* </Badge> */ }
                            </IconButton>
                            <IconButton
                                aria-owns={ isMenuOpen ? 'material-appbar' : undefined }
                                aria-haspopup="true"
                                onClick={ this.handleProfileMenuOpen }
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={ classes.sectionMobile }>
                            <IconButton aria-haspopup="true" onClick={ this.handleMobileMenuOpen } color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                    {/* </AppBar>  */ }
                    <Nav/>
                    { renderMenu }
                    { renderMobileMenu }
                    { renderLoginModal }
                </div>
            </React.Fragment >
        );
    }
}

// export default Header;
export default connect(state => { return { user: state.user } })(withStyles(styles)(Header));