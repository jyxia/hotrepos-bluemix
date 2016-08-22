import React, { Component } from 'react'

export default class DownloadButton extends Component {
  render() {
    return (
      <div>
        <h2 className="marketing-header">Follow GitHub trends</h2>
        <dl>
          <dt>🔥 Trending </dt>
          <dd>Find out what's happening in GitHub.</dd>
          <dt>⭐️ Star </dt>
          <dd>Don't miss a good one. Star your favorites.</dd>
          <dt>🌎 Discover </dt>
          <dd>Meet awesome people in the community.</dd>
          <dt>👥 All in one place </dt>
          <dd>Contributors, forks, stargazers, watchers... </dd>
          <dt>❤️ Social </dt>
          <dd>Stay connected with your followers, following and starred repos.</dd>
        </dl>
      </div>
    )
  }
}
