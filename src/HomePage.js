import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {tryLogout} from './actions'

function Entries(props){
    const user = useSelector(state => state.currentUser)
    const [resp, setResp] = useState('')

    useEffect(() => {
    displayValues()
    }, [props.order])

    function displayValues(){
    var entrylist = []
    let l = Object.keys(props.order[user]).length
    for(var i = 1; i <= l; i++){
        for(let flavor in props.order[user]){
            if(i == props.order[user][flavor][0]){
                entrylist.push(
                    <p>{i}: {flavor} - {props.order[user][flavor][1]}</p>
                )
            }
        }
    }
    setResp(entrylist)
    }

    //add a use state and use effect to return the values in the "table" based on updates to props.order
    return resp
}


function HomePage(){
    const user = useSelector(state => state.currentUser)
    const orders = useSelector(state => state.icecreamOrder)
    const dispatch = useDispatch()

    function logout(){
        dispatch(tryLogout())
    }
    //add functions and actions to update data
    return (
        <div>
        <p>Welcome {user}</p>
        <Entries order={orders}></Entries>
        <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default HomePage