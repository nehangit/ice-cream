import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {tryLog, stor} from './actions';

function LoginPage(){
    const [user, setUser] = useState('')
    const [pw, setPw] = useState('')
    const shell = []
    const dispatch = useDispatch()
    fetch('./dat/userA.json').then(res=>res.json()).then((dat) =>{  //need a live server for this to work
        console.log('reached here')
        dispatch(stor(dat))
    })
    const datstate = useSelector(state => state.userData)
    const acc = useSelector(state => state.isLogged)
    console.log(datstate)
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
    <button onClick={()=> dispatch(tryLog(user, pw))}>Login</button>
    {acc ? <p>Welcome {user}</p> : ''}
    </div>
  );
}

export default LoginPage