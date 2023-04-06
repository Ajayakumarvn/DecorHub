import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import View_a from "../images/products/a-1.jpg";
import View_b from "../images/products/a-2.jpg";
import View_c from "../images/products/a-3.jpg";
import View_d from "../images/products/a-4.jpg";

const Product = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div>
      <Carousel
        selectedItem={currentImage}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        stopOnHover={true}
        swipeable={true}
      >
        <div>
          <img
            src={View_a}
            alt="Product"
            onClick={() => handleThumbnailClick(0)}
          />
        </div>
        <div>
          <img
            src={View_b}
            alt="CProduct"
            onClick={() => handleThumbnailClick(1)}
          />
        </div>
        <div>
          <img
            src={View_c}
            alt="Product"
            onClick={() => handleThumbnailClick(2)}
          />
        </div>
        <div>
          <img
            src={View_d}
            alt="Product"
            onClick={() => handleThumbnailClick(3)}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Product;
