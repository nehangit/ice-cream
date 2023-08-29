import { combineReducers } from '@reduxjs/toolkit';
import loggedRed from './loggedIn.js';
import icOrder from './icOrder.js';
import icNotes from './icNotes.js';

const allReducers = combineReducers({
    isLogged: loggedRed,
    icecreamOrder: icOrder,
    icecreamNotes: icNotes,
})

export default allReducers