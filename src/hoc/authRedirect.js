import React from 'react';
import { useNavigate } from 'react-router-dom';

const authRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const navigate = useNavigate();
        
        if (!props.isAuth) {
            navigate('/login');
            return null;
        }
        
        return <Component {...props} />;
    };

    return RedirectComponent;
}

export default authRedirect;