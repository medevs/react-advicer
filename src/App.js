import React, { Component } from 'react'
import axios from 'axios';

import './App.css';

class App extends Component {
  state = { advice: '' }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => console.log(error))
  }

  render() {
    const {advice} = this.state
    return (
      <div className="app">
        <div className="row">
          <div className="col s12 m6 l6 offset-m3 offset-l3 card-col">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title center">{advice}</span>
              </div>
              <div className="card-action center">
                <button className="btn" onClick={this.fetchAdvice}>Another Advice!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
