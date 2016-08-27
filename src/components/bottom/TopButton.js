import React, { Component } from 'react'

export default class TopButton extends Component {
  scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="row">
        <div className="top" onClick={this.scrollToTop}></div>
      </div>
    )
  }
}
