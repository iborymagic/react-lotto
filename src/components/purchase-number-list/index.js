import React from 'react';
import { LOTTERY_BALL_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from '../../constants/number';
import { getRandomNumber } from '../../utils/random-number';
import ToggleButton from '../util-component/toggle';
import PurchaseNumberItem from './purchase-number-item';

class PurchaseNumberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBalls: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      showBalls: !this.state.showBalls,
    });
    const lottoReceipt = [...Array(this.props.ticketCount)].map(() => this.getAutoTicket());
    console.log(lottoReceipt);
  }

  getAutoTicket() {
    const lottoTicket = [...Array(LOTTERY_BALL_LENGTH)].map(() =>
      getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER)
    );
    return lottoTicket;
  }

  render() {
    return (
      <div>
        <p>구입한 로또 번호</p>
        <ToggleButton onHandleToggle={this.handleToggle} />
        <ul>
          <PurchaseNumberItem toggled={this.state.showBalls}></PurchaseNumberItem>
        </ul>
      </div>
    );
  }
}

export default PurchaseNumberList;
