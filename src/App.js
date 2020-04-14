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

  async componentDidMount() {
    const res = await fetch(API_ENDPOINT);
    const data = await res.json();
    console.log(data);
    this.setState({
      name: '',
      residence: '',
      industry: '',
      submit: true
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    
  }


  render() {
    const { name, residence, industry } = this.state;
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