import './Contact.css';
import { Link } from 'react-router-dom';
import React from 'react';
function Contact() {
    return (
        
        <div className='body-contact'>
            <div className="container-box">
                <h1 className='.con' style={{position:"relative",left:"20%"}}>Contact Us</h1>
                <div className="contact-box">
                    <div className="card-left">
                        <h3>We're here to help you</h3>
                        <p className="pg">If you have any queries, please leave us a message.</p>
                        <form action="#" method="post" onsubmit="redirectToPage(); return false;">
                            <div className="input-row">
                                <div className="input-group">
                                    <input type="text" name="name" id="name" placeholder="Enter your full name" /></div>
                                <div className="input-group">
                                    <input type="text" id="email" name="email" placeholder="Enter your Email" /></div></div>

                            <div className="input-row">
                                <div className="input-group">
                                    <input type="text" id="phone" name="phone" placeholder="Enter your phone number" /></div>
                                <div className="input-group">
                                    <input type="text" id="subject" name="subject" placeholder="Enter your subject" />

                                </div></div>
                            <div className="input-group">
                                <textarea id="message" name="message" rows="5" placeholder="Enter your message.." style={{ height: "130px" }}></textarea>
                            </div>
                            <button className="submit-contact"> <Link to="submit.html" style={{color:"white",marginBottom:"5px"}} >Submit</Link></button>
                            <button className="submit-contact"> <Link to="/" style={{color:"white"}} >Home</Link></button>

                        </form>
                    </div>
                    <div className="card-right">
                        <h3>Reach us:</h3>
                        <div className="icons">
                            <svg classNameName="envelope" xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 512 512"><path fill="#63E6BE" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                            <Link to="mailto:svbharath2005@gmail.com" target="_blank">myemail@gmail.com</Link><br /><br /><br />


                            <svg classNameName="phone" xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 512 512"><path fill="#63E6BE" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            <Link to="tel:9900361100" target="_blank">9900-361-100</Link><br /><br /><br />

                            <svg classNameName="location" xmlns="http://www.w3.org/2000/svg" height="30" width="15" viewBox="0 0 384 512"><path fill="#63E6BE" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>

                            <Link to="https://www.bing.com/maps?q=don+bosco+institute+of+technology+bangalore&FORM=HDRSC6&cp=12.881509%7E77.444236&lvl=16.0">Don Bosco institue of technology, kumbalgodu, Bengaluru-560074</Link><br /><br />
                            <div><iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.395415971304!2d77.44229597599478!3d12.882276516828503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15754055b99f%3A0xb10a8dc810207db8!2sDon%20Bosco%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1706728668870!5m2!1sen!2sin"
                                width="250"
                                height="250"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Don Bosco Institute Of Technology Map"
                            ></iframe>
                            </div>
                            <br />
                        </div>
                        <h3>Connect with us:</h3>
                        <div className="social-icons">
                            <Link to="https://www.instagram.com" target="_blank"><svg classNameName="instagram" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></Link>


                            <Link to="https://twitter.com" target="_blank"> <svg classNameName="twitter" xmlns="http://www.w3.org/2000/svg"
                                height={"35px"} viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg></Link>


                            <Link to="https://www.Linkedin.com" target="_blank"><svg classNameName="linkedin" xmlns="http://www.w3.org/2000/svg" height={"35px"} viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
