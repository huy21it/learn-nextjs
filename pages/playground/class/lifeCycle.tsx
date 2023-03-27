import React, { Component } from 'react';

type StateType = {
  counter: number;
};
export default class lifeCycle extends Component<any, StateType> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  render() {
    console.log('render run');
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    return (
      <div className="container">
        <h1>Play Ground</h1>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Counter add
        </button>
      </div>
    );
  }
}
