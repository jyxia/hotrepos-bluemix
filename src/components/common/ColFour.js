import React, { Component, PropTypes } from 'react'

export default class ColFour extends Component {
  render() {
    return (
      <div className="col-sm-4">
        { this.props.children }
      </div>
    )
  }
}

ColFour.propTypes = {
  children: PropTypes.array
}
