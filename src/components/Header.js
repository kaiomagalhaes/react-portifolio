import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from 'react-bootstrap/lib/Image';

class Header extends Component {
  render() {
    const circleShape = true;
    return (
        <header className="header centered-container">
          <Image className="user-image" circle={circleShape} src="http://www.gravatar.com/avatar/046435822bf4ad50b74b9cae8d7e8c3a?s=180&r=g&d=retro"/>
          <div className="user-info-container">
            <span className="name"> Kaio Magalh&atilde;es </span>
            <span className="profession"> Software Engineer </span>
          </div>
          <Link to="/about">About</Link>
          <Link to="/poweredby">Powered by</Link>
        </header>
    );
  }
}

export default Header;
