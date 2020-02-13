import React from 'react';
import ProgressionService from '../../services/progression';
import './progression-bar.scss';

interface IProps {
  goalXP: number,
  startedXP: number,
  currentXP: number
}
interface IState {
  progressionClass: Array<string>;
  percentage: number;
}

class ProgressionBar extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      progressionClass: ['progression-bar'],
      percentage: 0,
    };
    this.timerSetup = this.timerSetup.bind(this);
    this.setPercentage = this.setPercentage.bind(this);
  }

  componentDidMount() {  
    this.setPercentage(this.props);
    this.timerSetup();
  }

  componentWillReceiveProps(newProps: IProps) {
    this.setPercentage(newProps);
  }

  setPercentage(data: IProps) {
    const { goalXP, startedXP, currentXP = 0 } = data;
    const percentage: number = ProgressionService.getPercentageComplete(goalXP, startedXP, currentXP);
    this.setState({percentage});
  }

  timerSetup() {
    setTimeout(() => {
      const prevClass: Array<string> = this.state.progressionClass as Array<string>;
      prevClass.push('is-ready');
      this.setState({
        progressionClass: prevClass
      });
    }, 50);
  }

  render() {
    const divStyle = {
      "--progression-bar-width": `${this.state.percentage}%`,
    } as React.CSSProperties;

    return (
      <div style={divStyle}>
        <div className={this.state.progressionClass.join(' ')}>
          <span className="progression-bar__label">{this.state.percentage} %</span>
        </div>
      </div>
    );
  }
}

export default ProgressionBar;
