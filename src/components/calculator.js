/* eslint-disable */
import React, { Component } from "react";
import "./calculator.css";
import calculate from "../logic/calculate";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
   const obj = calculate(this.state, event.target.name);
   this.setState(obj)
  };
  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result" name="total">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <button  onClick = {this.clickHandler} className="btn" name="AC" >
          AC
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="+/-">
          +/-
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="%">
          %
        </button>
        <button  onClick = {this.clickHandler} className="btn sign-color" name="÷">
          ÷
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="7">
          7
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="8">
          8
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="9">
          9
        </button>
        <button  onClick = {this.clickHandler} className="btn sign-color" name="x">
          x
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="4">
          4
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="5">
          5
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="6">
          6
        </button>
        <button  onClick = {this.clickHandler} className="btn sign-color" name="-">
          -
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="1">
          1
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="2">
          2
        </button>
        <button  onClick = {this.clickHandler} className="btn" name="3">
          3
        </button>
        <button  onClick = {this.clickHandler} className="btn sign-color" name="+">
          +
        </button>
        <button  onClick = {this.clickHandler} className="zero" name="0">
          0
        </button>
        <button  onClick = {this.clickHandler} className="btn" name=".">
          .
        </button>
        <button  onClick = {this.clickHandler} className="btn sign-color" name="=">
          =
        </button>
      </div>
    );
  }
}
