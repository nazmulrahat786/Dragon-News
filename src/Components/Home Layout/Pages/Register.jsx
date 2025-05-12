import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../provider/AurhProvider';

const Register = () => {
  const {creatUser,setUser}= use(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo= form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name, photo, email, password});
creatUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user)
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
    
  }
    return (
        <div className='flex justify-center items-center min-h-screen'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='font-semibold text-2xl text-center py-5'>Register your account</h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input required type="text" className="input" name='name' placeholder="Name" />
            {/*Photo URl */} 
            <label className="label">Name</label>
            <input required type="text" name='photo' className="input" placeholder="Photo URl " />

            {/* email */}
            <label className="label">Email</label>
            <input required type="email" name='email' className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input required type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
      
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
            <p className='text-center font-semibold pt-5'>Already  Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
          </form>
        </div>
      </div>
       </div>
    );
};

export default Register;