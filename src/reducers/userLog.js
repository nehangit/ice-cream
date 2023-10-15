const user = (state = '', action) => {
    if(action.type == 'LOGIN'){
        return action.user;
    }
    if(action.type == 'LOGOUT'){
        return '';
    }
    else{
        return state;
    }
}

export default user