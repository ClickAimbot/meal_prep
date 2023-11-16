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
    }, 5000);
    return () => clearInterval(interval);
  }, [ currentImage, images.length ]);

  const routeToPlans = () => {
    navigate('/plans');
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div
        style={{
          flex: "0 0 50%",
          padding: "20px",
        }}
      >
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida
          consectetur lorem, nec dignissim justo lacinia et. Nullam efficitur,
          ipsum vitae laoreet hendrerit, velit ipsum consectetur nibh, at congue
          magna tellus a purus.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Sed iaculis euismod mi, eget porttitor lorem
          pellentesque at. Phasellus elementum velit a ligula malesuada
          tincidunt.
        </p>
      </div>
      <div
        style={{
          flex: "0 0 50%",
          padding: "20px",
        }}
      >
        <img
          src={images[currentImage]}
          alt="Business"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  )
}
