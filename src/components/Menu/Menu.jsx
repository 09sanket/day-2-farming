import React from 'react';
import './Menu.css';

const FoodMenu = () => {
  return (
    <section id="food-menu">
      <h2 className="food-menu-heading">Pesticides</h2>
      <div className="food-menu-container container">
        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/2/KG/HZ/YM/26332674/suraksha-bio-formulation-500x500.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Suraksha-Bio Formulation</h2>
            <p>
            Suraksha - Bio Formulation 10ml Dose at Rs 1100/litre | Bio Organic Products in Rajkot | ID: 2850389413755
            </p>
            <p className="food-price">Price: &#8377; 250</p>
          </div>
        </div>
        
        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://cdn.shopify.com/s/files/1/0722/2059/files/12_77cf2caa-b0df-4762-9512-6b077f54c4bd.webp?v=1683624256" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Silicon Powder</h2>
            <p>
            Silicon Power is an Efficacy Enhancer that improves the performance of Chemicals that it is tank-mixed.
            </p>
            <p className="food-price">Price: &#8377; 220</p>
          </div>
        </div>

        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://m.media-amazon.com/images/I/41TCQV+fw9L._AC_UF1000,1000_QL80_.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title"> Dow Agrosciences</h2>
            <p>
            Dow Agrosciences Dupont/Dow Crop Max, Plant Growth Simulator For Vegetables And Field Crops
            </p>
            <p className="food-price">Price: &#8377; 290</p>
          </div>
        </div>

        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://agribegri.com/productimage/c435975fea90b8c4acf05ed094344307-11-29-23-11-04-49.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Crop Super Fighter</h2>
            <p>
            Adhunik Crop Super Fighter Imidacloprid 30.5% SC Insecticide, Control All Major Types of Sucking Pest
            </p>
            <p className="food-price">Price: &#8377; 150</p>
          </div>
        </div>

        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://cropcare.co.in/wp-content/uploads/2022/06/OCTANE-THIAMETHOXAM-75-SG.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Insecticides</h2>
            <p>
            Adhunik Crop Super Fighter Imidacloprid 30.5% SC Insecticide, Control All Major Types of Sucking Pest
            </p>
            <p className="food-price">Price: &#8377; 550</p>
          </div>
        </div>

        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/d69f7499cc4b4ef181e60abf1b2eb74c.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Tincture Q</h2>
            <p>
            Dr. Reckeweg Alfalfa Mother Tincture Q: Buy bottle of 20.0 ml Mother Tincture at best price in India 
            </p>
            <p className="food-price">Price: &#8377; 250</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoodMenu;
