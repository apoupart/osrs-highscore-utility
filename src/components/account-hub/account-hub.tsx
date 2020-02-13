import React from 'react';
import './account-hub.scss';
import UserInteraction from '../../services/user-interaction';
import { IUserData }from '../../interface/i-user';
import AccountProgression from '../user-account/account-progression';

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
      name: 'xXMyUserNameXx',
    };
    this.getCurrentXP = this.getCurrentXP.bind(this)
  }

  getCurrentXP(): number {
    return UserInteraction.getXPFromCurrentSkill();
  }

  render() {
    return (
      <div className="account-hub">
        <AccountProgression
          username={this.props.user.username}
          currentSkill={this.props.user.currentSkill}
          goalXP={this.props.user.goalXP}
          currentXP={this.props.user.currentXP || this.getCurrentXP()}
          startedXP={this.props.user.startedXP}
        />
      </div>
    );
  }
}

export default AccountHub;
