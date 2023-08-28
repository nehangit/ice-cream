import { combineReducers } from '@reduxjs/toolkit';
import loggedRed from './loggedIn.js';
import icOrder from './icOrder.js';
import icNotes from './icNotes.js';
import dat from './storedat.js';

const allReducers = combineReducers({
    isLogged: loggedRed,
    icecreamOrder: icOrder,
    icecreamNotes: icNotes,
    userData: dat
})

export default allReducers