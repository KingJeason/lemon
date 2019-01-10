import * as React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import {  NavLink } from "react-router-dom";

const styles = theme => createStyles({
    layout: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        width: 'auto',
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 1100,
        },
    },
    f:{
        fontFamily: 'lemon',
        letterSpacing: 1,
        marginRight: 20,
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'rgba(0,0,0,0.54)'
    }
})

export const navList = [{ name: 'Home', path: '/' }, { name: 'Chat', path: '/chat' }, { name: 'Life', path: '/life' }, { name: 'Photo', path: '/photo' }];

class Nav extends React.Component {
    render () {
        const { classes } = this.props
        return (
            <Toolbar>
                <nav>
                    { navList.map(item => <NavLink exact activeStyle={ { color: 'black' } } key={item.name} to={ item.path } className={ classes.f }>{ item.name }</NavLink>) }
                </nav>
            </Toolbar>
        )
    }
}
export default withStyles(styles)(Nav)