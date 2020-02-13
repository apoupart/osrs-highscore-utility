import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import AccountHub from './account-hub';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountHub />, div);
  ReactDOM.unmountComponentAtNode(div);
});
