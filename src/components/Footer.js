import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <span className="text">© Kaio Magalhães - {new Date().getFullYear()}</span>
        </div>
      </div>
    );
  }
}

export default Footer;
