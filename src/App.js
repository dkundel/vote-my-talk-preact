import React, { Component } from 'react';
import './App.css';
import Resources from './components/Resources';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      submitted: Boolean(localStorage.getItem('voted')) || false,
    };
    this.submitRating = this.submitRating.bind(this);
  }

  async submitRating() {
    const url =
      'https://cors-anywhere.herokuapp.com/https://dramatic-sidewalk-3548.twil.io/vote-talk';
    const event = 'reactalicante-webcomponents';
    const vote = this.state.currentValue;
    if (this.state.submitted) {
      return;
    }

    try {
      const body = JSON.stringify({ vote, event });
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      console.log(resp);
      localStorage.setItem('voted', 'true');
      this.setState({ submitted: true });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { submitted } = this.state;

    return (
      <div className="main">
        <h1>Thanks for watching my talk!</h1>
        <img
          src="https://media.giphy.com/media/l3V0lsGtTMSB5YNgc/giphy.gif"
          alt="daning panda GIF"
        />
        <p className="tag-line">
          I would really appreciate your feedback. Please click on the amount of{' '}
          <span role="img" aria-label="panda">
            🐼
          </span>{' '}
          you would award for this talk!
        </p>
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
