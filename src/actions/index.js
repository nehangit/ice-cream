export const tryLog = (user, pass) => {
    return{
        type: 'LOGIN',
        username: user,
        password: pass
    }
}
