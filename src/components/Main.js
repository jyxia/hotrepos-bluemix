import React, { Component, PropTypes } from 'react'
import LeftSide from './left/LeftSide'
import RightSide from './right/RightSide'
import Footer from './footer/Footer'

export default class Main extends Component {
  render() {
    const { images } = this.props
    return (
      <div>
        <div className="main">
          <div className="container">
            <div className="row">
              <LeftSide imageList={images} />
              <RightSide />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

Main.propTypes = {
  images: PropTypes.array.isRequired
}
