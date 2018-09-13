import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Resources from './components/Resources';
import { submitVote } from './lib/voting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      submitted: Boolean(localStorage.getItem('voted')) || false,
    };
    this.submitRating = this.submitRating.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  async submitRating() {
    const event = 'reactalicante-webcomponents-backup';
    const vote = this.state.currentValue;
    if (this.state.submitted) {
      return;
    }

    try {
      await submitVote(event, vote);
      this.setState({ submitted: true });
    } catch (err) {
      console.error(err);
    }
  }

  handleValueChange(event) {
    const currentValue = event.target.value;
    this.setState({ currentValue });
  }

  render() {
    const { submitted } = this.state;
    // const submitted = false;

    return (
      <div className="main">
        <Header />
        <emoji-rating
          onClick={this.handleValueChange}
          value={this.state.currentValue}
        />
        {!submitted && (
          <button onClick={this.submitRating}>Submit Rating</button>
        )}
        {submitted && (
          <div>
            <p className="thank-you">
              Thanks for voting this talk with
              <span> {this.state.currentValue} </span> pandas!
            </p>
          </div>
        )}
        <Resources />
      </div>
    );
  }
}

export default App;
