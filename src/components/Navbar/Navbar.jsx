import React from 'react';
import './Navbar.css'; // Import the Navbar styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <img src="https://cdn1.vectorstock.com/i/1000x1000/07/50/happy-farmer-logo-agriculture-farming-natural-vector-33320750.jpg" alt="" /> {/* Image Logo */}
                <h1 className="logo">Sanket`s Farming</h1> {/* Name */}
                <ul className="menu-items">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#food">Category</a></li>
                    <li><a href="#food-menu">Menu</a></li>
                    <li><a href="#testimonials">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#footer">Footer</a></li>
                   
                </ul>
            </div> 
        </nav>
    );
};

export default Navbar;
