import React from 'react';

class MoneyInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input
          className='number-input money-input'
          type='number'
          min='1000'
          max='10000000'
          placeholder='구입 금액을 입력해주세요.'
          autofocus
          required
        ></input>
        <button>구입하기</button>
      </form>
    );
  }
}

export default MoneyInput;
