import './trial.js'
import './finger foods.css';
import { Link } from 'react-router-dom';

function Finger() {
  return (
   <>
  <div class="body">
    <div className="container">
        <div className="row">
            <div className="card">
                <img src="https://st3.depositphotos.com/1027198/14485/i/950/depositphotos_144857921-stock-photo-delicious-french-fries.jpg" alt="french fries"/>
                <h4>french fries</h4>
                <p>Crispy golden perfection awaits in every bite of our artisanal French fries, a culinary triumph.</p>            
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="./trial" className="btn">Add to cart</Link>
                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://tse3.mm.bing.net/th?id=OIP.mJbkpKoBYHLsAz93NNBGcwHaHU&pid=Api&P=0&h=180" alt="Cheese pops"/>
                <h4>Cheese pops</h4>
                <p>Experience the magic of cheese in every pop, a tantalizing journey for your taste buds.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="./trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>
                </div>
                
            </div>

            <div className="card">
                <img src="https://i.ytimg.com/vi/DFh5YerVuKA/maxresdefault.jpg" alt="potato twister"/>
                <h4>potato twister</h4>
                <p>Delight in the gastronomic sophistication of our Potato Twistters, a whimsical fusion of culinary mastery and spud-centric elegance.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="./trial" className="btn">Add to cart</Link>
                    <Link to="/allitems" className="btn"style={{position:"relative",left:"30%"}}>Back</Link>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  );
}

export default Finger;
