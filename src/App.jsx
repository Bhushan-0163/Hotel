// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./files/navbar";
import Home from "./files/Home"; // Placeholder for Home component
import Gallery from "./files/Gallery"; // Placeholder for Gallery component
import Menu from "./files/Menu"; // Placeholder for Menu component
import About from "./files/About"; // Placeholder for About Us component
import Contact from "./files/Contact"; // Placeholder for Contact component
import Login from "./files/Login";
import ForgotPassword from "./files/ForgotPassword";
import ResetPassword from "./files/ResetPassword";
import Book from "./files/Book";
import CustomAlert from './files/CustomAlert'; // Import your custom alert component
import BookEvent from './files/BookEvent';
import BookHall from './files/BookHall';
import BookTable from './files/BookTable';
//import "./index.css";
import MoreAbout from "./files/MoreAbout";
import Team from "./files/Team";
import HotelRating from "./files/HotelRating";
function App() {
  return (
  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Book" element={<Book/>} />
        <Route path="/CustomAlert" element={<CustomAlert/>} />
        <Route path="/BookTable" element={<BookTable/>}/>
        <Route path="/BookEvent" element={<BookEvent/>}/>
        <Route path="/BookHall" element={<BookHall/>}/>
        <Route path="/MoreAbout" element={<MoreAbout/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/HotelRating" element={<HotelRating/>}/>
      </Routes>
    
    </Router>
    
  );
}

export default App;
