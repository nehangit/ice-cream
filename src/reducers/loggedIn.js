const isLogged = (state=false, action)=> {
    if(action.type == 'LOGIN'){ //action.password
        return true
    }
    else if(action.type == 'LOGOUT'){
        return false
    }
    else{
        return state
    }
}

export default isLogged