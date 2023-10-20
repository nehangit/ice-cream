import jsondat from '../dat/users.json';

var firstlog = {}
for(let user of jsondat.users){
firstlog[user.username] = true;
}
 // will this work
 // store each user data in a map, update the map
export const tryLog = (username) => {
    if(firstlog[username]){
        firstlog[username] = false;
        return{
            type: 'LOGIN',
            user: username,
            initialize: true
        }
    }
    return{
        type: 'LOGIN', //add username here
        user: username,
        initialize: false
    }
}

export const tryLogout = () => {
    return{
        type: 'LOGOUT'
    }
}

export const changeOrder = (selection, button, username) => {
    return{
        type: 'CHORDER',
        option: selection,
        act: button,
        user: username
    }
}