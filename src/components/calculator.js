import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

// export default class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: 0,
//       next: null,
//       operation: null,
//     };
//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler(event) {
//     const obj = calculate(this.state, event.target.name);
//     this.setState(obj);
//   }

//   render() {
//     const { total, next, operation } = this.state;
const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setState({ ...state, ...calculate(state, e.target.name) });
  };
  return (
    <div className="container">
      <div className="result" name="total">
        <span>{state.total}</span>
        <span>{state.operation}</span>
        <span>{state.next}</span>
      </div>
      <button onClick={clickHandler} type="button" className="btn" name="AC">
        AC
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="+/-">
        +/-
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="%">
        %
      </button>
      <button onClick={clickHandler} type="button" className="btn sign-color" name="÷">
        ÷
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="7">
        7
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="8">
        8
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="9">
        9
      </button>
      <button onClick={clickHandler} type="button" className="btn sign-color" name="x">
        x
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="4">
        4
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="5">
        5
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="6">
        6
      </button>
      <button onClick={clickHandler} type="button" className="btn sign-color" name="-">
        -
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="1">
        1
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="2">
        2
      </button>
      <button onClick={clickHandler} type="button" className="btn" name="3">
        3
      </button>
      <button onClick={clickHandler} type="button" className="btn sign-color" name="+">
        +
      </button>
      <button onClick={clickHandler} type="button" className="zero" name="0">
        0
      </button>
      <button onClick={clickHandler} type="button" className="btn" name=".">
        .
      </button>
      <button onClick={clickHandler} type="button" className="btn sign-color" name="=">
        =
      </button>
    </div>
  );
};

export default Calculator;
