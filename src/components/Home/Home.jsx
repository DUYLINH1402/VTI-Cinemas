import { CarouselSlide } from "./Carousel";
import { Header } from "./Header";
import "./home.scss";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <CarouselSlide />
      </div>
    </>
  );
};
