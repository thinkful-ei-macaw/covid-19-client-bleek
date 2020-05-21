import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

test('app component renders', () => {
  shallow(<App />);
});
