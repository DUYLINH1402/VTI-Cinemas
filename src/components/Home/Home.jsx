import { CarouselSlide } from "./Carousel";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./home.scss";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <CarouselSlide />
      </div>
      <Footer />
    </>
  );
};
