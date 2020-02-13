import React from 'react';
import ReactDOM from 'react-dom';
import SkillsList from './skills-list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
