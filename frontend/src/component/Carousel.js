import React from "react";
import { Carousel } from "react-responsive-carousel";

function CarouselScreen() {
  return (
    <div>
      <Carousel
        showArrows
        autoPlay
        showThumbs={false}
        infiniteLoop={true}
        interval={2500}
        dynamicHeight={true}
        showStatus={false}
        showIndicators={false}
        stopOnHover={false}
      >
        <div>
          <img
            className="home__image"
            src="/images/banner1.jpg"
            alt="banner1"
          />
        </div>
        <div>
          <img
            className="home__image"
            src="/images/banner2.jpg"
            alt="banner2"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselScreen;
