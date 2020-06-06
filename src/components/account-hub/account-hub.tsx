import React from 'react';
import './account-hub.scss';
import UserInteraction from '../../services/user-interaction';
import { IUserData }from '../../interface/i-user';
import ProgressionBar from '../progression-bar/progression-bar';
import SkillsList from '../skills-list/skills-list';
import ProgressionCard from '../progression-card/progression-card';

interface IProps {
  user: IUserData;
}
interface IState {
  name: string;
  user?: any;
}

class AccountHub extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: 'Zezima',
    };
    this.getCurrentXP = this.getCurrentXP.bind(this)
  }

  getCurrentXP(): number {
    return UserInteraction.getXPFromCurrentSkill();
  }

  render() {
    const skillList: Array<string> = UserInteraction.getSkillListName();
    const selectObjectiveComponent = 
      skillList.map((val: string, index: number) => {
        return <SkillsList key={index} skill={val} />;
      });
    
    const hasObjectiveComponent = <ProgressionCard {...this.props} />;
    return (
      <div className="account-hub">
        {this.props.user.currentSkill ? hasObjectiveComponent : selectObjectiveComponent}
      </div>
    );
  }
}

export default AccountHub;
