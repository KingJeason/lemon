import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment'

import { createStyles, withStyles } from '@material-ui/core/styles';
const styles = (theme) => createStyles({
    layout: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        width: 'auto',
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 1100,
        },
        // color: 'red'
    },
    shadow: {
        boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)'
    }

});



class DraftListItem extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    async componentDidMount () {

    }
    clickItem = () =>{
       this.props.clickItem(this.props.draft)
    }
    deleteItem = ()=>{
        this.props.deleteItem(this.props.draft)
    }
    render () {
        const { classes, draft } = this.props
        console.log(classes.layout)

        return (
            <ListItem button divider  onClick={this.clickItem}>
                <ListItemText primary={ !draft.title ? '未命名' : draft.title } secondary={ moment(draft.updatedAt).format('YYYY-MM-DD ') } />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={ this.deleteItem }>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}
export default withStyles(styles)(DraftListItem);
