import React, { Component } from 'react'
import Icon from '../../assets/images/app-icon-white.png'
import DownloadButton from './DownloadButton'

export default class Marketing extends Component {
  render() {
    return (
      <div className="marketing">
        <div className="app-meta app-meta-center">
          <img className="app-icon center-block" src={Icon} />
          <span className="app-name">HotRepos</span>
        </div>
        <DownloadButton />
      </div>
    )
  }
}
