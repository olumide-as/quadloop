import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Footer, Navbar } from './Containers';
import AdminOnlyLink from './Containers/AdminOnlyRoute/AdminOnlyRoute';
import {Landing, NoPage, Blog, Products, Login, Register, Reset, Preorder, Admin} from "./Pages"

/*
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
*/

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/preorder" element={<Preorder />} />
        <Route path="/admin/*" element={<AdminOnlyLink><Admin/></AdminOnlyLink>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App