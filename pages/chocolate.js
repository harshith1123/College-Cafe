
import './chocolate.css';
import { Link } from 'react-router-dom';

function Chocolate() {
  return (
   <>
  <div className="body">
    <div className="container">
        <div className="row">
            <div className="card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.LmA6m1hm2Xd6Y6aqU1P4lgHaFZ&pid=Api&P=0&h=180" height="150px" alt="cadbury"/>
                <h4>cadbury</h4>
                <p>Dive into the luscious world of Cadbury, where each piece is a testament to chocolate artistry, creating a sweet escape in the heart of your college café routine.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">Add to cart</Link>
                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://tse2.mm.bing.net/th?id=OIP.JNTwTmkVSppxdK3_xazPiQHaEK&pid=Api&P=0&h=180" height="150px" alt="kitkat"/>
                <h4>kitkat</h4>
                <p>Experience the refined simplicity of KitKat, a delightful intermission of crispy wafer and chocolate perfection that transforms your college café snacking into a enlighted affair.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">Add to cart</Link>
                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>
                </div>
            </div>

            <div className="card">
                <img src="https://www.keepitsweet.co.uk/images/Cadburys-Chocolate-EclairsCAD-CHE-CCE.jpg" alt="eclairs"/>
                <h4>eclairs</h4>
                <p>Eclairs Chocolate, where the joy of caramel meets refined chocolate, offers a delightful escape in your college café, turning ordinary moments into extraordinary memories.</p>
                <div className="cart">
                    <button type="submit" className="btn price">price</button>
                    <Link to="/trial" className="btn">Add to cart</Link>
                    <Link to="/allitems" className="btn" style={{position:"relative",left:"30%"}}>Back</Link>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  );
}

export default Chocolate;
