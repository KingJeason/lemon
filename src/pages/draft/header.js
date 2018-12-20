import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
// import { visible } from 'ansi-colors';

const styles = (theme) => createStyles({
    header: {
        height: 57,
        width: '100%',
        display: 'flex',
        padding: '0 1.4rem',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: '100%',
        boxFlex: 1,
        flex: '1 1 auto',
        margin: 0,
        padding: 0,
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#000',
        outline: 'none',
        boxSizing: 'border-box',
        overflow: 'visible',
        border: 'none'
    }
})

class DraftHeader extends React.Component {

    render () {
        const { classes } = this.props;

        return (
            <div className={ classes.header }>
                {/* <div className={ classes.leftbox }> */}
                    <input className={classes.input} maxLength="80" placeholder="输入文章标题..."></input>
                {/* </div> */}
                <div className={ classes.rightbox }></div>
            </div>
        )
    }
}

export default withStyles(styles)(DraftHeader);
