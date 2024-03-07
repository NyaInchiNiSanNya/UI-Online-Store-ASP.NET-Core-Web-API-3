import { authApi } from '../Api/Api';
import { stopSubmit } from 'redux-form';
import {setAuthorizationHeader} from '../Api/Api';
import {jwtDecode} from "jwt-decode";
import { useNavigate } from 'react-router-dom';

let initialState={
    isAuthenticated: false ,
    jwtToken: undefined
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set-jwtToken': {
            
            setAuthorizationHeader(action.jwtToken);
            
            localStorage.setItem("jwtToken", action.jwtToken);
            
            return { ...state, jwtToken: action.jwtToken, isAuthenticated: true};
        }
        default:
            return state;
    }
}

export const setJwtToken= (jwtToken) =>{
    return {
        type:'set-jwtToken',
        jwtToken: jwtToken
    }
};


export const loginThunkCreator = (login, password) =>{
    return (dispatch) => {
        authApi.login(login, password)
            .then(response => {
                dispatch(setJwtToken(response.data));
                isTokenExpired(response.data);
                const navigate = useNavigate();
          navigate('/products');
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    let action = stopSubmit("login", {_error: "Неправильный email или пароль"});
                    dispatch(action);
                }
            });
    };
}

const isTokenExpired = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        if (!decodedToken || !decodedToken.exp) {
            return true; //
        }
        const currentTime = Math.floor(Date.now() / 1000); 
        return decodedToken.exp < currentTime; 
    } catch (error) {
        return true; 
    }
};

export default authReducer;