
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Category from './components/Category/Category';
import Menu from './components/Menu/Menu'
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Category />
      <Menu />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
