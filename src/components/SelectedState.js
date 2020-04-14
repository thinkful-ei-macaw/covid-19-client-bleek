import React, { Component } from 'react';

class SelectedState extends Component {
    

    render() {
        return (
            <div>
                <h1>{/*selected states name header goes here*/}</h1>

                <img src={/*conditional image render*/}>
                    {/*selected states image will go here*/}
                </img>
                <section>
                    {/*some information will go here*/}
                </section>
                <form>
                    <label htmlFor="user-comments"></label>
                    <textarea>
                        {/* user can type comment and view posted comments here */}
                    </textarea>
                    <button>Cancel</button>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SelectedState
