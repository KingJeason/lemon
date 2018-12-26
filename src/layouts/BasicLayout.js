import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Header from './Header'

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
})

class BasicLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={ classes.layout }>
                    <Header />
                </div>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(BasicLayout)

