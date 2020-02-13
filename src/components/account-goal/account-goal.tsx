import React from 'react';
import './account-goal.scss';
import ProgressionBar from '../progression-bar/progression-bar';
import userInteraction from '../../services/user-interaction';
import SkillsList from '../skills-list/skills-list';

interface IProps {
  username: string;
  currentSkill: string,
  currentXP: number,
  goalXP: number,
  startedXP: number
}
interface IState {
  name: string;
  user?: any;
}

const AccountGoal = (props: IProps) => {
  const { username, goalXP, startedXP, currentXP, currentSkill } = props;
  const skillList: Array<string> = userInteraction.getSkillListName();
  const selectObjective = 
    skillList.map((val: string, index: number) => {
      return <SkillsList key={index} skill={val} />;
    });
  const hasObjective = (
    <div>
      <h3>Now training: {currentSkill}</h3>
      Start: {startedXP}<br/>
      goalXP: {goalXP} <br/>
      currentXP: {currentXP} 
      <ProgressionBar
        goalXP={goalXP}
        startedXP={startedXP}
        currentXP={currentXP}
      />
    </div>
  )
  return (
    <div className="Homepage">
      <h2>{username}</h2>
      {currentSkill ? hasObjective : selectObjective}
    </div>
  );
}

export default AccountGoal;
