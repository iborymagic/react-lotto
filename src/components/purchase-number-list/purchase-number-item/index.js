import React from 'react';
import LotteryBall from '../lottery-ball';

class PurchaseNumberItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ticket = [1, 2, 3, 4, 5, 6, 7];
    return (
      <React.Fragment>
        <li>
          {ticket.map((number, idx) => (
            <LotteryBall key={idx} numberValue={number}></LotteryBall>
          ))}
        </li>
      </React.Fragment>
    );
  }
}

export default PurchaseNumberItem;
