import React, { Component } from 'react';

class IconLink extends Component {
  render() {
    return (
      <a href={this.props.url || '#'} className="icon-link img-circle">
        <img className={this.props.iconClass} />
      </a>
    );
  }
}

export default IconLink;
