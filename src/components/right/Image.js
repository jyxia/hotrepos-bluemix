import React, { Component, PropTypes } from 'react'

export default class Image extends Component {
  render() {
    const { image } = this.props
    return (
      <img className="screenshot" src={image.imageurl} alt={image.description} />
    )
  }
}

Image.propTypes = {
  image: PropTypes.object.isRequired
}
