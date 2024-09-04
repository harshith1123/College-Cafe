import './allitems.css';
import './chips.js'
import './chocolate.js'
import './finger_foods.js'
import './burger.js'
import './ice-cream.js'
import { Link } from 'react-router-dom';

function Allitems() {
return (
    <>
        <div className='Allbody'>
            <div className="Wholecontainer">
                <h1>All Items</h1>
                    <div className="row">
                        <div className="card">
                            <img src="https://tse2.mm.bing.net/th?id=OIP._W7fb1GoiJYk9tyoh2tgAwHaHa&pid=Api&P=0&h=180" height="164px" alt="chips"/>
                            <h4>Chips</h4>
                            <p>From classic to exotic, our chip collection at the college café promises a thrilling exploration of textures and tastes.</p>
                            <Link to="/chips" className="btn">Read more</Link>
                            <Link to="/junkfood" className="btn">Back</Link>
                        </div>

                        <div className="card">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.AUHOmU9NPeO_y3GLXEJt0AHaGE&pid=Api&P=0&h=180" height="164px" alt="chocolate"/>
                            <h4>Chocolate</h4>
                            <p>Make your study sessions a little sweeter with our delectable chocolate choices at the college café, turning breaks into moments of bliss."</p>
                            <Link to="/chocolate" className="btn">Read more</Link>
                            <Link to="/junkfood" className="btn">Back</Link>
                        </div>

                        <div className="card">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.14lyyjXEwptX3jw1lMRmpwHaEJ&pid=Api&P=0&h=180" height="164px" alt="finger foods" />
                            <h4>Finger foods</h4>
                            <p>Turn your coffee break into a flavorful exploration with our tempting finger foods, making each visit to the college café a delightful experience.</p>                            
                            <Link to="/finger_foods" className="btn">Read more</Link>
                            <Link to="/junkfood" className="btn">Back</Link>
                        </div>

                        <div className="card">
                            <img src="https://twohangrymoms.com/wp-content/uploads/2019/07/iStock-905923184.jpg" height="164px" alt="burger"/>
                            <h4>Burger</h4>
                            <p>Make your lunch break a highlight of your day with our delectable burgers, offering a delicious respite in the midst of academic pursuits.</p>
                            <Link to="/burger" className="btn">Read more</Link>
                            <Link to="/junkfood" className="btn">Back</Link>
                        </div>
                        <div className="card">
                            <img src="https://tse4.explicit.bing.net/th?id=OIP.kqLhWStnyeSDWymyhSXpeQHaE3&pid=Api&P=0&h=180" height="164px" alt="pizza" />
                            <h4>Pizza</h4>
                            <p>Indulge in a pizza experience like no other at the college café, where every pie is a testament to culinary excellence and student satisfaction."</p>
                            <Link to="/pizza" className="btn">Read more</Link>
                            <Link to="/junkfood" className="btn">Back</Link>
                        </div>

                        <div className="card">
                            <img src="https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/796ae3d7-827a-4003-859e-9dc93678827b/4a9cb460-2f9b-442d-8448-b8237aa30394.jpg" height="164px" alt="ice cream" />
                            <h4>Ice cream</h4>
                            <p>Celebrate the sweet side of academia with our decadent ice creams, where creamy textures and exquisite flavors converge in a tantalizing dance.</p>                            
                            <Link to="/ice-cream" className="btn">Read more</Link>
                            <Link to="/junkfood" className="btn" style={{marginTop:"10px"}}>Back</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Allitems;
