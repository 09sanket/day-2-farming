import React from 'react';

const Home = () => {
  return (
    <section className="showcase-area" id="showcase" style={{
      height: "75vh",
      background: "linear-gradient(rgba(240, 240, 240, 0.144), rgba(255, 255, 255, 0.336)), url('https://i.pinimg.com/736x/d1/d5/11/d1d5112b2eaacab46f11e4d03e3103e2.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    width: "100%",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="showcase-container" style={{ textAlign: "center", color: "white" , fontWeight:"bolder", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" , fontSize: "36px" }}>
        <h1 className="main-title" id="home" style={{color: "chocolate" , fontWeight: "bolder"}}>EAT RIGHT FOOD</h1>
        <p style={{fontWeight: "bolder"}}>Eat Healthy, it is good for our health.</p>
        <a href="#food-menu" className="btn btn-primary">Menu</a>
      </div>
    </section>
  );
}

export default Home;
