const isLogged = (state=false, action)=> {
    if(action.type == 'LOGIN'){ //action.username
        return true
    }
    else if(action.type == 'LOGOUT'){
        return false
    }
    //add else if here to check another type and set the state, dispatch from the above function
    else{
        return state
    }
}

export default isLogged