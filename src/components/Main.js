import React, { Component, PropTypes } from 'react'
import LeftSide from './left/LeftSide'
import RightSide from './right/RightSide'
import Footer from './footer/Footer'
import Row from './common/Row'
import Container from './common/Container'
import Content from './bottom/Content'

export default class Main extends Component {
  render() {
    const { images } = this.props
    return (
      <div>
        <div className="main" role="main">
          <Container>
            <Row>
              <LeftSide />
              <RightSide imageList={images} />
            </Row>
          </Container>
        </div>
        <Content />
        <Footer />
      </div>
    )
  }
}

Main.propTypes = {
  images: PropTypes.array.isRequired
}
