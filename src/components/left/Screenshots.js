import React, { Component, PropTypes } from 'react'
import Image from './Image'
import Slider from 'react-slick'

class PrevArrow extends Component {
  render() {
    return <div {...this.props} style={{display: 'none'}}></div>
  }
}

class NextArrow extends Component {
  render() {
    return <div {...this.props} style={{display: 'none'}}></div>
  }
}

export default class Screenshots extends Component {
  render() {
    const { imageList } = this.props
    const settings = {
      autoplay: true,
      speed: 250,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    }

    return (
      <div className="device iphone-se-silver-vertical">
        <Slider {...settings} className="slide-screenshot">
        {
          imageList.map((image, index) => {
            return <Image image={image} key={index} />
          })
        }
        </Slider>
      </div>
    )
  }
}

Screenshots.propTypes = {
  imageList: PropTypes.array.isRequired
}
