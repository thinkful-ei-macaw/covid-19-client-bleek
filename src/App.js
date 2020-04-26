import React from 'react';
import Register from './components/register/Register';
import SelectedState from './components/selected-state/SelectedState';
import { Route } from 'react-router-dom';
import config from './API';

import './App.scss';
import Context from './Context';

class App extends React.Component {
  
  state = {
    user: '',
    residence: [],
    industry: '',
    comments: [],
    state_id: '',
    state: {}
  }

  setResidence = (data) => {
    this.setState({
      residence: data.sort((a, b) => a.state_name > b.state_name ? 1 : -1)
    })
  }

  setComments = data => {
    this.setState({
      comments: [...this.state.comments, data]
    })
  }

   submitForms = async (callback, state_id) => {
    if (!state_id) {
        state_id = this.state.state_id;
    }
    fetch(`${config.API_ENDPOINT}/states/${state_id}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            this.getPageData(this.state.state_id, data);
            if (callback) {
                callback();
            }
            
    })
   }
  
   getPageData = async (state_id, state) => {
    try {
        const res = await fetch(`${config.API_ENDPOINT}/comments/${state_id}`);
        const data = await res.json();
        this.setState({
            comments: data,
            state
        })
    } catch (error) {
        console.error(error);
    }
}

  handleChange = ev => {
    const { name, value } = ev.target;
    console.log(ev.target.name);
    console.log(ev.target.value);
    this.setState({
        [name]: value
    })
}
  
  setValues = data => {
    this.setState(data)
  }
  

  render() {
    return (
      <Context.Provider value={{
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        submitForms: this.submitForms,
        setComments: this.setComments,
        setResidence: this.setResidence,
        setValues: this.setValues,
        ...this.state
      }}>
        <div className="App">
          <header className="App-header">
          </header>
          <main>
            <Route exact path="/" component={Register} />
            <Route path="/state/:state_id" component={SelectedState} />
          </main>
        </div>
      </Context.Provider>
    )
  }
}

export default App;