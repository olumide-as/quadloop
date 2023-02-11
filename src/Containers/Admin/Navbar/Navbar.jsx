import React  from 'react'
import "./Navbar.css";
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {

  // menu funcction
  const AdminMenu = () => (
    <>
      <NavLink to="home" activeClassName="active">Home</NavLink>
      <NavLink to="orders" activeClassName="active" > Orders </NavLink>
      <NavLink to="add-products/ADD" activeClassName="active">Add Products</NavLink>
      <NavLink to="view-products" activeClassName="active"> View Products </NavLink>
  
    </>
  )
  

  return (
    <div className="content__padding quadloop__adminnavbar">

      <div className='quadloop__adminnavbar-links'>
        <AdminMenu/>
      </div>
 

    </div>
  )
}

export default Navbar