import React, { Component, createRef } from "react";
import "./bulb.css";
export default class Bulb extends Component {
  constructor() {
    super();
    this.state = {
      data: true,
    };
    this.bulbRef = createRef();
    this.textRef = createRef();
  }
  toggle = () => {
    if (this.state.data) {
      this.bulbRef.current.style.backgroundColor = "yellow";
      this.bulbRef.current.style.boxShadow = " 0px 0px 100px 10px yellow";
      this.textRef.current.style.color = "green";

      this.setState({ data: false });
    } else {
      this.bulbRef.current.style.backgroundColor = "whitesmoke";
      this.bulbRef.current.style.boxShadow = "0px 0px 50px 10px transparent";

      this.textRef.current.style.color = "red";

      this.setState({ data: true });
    }
  };
  render() {
    return (
      <div className="main">
        <div className="bulb" ref={this.bulbRef}></div>
        <div className="handle">
          <div className="handle1"></div>
          <div className="handle2">
            <div className="sides">
            <div className="side"></div>
            <div className="side"></div>
            </div>
          </div>
          <div className="handle3"></div>
        </div>
        <div className="button" ref={this.textRef} onClick={this.toggle}>
          {this.state.data ? "On" : "Off"}
        </div>
      </div>
    );
  }
}
