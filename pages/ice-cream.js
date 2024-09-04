
import './ice-cream.css';
import { Link } from 'react-router-dom';

function Ice() {
  return (
   <>
  <div className='body'>
    <div className="container">
        <div className="row">
            <div className="card">
                <img src="https://www.thespruceeats.com/thmb/BYOHKcXhja-ez7Fr9obgBrDHJ1Y=/3064x2042/filters:fill(auto,1)/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg" height="150px" alt="chocolate ice-cream"/>
                <h4>chocolate ice cream</h4>
                <p>Unleash your chocolate cravings with our delectable chocolate ice cream, a frozen delight that's the perfect finale to any meal or a standalone sweet escape.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{marginLeft:"90px"}}>Back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://tse3.mm.bing.net/th?id=OIP.jx-0RMROoTKBiJCBn6jQnAHaFj&pid=Api&P=0&h=180" alt="Vanilla Ice cream"/>
                <h4>Vanilla Ice cream</h4>
                <p>Vanilla ice cream is a classNameic and widely loved flavor of ice cream. It is made with a base of milk, cream, sugar, and vanilla extract.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{marginLeft:"90px"}}>back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://www.sidechef.com/recipe/a3b228d7-975f-4fda-a718-d20e6db3936a.jpeg?d=1408x1120" height="150px" alt="Butterscotch ice-cream"/>
                <h4>Butterscotch Ice cream</h4>
                <p>Butterscotch ice cream is a flavor that combines the rich and buttery taste of butterscotch with the creamy texture of ice cream.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{marginLeft:"90px"}}>back</Link>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  );
}

export default Ice;
