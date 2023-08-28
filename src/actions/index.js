export const tryLog = (user, pass) => {
    return{
        type: 'LOGIN',
        username: user,
        password: pass
    }
}

export const stor = (data) => {
    return{
        type: 'STORE',
        data
    }
}