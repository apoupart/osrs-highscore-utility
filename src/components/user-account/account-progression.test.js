import React from 'react';
import ReactDOM from 'react-dom';
import AccountProgression from './account-progression';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountProgression />, div);
  ReactDOM.unmountComponentAtNode(div);
});
