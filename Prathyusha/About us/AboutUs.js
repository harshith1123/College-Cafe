import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CafeteriaPage.css'; // Import CSS file for styling

const CafeteriaPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3; // Assuming there are 3 slides

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <>
        <nav className="navigation">
        <div className='navdiv'>
          <div className="logodesign"><Link to='#' style={{color:"red",}}><img src={require("./images/codeinlogo.jpeg")} style={{width:"80px",height:"70px"}} alt="logo"/></Link> </div>
          <ul className="scrollbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/input'>Profile</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/canteen'>Items</Link></li>
            <li><Link to='/signin' style={{backgroundColor:" #162b31",padding:"10px",borderRadius:"10px",color:"white"}}>Signin</Link></li>

            <li className="nav-item">
              <input type=" text" placeholder=" Search..." className="search-bar" style={{border:"1px solid white"}} />
            </li>
            
          </ul>
        </div>

      </nav>
        <div className='body-about'>
           
            <header>
                    <img src={require("./images/1.jpeg")}style={{width:"100%",height:"100vh"}} alt="Your Company" />
                <div className="header-image">
                    <div className="overlay"></div>
                    <div className="header-text">                       
                    </div>
                    
                </div>
                <div className="descr">
                <h1 style={{position:"relative",left:"9%"}}>About Us</h1>
                
                    <p><b>"Welcome to DBIT Cafeteria! At DBIT Cafeteria, we believe in the power of good food to bring people together. Nestled in the heart of campus, our cozy and welcoming cafe has been serving up smiles and delicious bites. Whether you're looking for a quick caffeine fix, a satisfying meal, or a sweet treat, we've got something to satisfy every craving."</b></p>
                </div>
                <div className="hey">                        
                        <h6>Scroll for more</h6>
                    </div>
            </header>
            
            <div className="slider-container">
                <div className="slides" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                    <div className="slide"><img src="https://www.shutterstock.com/image-photo/top-down-food-images-hd-260nw-2351246713.jpg" alt="Slide 1" /></div>
                    <div className="slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuD6QuFrv35eejv1-9NikNb5Ptsv-680ZrT3FWdNWLDRYt6htgn4c2E-cGIQ&s" alt="Slide 2" /></div>
                    <div className="slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vE4vMUZNTuoXEf_62fIpoe4PfN5q6jxJvQ&usqp=CAU" alt="Slide 3" /></div>
                </div>
            </div>
            <br />
            <br />
            <h2><u>Our Passion</u></h2>
            <div className="p1">
                <p>Food is more than just sustenance; it's an experience that connects us to our senses and memories. That's why our team of passionate chefs and baristas work tirelessly to create dishes that not only delight your taste buds but also warm your heart. Using only the freshest ingredients sourced from local suppliers, we craft each dish with care and creativity.</p>
            </div>
            <h2><u>Menu</u></h2>
            <div className="p1">
                <p>Indulge in a diverse menu that celebrates both classic comfort food and innovative culinary creations. From our delicious Vada pavs and manchurians to our mouthwatering sandwiches, every item on our menu reflects our commitment to quality and flavor. Don't forget to explore our array of delectable pastries and desserts - the perfect sweet ending to any meal.</p>
            </div>
            <h2><u>Ambiance</u></h2>
            <div className="p1">
                <p>Step into our cafe and instantly feel at home. The inviting aroma of freshly brewed coffee fills the air, cozy nooks and comfortable seating await you. Whether you're catching up with friends, settling in for a work session, or simply seeking a moment of solitude, our cafe provides the perfect backdrop.</p>
            </div>
            <h2><u>Community</u></h2>
            <div className="p1">
                <p>At DBIT, we take pride in being a part of the vibrant community. It's not just a cafe; it's a place where friendships are forged and stories are told.</p>
            </div>
            <h2><u>Visit Us</u></h2>
            <div className="p1">
                <p>We invite you to stop by and experience the warmth of DBIT Cafeteria for yourself. Our friendly staff is ready to welcome you with a smile and help you explore our menu. Whether you're in a hurry or have time to spare, we're here to serve you the perfect blend of flavors and hospitality. Join us on a culinary journey that's more than just food - it's an experience. See you at DBIT Cafeteria!</p>
            </div>
            <br />
            <br />
            <p>&copy; 2024 CODEIN. All rights reserved.</p>
        </div>
        </>
    );
};

export default CafeteriaPage;
