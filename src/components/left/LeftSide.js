import React, { Component } from 'react'
import Marketing from './Marketing'
import Screenshots from './Screenshots'

export default class LeftSide extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <Marketing />
        <Screenshots imageList={this.props.imageList} />
      </div>
    )
  }
}
