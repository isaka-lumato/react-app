import React, { Component } from 'react';
import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <span className="result">0</span>
        <span className="btn">AC</span>
        <span className="btn">+/-</span>
        <span className="btn">%</span>
        <span className="btn sign-color">÷</span>
        <span className="btn">7</span>
        <span className="btn">8</span>
        <span className="btn">9</span>
        <span className="btn sign-color">x</span>
        <span className="btn">4</span>
        <span className="btn">5</span>
        <span className="btn">6</span>
        <span className="btn sign-color">-</span>
        <span className="btn">1</span>
        <span className="btn">2</span>
        <span className="btn">3</span>
        <span className="btn sign-color">+</span>
        <span className="zero">0</span>
        <span className="btn">.</span>
        <span className="btn sign-color">=</span>
      </div>
    );
  }
}
