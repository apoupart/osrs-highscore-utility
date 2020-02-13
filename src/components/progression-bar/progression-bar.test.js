import React from 'react';
import ReactDOM from 'react-dom';
import ProgressionBar from './progression-bar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressionBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
