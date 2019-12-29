import React from 'react';

class AppCounter1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // NOTE: why do we use () after =>  ?!
    this.setState((prevState, props) => 
    ({ counter: prevState.counter + 1 }));
  }

 // version with ARROW function, no need to bind this for it
 
  handleClickARROW = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <>
        <p>Counter: {this.state.counter}</p>
        <button
           onClick={this.handleClick} 
          // this works too:  onClick={() => this.setState({ counter: this.state.counter + 1 })}

          /* why does it not work:?
          onClick={this.setState((prevState, props) => ({
            counter: prevState.counter + 1
          }))}
           */
             
        >
          Increment
        </button>
      </>
    );
  }
}

export default AppCounter1;
