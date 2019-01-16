import React from 'react'
import Typography from '@material-ui/core/Typography';

import { createStyles, withStyles } from '@material-ui/core/styles'

const styles = (theme) => createStyles({
    title: {
        fontWeight: 'bolder!important',
        letterSpacing: -0.42,
        fontSize: '1.1rem'
    },
    subTitle: {
        color: 'rgba(0,0,0,.54)!important',
        fill: 'rgba(0,0,0,.54)!important',
        // letterSpacing: '-0.01rem',
        fontSize: 15,
        marginBottom: 10,
        lineHeight: '22px'
    },
});

class PostTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render () {
        const { classes, size, subTitle } = this.props
        console.log(subTitle, 'subTitle')
        return (
            <div>
                <Typography variant="h6" gutterBottom style={{
                    fontSize: size
                }} className={ classes.title }>
                    A Linguist’s Guide to Pronouncing ‘GIF’
                </Typography>
                {
                    subTitle ? <Typography  className={ classes.subTitle } gutterBottom >
                        我是谁 .gif format declared there was one “right way” to pronounce it, the linguistic debate rages on
                </Typography> : ''
                }

            </div>
        )
    }
}

export default withStyles(styles)(PostTitle)

