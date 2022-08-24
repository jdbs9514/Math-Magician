import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './calculator';

it('renders to match the test', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

