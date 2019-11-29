import React from 'react';
import './ComponentChooser.css';

const Ex1 = () => (
  <div style={{ background: 'red' }}>displaying ex1 div... </div>
);
const Ex2 = () => (
  <div style={{ background: 'grey' }}>displaying ex2 div... </div>
);
const Ex3 = () => (
  <div style={{ background: 'green' }}>displaying ex3 div... </div>
);

class ComponentChooser extends React.Component {
  constructor(props) {
    console.log('First constructor called;');
    super(props);
    this.state = {
      displayedElem: (
        <p style={{ color: 'red' }}>
          <strong>
            Click a button to choose which component will be displayed.
          </strong>
        </p>
      )
    };
    this.chooseExercise = this.chooseExercise.bind(this);
  }

  chooseExercise(e) {
    console.log(e.target.name);
    let choice = e.target.name;
    let displayedElem = null;
    switch (choice) {
      case 'ex1':
        displayedElem = <Ex1 />;
        break;
      case 'ex2':
        displayedElem = <Ex2 />;
        break;
      case 'ex3':
        displayedElem = <Ex3 />;
        break;

      default:
    }

    this.setState({ displayedElem: displayedElem });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.chooseExercise}>
          <button name="ex1">Ex 1</button>
          <button name="ex2">Ex 2</button>
          <button name="ex3">Ex 3</button>
          {this.state.displayedElem}
        </header>
      </div>
    );
  }
}

export default ComponentChooser;
