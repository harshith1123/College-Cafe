import React from 'react';
import './signup.css'; // Import your CSS file
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
     <nav className="navigation">
        <div className='navdiv'>
          <div className="logodesign"><Link to='#' style={{color:"red",}}><img src={require("./codeinlogo.jpeg")} style={{width:"80px",height:"70px"}} alt="logo"/></Link> </div>
          <ul className="scrollbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/AboutUs'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/input'>Profile</Link></li>
            <li><Link to='/signin' style={{backgroundColor:" #162b31",padding:"10px",borderRadius:"10px",color:"white"}}>SignIn</Link></li>

            <li className="nav-item">
              <input type=" text" placeholder=" Search..." className="search-bar" style={{border:"1px solid white"}} />
            </li>
            {/* <li className='hamburgericon' style={{ fontSize: '30px', alignItems: 'right' }}><Link to='*'><GiHamburgerMenu /></Link></li> */}
          </ul>
        </div>
        </nav>

    <div className="bodytype">
    <div className="containerbox">
      <form className='forms'>                  
          <div className="sign">
            
            <h1>Sign Up</h1>
          </div>
          <br/><br/>
          <br/>
          <br />
          <div className="block">           
            <input type="text" id="user" name="user" className='register' placeholder="Enter username " required/>
            <br/>
            <br/>
            <input type="email" id="email-up" name="email" placeholder="Enter email" required/>
            <br/>
            <br/>
            <input type="password" id="pass" name="pass" placeholder=" Create password" required/>
            <br/>
            <br/>
            <input type="password" id="cpass" name="cpass" placeholder=" Retype password" required/>
          </div>
          <br />
          
          <button className="Create">Create the account</button>
          <Link to="/signin" className="signin-link">Already have an account? Sign In</Link>          
          <br/>                
      </form>
    </div>
    </div>
    </>
  );
};
