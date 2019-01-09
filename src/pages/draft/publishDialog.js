import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import { generateQiniu, generateUid } from '../../utils/utils'
import { qiniuConfig } from '../../config/index'
const styles = (theme) => createStyles({
    image: {
        width: 400,
        height: 200,

    },
    addImage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'hsla(0,0%,87%,.6)',
        cursor: 'pointer'
    },
    imgWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
        height: 200,
        width: 400,
        boxSizing: "border-box",
        margin: '0 auto'
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
    icon: {
        color: 'white',
        position: 'absolute',
        right: 0,
        top: 0
    },
    input: {
        display: 'none'
    }
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
        const { changeClassify, classifies } = this.props
        changeClassify(classifies[index])
    }

    componentWillMount = () => {

    }

    updateFile = async (e) => {
        if (!this.refs.updateImg.files.length) return false
        const file = this.refs.updateImg.files[0]
        const { pathname } = window.location
        const key = generateUid(file, pathname)
        const observable = await generateQiniu(file, key)
        const that = this
        observable.subscribe({
            next (res) {
                // res 参数是一个带有 total 字段的 object，包含loaded、total、percent三个属性，提供上传进度信息。
                console.log('正在上传', res)
            },
            error (err) {
                console.log('上传失败', err)
            },
            complete (res) {
                const imgUrl = `${qiniuConfig.baseUrl}/${key}`
                that.props.setImg(imgUrl)
            }
        })
    }
    render () {
        const { classes, classifies, previewImage } = this.props;
        const addImg =
            (
                <Card className={ classes.imgWrapper }>
                    <input ref="updateImg" accept="image/*" onChange={ this.updateFile } className={ classes.input } id="add-previewImage"
                        type="file" />
                    <label htmlFor="add-previewImage" className={ classes.addImage } >
                        <Typography variant="h5" component="h2" style={ { textAlign: 'center', color: 'rgba(51,51,51,.4)' } }>
                            点击此处添加图片
                        </Typography>
                    </label>
                </Card>
            )

        const previewImageWrapper =
            (
                <Card className={ classes.imgWrapper }>
                    <img alt="添加封面大图" className={ classes.image } src={ previewImage } />
                    <IconButton className={ classes.icon } onClick={ this.props.setImg}>
                        <DeleteIcon />
                    </IconButton>
                </Card>
            )
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
                    { previewImage ? previewImageWrapper : addImg }
                    <Typography variant="h6" gutterBottom className={ classes.title }>
                        分类
                    </Typography>
                    <div className={ classes.chipWrapper }>
                        {
                            classifies.map((classify, index) => {
                                return (
                                    <Chip
                                        key={ index }
                                        color={ this.props.classify === classify ? 'secondary' : 'default' }
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