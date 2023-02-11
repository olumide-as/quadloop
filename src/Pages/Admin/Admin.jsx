import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AddProducts, Home, Orders, ViewProduct, Navbar} from '../../Containers/Admin/'
import './Admin.css'

const Admin = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="home" element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="add-products/:id" element={<AddProducts />} />
        <Route path="view-products" element={<ViewProduct />} />

      </Routes>
    </div>
  )
}

export default Admin