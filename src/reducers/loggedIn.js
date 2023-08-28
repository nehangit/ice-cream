const isLogged = (state=false, action)=> {
    if(action.type == 'LOGIN'){ //action.password
        if(action.username == "userA" || action.username == "userB" || action.username == "userC"){
            return true  //call data state here to validate user
        }
        else{
            return false
        }
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