import React from 'react';
import Context from '../../Context';
import config from '../../config';
import './SelectedState.scss';

class SelectedState extends React.Component {

    static contextType = Context;

    componentDidMount() {
        if (!this.context.state.state_name) {
        this.context.submitForms(null, this.props.match.params.state_id);
        }
    }


    // more async await combining user actions and api calls
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
            const target = ev.target;
            let res = await fetch(`${config.API_ENDPOINT}/comments/${this.context.state_id}`, req);
            if (!res.ok) {
                res = res.status(404).send();
            } else {
                const data = await res.json();
                this.context.setComments(data);
                target.reset();
            }
        } catch(error) {
            this.context.setError(true);
        }
    }

render() {
    return (
        <div className="grid-container">
            <h1 className="users-state">{this.context.state.state_name}</h1>
            <h2 className="cases">Comfirmed Cases: {this.context.state.confirm_cases}</h2>
            <h2 className="fatal">Comfirmed Fatal: {this.context.state.confirm_fatal}</h2>
            <img className="state-img" src={`/us-states/${this.context.state.state_name.toLowerCase().replace(' ', '-')}.jpg`} alt="some-state" />
            <form className="comment-form" onSubmit={this.postComment}>
                <label className="post" name="post">{this.context.user} from {this.context.state.state_name}</label>
                <textarea
                    className="post"
                    name="post"
                    rows="4"
                    cols="40"
                >
                </textarea>
                <button className="submit-post">
                    Post Comment
                        </button>
            </form>
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