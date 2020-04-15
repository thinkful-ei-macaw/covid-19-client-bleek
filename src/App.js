import React from 'react';
import Register from './components/register/Register';
import SelectedState from './components/selected-state/SelectedState';
import { Route } from 'react-router-dom';
import useForm from './hooks/useForm';

import './App.css';
import Context from './Context';

function App(props) {

  

  const { handleChange, handleSubmit, values, setValues } = useForm();

  
    return (
      <Context.Provider value={{
        handleChange, handleSubmit, values, setValues
      }}>
        <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Route exact path="/" component={Register} />
          <Route path="/state" component={SelectedState} />
        </main>
      </div>
    </Context.Provider>
      
  );
}

export default App;