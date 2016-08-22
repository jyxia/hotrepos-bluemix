import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
      <img className="screenshot" src={this.props.image.imageurl} alt={this.props.image.description} />
    )
  }
}
