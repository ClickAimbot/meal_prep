import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './home.css';

import leanMealsImage from "../../assets/gallery01.png"
import leanMealsImage2 from "../../assets/gallery02.png"
import leanMealsImage3 from "../../assets/gallery03.png"
import leanMealsImage4 from "../../assets/gallery04.png"

const galleryImages = [
  leanMealsImage,
  leanMealsImage2,
  leanMealsImage3,
  leanMealsImage4
];

export const Home = () => {
  const navigate = useNavigate();
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const routeToPlans = () => {
    navigate('/plans');
  }

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">Made Fresh and Healthy</h1>
        <p className="p__opensans" style={{ margin: '2rem 0', color: 'black'}} >
          Check out our new Protein Shake.
        </p>
        <button className="custom__button" onClick={routeToPlans}>Explore Plans</button>
      </div>

      <div className="app__gallery flex__center">
        <div className='app__gallery-images'>
          <div className='app__gallery-images_container' ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>

          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')}/>
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')}/>
          </div>
        </div>
      </div>
    </div>
  )
}
