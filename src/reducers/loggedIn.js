// maybe delete this reducer and use userLog instead
const isLogged = (state=false, action)=> {
    if(action.type == 'LOGIN'){
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