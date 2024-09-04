import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { IoLocation } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
// Make sure your CSS file is in the correct directory

function Home() {
  return (
    <div>
      <nav className="navigation">
        <div className='navdiv'>
          <div className="logodesign"><Link to='#' style={{color:"red",}}><img src={require("./codeinlogo.jpeg")} style={{width:"80px",height:"70px"}} alt="logo"/></Link> </div>
          <ul className="scrollbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/AboutUs'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/input'>Profile</Link></li>
            <li><Link to='/signin' style={{backgroundColor:" #162b31",padding:"10px",borderRadius:"10px",color:"white"}}>Signin</Link></li>

            <li className="nav-item">
              <input type=" text" placeholder=" Search..." className="search-bar" style={{border:"1px solid white"}} />
            </li>
            <li className='hamburgericon' style={{ fontSize: '30px', alignItems: 'right' }}><Link to='*'><GiHamburgerMenu /></Link></li>
          </ul>
        </div>

      </nav>

      <div id="content-part">
        <div>
          <h1 style={{ fontFamily: 'Garamond' }} id="main-content">ORDER FOOD ONLINE</h1>
          <h1 style={{ color: 'rgb(255, 0, 0)', fontFamily: 'Perpetua', fontSize: '30px' }} id="indulge">Indulge your taste buds with a symphony of flavors at our Cafeteria!</h1><br /><br />
          <h2 className='explore'>Explore a variety of delicious snacks and treats.</h2><br /><br />
          <div className="button-container">
            <Link to="/canteen">
              <button>Order now</button>
            </Link>
            <Link to="/">
              <button className="play-button"><span className="play-icon">&#9654;</span> Watch Video</button>
            </Link>
          </div>

        </div>
        <div className='image'>
          <img style={{ borderRadius: ' 50%' }} src={require("./Images/cafe1.png")} alt="Cafeteria" />
        </div>

      </div>

      <div id="catalog-description">
        <p style={{ textAlign: 'left',fontSize:"3rem",marginTop:"10px"}}><em>What's on your mind?</em></p>
      </div>

      <div className="card-container">
        <div className="card-box">
          <Link to="/junkfood">
            <img src={require("./Images/samosa.jpg")} alt="Snacks" />
          </Link>
          <h2>Snacks</h2>
        </div>
        <div className="card-box">
          <Link to="/nishanth">
            <img src={require("./Images/sandwitch.jpg")} alt="Sandwich" />
          </Link>
          <h2>Sandwich</h2>
        </div>
        <div className="card-box">
          <Link to="/manoj">
            <img src={require("./Images/cocacola.jpeg")} alt="Cold Drinks" />
          </Link>
          <h2>Cold Drinks</h2>
        </div>
        <div className="card-box">
          <Link to="/allitems">
            <img src={require("./Images/ice_cream.jpg")} style={{ height: '200px' }} alt="Others" />
          </Link>
          <h2>Others</h2>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="company-info">
            <img src={require("./codeinlogo.jpeg")} style={{width:"100px", height:"70px"}} alt="logo"/>

            <div className="content-box">
              <p>At Our Choice, we aim to make every dining experience memorable. From our warm and inviting ambiance to prompt and friendly service, We are dedicated to delivering delightful gastronomic experiences with every bite.</p>
            </div>
          </div>

          <div className="search-bar-container">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
            <br />
          <div className="contact-info">
            <p><IoLocation /> <b> Location:</b> Don Bosco Institute, Bangalore</p>
            <p><SiGmail /><b> Email:</b> <Link to="mailto:example@gmail.com">example@gmail.com</Link></p>
            <p><FaPhoneAlt /><b> Phone:</b> <Link to="tel:+91 0000000000">+91 00000 00000</Link></p>
            <p><FaPhoneAlt /><b> Phone:</b><Link to="tel:+91 0000000000">+91 00000 00000</Link></p>
          </div>
        </div>

        <div className="navigation" style={{position:"relative",top:"2px"}}>
          <Link to="#">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Best Sells</Link>
          <Link to="#">Promotions</Link>
          <Link to="#">Contents</Link>
        </div>

        <div className="footer-container">
          <div className="social-icons">
            <Link to="#" className="fa fa-instagram"><FaInstagram /></Link>
            <Link to="#" className="fa fa-facebook"><FaFacebook /></Link>
            <Link to="#" className="fa fa-twitter"><FaXTwitter /></Link>
            <Link to="#" className="fa fa-youtube"><FaYoutube /></Link>
          </div>

          <p className="copyright">&copy; Copyright 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}



export default Home;