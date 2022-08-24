import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from  './Quotes';

it('renders to match the test', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });