import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {tryLog} from './actions';
import jsondat from "./dat/users.json";

function LoginPage(){
    const [user, setUser] = useState('')
    const [pw, setPw] = useState('')
    const [access, setAccess] = useState(false)
    const dispatch = useDispatch()
    const acc = useSelector(state => state.isLogged)
    
    useEffect(()=>{
        for(let x in jsondat.users){
            if(jsondat.users[x].username == user){
                if(jsondat.users[x].password == pw){
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
        console.log(access)
    }, [user, pw])
    
    

    function helper(granted){
        if(granted == true){
            dispatch(tryLog())
        }
        else{
            //setInvalidLogin(true) new state
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
    {acc ? <p>Welcome {user}</p> : ''}
    </div>
  );
}

export default LoginPage