import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BodyMassSlider = () => {

    var settings = {
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      dotsClass: "slick-dots slick-thumb",

      };
      return (
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      );


};

export default BodyMassSlider;