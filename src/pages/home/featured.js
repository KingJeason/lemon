import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PostItem from './postItem'
import { createStyles, withStyles } from '@material-ui/core/styles';
const styles = (theme) => createStyles({
    root: {
        display: 'flex',
        height: 400,
        boxSizing: 'border-box'
    },
    listStyle1:{
        width: '30%'
    },
    listStyle2:{
        width: '40%'
    }
});
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
                <List className={ classes.listStyle1 }>
                    <PostItem mode={ 1 } />
                </List>
                <List className={ classes.listStyle2 }>
                    <PostItem mode={ 2 }/>
                    <PostItem mode={ 2 }/>
                    <PostItem mode={ 2 }/>
                </List>
                <List className={ classes.listStyle1 }>
                    <PostItem mode={ 1 }/>
                </List>
            </div>
        )
    }
}
export default withStyles(styles)(Featured);
