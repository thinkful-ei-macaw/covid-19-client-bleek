import React from 'react';
import Context from '../../Context';
import config from '../../API';
import './SelectedState.scss';

class SelectedState extends React.Component {

    static contextType = Context;

componentDidMount() {
    if (this.context.state.state_name) {
        this.context.submitForms(null, this.props.match.params.state_id);
    }
    }

    postComment = async (ev) => {
        ev.preventDefault();
        try {
            const req = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_name: this.context.user,
                    comment_body: ev.target.post.value
                })
            };
            const res = await fetch(`${config.API_ENDPOINT}/comments/${this.context.state_id}`, req);
            const data = await res.json();
            console.log(data);
            this.context.setComments(data);
            ev.target.reset();
        } catch(error) {
            console.error(error);
        }
    }

render() {
    return (
        <div className="select-state">
            <h1>{this.context.state.state_name}</h1>
            <h2 className="cases">Comfirmed Cases: {this.context.state.confirm_cases}</h2>
            <h2 className="fatal">Comfirmed Fatal: {this.context.state.confirm_fatal}</h2>
            <img src={this.context.state.state_id + '.png'} alt="some-state" />
            <section>
                {/*some information will go here*/}
            </section>
            <form className="comment-form" onSubmit={this.postComment}>
                <label name="post">{this.context.user}</label>
                <textarea
                    className="post"
                    name="post"
                    rows="4"
                    cols="40"
                >
                    {/* user can type comment and view posted comments here */}
                </textarea>
                <button>Cancel</button>
                <button>
                    Submit
                        </button>
            </form>
            <section >
                
            </section>
            <section>
                {this.context.comments.map(comment => (
                    <div value={comment.state_id}>{comment.comment_body}</div>
                ))}
            </section>
        </div>
            
        )
    }
}

export default SelectedState;