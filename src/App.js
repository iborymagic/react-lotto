import React from 'react';
import MoneyInput from './components/money-input';
import PurchaseNumberList from './components/purchase-number-list';
import WinningNumber from './components/winning-number';
import { LOTTERY_PRICE } from './constants/number';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoneyInputValid: false,
      isModalOpen: false,
      moneyAmount: 0,
    };
  }

  handleSubmit(money) {
    this.setState({
      isMoneyInputValid: true,
      moneyAmount: money,
    });
  }

  render() {
    const ticketCount = Math.floor(this.state.moneyAmount / LOTTERY_PRICE);
    return (
      <>
        <MoneyInput onHandleSubmit={(money) => this.handleSubmit(money)}></MoneyInput>
        {this.state.isMoneyInputValid && (
          <>
            <PurchaseNumberList ticketCount={ticketCount}></PurchaseNumberList>
            <WinningNumber></WinningNumber>
          </>
        )}
      </>
    );
  }
}

export default App;
