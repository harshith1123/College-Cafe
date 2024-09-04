import './Menu.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div id="menuButton" style={{ display: menuOpen ? 'none' : 'block' }} onClick={toggleMenu}>
        &#9776;
      </div>          
      <nav style={{ display: menuOpen ? 'block' : 'none' }}>
        <div id="menuCloseButton" style={{ display: menuOpen ? 'block' : 'none' }} onClick={toggleMenu}>
          &lt;&lt;
        </div>
        <br />
        <br />        
        <div className="menu-item">
          <img src={require("./image/home.png")} alt="Home Icon" />
          <Link href="home.html">Home</Link>
          <div className="arrow">
            <pre><Link href="home.html">  {'>'}</Link></pre>
          </div>
         </div>

        <div className="menu-item">
          <img src={require("./image/profile.png")} alt="Profile Icon" />
          <Link to="/input">Profile</Link>
          <div className="arrow">
            <pre><Link to="/input">  {'>'}</Link></pre>
          </div>
        </div>

         <div className="menu-item">
          <img src={require("./image/order.png")} alt="Food Orders Icon" />
          <Link to="/canteen">Orders</Link>
          <div className="arrow">
            <pre><Link to="orders.html">  {'>'}</Link></pre>
          </div>
        </div>

        <div className="menu-item">
          <img src={require("./image/heart.jpg")} alt="Favorite Orders Icon" />
          <Link to="favorites.html">Favorites</Link>
          <div className="arrow">
            <pre><Link href="favorites.html"> {'>'}</Link></pre>
          </div>
        </div>

        <div className="menu-item">
          <img src={require("./image/cart.png")} alt="Cart Icon" />
          <a href="cart.html">Cart</a>
          <div className="arrow">
            <pre><Link href="cart.html">{'>'}</Link></pre>
          </div>
        </div>

        <div className="menu-item">
          <img src={require("./image/signout.png")} alt="Sign Out Icon" />
          <Link to="sign-out.html">SignOut</Link>
          <div className="arrow">
            <pre><Link to="home.html"> {'>'}</Link></pre>
          </div>
        </div>
      </nav>
      </>
    
  );
}

export default Menu;