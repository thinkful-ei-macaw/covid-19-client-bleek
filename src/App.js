import React, { Component } from 'react';
import Register from './components/Register';
import API_ENDPOINT from './API';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      residence: '',
      industry: '',
      submit: false,
      error: null
    }
  }

  // arrow function to update state pass to child
  // use context have child as a consumer

  userSubmitted = async () => {
    const data = this.state;
    const res = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: event.target.value,
          residence: event.target.value,
          industry: event.target.value,
          submit: true
        })
      })
      .catch((error) => {
        this.setState({
          error: alert('all forms are required')
        })
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Register />
        </header>
      </div>
    );
  } 
}

export default App;