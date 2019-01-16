import React from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const styles = (theme) => createStyles({
    subTitle: {
        color: 'rgba(0,0,0,.54)!important',
        fill: 'rgba(0,0,0,.54)!important',
        // letterSpacing: '-0.01rem',
        fontSize: 12,
        lineHeight: '22px'
    },
    author: {
        fontSize: 13,
    },
    root:{
        display: 'flex',
        justifyContent: 'space-between',

    }
});

@withStyles(styles)
class PostAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render () {
        const { classes } = this.props

        return (
            <div className={classes.root}> 
                <div className={ classes.left }>
                    <Typography  className={ classes.author }>
                        Charles Chu in Notes on Changing Your Life
                    </Typography>
                    <Typography  className={ classes.subTitle }  >
                        Jan 9 · 8 min read
                    </Typography>
                </div>
                <div className={ classes.right }>
                    
                </div>

            </div>
        )
    }
}

export default PostAuthor