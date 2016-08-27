import React, { Component, PropTypes } from 'react'
import Slider from 'react-slick'

import Image from './Image'
import PrevArrow from '../arrows/PrevArrow'
import NextArrow from '../arrows/NextArrow'

export default class Screenshots extends Component {
  render() {
    const { imageList } = this.props
    const settings = {
      autoplay: true,
      speed: 250,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
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
