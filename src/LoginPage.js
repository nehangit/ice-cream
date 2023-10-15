import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {tryLog} from './actions';
import jsondat from "./dat/users.json";

function LoginPage(){
    const [user, setUser] = useState('')
    const [pw, setPw] = useState('')
    const [access, setAccess] = useState(false)
    const [invalidLogin, setInvalidLogin] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        for(let x of jsondat.users){
            if(x.username == user){
                if(x.password == pw){
                    setAccess(true)
                    break
                }
                else{
                    setAccess(false)
                }
            }
            else{
                setAccess(false)
            }
        }
    }, [user, pw])
    
    

    function helper(granted){
        if(granted == true){
            dispatch(tryLog(user))
        }
        else{
            setInvalidLogin(true)
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
    <button onClick={() => helper(access)}>Login</button>
    {invalidLogin ? <p id="bad-log-message">Invalid Login!</p> : ''}
    </div>
  );
}

export default LoginPage