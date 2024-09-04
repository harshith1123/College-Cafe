import React from 'react'
import './input.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Input() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    const colorstyle = {
        color: isHover ? 'white' : 'black'
    };
    return (
        <div className='bodypart'>
            <div className="whole">
                <div className="profile-pic" style={{marginLeft:'70px'}}>
                    <label className="-label" for="file">
                        <span className="glyphicon glyphicon-camera"></span>
                        <span>Change Image</span>
                    </label>
                    <input id="file" type="file" onchange="loadFile(event)" />
                    <img src={require("./image/Profile_Picture.png")} id="output" width="200" alt="Profile" />
                </div>
                <form className='profile-upload'>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" id="formdata" required />
                            <div className="underline"></div>
                            <label>NAME</label>
                        </div>
                    </div>
                    <br />
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" id="formdata" required />
                            <div className="underline"></div>
                            <label>USN</label>
                        </div>
                    </div>
                    <br />
                    <div className="wrapper">
                        <label for="Branch">BRANCH:</label>
                        <select id="Branch" name="Branch">
                            <option value=""></option>
                            <option value="IS">Information Science</option>
                            <option value="CS">Computer Science</option>
                            <option value="EC">Electronics & Communication</option>
                            <option value="AIML">AIML</option>
                            <option value="AIDS">AIDS</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECHANICAL</option>
                            <option value="CIVIL">CIVIL</option>
                        </select>
                    </div>
                    <br />
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" id="formdata" required />
                            <div className="underline"></div>
                            <label>PHONE NUMBER</label>
                        </div>
                    </div>
                    <br />
                    <div className="actions">
                        <button className="mybtn btn_reset" id="myButton" style={{marginRight:"60px"}}>Save</button>
                        <button className="btn_reset" type="reset" style={{marginRight:"60px"}}>Reset</button>
                        <button className="btn_reset" type="reset" id="top"><Link to="/" style={colorstyle} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>Back</Link></button>
                    </div>
                </form>
                <div id="myPopup" className="popup">
                    <div className="popup-content">
                        <h4 style={{ color: "green" }}>Data Saved Successfully</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Input;