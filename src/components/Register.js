import React from 'react';

function Register (props) {
    return (
        <div htmlFor="reg_landing_page">
            <h1>COVID-19</h1>
            <p>Welcome and thank you for participating in this effort to provide facts, clarity and support on this global health crisis. This site was created to provide information on the scope of this ongoing pandemic and share experiences with one another. This was inspired by the swaths of incorrect information going around regarding this pandemic, with those of us most affected in mind. Those in healthcare, non-profits, shipping, those who lost someone, those who witnessed touching acts of humanity, and really anybody that would like to share what they went thru are encouraged to leave some words on your respective states page. Although we are asking for some basic information, please note that this is largely an anonymous application. What little we ask for will never be shared beyond this space. After filling out the forms below, you will be redirected to your states page and able to leave a comment and view others comments. After that, you will be able to select and view the other 49 states pages.</p>
            <form className="reg_form">
                <label htmlFor="user_name">Name</label>
                <input type="text" placeholder="first name and last initial"></input>
                <label htmlFor="state">State of residence</label>
                <input type="text" placeholder="your state of residence"></input>
                <label htmlFor="work">Industry</label>
                <input type="text" placeholder="most recent industry"></input>
            </form>  
        </div>
    )
}

export default Register;
