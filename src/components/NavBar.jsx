import './assets/NavBar.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from '../Home';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import ProfilePage from '../profile-page/ProfilePage';
import QRscan from './QRscan';
import BasicMap from '../basic-map/BasicMap';

const toggleNavBar = () => {
    let navActive = document.getElementsByTagName("nav")[0];
    navActive.classList.toggle("active");
}

export default function App() {

    function logout(){
        localStorage.removeItem('eSavari-loggedin');
        localStorage.removeItem('eSavari-id');
        window.location.reload(true);
    }

    return (
      <>
        {/* Navigation Bar */}
        <BrowserRouter>
        <header id="menu" className="menu">
            <nav>
                <h3 className="logo">E-Savari</h3>
                <div className="menu-bar">
                {
                        (window.location.href === "http://localhost:3000/profile") ? <Link to="/qrscan"><img id="qrscan" src="https://static.thenounproject.com/png/59262-200.png" alt="" /></Link> : <></>
                }
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="http://localhost:3000/#about">About</a></li>
                    <li><a href="http://localhost:3000/#contact">Contact</a></li>
                    {
                      (localStorage.getItem("eSavari-loggedin")) ? <><li><Link to="/map">Map</Link></li><li><Link to="/profile">Profile</Link></li><li onClick={logout}><Link>Logout</Link></li></> : <><li><Link to="/login">Login</Link></li><li><Link to="/signup">SignUp</Link></li></>
                    }
                </ul>
                <div className="menu-btns" onClick={toggleNavBar}>
                    <i className="fa-solid fa-bars-staggered menu-btn"></i>
                    <i className="fa-solid fa-xmark close-btn"></i>
                </div>
                </div>
            </nav>
        </header>
        <Routes>
            <Route exact index element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/profile" element={<ProfilePage/>}/>
            <Route exact path="/qrscan" element={<QRscan/>}/>
            <Route exact path="/map" element={<BasicMap/>}/>
        </Routes>
        </BrowserRouter>
      </>
    );
  }