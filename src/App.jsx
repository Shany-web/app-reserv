import About from "./components/organisms/about/About";
import DescriptionSection from "./components/organisms/descriptionSection/descriptionSection";
import Header from "./components/organisms/header/Header";
import HeaderLinks from "./components/organisms/headerLinks/HeaderLinks";
import { ServicesSection } from "./components/organisms/servicesSection/ServicesSection";
import Oferta from "./components/molecules/oferta/Oferta";
import Gallery from "./components/organisms/gallery/Gallery";
import { Button } from "./components/atoms/button/Button";
import { FaArrowRight } from "react-icons/fa6";
import TestimonySection from "./components/organisms/testimonySection/TestimonySection";
import Prefooter from "./components/molecules/prefooter/Prefooter";

function App() {
  return (
    <>
      <Header />
      <HeaderLinks />
      <DescriptionSection />
      <div className="desc-service">
        <p>OUR SERVICES</p>
        <h3>Nail Care, Perfected</h3>
      </div>
      <ServicesSection />
      <About />
      <Oferta />
      <div className="desc-service">
        <p>NAIL ART GALLERY</p>
        <h3>Inspiration for Your next Set</h3>
      </div>
      <Gallery />
      <div className="gallery-btn">
        <Button variant="secondary">
          VIEW ALL GALLERY
          <FaArrowRight />{" "}
        </Button>
      </div>
      <div className="client-testimony">
        <p>WHAT OUR CLIENTS SAY</p>
        <h3>Loved BY Clients Across The USA</h3>
      </div>
      <TestimonySection />
      <Prefooter />
    </>
  );
}
export default App;
