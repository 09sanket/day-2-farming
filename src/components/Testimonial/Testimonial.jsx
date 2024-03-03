import React from "react";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-container container">
        <div className="testimonial-box">
          <div className="customer-detail">
            <div className="customer-photo">
              <img src="https://t3.ftcdn.net/jpg/07/02/72/58/360_F_702725899_Ifh8GRhsmFYvSnaQdO0DiHZO3Os29O3Y.jpg" alt="" />
              <p className="customer-name">Kripalu Bhagat</p>
            </div>
          </div>
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
          </div>

          <p className="testimonial-text">
          "Sanket's Farming delivers exceptional produce bursting with flavor and freshness, thanks to their commitment to sustainable farming practices.
          </p>
        </div>

        <div className="testimonial-box">
          <div className="customer-detail">
            <div className="customer-photo">
              <img src="https://static1.bigstockphoto.com/1/5/2/large2/251793529.jpg" alt="" />
              <p className="customer-name">Sems Joshi</p>
            </div>
          </div>
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
          </div>

          <p className="testimonial-text">
          "Sanket's Farming delivers exceptional produce bursting with flavor and freshness, thanks to their commitment to sustainable farming practices.
          </p>
        </div>
        <div className="testimonial-box">
          <div className="customer-detail">
            <div className="customer-photo">
              <img src="https://img.freepik.com/premium-photo/smiling-senior-agronomist-stands-field-showing-thumb-up-middle-his-harvest-looking-camera-elderly-man-shows-what-great-harvest-is-grown-face-is-happiness_184353-4211.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=sph" alt="" />
              <p className="customer-name">Keshav Chawla</p>
            </div>
          </div>
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
          </div>

          <p className="testimonial-text">
          "Sanket's Farming delivers exceptional produce bursting with flavor and freshness, thanks to their commitment to sustainable farming practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
