import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

const images = [image1, image2]; // Array of images to slide

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="banner-section">
      <div className="banner-container">
        {/* Slider Image */}
        <div className="banner-image-container">
          <img src={images[currentImage]} alt="Banner" className="banner-image" />
        </div>

        {/* Text Content */}
        <div className="banner-text">
          <h1>I am Hammad</h1>
          <p>From Nigeria</p>
          <p>A Creative Computer Scientist & Software Developer</p>
          <div className="banner-buttons">
            <a href="#contact" className="btn hire-btn">Hire Me</a>
            <a href="https://wa.me/08179598253" target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;