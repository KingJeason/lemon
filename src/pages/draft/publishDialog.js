import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';


const styles = (theme) => createStyles({
    image: {
        width: 400,
        height: 200,

    },
    imgWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        color: 'hsla(218,9%,51%,.8)'
    },
    chipWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
        borderRadius: 4
    },
});

class PublishDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // classifyIndex: 0
        }

    }

    handleClose = () => {
        this.props.close()
    };

    chickChip (index) {
        this.props.changeClassify(index)
    }

    componentWillMount = () => {

    }


    render () {
        const { classes, classifies, classify } = this.props;
        return (
            <Dialog
                open={ this.props.open }
                onClose={ this.handleClose }
                className={ classes.root }
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">发布文章</DialogTitle>

                <DialogContent>
                    <Typography variant="h6" gutterBottom className={ classes.title }>
                        添加封面大图
                    </Typography>
                    <div className={ classes.imgWrapper }>
                        <img alt="添加封面大图" className={ classes.image } src="http://pksfq8iq8.bkt.clouddn.com/5c2dd7f74e73e55ddc78b15f-2019-01-07-21-38-54-维扬(教练).jpeg" />
                    </div>
                    <Typography variant="h6" gutterBottom className={ classes.title }>
                        分类
                    </Typography>
                    <div className={ classes.chipWrapper }>
                        {
                            classifies.map((classify, index) => {
                                return (
                                    <Chip
                                        key={ index }
                                        color={ this.props.classify === classify ? 'secondary' : '' }
                                        label={ classify }
                                        onClick={ this.chickChip.bind(this, index) }
                                        className={ classes.chip }
                                        variant="outlined"
                                    />
                                )
                            })
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ this.handleClose } color="primary">
                        取消
            </Button>
                    <Button onClick={ this.props.ok } color="primary">
                        确定发布
            </Button>
                </DialogActions>
            </Dialog>


        );
    }
}
export default withStyles(styles)(PublishDialog);