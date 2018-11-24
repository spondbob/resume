import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-xs-right">
            <li className="nav-item">
              <a className="nav-link active" href="#">Resume <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://eamca.com" target="_blank">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://blog.eamca.com" target="_blank">Blog</a>
            </li>
          </ul>
        </nav>
        <h3 className="text-muted">Resume</h3>
      </div>
    )
  }
}

export default Header;