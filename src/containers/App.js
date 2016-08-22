import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

import LeftSide from '../components/left/LeftSide'
import RightSide from '../components/right/RightSide'
import Footer from '../components/footer/Footer'

class App extends Component {

  componentDidMount() {
    const { fetchImagesIfNeed } = this.props
    fetchImagesIfNeed()
  }

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

App.propTypes = {
  images: PropTypes.array.isRequired,
  fetchImagesIfNeed: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { imageList, message } = state
  const images = imageList || []
  const alert = message || ''
  return {
    images,
    alert
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
