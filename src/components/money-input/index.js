import React from 'react';
import NumberInput from '../util-component/number-input';
import Button from '../util-component/button';

class MoneyInput extends React.Component {
  constructor(props) {
    super(props);
  }

  onMoneyInputSubmit(e) {
    e.preventDefault();
    const money = Number(e.target.amount.value);
    this.props.onHandleSubmit(money);
  }

  render() {
    return (
      <form onSubmit={(e) => this.onMoneyInputSubmit(e)}>
        <NumberInput
          customClass='money-input'
          name='amount'
          min='1000'
          max='1000000'
          placeholder='구입 금액을 입력해주세요.'
          autoFocus
        />
        <Button buttonText='구입하기' customClass='money-input-button'></Button>
      </form>
    );
  }
}

export default MoneyInput;
