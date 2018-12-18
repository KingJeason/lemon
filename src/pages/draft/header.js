import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
    header: {
        height: 57,
        width: '100%'
    }
})

class DraftHeader extends React.Component {

    render () {
        const { classes } = this.props;

        return (
            <div className={ classes.header }>

            </div>
        )
    }
}

export default withStyles(styles)(DraftHeader);
