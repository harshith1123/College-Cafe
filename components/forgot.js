import React from 'react';
import './forgot.css'; // Import your CSS file
import { Link } from 'react-router-dom';

export default function ForgotPassword(){
  return (
    <div className="bodypar">
    <div className="box">
      <form className='form'>
        <center>
          <br/>
          <header className='header'>
            <div className="forgot">
              <h2 className='h2'>Forgot password</h2>
            </div>
          </header>
          <br/><br/>
          <input type="text" className="text" placeholder="Username or Email" />
          <br/><br/>
          <input type="text"className='text' placeholder="OTP" />
          <br/><br/><br/>
          <Link to="/" className="Sub">Submit</Link>
        </center>
      </form>
    </div>
    </div>
  );
};