import React, { Component } from "react";
import './calculator.css'; 

export default class Calculator extends Component {
  render() {
    return (
      <div class="container">
  <span class="result">0</span>
  <span class="btn">AC</span>
  <span class="btn">+/-</span>
  <span class="btn">%</span>
  <span class="btn sign-color">/</span>
  <span class="btn">7</span>
  <span class="btn">8</span>
  <span class="btn">9</span>
  <span class="btn sign-color">x</span>
  <span class="btn">4</span>
  <span class="btn">5</span>
  <span class="btn">6</span>
  <span class="btn sign-color">-</span>
  <span class="btn">1</span>
  <span class="btn">2</span>
  <span class="btn">3</span>
  <span class="btn sign-color">+</span>
  <span class="zero">0</span>
  <span class="btn">.</span>
  <span class="btn sign-color">=</span>
  </div>
    );
  }
}
