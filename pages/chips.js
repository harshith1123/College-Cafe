
import './chips.css';
import './trial.js'
import { Link } from 'react-router-dom';

function Chips() {
    return (
        <>
            <div className="body">
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._AC_SL1500_.jpg" height="200px" alt="lays" />
                            <h4>Lays</h4>
                            <p>Delight in the haute couture of snacking with Lay's, where every chip is a statement piece, elevating your college café breaks to a realm of unparalleled indulgence.</p>
                            <div className="cart">
                                <button type="submit" className="btn price">price</button>
                                <Link to="/trial" className="btn">add to cart</Link>
                                <Link to="/allitems" className="btn"  style={{position:"relative",left:"30%"}}>back</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src="http://ecx.images-amazon.com/images/I/813fD06DmPL._SL1500_.jpg" alt="kurkure" />
                            <h4>Kurkure</h4>
                            <p>Kurkure, the maestro of spice and crunch, orchestrates a symphony of flavors that transforms your college café moments into a spicy and spirited escapade.</p>
                            <div className="cart">
                                <button type="submit" className="btn price">price</button>
                                <Link to="/trial" className="btn">Add to cart</Link>
                                <Link to="/allitems" className="btn"  style={{position:"relative",left:"30%"}}>Back</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src="https://m.media-amazon.com/images/I/71z+G+gAkzL._SL1500_.jpg" alt="Cheetos" />
                            <h4>Cheetos</h4>
                            <p>Unleash the fiery spirit of Cheetos, a fusion of zest and crunch that sparks excitement and transforms your college café break into a bold and flavorful adventure</p>
                            <div className="cart">                                
                                    <button type="submit" className="btn price">price</button>
                                    <Link to="/trial" className="btn">Add to Cart</Link>
                                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Chips;
