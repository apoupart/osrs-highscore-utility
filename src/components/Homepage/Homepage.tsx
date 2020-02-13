import React from 'react';
import { connect } from 'react-redux';
import userInteraction from '../../services/user-interaction';
import AccountHub from '../account-hub/account-hub';
import './Homepage.scss';
import { IUserSkills } from '../../interface/i-user';

interface IProps {
  username: string;
  skills: Array<IUserSkills>,
  currentSkill: string,
  goalXP: number,
  currentXP: number,
  startedXP: number
}
interface IState {
  name: string;
}

class Homepage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: 'xXMyUserNameXx',
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(): void {
    const username = this.state.name;
    userInteraction.fetchUserToStore(username);
  }

  render() {
    if (this.props.username) {
      return (
        <div>
          <AccountHub user={this.props} />
        </div>
      );
    }
    return (
      <div className="homepage">
          <h1 className="homepage__title">Highscore Utility</h1>
          <button className="homepage__start-btn"onClick={this.submitForm}>Start now</button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
      username: state.username,
      skills: state.skills,
      currentSkill: state.currentSkill,
      goalXP: state.goalXP,
      startedXP: state.startedXP,
      currentXP: state.currentXP
  };
}

export { Homepage };
export default connect(mapStateToProps)(Homepage);
