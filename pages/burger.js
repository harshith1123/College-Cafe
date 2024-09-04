
import './burger.css';
import { Link } from 'react-router-dom';

function Burger() {
  return (
   <>
  <div className="body">
    <div className="container">
        <div className="row">
            <div className="card">
                <img src="https://d1z88p83zuviay.cloudfront.net/ProductVariantImages/b934cb3f-85db-4429-b520-c0349575008b.jpg" height="150px" alt=""/>
                <h4>cheese burger</h4>
                <p>
                    Cheese is added to the patty while it is still hot, allowing it to melt and create a gooey, flavorful addition to the burger. There are various types of cheese that can be used, depending on personal preference. Some popular choices include cheddar, American, Swiss, and pepper jack. Melt into pure bliss with our cheesburger,a gooey masterpiece that transforms your college cafeteria meal into a savory celebration</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://tse3.mm.bing.net/th?id=OIP.87Znm3jB87RHtJBi5r1YUAAAAA&pid=Api&P=0&h=180" height="150px" alt=""/>
                <h4>grilled burger</h4>
                <p>A grilled burger refers to a hamburger that is cooked on a grill, either an outdoor barbecue grill or an indoor stovetop grill.
                Grilling imparts a smoky flavor and creates a charred exterior while keeping the inside juicy and flavorful. 
                    <br/>
                    Dive into the delectable world of our chargilled burger, a symphony of flavours that dance on your plate, making every bite a gastronomic delight
                </p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>
                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.z-3Ij2JCK3bgl57Pi5VM4QHaEw&pid=Api&P=0&h=180" height="150px" alt="american spicy burger"/>
                <h4>American Spicy burger</h4>
                <p>An American spicy burger is a variation of a traditional hamburger that incorporates spicy flavors and ingredients. Some recipes call for adding spices like chili powder, cumin, red pepper flakes, or hot sauce to the ground beef mixture before grilling. Other variations may include toppings such as jalapenos, pepper jack cheese, or spicy ketchup to enhance the heat and flavor of the burger .</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">add to cart</Link>                
                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>                
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  );
}

export default Burger;
