import { combineReducers } from '@reduxjs/toolkit';
import loggedRed from './loggedIn.js';
import icOrder from './icOrder.js';
import curUser from './userLog.js';

const allReducers = combineReducers({
    isLogged: loggedRed,
    icecreamOrder: icOrder,
    currentUser: curUser
})

export default allReducers