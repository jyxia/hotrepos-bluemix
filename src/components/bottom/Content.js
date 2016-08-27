import React, { Component } from 'react'
import Common from '../common'
import SwipeRow from './SwipeRow'
import TopButton from './TopButton'
import appDescription from '../../data/appDescription'

export default class Content extends Component {
  render() {
    const { Feature, Container, Row } = Common
    return (
      <div className="content">
        <Container>
          <SwipeRow />
          <Row styleName={'wide'} >
            {
              appDescription.map((content, index) => {
                return (
                  <div className="col-sm-4" key={index}>
                    <Feature feature={content} />
                  </div>
                )
              })
            }
          </Row>
          <TopButton />
        </Container>
      </div>
    )
  }
}
