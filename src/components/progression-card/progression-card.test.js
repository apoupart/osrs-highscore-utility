import React from 'react';
import ReactDOM from 'react-dom';
import ProgressionCard from './progression-card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressionCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
