import React from 'react';
import { shallow, mount } from 'enzyme';
import SelectedState from './SelectedState'

// smoke test - test if renders
test('it should render', () => {
  shallow(<SelectedState />);
});