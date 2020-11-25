import React, { Component } from 'react';

const textArray = ['Plumbers', 'Dentists', 'Cleaning Companies', 'Vets', 'Builders', 'Small Businesses'];
class dynamicText extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
        <span>{textThatChanges}</span>
    )
  }
}

export default dynamicText;
