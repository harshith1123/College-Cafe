import './canteen.css';
import './nishanth.js'
import './junkfood.js'
import './manoj.js';

import { Link } from "react-router-dom";
function Canteen(){
return (
  <>
    <div className="body">
      <main>
        <div id="nav">
          <div className="navbar">            
            <img src={require("./codeinlogo.jpeg")} className="logo" alt="logo" style={{marginBottom:"10px"}}/>
            <p>DONBOSCO College Canteen</p>
            <br />
            <nav>
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                <li><Link to="/AboutUs">ABOUT</Link></li>
              </ul>
              <div className="dropdown">
                <button className="dropbtn">MENU
                  <img src="https://tse4.mm.bing.net/th?id=OIP.MO13Yb2PjehyQD7s6Lsx_gHaHa&pid=Api&P=0&h=180"
                    style={{ width: "25px" }} className="menu-icon" alt="link" />
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content" id="drop">
                  <Link to="/nishanth">Sandwitch</Link>
                  <Link to="/allitems">Junk Food</Link>
                  <Link to="/manoj">Drinks</Link>
                </div>
              </div>
              <br />
              <Link to='/signin' className='insign' style={{color:"black"}}>Sign In</Link>
              <input type=" text" placeholder=" Search..." className="search-bar" style={{border:"1px solid white",position:"relative",bottom:"15px"}} />
            </nav>
            <br />
          </div>
        </div>
        <div className="head">
          <h1 className='h1'>Welcome to our Canteen Website!</h1>

          <h2>We offer a wide variety of delicious and affordable food options. Whether you're looking for a quick snack or
            a full meal, we've got you covered.</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="card" id="Sandwich">
              <img src="https://tse4.mm.bing.net/th?id=OIP.dEyEvqfGH62TNJfiOrLy2gHaE8&pid=Api&P=0&h=180" style={{maxWidth:"300px"}} alt="" />
              <h4>Sandwich</h4>
              <p>Unwind between with our delectable sandwiches at the college cafeteria, a perfect blend of
                convenience and culinary satisfaction.
                Make your college cafeteria break memorable with our handpicked selection of sandwiches, a flavorful pause
                in your academic day.</p>
              <button className='btn'><Link to="/nishanth" style={{color:"white",fontWeight:"500"}}>Read More</Link></button>
            </div>

            <div className="card" id="Junk food">
              <img src="https://thehealthypandas.com/wp-content/uploads/2018/01/10-Most-Common-harmful-effects-of-junk-food-Everyone-should-know.jpg" style={{maxWidth:"300px"}}
                alt="" />
              <h4>Junk food</h4>
              <p>Satisfy your cravings with a sinful delight of decadent junk food, an escape into the world of guilty
                pleasures.
                Experience the thrill of spontaneous flavor explosions with our diverse range of junk food, a celebration of
                guilty delights.</p>
              <button className="btn"><Link to="/junkfood" style={{color:"white",fontWeight:"500"}}>Read More</Link></button>
            </div>

            <div className="card" id="Drinks">
              <img src="http://eatanddip.com/wp-content/uploads/2020/10/soft-drink.jpg" style={{maxWidth:"300px"}}alt="" />
              <h4>Drinks</h4>
              <p>Quirky, comforting, or bold—find the perfect drink to match your college vibe at our café, where each sip
                is a journey of taste exploration
                Experience a burst of flavor in every sip with our curated selection of college café drinks, a delightful
                break from the academic routine.</p>
              <button className="btn"><Link to="/manoj" style={{color:"white",fontWeight:"500"}}>Read More</Link></button>
            </div>
          </div>
        </div>

      </main>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col" id="company">
              <img src={require("./codeinlogo.jpeg")} alt="" className="logo" />
              <p>
                All rights Reserved.
              </p>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />
              <div className="social">
                <Link to="/" target="_blank"><i className="fab fa-facebook"></i></Link>
                <Link to="/"><i className="fab fa-instagram"></i></Link>
                <Link to="/"><i className="fab fa-youtube"></i></Link>
                <Link to="/"><i className="fab fa-twitter"></i></Link>
                <Link to="/"><i className="fab fa-linkedin"></i></Link>
              </div>
            </div>

            <div className="col" id="Company">
              <h3>Company</h3>
              <div className="links">
                <Link to="/">About</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Team</Link>
                <Link to="/">CodeIn</Link>
              </div>
            </div>

            <div className="col" id="Legal">
              <h3>Links</h3>
              <div className="links">
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Cookies Policy</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Help</Link>
              </div>
            </div>
            <div className="col" id="Contact Us">
              <h3>Contact Us</h3>
              <div className="links">
                <Link to="/">Help & Support</Link>
                <Link to="/">Partner with us</Link>
                <Link to="/">Collaboration</Link>
                <Link to="/">DBIT</Link>
              </div>
            </div>
            <div className="col" id="We Serve to:">
              <h3>We Serve to:</h3>
              <div className="links">
                <Link to="/">Don Bosco Institute of Technology</Link>
                <Link to="/">Don Bosco Institute of Mangement Studies </Link>
                <Link to="/">Don Bosco Independent Pre University College</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}

export default Canteen;
