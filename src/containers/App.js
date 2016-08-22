import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

import Main from '../components/Main'

class App extends Component {

  componentDidMount() {
    const { fetchImagesIfNeed } = this.props
    fetchImagesIfNeed()
  }

  render() {
    const { images } = this.props
    return (
      <Main images={images} />
    )
  }
}

App.propTypes = {
  images: PropTypes.array.isRequired,
  fetchImagesIfNeed: PropTypes.func.isRequired
}

// @TODO alert is reserved when there is an error for fetching images
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
