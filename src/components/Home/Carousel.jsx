import { Carousel } from "antd";
import "./carousel.scss";
import axios from "axios";
import { React, useState, useEffect } from "react";
import { CardCarousel } from "../Cards/Cards";
// import { APICarousel } from "./API";

export const CarouselSlide = () => {
  const [imgCarousel, setImgCarousel] = useState([]);
  // Call APICarousel
  useEffect(() => {
    axios
      .get("https://670c940a7e5a228ec1d0ba61.mockapi.io/cinemas/carousel")
      .then((listCarousel) => {
        console.log(listCarousel);
        setImgCarousel(listCarousel.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="carousel_img">
        {/* autoplay ---> Carousel Auto Play */}
        <Carousel autoplay>
          {/* Render data of carousel */}
          {imgCarousel.map((item) => {
            return <CardCarousel item={item} key={item.id} />;
          })}
        </Carousel>
      </div>
    </>
  );
};
