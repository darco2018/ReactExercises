import React, { Component } from 'react';

class AppCounter2 extends Component {
  render() {
    return (
      <div>
        <Counter text="This text is from the parent" />
      </div>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 42
    };
  }

  // handler as arrow function, so no need to bind this:
  // AND WHY DOES IT WORK IF WE DONT USE prevState?
  //  probably you dont need to use prevState because arrow function
  // runs like a callback
 /*  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }; */

  handleClick = () => {
    this.setState((prevState, props ) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <>
        <p>{this.props.text}</p>
        <button
          style={{ padding: '10px' }}
          /* onClick={alert('Click me...')} the alert is already present though before we’ve clicked the button…
                This happens because anything within a render method is invoked upon page load.
                The way around this is to use an arrow function so that only the function is loaded and then upon click, it is invoked  
                onClick={() => alert('Button clicked!')}
                */
          //this works: onClick={() => this.setState({ count: this.state.count + 1 })}
          onClick={this.handleClick}
        >
          {this.state.count}
        </button>
      </>
    );
  }
}

export default AppCounter2;
