import React from 'react';

const Context = React.createContext({
    user: '',
    residence: [],
    industry: '',
    comments: [],
    state_id: '',
    state: {}
});

export default Context;