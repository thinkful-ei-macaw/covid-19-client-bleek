import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../Context';
import config from '../../config';
import USMAP from '../../imgs/covid-us.png';
import './Register.scss';

class Register extends React.Component {
  static contextType = Context;

  //callback for route history
  callback = () => {
    this.props.history.push('/state/' + this.context.state_id);
  };

  // async declaration populates drop down selector in form
  getStates = async () => {
    try {
      let res = await fetch(`${config.API_ENDPOINT}/states`);
      if (!res.ok) {
        res = res.status(404).send();
      } else {
        const data = await res.json();
        this.context.setResidence(data);
      }
    } catch (error) {
      this.context.setError(error);
    }
  };

  componentDidMount() {
    if (this.context.residence.length === 0) {
      this.getStates();
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.context.user && this.context.industry && this.context.residence) {
      this.context.submitForms(this.callback);
    }
  };

  changeStates = (ev) => {
    this.context.setValues({
      state_id: ev.target.value,
    });
  };

  render() {
    return (
      <div className="Register">
        <h1 className="title">COVID-19 in the USA: A Message Board</h1>
        <header className="statement">
          Welcome and thank you for participating in this effort to share and
          support each other in these unprecedented times. This was inspired by
          the swaths of incorrect information going around regarding this
          pandemic, with those of us most affected in mind. Those in healthcare,
          non-profits, shipping, those who lost someone, those who witnessed
          touching acts of humanity, and really anybody that would like to share
          what they went thru are encouraged to leave some words on your
          respective states page. We are asking for some basic information, but
          this is an anonymous space. What little we ask for will never be
          shared beyond this space. Please fill out and submit the form below,
          which will direct you to your states page where you will find current
          data, messages others have left and leave a message of your own.
        </header>
        <img className="corona-map" src={USMAP} alt="covid-us"></img>
        <form className="reg_form" onSubmit={(ev) => this.handleSubmit(ev)}>
          <label name="user">Name</label>
          <input
            required
            name="user"
            type="text"
            placeholder="anon"
            value={this.context.user}
            onChange={this.context.handleChange}
          />
          <select
            required
            className="residence"
            name="residence"
            type="text"
            onChange={this.changeStates}
          >
            <option>Select Your State</option>
            {this.context.residence.map((item) => (
              <option value={item.id}>{item.state_name}</option>
            ))}
          </select>
          <label name="industry">Most Recent Employment</label>
          <input
            required
            name="industry"
            type="text"
            value={this.context.industry}
            onChange={this.context.handleChange}
          />
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
