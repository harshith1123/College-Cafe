

import { Link } from 'react-router-dom';

function JunkFood() {
    return (
        <>
            <div className='body'>
                <div className="container">
                    <h3>Popular Products</h3>
                    <div className="row">
                        <div className="card">
                            <img src="https://tse2.mm.bing.net/th?id=OIP._W7fb1GoiJYk9tyoh2tgAwHaHa&pid=Api&P=0&h=180" alt="" />
                            <h4>Chips</h4>
                            <p>From classNameic to exotic, our chip collection at the college café promises a thrilling exploration of textures and tastes.</p>
                            <div className="flexing">
                                <Link to="/chips" className="btn space" style={{ marginRight: "10px" }}>Read more</Link>
                                <Link to="/canteen" className="btn">Back</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.AUHOmU9NPeO_y3GLXEJt0AHaGE&pid=Api&P=0&h=180" alt="" />
                            <h4>Chocolate</h4>
                            <p>Make your study sessions a little sweeter with our delectable chocolate choices at the college café, turning breaks into moments of bliss."</p>
                            <div className="flexing">
                                <Link to="/chocolate" className="btn" style={{marginRight:"10px"}}>Read more</Link>
                                <Link to="/canteen" className="btn">Back</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.14lyyjXEwptX3jw1lMRmpwHaEJ&pid=Api&P=0&h=180" height="164px" alt="" />
                            <h4>Finger foods</h4>
                            <p>Turn your coffee break into a flavorful exploration with our tempting finger foods, making each visit to the college café a delightful experience.</p>
                            <div className="flexing">
                                <Link to="/finger_foods" className="btn space" style={{ marginRight: "10px" }}>Read more</Link>
                                <Link to="/canteen" className="btn">Back</Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/allitems">View More</Link>
                </div>
            </div>

        </>
    );
}

export default JunkFood;
