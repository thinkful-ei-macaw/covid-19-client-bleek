import React from 'react';
import { shallow } from 'enzyme';
import Context from '../../Context';
import SelectedState from './SelectedState';

// smoke test - test if renders
test('it should render', () => {
  shallow(
    <Context.Provider>
      <SelectedState />
    </Context.Provider>
  );
});
