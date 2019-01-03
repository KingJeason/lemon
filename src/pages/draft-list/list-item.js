import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


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
            open: false,
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    clickItem = () => {

        this.props.clickItem(this.props.draft)
    }

    deleteItem = () => {
        this.setState({ open: false });
        console.log(this.props.draft)
        this.props.deleteItem(this.props.draft)
    }

    render () {
        const { classes, draft } = this.props
        return (
            <div>
                <ListItem button divider onClick={ this.clickItem } >
                    <ListItemText classes={ { primary: classes.listItemText } } primary={ !draft.title ? '未命名' : draft.title } secondary={ moment(draft.updatedAt).format('YYYY-MM-DD ') } />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={ this.handleClickOpen }>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Dialog
                    open={ this.state.open }
                    onClose={ this.handleClose }
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{ "确认删除?" }</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {`确认后将删除${draft.title? draft.title : '未命名'},且该操作不可撤销`}
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ this.handleClose } >
                            取消
            </Button>
                        <Button onClick={ this.deleteItem }  autoFocus>
                            确认
            </Button>
                    </DialogActions>
                </Dialog>
            </div>


        )
    }
}
export default withStyles(styles)(DraftListItem);
