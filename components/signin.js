
import React from 'react';
import './signin.css'; // Import your CSS file
import { Link } from 'react-router-dom';

export default function SignIn() {
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
            <li><Link to='/signup' style={{backgroundColor:" #162b31",padding:"10px",borderRadius:"10px",color:"white"}}>SignUp</Link></li>

            <li className="nav-item">
              <input type=" text" placeholder=" Search..." className="search-bar" style={{border:"1px solid white"}} />
            </li>
            {/* <li className='hamburgericon' style={{ fontSize: '30px', alignItems: 'right' }}><Link to='*'><GiHamburgerMenu /></Link></li> */}
          </ul>
        </div>

      </nav>
    <div className="bodychange">  
    <div className="cont">
      <form className='formtype'>
        <center>        
          <header id="head" >
            <div className="sign">
              <h1 style={{marginBottom:"20px"}}>Sign in</h1>
            </div>
          </header>
          <br/>

          <div className="block">
            <input type="text"className='register' placeholder="username or email" />
            <br/><br/>
            <input type="password" className='register' placeholder="password" />
            <br/><br/>
          </div>
                    
          <button className="signin">Sign In</button>
          <Link to="/forgot" className="forgot-password">Forgot password</Link>

          <h2 className="xyz">or</h2>
          <button className="signin">Continue with Google</button>
          <br/>
          <Link to="/signup" className="signup-link">Does not have an account?SignUp</Link>

        </center>
      </form>
    </div>
    </div>
    </>
  );
};


