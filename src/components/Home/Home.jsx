import { CarouselSlide } from "./Carousel/Carousel";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import "./home.scss";
import { HomeContent } from "./HomeContent/HomeContent";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <CarouselSlide />
        <HomeContent />
      </div>
      <Footer />
    </>
  );
};
