import React, {  use } from 'react';
import { AuthContext } from './AurhProvider';
import { Navigate, useLocation  } from 'react-router';
import Loading from '../Components/Loading';

const PrivetRoute = ({children}) => {
    const  location  = useLocation()

    const {user,loading} = use(AuthContext)
//     console.log(loading);
// console.log(user);
    if(loading){
        <Loading></Loading>
    }
    // console.log(user);
    else if(user && user?.email){
        return children;
    }
   else  return <Navigate state={location.pathname} to="/auth/login"></Navigate>
   
    
};

export default PrivetRoute;