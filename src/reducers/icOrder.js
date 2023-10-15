// need a state to see if logged in for the first time
import jsondat from "../dat/users.json";

var dat = {}
for(let user of jsondat.users){
    dat[user.username] = {};
    }
const order = (state = '', action) => {
    if(action.initialize){
        for(let x of jsondat.users){
            if(x.username == action.user){
                for(let y in x.iceCreamPreferences){
                    dat[action.user][y] = [x.iceCreamPreferences[y].order, x.iceCreamPreferences[y].notes]
                }
            }
        }
        return dat;
    }
    if(action.type == 'LOGIN'){
        return dat
    }
    return state;
}

export default order