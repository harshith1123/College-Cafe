import Canteen from './pages/canteen.js'
import Nishanth from './pages/nishanth.js'
import Junkfood from './pages/junkfood.js'
import Manoj from './pages/manoj.js';
import Allitems from './pages/allitems.js';
import Chips from './pages/chips.js';
import Chocolate from './pages/chocolate.js';
import Finger from './pages/finger_foods.js';
import Burger from './pages/burger.js';
import Ice from './pages/ice-cream.js';
import Pizza from './pages/pizza.js';
import Home from './pages/Home.js';
// import Menu from './Akshatha/Menu.js'
import Input from './Akshatha/input.js';
import ForgotPassword from './components/forgot.js';
import SignIn from './components/signin.js';
import SignUp from './components/signup.js';
import NewPassword from './components/newpassword.js';
import Contact from './Prathyusha/Contact.js';
import CafeteriaPage from './Prathyusha/About us/AboutUs.js';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/canteen" element={<Canteen/>}></Route>
        <Route exact path="/nishanth" element={<Nishanth/>}></Route>
        <Route exact path="/junkfood" element={<Junkfood/>}></Route>
        <Route exact path="/manoj" element={<Manoj/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        {/* <Route exact path="/" element={<Contact/>}></Route> */}
        <Route exact path="/chips" element={<Chips/>}></Route>
        <Route exact path="/chocolate" element={<Chocolate/>}></Route>
        <Route exact path="/finger_foods" element={<Finger/>}></Route>
        <Route exact path="/burger" element={<Burger/>}></Route>
        <Route exact path="/ice-cream" element={<Ice/>}></Route>
        <Route exact path="/Pizza" element={<Pizza/>}></Route>
        <Route exact path="/allitems" element={<Allitems/>}></Route>
         {/* <Route exact path="/Menu" element={<Menu/>}></Route>  */}
        <Route exact path="/input" element={<Input/>}></Route> 
         <Route exact path="/forgot" element={<ForgotPassword/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route> 
        <Route exact path="/newpassword" element={<NewPassword/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
        <Route exact path="/AboutUs" element={<CafeteriaPage/>}></Route>
        
      </Routes>
    </Router>
    
  );
}

export default App;
