import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import leanMealsImage from "../../Images/IMG_0365.jpg"
import leanMealsImage2 from "../../Images/IMG_0366.jpg"
import leanMealsImage3 from "../../Images/IMG_0367.jpg"
import leanMealsImage4 from "../../Images/IMG_0368.jpg"

export const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    leanMealsImage,
    leanMealsImage2,
    leanMealsImage3,
    leanMealsImage4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [ currentImage, images.length ]);

  const routeToPlans = () => {
    navigate('/plans');
  }

  return (
    <div className="container">
      <div className="text-content">
        <h2>About us</h2>
        <p>
          We love to cook fresh and healthy meals for the person who wants to keep it simple and healthy. 
          We are a small business that is family owned and operated.  
          We are here to help you reach your goals and make your life easier. 
        </p>
        <button onClick={routeToPlans}>Order Now</button>
      </div>
      <div className="slideshow">
        <img src={images[currentImage]} alt="Business" />
      </div>
    </div>
  )
}
