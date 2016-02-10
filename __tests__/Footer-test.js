jest.dontMock('../src/components/Footer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Footer = require('../src/components/Footer').default;

describe('Footer', () => {
  it('has my name and the year on it', () => {
    var footer = TestUtils.renderIntoDocument(<Footer />);
    var footerNode = ReactDOM.findDOMNode(footer);
    expect(footerNode.textContent.indexOf('Kaio Magalhães') !== -1).toBe(true);
    expect(footerNode.textContent.indexOf(new Date().getFullYear()) !== -1).toBe(true);
  });

});
