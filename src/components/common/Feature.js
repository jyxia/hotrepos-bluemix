import React, { Component, PropTypes } from 'react'

export default class Feature extends Component {
  render() {
    const { feature } = this.props
    return (
      <div className="feature">
        <img src={feature.imageurl} className="img-responsive center-block" />
        <h2>{feature.title}</h2>
        <h4>{feature.description}</h4>
      </div>
    )
  }
}

Feature.propTypes = {
  feature: PropTypes.object.isRequired
}
