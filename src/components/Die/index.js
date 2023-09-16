import React, { Component } from "react";
import "../../assets/css/Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: Math.floor(Math.random() * 6) + 1,
  };
  constructor(props) {
    super(props);
    this.handleLock = this.handleLock.bind(this);
  }

  handleLock() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling";
    return (
      <i className={classes} onClick={this.handleLock} disabled={disabled} />
    );
  }
}

export default Die;
