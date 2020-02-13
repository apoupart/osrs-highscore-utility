import React from 'react';
import './account-progression.scss';
import userInteraction from '../../services/user-interaction';
import AccountGoal from '../account-goal/account-goal';

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

const AccountProgression = (props: IProps) => {
  const addFakeXP = () => {
    userInteraction.setXPGain();
  }
  const { username, goalXP, startedXP, currentXP, currentSkill } = props;

  return (
    <div className="Homepage">
      <AccountGoal
        username={username}
        goalXP={goalXP}
        startedXP={startedXP}
        currentXP={currentXP}
        currentSkill={currentSkill}
      />
      {currentSkill && <button onClick={addFakeXP}>Add FakeXP Drop</button>}
    </div>
  );
}

export default AccountProgression;
