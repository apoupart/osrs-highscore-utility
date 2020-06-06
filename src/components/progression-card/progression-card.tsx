import React from 'react';
import './progression-card.scss';
import userInteraction from '../../services/user-interaction';
import { IUserData } from '../../interface/i-user';
import ProgressionBar from '../progression-bar/progression-bar';
import Image from '../commons/image/image';

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
      <div className="progression-card">
        <div className="progression-card__image-wrapper">
          <Image
            className="progression-card__image"
            src="https://oldschool.runescape.wiki/images/thumb/d/d2/Goblin.png/300px-Goblin.png?21289"
            alt="character of Zezima"
            aria-label="this is the Zezima character"
            lazyLoading={true}
          ></Image>
        </div>
        <div className="progression-card__details-wrapper">
          <h3 aria-label="Your">Current task</h3>
          <p>{currentXPGain} / {totalXPToGain} <b>{currentSkill}</b></p>
          <ProgressionBar
            goalXP={goalXP}
            startedXP={startedXP}
            currentXP={currentXP || this.getCurrentXP()}
          />
          {currentSkill && <button onClick={addFakeXP}>Add FakeXP Drop</button>}
        </div>
      </div>
    );
  }
}

export default ProgressionCard;
