import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import Context from '../../Context';
import config from '../../API';
//import coronavirus from '../../imgs';

function Register(props) {

    const { handleChange, handleSubmit } = useContext(Context);
    
    const { values, setValues } = useContext(Context);

    //const [error, setError] = useForm();

    const getPageData = async (state_id) => {
        try {
            const res = await fetch(`${config.API_ENDPOINT}/comments/${state_id}`);
            let data = await res.json();
            setValues({
                ...values,
                comments: data
            })
        } catch (err) {
            console.error(err);
        //     setError({
        //         ...values,
        //         errorStatus: true
        //    })
        }
    }

    const getStates = async () => {
        try {
            const res = await fetch(`${config.API_ENDPOINT}/state`);
            let data = await res.json();
            setValues({
                residence: data
            })
        } catch (err) {
            console.error(err);
        }
    }

    // useEffect(() => {
    //     const getOptions = async () => {
    //         try {
    //             const res = await fetch(`${config.API_ENDPOINT}/state`);
    //             const data = await res.json();
    //             setValues({
    //                 ...data,
    //                 residence: data
    //             })
    //         } catch (error) {
    //             console.error(404);
    //         }
    //     }
    // }, [input])

    const submitForms = async () => {
        fetch(`${ config.API_ENDPOINT }/states/${values.residence}`)
            .then(res => {
            return res.json()
            })
            .then(data => {
                console.log(data);
                setValues({
                    ...values,
                    residence: data
                })
                getPageData(data.id);
                props.history.push('/state')
        })
    }

    return (
        <div className="reg_landing_page">
            <h1>COVID-19</h1>
            {/*<img url={coronavirus} alt="corona-virus" />*/}
            <p>Welcome and thank you for participating in this effort to provide facts, clarity and support on this global health crisis. This site was created to provide information on the scope of this ongoing pandemic and share experiences with one another. This was inspired by the swaths of incorrect information going around regarding this pandemic, with those of us most affected in mind. Those in healthcare, non-profits, shipping, those who lost someone, those who witnessed touching acts of humanity, and really anybody that would like to share what they went thru are encouraged to leave some words on your respective states page. Although we are asking for some basic information, please note that this is largely an anonymous application. What little we ask for will never be shared beyond this space. After filling out the forms below, you will be redirected to your states page and able to leave a comment and view others comments. After that, you will be able to select and view the other 49 states pages.</p>
            <form
                className="reg_form"
                onSubmit={ev =>handleSubmit(ev, submitForms)}>
                <label name="user">Name</label>
                <input
                    name="user"
                    type="text"
                    value={values.user}
                    onChange={handleChange}
                />
                <label name="residence">Residence during the pandemic</label>
                <select
                    name="residence"
                    type="text"
                    value={values.residence}
                    onClick={getStates}>
                    {values.residence.map(item => (
                        <option value={item.id}>{item.state_name}</option>
                   ))}
                    
                </select>
                <label name="industry">Industry</label>
                <input
                    name="industry"
                    type="text"
                    value={values.industry}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>  
        </div>
    )
}

export default Register;