const storedat = (state=[], action) => {
    if(action.type == 'STORE'){
        return action.data;
    }
    else{
        return state
    }
}

export default storedat