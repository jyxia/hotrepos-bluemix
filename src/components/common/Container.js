import React, { Component, PropTypes } from 'react'

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        { this.props.children }
      </div>
    )
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ])
}
