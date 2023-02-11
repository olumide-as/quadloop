import React , { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import {  signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/Config";
import { useEffect } from "react";
import logo from '../../Assets/quadloop.svg';
import {RiMenu3Line, RiCloseLine, RiUser2Fill, RiShoppingBagFill } from 'react-icons/ri';
import "./Navbar.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {  REMOVE_ACTIVE_USER,  SET_ACTIVE_USER} from "../../Redux/Slice/AuthSlice";
import ShowOnLogin, { ShowOnLogout } from '../../Hidden/Hidden';
import { AdminOnlyLink } from '../AdminOnlyRoute/AdminOnlyRoute';
import { NavHashLink } from 'react-router-hash-link';




const Navbar = () => {

 //toggle menu
  const [toggleMenu, SetToggleMenu] = useState(false);
  
//navigate function
  const navigate = useNavigate();

// display name variable
  const [displayName, setdisplayName] = useState("");


  const dispatch = useDispatch();


// Monitor currently sign in user
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //console.log(user)
      if (user.displayName == null) {
        const u1 = user.email.substring(0, user.email.indexOf('@'));
        const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
        setdisplayName(uName)
      } else{
        setdisplayName(user.displayName);
      }

      dispatch(SET_ACTIVE_USER({
        email: user.email,
        userName: user.displayName ? user.displayName
        : displayName,
        userID: user.uid,
      }))
    } else {
      setdisplayName ('');
      dispatch(REMOVE_ACTIVE_USER());
    }
  });
},[dispatch, displayName]);


//logout function
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // menu funcction
  const Menu = () => (
    <>
      <NavHashLink to="../#home" >Home</NavHashLink>
      <NavHashLink to="../#about" >About Us</NavHashLink>
      <NavHashLink to="../#solutions">Solutions</NavHashLink>
      <NavHashLink to="../#impacts" >Impacts</NavHashLink>
      <NavHashLink to="../#news">News</NavHashLink>
      <NavHashLink to="../#partners" >Partners</NavHashLink>
      <NavHashLink to="../#contact" >Contact Us</NavHashLink>
  
    </>
  )
  
  // shop menu function
  const ShopMenu = () => (
    <>
      <ShowOnLogin><NavLink to="#0">  <RiUser2Fill size={16} /> Hi, {displayName} </NavLink></ShowOnLogin>
      <AdminOnlyLink> <NavLink to="/admin/home" > Admin</NavLink></AdminOnlyLink>
      <ShowOnLogin><NavLink to="/my-orders" > My Orders</NavLink></ShowOnLogin>
      <NavLink to="/cart"> <RiShoppingBagFill size={16} />Cart</NavLink>
      <ShowOnLogout><NavLink to="/register" >Register</NavLink></ShowOnLogout>
      <ShowOnLogout><button><NavLink to="/login">Log In</NavLink></button></ShowOnLogout>
      <ShowOnLogin><button onClick={logoutUser} ><NavLink to="/">Log Out</NavLink></button></ShowOnLogin>
  
    </>
  )


        

  return (
    <div><ToastContainer />
    <div className="content__padding quadloop__navbar">
                      

      <div className='quadloop__navbar-logo'>
      <img src={logo} alt="logo" />
      </div>

      <div className='quadloop__navbar-links'>
        <Menu/>
      </div>

      <div className="quadloop__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color="#000" size={32} onClick={() => SetToggleMenu(false)}/>
            : <RiMenu3Line color="#000" size={32} onClick={() => SetToggleMenu(true)}/>
          }
          {toggleMenu && (
              <div className="quadloop__navbar-menu__container scale-up-tr">
                <div className="quadloop__navbar-menu__container-links">
                  <Menu />
                  <hr/>
                  <ShopMenu />
                </div>
              </div>
          )
          }
      </div>

      <div className="quadloop__navbar-store">
          {toggleMenu 
            ? <RiCloseLine color="#000" size={32} onClick={() => SetToggleMenu(false)}/>
            : <RiMenu3Line color="#000" size={32} onClick={() => SetToggleMenu(true)}/>
          }
          {toggleMenu && (
              <div className="quadloop__navbar-menu__container scale-up-tr">
                <div className="quadloop__navbar-menu__container-links">
                  <ShopMenu />
                </div>
              </div>
          )
          }
      </div>
 

    </div>
    </div>
  )
}

export default Navbar