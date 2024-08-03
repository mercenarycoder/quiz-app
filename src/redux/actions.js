export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";

export const login =(userData)=>({
    type: LOGIN,
    payload: userData
});

export const logout = ()=>({
    type: LOGOUT
});

export const register = (userData) => ({
    type: REGISTER,
    payload: userData
});

