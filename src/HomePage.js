import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {tryLogout, changeOrder} from './actions'

function Entries({buttonClicked}){
    const user = useSelector(state => state.currentUser)
    const order = useSelector(state => state.icecreamOrder)
    const [resp, setResp] = useState('')

    useEffect(() => {
    displayValues()
    }, [order])

    function displayValues(){
    var entrylist = []
    let l = Object.keys(order[user]).length
    for(var i = 1; i <= l; i++){
        for(let flavor in order[user]){
            if(i == order[user][flavor][0]){
                entrylist.push(
                    <div className='Home'>
                    <input type='radio' name='ord' value={i} onClick={(e) => buttonClicked(e.target.value)}></input>
                    <p>{i}: {flavor} - {order[user][flavor][1]}</p>
                    </div>
                )
            }
        }
    }
    setResp(entrylist)
    }

    return resp
}


function HomePage(){
    const user = useSelector(state => state.currentUser)
    const [selection, setSelection] = useState('')
    const dispatch = useDispatch()

    //add components and actions to update text
    return (
        <div className='App'>
            <p>Welcome {user}</p>
            <Entries buttonClicked={setSelection}></Entries>
            <br></br>
            <div className='Home'>
                <button onClick={() => dispatch(tryLogout())}>Logout</button>
                <button onClick={() => dispatch(changeOrder(selection, 'UP', user))}>UP</button> 
                <button onClick={() => dispatch(changeOrder(selection, 'DOWN', user))}>DOWN</button>
            </div>
        </div>
    )
}

export default HomePage