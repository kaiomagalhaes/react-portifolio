jest.dontMock('../src/components/IconLink');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const IconLink = require('../src/components/IconLink').default;

describe('IconLink', () => {
  it('should render a link with the specified url', () => {
    const url = 'myurl.com';
    var iconLink = TestUtils.renderIntoDocument(<IconLink url={url} />);
    var iconLinkNode = ReactDOM.findDOMNode(iconLink);
    var link = TestUtils.findRenderedDOMComponentWithTag(
       iconLink, 'a'
    );

    expect(link.getAttribute('href')).toEqual(url);
    expect(TestUtils.findRenderedDOMComponentWithClass(iconLink, 'icon-link')).not.toBeUndefined();
  });

  it('should render an icon', () => {
    var iconLink = TestUtils.renderIntoDocument(<IconLink />);
    var link = TestUtils.findRenderedDOMComponentWithTag(
       iconLink, 'a'
    );

    var icon = TestUtils.findRenderedDOMComponentWithTag(
       iconLink, 'img'
    );

    expect(icon).not.toBeUndefined();
  });

  it('should render the class send through the props', () => {
    const specifiedClass='github';
    var iconLink = TestUtils.renderIntoDocument(<IconLink iconClass={specifiedClass}/>);
    expect(TestUtils.findRenderedDOMComponentWithClass(iconLink, specifiedClass)).not.toBeUndefined();
  });
});
