import React, { Component } from 'react'
import Scroll from 'react-scroll'

export default class TopButton extends Component {
  scrollToTop() {
    let scroll = Scroll.animateScroll
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="row">
        <div className="top" onClick={this.scrollToTop}></div>
      </div>
    )
  }
}
