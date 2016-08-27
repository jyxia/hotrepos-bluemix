import React, { Component, PropTypes } from 'react'
import Screenshots from './Screenshots'

export default class RightSide extends Component {
  render() {
    return (
      <div className="col-sm-6 rightside">
        <Screenshots imageList={this.props.imageList} />
      </div>
    )
  }
}

RightSide.propTypes = {
  imageList: PropTypes.array.isRequired
}
