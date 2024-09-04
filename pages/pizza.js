
import './pizza.css';
import { Link } from 'react-router-dom';

function Pizza() {
  return (
   <>
  <div className='body'>
    <div className="container">
        <div className="row">
            <div className="card">
                <img src="https://www.sheknows.com/wp-content/uploads/2018/10/qath7uiawl6sfhzke7gj.jpeg" height="150px" width="200px" alt='cheese pizza'/>
                <h4>cheese pizza</h4>
                <p>A cheese pizza is a type of pizza that typically consists of a pizza crust topped with tomato sauce and melted cheese. It is a simple and classNameic pizza option that is enjoyed by many.
                    Treat yourself to a cheesy goodness of our pizza, where a harmonious blend of cheeses transforms each slice into a savory sensation.
                </p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{marginLeft:"90px"}}>Back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.TVNCuY3DxwmJR-raluNlXAHaHa&pid=Api&P=0&h=180" height="150px" width="200px" alt="panner piza"/>
                <h4>panner pizza</h4>
                <p>Paneer is often marinated in spices and then used as a topping on the pizza along with other ingredients like tomato sauce, vegetables, and additional cheese. It offers a unique and flavorful twist to the traditional pizza .
                    A delectable twist on the classNameic that promises a symphony of taste in every bite and experience a culinary masterpiece.
                </p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{marginLeft:"90px"}}>Back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://tse2.mm.bing.net/th?id=OIP.mbEYiufrZLip1xALsCHw7gHaHa&pid=Api&P=0&h=180" height="150px" width="200px" alt='spicy pizza'/>
                <h4>spicy pizza</h4>
                <p>Spicy pizza refers to a pizza that has a kick of heat or spiciness in its flavor profile. The level of spiciness can vary depending on personal preference and the ingredients used. Some common toppings that can add spiciness to a pizza include jalapenos, pepperoni, hot sauce, chili flakes, or other spicy seasonings.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{marginLeft:"90px"}}>Back</Link>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  );
}

export default Pizza;
