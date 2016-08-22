import React, { Component } from 'react'
import DownloadButton from './DownloadButton'
import AppDescription from './AppDescription'

export default class RightSide extends Component {
  render() {
    return (
      <div className="col-sm-6 rightside">
        <div className="marketing">
          <DownloadButton />
          <AppDescription />
        </div>
      </div>
    )
  }
}
