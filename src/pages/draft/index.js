import React from 'react';
import Markdown from 'react-markdown'
import Editor from '../../components/Edite/editor'
import CodeBlock from '../../components/Edite/code-block'
import { createStyles, withStyles } from '@material-ui/core/styles';
import moment from 'moment'
import PublishDialog from './publishDialog'

import IconButton from '@material-ui/core/IconButton';
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'
import Header from './header'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { showDraftsService } from '../../services/drafts'
import { getQiNiuTokenService } from '../../services/util'
import * as qiniu from 'qiniu-js'

const initialSource = `

`
const styles = (theme) => createStyles({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

const footerStyles = (theme) => createStyles({
    footer: {
        paddingLeft: ` ${theme.spacing.unit * 2}px `,
        borderTop: '1px solid #ddd',
        width: '100%',
        boxSizing: 'border-box',
        height: 40,
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    button: {
        // margin: theme.spacing.unit,
        cursor: 'pointer'
    },
    input: {
        display: 'none',
        // opacity: 0
    },
})
@connect(state => state)
class EditorFooter extends React.Component {
    updateFile = async (e) => {
        if (!this.refs.updateImg.files.length) return false
        const file = this.refs.updateImg.files[0]
        const { pathname } = window.location
        // '/drafts/123123'.split('/') ==> ["", "drafts", "123123"]
        const id = pathname.split('/')[2]
        const token = await getQiNiuTokenService()
        const time = moment().format('YYYY-MM-DD-HH-mm-ss')
        const uid = `${id}-${time}-${file.name}`
        const observable = qiniu.upload(file, uid, token.data, {}, {})
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
                console.log('上传complete', res)
                that.props.draft.editorRef.replaceSelection(`\n![](http://pksfq8iq8.bkt.clouddn.com/${uid})`)
            }
        })


    }

    render () {
        const { classes } = this.props

        return (
            <div className={ classes.footer }>
                <input ref="updateImg" accept="image/*" onChange={ this.updateFile } className={ classes.input } id="icon-button-file"
                    type="file" />
                <label htmlFor="icon-button-file">
                    {/* <IconButton  component="span"> */ }
                    <AddPhotoAlternate className={ classes.button } />
                    {/* </IconButton> */ }
                </label>
            </div>
        )
    }
}
const EditorFooterWrapper = withStyles(footerStyles)(EditorFooter)
@withRouter
@connect(state => state)
class Draft extends React.PureComponent {
    constructor(props) {
        super(props)
        this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
        this.state = {
            markdownSrc: initialSource,
            htmlMode: 'raw',
            title: '',
            open: false,
            classifies: ['前端', '后端', '算法', '工具'],
            classify: '前端'
        }
    }


    changeTitle = async (title) => {
        console.log(title, '传入的title')
        // await this.setState({
        //     title
        // })
        this.setState({ ...this.state, title }, () => {
            console.log(this.state.title)
            this.updateDrafts()
        })
    }



    updateDrafts = () => {
        const { pathname } = window.location
        const { title, markdownSrc } = this.state
        // '/drafts/123123'.split('/') ==> ["", "drafts", "123123"]
        const id = pathname.split('/')[2]
        const body = {
            markdown: markdownSrc,
            previewImage: '',
            type: 'markdown',
            title,
        }
        if (id !== 'new') {
            this.props.dispatch({
                type: 'UPDATE_DRAFTS',
                id,
                body
            })

        } else {
            this.props.dispatch({
                type: 'CREATE_DRAFTS',
                body
            })
        }
    }

    handleMarkdownChange (evt) {
        console.log(evt.target.value)
        this.setState({ markdownSrc: evt.target.value })
        this.updateDrafts()
    }

    async componentDidMount () {
        const { match: { params } } = this.props
        if (params.id !== 'new') {
            const res = await showDraftsService(params.id)
            const { markdown, title } = res.data
            this.setState({
                markdownSrc: markdown,
                title
            })
        }
    }

    openPublish = () => {
        this.setState({
            open: true
        })
    }

    closeDialog = () => {
        this.setState({
            open: false
        })
    }

    publish = () => {
        this.setState({
            open: false
        })
        console.log('发布了')
    }
    setClassify = (index) => {
        const { classifies } = this.state
        console.log(index)
        this.setState({
            classify: classifies[index]
        })
    }

    render () {
        const { isRequesting } = this.props.draft
        const { open } = this.state
        const { classifies, classify } = this.state
        console.log(classify, 'ss')
        return (
            <div className="draft">
                <Header publish={ this.openPublish } title={ this.state.title } isRequesting={ isRequesting } changeTitle={ this.changeTitle } />
                <div className="editor-pane">
                    <Editor value={ this.state.markdownSrc } onChange={ this.handleMarkdownChange } />
                    <EditorFooterWrapper />
                </div>

                <div className="result-pane">
                    <Markdown
                        className="result"
                        source={ this.state.markdownSrc }
                        renderers={ { code: CodeBlock } }
                    />
                    <EditorFooterWrapper />
                </div>
                <PublishDialog changeClassify={ this.setClassify } classify={ classify } classifies={ classifies } open={ open } close={ this.closeDialog } ok={ this.publish } />
            </div>
        )
    }
}

export default withStyles(styles)(Draft);
