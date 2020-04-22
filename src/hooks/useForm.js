import { useState } from 'react';

const useForm = () => {

    const [values, setValues] = useState({
        user: '',
        residence: [],
        industry: ''
    });

    // const [error, setError] = useState({
    //     user: '' || null,
    //     residence: '' || null,
    //     industry: '' || null,
    //     errorStatus: false
    // })

    const handleChange = ev => {
        const { name, value } = ev.target;
        console.log(ev.target.name);
        console.log(ev.target.value);
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (ev, callback) => {
        ev.preventDefault();
        callback();
    }

    return {
        handleChange,
        handleSubmit,
        values,
        setValues
    };
};

export default useForm;