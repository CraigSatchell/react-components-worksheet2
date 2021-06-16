import React, { Component } from 'react';
import SuperheroCreateForm from './components/SuperheroCreateForm/SuperheroCreateForm';
import './App.css';

class App extends Component {
  state = {
    name: null,
    priAbility: null,
    secAbility: null
  }

  render() {
    return (
      <div className="App">
        <SuperheroCreateForm hero={this.state} />
      </div>
    );

  }
}

export default App;
