import jsondat from "../dat/users.json";

var dat = {}
for(let user of jsondat.users){ // should load in the data here initially and set state = dat in the order function params
    dat[user.username] = {};
    }
const order = (state = '', action) => {
    if(action.type == 'LOGIN'){
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
        else{
            return dat
        }
    }
    if(action.type == 'CHORDER'){
        // Create a deep copy of the state
        let newState = JSON.parse(JSON.stringify(dat));
        if(action.option == ''){
            return newState //will re render since new object
        }
        if(action.option == 1 && action.act == 'UP'){ //magic numbers here need to be fixed for scalability
            return newState
        }
        if(action.option == 3 && action.act == 'DOWN'){
            return newState
        }
        else{
            for(let flavor in newState[action.user]){
                if(action.act == 'UP'){
                    if(newState[action.user][flavor][0] == action.option){
                        newState[action.user][flavor][0] -= 1;
                        continue
                    }
                    if(newState[action.user][flavor][0] == (parseInt(action.option) - 1)){
                        newState[action.user][flavor][0] += 1; //broken...?
                    }
                }
                if(action.act == 'DOWN'){
                    if(newState[action.user][flavor][0] == action.option){
                        newState[action.user][flavor][0] += 1;
                        continue
                    }
                    if(newState[action.user][flavor][0] == (parseInt(action.option) + 1)){
                        newState[action.user][flavor][0] -= 1;
                    }
                }
                dat = newState
            }
            return newState
        }
    }
    return state;
}

export default order