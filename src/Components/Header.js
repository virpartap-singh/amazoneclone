import React from 'react';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Logo from '../down.png';
import "../Css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import Payment from "../Components/Payment";



function Header() {
  const [{ basket, user } ] = useStateValue();

 

  const handleAuthenticaton = ()=>{
    if(user){
    auth.signOut()
    }
  }
  
    return (
        <>
        <Router>
        <div className="header">
      <Link to="/">
        <img className="header__logo" src={ Logo } alt="logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
      <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        {/* <Link to='/login'>
          <div className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link> */}
        

        
        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/checkout" element={<Checkout />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/payment" element={<Payment />} exact />
    </Routes>
    </Router>
       </>
    )
}

export default Header
