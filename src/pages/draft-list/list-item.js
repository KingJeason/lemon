import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment'

import { createStyles, withStyles } from '@material-ui/core/styles';
const styles = (theme) => createStyles({
    listItemText: {
        fontSize: '1.35rem'
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
    clickItem = () => {
        this.props.clickItem(this.props.draft)
    }
    deleteItem = () => {
        this.props.deleteItem(this.props.draft)
    }
    render () {
        const { classes, draft } = this.props
        return (
            <ListItem button divider onClick={ this.clickItem } >
                <ListItemText classes={ { primary: classes.listItemText } } primary={ !draft.title ? '未命名' : draft.title } secondary={ moment(draft.updatedAt).format('YYYY-MM-DD ') } />
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
