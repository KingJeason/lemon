import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { createStyles, withStyles } from '@material-ui/core/styles';
const styles = (theme) => createStyles({
    root: {
        display: 'flex',
        height: 350,
        boxSizing: 'border-box'
    }
});
const LeftOrRightStyle = (theme) => createStyles({
    root: {
        width: '33.3%'
    },
    wapper: {
        // flexDirection: 'column'
    },
    title: {
        fontWeight: 'bolder!important',
        letterSpacing: -0.42
    },
    subTitle: {
        color: 'rgba(0,0,0,.54)!important',
        fill: 'rgba(0,0,0,.54)!important',
        // letterSpacing: '-0.01rem',
        fontSize: 15,
        lineHeight: '22px'
    },
    author: {
        fontSize: 14,
        marginTop: 10
    }
})

const LeftOrRightGrid = (props) => (
    <List className={ props.classes.root }>
        <ListItem alignItems='flex-start' className={ props.classes.wapper }>
            <div style={ { height: 150, width: '100%' } }>
                <img style={ { width: '100%', height: '100%' } } alt="img" src="https://img.zcool.cn/community/01018d5c374e94a80121fbb0446c17.jpg@1280w_1l_2o_100sh.jpg"></img>
                <Typography variant="h6" gutterBottom className={ props.classes.title }>
                    A Linguist’s Guide to Pronouncing ‘GIF’
                </Typography>
                <Typography variant="subtitle1" className={ props.classes.subTitle } gutterBottom >
                    我是谁 .gif format declared there was one “right way” to pronounce it, the linguistic debate rages on
                </Typography>
                <Typography variant="p" gutterBottom className={ props.classes.author }>
                    Charles Chu in Notes on Changing Your Life
                </Typography>
                <Typography variant="subtitle1" className={ props.classes.subTitle } gutterBottom >
                    Jan 9 · 8 min read
                </Typography>
            </div>
        </ListItem>
    </List>
)
const LeftOrRightWapper = withStyles(LeftOrRightStyle)(LeftOrRightGrid)
class Featured extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render () {
        const { classes } = this.props

        return (
            <div className={ classes.root }>
                <LeftOrRightWapper />
                <LeftOrRightWapper />
                <LeftOrRightWapper />
                <Divider  />

            </div>
        )
    }
}
export default withStyles(styles)(Featured);
