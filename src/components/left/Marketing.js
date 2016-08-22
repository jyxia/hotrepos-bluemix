import React, { Component } from 'react'
import Icon from '../../assets/images/app-icon-white.png'

export default class Marketing extends Component {
  render() {
    return (
      <div className="marketing">
        <div className="app-meta app-meta-center">
          <img className="app-icon" src={Icon} />
          <span className="app-name">HotRepos</span>
        </div>
      </div>
    )
  }
}
