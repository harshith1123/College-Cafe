import React from 'react';
import './newpassword.css'; // Import your CSS file
import { Link } from 'react-router-dom';

export default function NewPassword(){
  return (
    <center>
      <div className="bodypassword">
      <div className="load">
        <form className='password'>
          <h3>Create a new password</h3>
          <br/><br/>
          <input type="text" className='newpass' id="new" placeholder="New password" />
          <br/><br/><br/>
          <h3>Re-enter new password</h3>
          <br/><br/>
          <input type="text" className='newpass' placeholder="Re-enter new password"/>
          <br/><br/><br/>
          <Link to="/signin" className="submit">Submit</Link>
        </form>
      </div>
      </div>
    </center>
  );
};


