import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import users from '../assets/user.png';
import { AuthContext } from '../provider/AurhProvider';
const Navbar = () => {
    const {user,logOut} = use(AuthContext)
    const handleLogout = () => {
        logOut().then(() => {
           alert('Logout successfully')
          }).catch((error) => {
            console.log(error);
          });
    }



    return (
        <div className='flex justify-between items-center '>
           <div className="">
           {user && user.email}
           </div>
           <div className="nav flex gap-5  text-accent">

            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/career' >Career</NavLink>



           </div>
           <div className="login-btn flex gap-5 items-center">
            <img src={users} alt="" />
           {
            user ? 
<button onClick={handleLogout} className='btn btn-primary px-10'>LogOut</button>
             :  
             <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
           }
           
           </div>
        </div>
    );
};

export default Navbar;