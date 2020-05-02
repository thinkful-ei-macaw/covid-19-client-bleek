import React from 'react';
import { Router } from 'react-router-dom'
import { shallow } from 'enzyme';
import App from './App';

// smoke test - test if renders
test('it should render', () => {
  shallow(<App />);
});

it('renders children when passed in', () => {
  const wrapper = shallow((
    <Router />
  ));
  expect(wrapper.find('div').children().hasClass(items.length));