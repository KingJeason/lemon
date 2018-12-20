// const React = require('react')
import React from 'react';
import PropTypes from 'prop-types'
// const PropTypes = require('prop-types')
const hljs = window.hljs
class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }

  setRef(el) {
    this.codeEl = el
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    setTimeout(() => {
      hljs.highlightBlock(this.codeEl)
    }, 0);
  }

  render() {
    return (
      <pre>
        <code ref={this.setRef} className={`language-${this.props.language}`}>
          {this.props.value}
        </code>
      </pre>
    )
  }
}

CodeBlock.defaultProps = {
  language: ''
}

CodeBlock.propTypes = {
  // value: PropTypes.string.isRequired,
  language: PropTypes.string
}

// module.exports = CodeBlock
export default CodeBlock
