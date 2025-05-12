import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../provider/AurhProvider';

const Login = () => {
  const {signIn} =use(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  console.log(email, password);
  signIn(email, password)
  .then(result => {
    const user = result.user;
  console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage);
    // ..
  });
  }
    return (
       <div className='flex justify-center items-center min-h-screen'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='font-semibold text-2xl text-center py-5'>Login your account</h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <p className='text-center font-semibold pt-5'>Dont’t Have An Account ? <Link className='text-secondary' to="/auth/register">Register</Link></p>
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
       </div>
    );
};

export default Login;