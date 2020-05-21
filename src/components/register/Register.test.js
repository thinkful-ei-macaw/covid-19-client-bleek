import React from 'react';
import Register from './register';
import Context from '../../Context';
import { shallow } from 'enzyme';

test('register component renders', () => {
  shallow(
    <Context.Provider>
      <Register />
    </Context.Provider>
  );
});
