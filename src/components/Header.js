import React, { Component } from 'react';
import { Link } from 'react-router';
import IconLink from './IconLink';

class Header extends Component {
  render() {
    return (
        <header className="header centered-container">
          <img className="img-circle user-image" src="http://www.gravatar.com/avatar/046435822bf4ad50b74b9cae8d7e8c3a?s=180&r=g&d=retro"/>
          <div className="user-info-container">
            <span className="name"> Kaio Magalh&atilde;es </span>
            <span className="profession"> Software Engineer </span>
              <div className="links-container">
              <IconLink iconClass="email"/>
              <IconLink iconClass="github"/>
              <IconLink iconClass="linkedin"/>
              <IconLink iconClass="curriculum"/>
            </div>
          </div>
          <Link to="/about">About</Link>
          <Link to="/poweredby">Powered by</Link>
        </header>
    );
  }
}

export default Header;
