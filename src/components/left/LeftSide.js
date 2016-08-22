import React, { Component, PropTypes } from 'react'
import Marketing from './Marketing'
import Screenshots from './Screenshots'

export default class LeftSide extends Component {
  render() {
    return (
      <div className="col-sm-6 leftside">
        <Marketing />
        <Screenshots imageList={this.props.imageList} />
      </div>
    )
  }
}

LeftSide.propTypes = {
  imageList: PropTypes.array.isRequired
}
