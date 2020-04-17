import React, { useContext, Component } from 'react';
import useForm from '../../hooks/useForm';
import Context from '../../Context';
import config from '../../API';

function SelectedState(props) {

    const { handleChange, handleSubmit, setValues, values } = useContext(Context);

    

    // create folder with imgs, id.png (1, 2 ,3 etc)
    const submitComment = async () => {

    }

    console.log(values);
    
    return (
            <div>
                <h1>{values.state.state_name}</h1>

                <img src={values.state.state_id + '.png'} alt="some-state" />
                <section>
                    {/*some information will go here*/}
                </section>
                <form >
                <label htmlFor="user-comments">{values.user}</label>
                    <textarea>
                        {/* user can type comment and view posted comments here */}
                    </textarea>
                    <button>Cancel</button>
                    <button>Submit</button>
            </form>
            <section>
                {values.comments.map(comment => (
                    <div>{comment.comment_body}</div>
                ))}
            </section>
            </div>
       
            
    )
}

export default SelectedState;