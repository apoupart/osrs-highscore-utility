import React from 'react';
import './progression-card.scss';
import userInteraction from '../../services/user-interaction';
import { IUserData } from '../../interface/i-user';
import ProgressionBar from '../progression-bar/progression-bar';

interface IProps {
  user: IUserData;
}
interface IState {
  progressionClass: Array<string>;
  percentage: number;
}

class ProgressionCard extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      progressionClass: ['progression-bar'],
      percentage: 0,
    };
    this.getCurrentXP = this.getCurrentXP.bind(this)
  }

  getCurrentXP(): number {
    return userInteraction.getXPFromCurrentSkill();
  }

  render() {
    const { goalXP, startedXP, currentXP, currentSkill } = this.props.user;

    const currentXPGain: number = userInteraction.getGainedXPSinceStart();
    const totalXPToGain: number = userInteraction.getXPDifferenceBetweenStartAndEnd();

    const addFakeXP = () => {
      userInteraction.setXPGain();
    }

    return (
      <div className="progressionCard">
        <h3 aria-label="Your">Current task</h3>
        <p>{currentXPGain} / {totalXPToGain} <b>{currentSkill}</b></p>
        <ProgressionBar
          goalXP={goalXP}
          startedXP={startedXP}
          currentXP={currentXP || this.getCurrentXP()}
        />
        {currentSkill && <button onClick={addFakeXP}>Add FakeXP Drop</button>}
      </div>
    );
  }
}

export default ProgressionCard;
