
import './nishanth.css';
import { Link } from 'react-router-dom';

function Nishanth() {
    return (

        <div className="body-items">
            <div className="container-items">
                <div className="row">
                    <div className="card">
                        <img src="https://www.foodandwine.com/thmb/gv06VNqj1uUJHGlw5e7IULwUmr8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000-0984c1b513ae4af396aee039afa5e38c.jpg" width="250px" height="150px" alt="" />
                        <h4>Veg Sandwich</h4>
                        <p>A classNameNameic grilled Sandwich filled with fried tomata,onion.</p>
                        <h2>Rs.x</h2>
                        <Link to="/trial" className="btn">Add to Cart</Link >
                        <Link to="/canteen" className="btn">Back</Link>

                    </div>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUegKAlxUaKZDnMbt8GqSDrQD_SZ9ZQHtoiJfxcWHoQogagxlo5U8Mq8uwzGYLMHQ45aE&usqp=CAU" alt="" />
                        <h4>Cheese Sandwich</h4>
                        <p>A toastie with a tangy Cheese & vegetable mixture layered between soft white bread slices.</p>
                        <h2>Rs.x</h2>
                        <Link to="/trial" className="btn">Add to Cart</Link >
                        <Link to="/canteen" className="btn">Back</Link>

                    </div>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpazh_gebAa9LWsyMpPlthtLbY44qLB27-g&usqp=CAU" alt="" />
                        <h4>Bread omlete Sandwich</h4>
                        <p>A mouthwatering combination of fluffy omlette and melted cheese,sandwiched between slices of freshly baked bread.</p>
                        <h2>Rs.x</h2>
                        <Link to="/trial" className="btn">Add to Cart</Link >
                        <Link to="/canteen" className="btn" style={{marginTop:"10px"}}>Back</Link>

                    </div>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PrcZeHMUXVjPR8ibI1BoP5Ml0y1KebJ4ho1gohpaE34U-PXxlPPbxh2NT_OGbELn_sY&usqp=CAU" alt="" />
                        <h4>Sweetcorn Sandwich</h4>
                        <p>A delicious sandwich made by toasted fresh bread layered with cheese and stuffed with mixed vegetables and sweet corn.</p>
                        <h2>Rs.x</h2>
                        <Link to="/trial" className="btn">Add to Cart</Link >
                        <Link to="/canteen" className="btn">Back</Link>

                    </div>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9BbAIqPzkCXg77KhaDM5ediaaRCNuq7eTA&usqp=CAU" alt=""/>
                            <h4>PaneerSandwich</h4>
                            <p>Get going with this protein rich sandwich packed with a generous filling of Paneer and cheese.</p>
                            <h2>Rs.x</h2>
                            <Link to="/trial" className="btn">Add to Cart</Link >
                            <Link to="/canteen" className="btn">Back</Link>

                    </div>
                </div>
            </div>
        </div>
            );
}

            export default Nishanth;
