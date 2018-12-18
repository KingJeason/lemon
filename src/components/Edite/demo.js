// const React = require('react')
import React from 'react';
// import PropTypes from 'prop-types'
// const ReactDOM = require('react-dom')
import Markdown  from 'react-markdown'
import Editor from './editor'
import CodeBlock from './code-block'

const initialSource = `

`

class Demo extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleControlsChange = this.handleControlsChange.bind(this)
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
    this.state = {
      markdownSrc: initialSource,
      htmlMode: 'raw'
    }
  }

  handleMarkdownChange(evt) {
    this.setState({markdownSrc: evt.target.value})
  }

  handleControlsChange(mode) {
    this.setState({htmlMode: mode})
  }

  render() {
    return (
      <div className="demo">
        <div className="editor-pane">
          <Editor value={this.state.markdownSrc} onChange={this.handleMarkdownChange} />
        </div>

        <div className="result-pane">
          <Markdown
            className="result"
            source={this.state.markdownSrc}
            renderers={{code: CodeBlock}}
          />
        </div>
      </div>
    )
  }
}

export default Demo