import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import LotteryBall from '../LotteryBall';
import chooseBallColor from '../../../utils/color-ball';
import calculatePrize from '../../../utils/calculate-prize';
import './style.scss';

class PurchaseNumberItem extends React.Component {
  constructor(props) {
    super(props);
    this.lotteryBallIds = [...Array(this.props.ticketNumbers.length)].map(() => uuidv4());
  }

  render() {
    return (
      <>
        <li className='purchase-number-item'>
          <div className='lottery-balls-container'>
            {this.props.ticketNumbers.map((number, idx) => {
              {
                this.props.winningBallCount &&
                  this.props.onCalculateTotalPrize(
                    calculatePrize(this.props.winningBallCount, this.props.bonusBallCount)
                  );
              }
              return (
                <LotteryBall
                  colored={
                    this.props.winningNumber &&
                    [...this.props.winningNumber, this.props.bonusNumber].includes(number)
                  }
                  key={this.lotteryBallIds[idx]}
                  numberValue={number}
                  toggled={this.props.toggled}
                  ballColor={chooseBallColor(number)}
                />
              );
            })}
          </div>
        </li>
      </>
    );
  }
}

export default PurchaseNumberItem;
