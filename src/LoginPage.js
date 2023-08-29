import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {tryLog} from './actions';
import useFetch from './useFetch.js';

function LoginPage(){
    const [user, setUser] = useState('')
    const [pw, setPw] = useState('')
    const [access, setAccess] = useState(false)
    const dispatch = useDispatch()
    const acc = useSelector(state => state.isLogged)
    
    let getdat = useFetch("./dat/" + user.toString() + ".json")
    if(getdat == null){
        console.log("Invalid username")
    }
    else{
        console.log(getdat) //continue working here, setAccess(true)
    }

    function helper(granted){
        if(granted == true){
            dispatch(tryLog())
        }
    }


    return (
    <div className="App">
    <label htmlFor="user">Username: </label>
    <br></br>
    <input type="email" id="user" onChange={(e)=>setUser(e.target.value)}></input>
    <br></br>
    <label htmlFor="pass">Password: </label>
    <br></br>
    <input type="password" id="pass" onChange={(e)=>setPw(e.target.value)}></input>
    <br></br>
    <button onClick={helper(access)}>Login</button>
    {acc ? <p>Welcome {user}</p> : ''}
    </div>
  );
}

export default LoginPage