import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import Context from '../../Context';

function SelectedState() {

    // create folder with imgs, id.png (1, 2 ,3 etc)

    

       
    const { values } = useContext(Context);

    console.log(values);
    
    return (
        
            <div>
                <h1>{values.state.state_name}</h1>

                <img src={values.state.state_id + '.png'} alt="some-state" />
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

export default SelectedState
