import React, { Component } from 'react'
import Slider from 'react-slick'

import Common from '../common'
import PrevArrow from '../arrows/PrevArrow'
import NextArrow from '../arrows/NextArrow'
import appDescription from '../../data/appDescription'

export default class SwipeRow extends Component {
  render() {
    const settings = {
      dots: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    }

    const { Feature } = Common
    return (
        <Slider {...settings} className="row swipe">
          {
            appDescription.map((content, index) => {
              return (
                <div className="col-sm-4" key={index}>
                  <Feature feature={content} />
                </div>
              )
            })
          }
        </Slider>
    )
  }
}
