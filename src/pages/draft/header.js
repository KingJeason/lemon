import React from 'react';
import Button from '@material-ui/core/Button';
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
    },
    rightbox: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        color: '#ddd',
        padding: '4px 8px',
        fontSize: 18
    }
})

class DraftHeader extends React.Component {
    changeTitle = (e) => {
        this.props.changeTitle(e.target.value)
    }
    render () {
        const { classes, isRequesting } = this.props;
        return (
            <div className={ classes.header }>
                {/* <div className={ classes.leftbox }> */ }
                <input value={this.props.title} onChange={ this.changeTitle } className={ classes.input } maxLength="80" placeholder="输入文章标题..."></input>
                {/* </div> */ }
                <div className={ classes.rightbox }>
                    <span style={ { color: '#ddd', fontSize: 18 } }>
                        { isRequesting ? '保存中...' : '文章将会自动保存至' }
                    </span>
                    <Button variant="outlined" className={ classes.button }>
                        草稿箱
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DraftHeader);
