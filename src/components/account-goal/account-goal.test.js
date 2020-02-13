import React from 'react';
import ReactDOM from 'react-dom';
import AccountGoal from './account-goal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountGoal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
