import React from 'react';
import './skills-list.scss';
import userInteraction from '../../services/user-interaction';

interface IProps {
  skill: string
}

const SkillsList = (props: IProps) => {
  const { skill } = props;
  const onSkillSelection = () => {
    userInteraction.setSkill(skill);
  }

  return (
    <button className="skill-list" onClick={onSkillSelection}>
      Train {skill}
    </button>
  );
}

export default SkillsList;
