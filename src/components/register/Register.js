import React from 'react';
import Context from '../../Context';
import config from '../../API';
import USMAP from '../../imgs/covid-us.png';
import './Register.scss';

class Register extends React.Component {

    static contextType = Context;

    callback = () => {
        this.props.history.push('/state/' + this.context.state_id);
    }

    getStates = async () => {
        try {
            const res = await fetch(`${config.API_ENDPOINT}/states`);
            const data = await res.json();
            this.context.setResidence(data);
        } catch (err) {
            console.error(err);
        }
    }


    componentDidMount() {
        if (this.context.residence.length === 0) {
            this.getStates();
        }
    }
    

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.context.submitForms(this.callback);
    }
    

    changeStates = (ev) => {
        this.context.setValues({
            state_id: ev.target.value
        })
    }

render() {
    return (
        <div className="reg_landing_page">
            <h1>COVID-19</h1>
            <header>Welcome and thank you for participating in this effort to provide facts, clarity and support on this global health crisis. This site was created to provide information on the scope of this ongoing pandemic and share experiences with one another. This was inspired by the swaths of incorrect information going around regarding this pandemic, with those of us most affected in mind. Those in healthcare, non-profits, shipping, those who lost someone, those who witnessed touching acts of humanity, and really anybody that would like to share what they went thru are encouraged to leave some words on your respective states page. Although we are asking for some basic information, please note that this is largely an anonymous application. What little we ask for will never be shared beyond this space. After filling out the forms below, you will be redirected to your states page and able to leave a comment and view others comments.</header>
            <img src={USMAP} alt="covid-us"></img>
            <form
                className="reg_form"
                onSubmit={ev => this.handleSubmit(ev)}>
                <label name="user">Name</label>
                <input
                    name="user"
                    type="text"
                    value={this.context.user}
                    onChange={this.context.handleChange}
                />
                <label name="residence">Residence during the pandemic</label>
                <select
                    name="residence"
                    type="text"
                    onChange={this.changeStates}>
                    {this.context.residence.map(item => (
                        <option value={item.id}>{item.state_name}</option>
                    ))}
                </select>
                <label name="industry">Industry</label>
                <input
                    name="industry"
                    type="text"
                    value={this.context.industry}
                    onChange={this.context.handleChange}
                />
                <button>Submit</button>
                
            </form>
            
        </div>
        )
    }
}

export default Register;