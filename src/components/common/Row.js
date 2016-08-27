import React, { Component, PropTypes } from 'react'

export default class Row extends Component {
  render() {
    const { styleName } = this.props
    const rowClass = `row ${ styleName }`
    return (
      <div className={rowClass}>
        { this.props.children }
      </div>
    )
  }
}

Row.propTypes = {
  styleName: PropTypes.string,
  children: PropTypes.array
}
