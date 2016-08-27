import React, { Component } from 'react'

export default class DownloadButton extends Component {
  render() {
    return (
      <div className="download-buttons">
        <a className="download-btn ios" href="https://itunes.apple.com/app/id1142465304?mt=8&at=11l7ss"></a>
        <a className="download-btn android"></a>
      </div>
    )
  }
}
