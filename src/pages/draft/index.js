import React from 'react';
import Markdown from 'react-markdown'
import Editor from '../../components/Edite/editor'
import CodeBlock from '../../components/Edite/code-block'
import { createStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'
import Header from './header'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { showDraftsService } from '../../services/drafts'
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
    },
})
const EditorFooter = (props) => {
    const { classes } = props;
    return (
        <div className={ props.classes.footer }>
            <input accept="image/*" className={ classes.input } id="icon-button-file" 
             type="file" />
            <label htmlFor="icon-button-file">
                {/* <IconButton  component="span"> */ }
                <AddPhotoAlternate className={ classes.button } />
                {/* </IconButton> */ }
            </label>
        </div>
    )
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
            title: ''
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
    render () {
        const { isRequesting } = this.props.draft

        return (
            <div className="draft">
                <Header title={ this.state.title } isRequesting={ isRequesting } changeTitle={ this.changeTitle } />
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
            </div>
        )
    }
}

export default withStyles(styles)(Draft);
