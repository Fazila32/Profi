import "./App.css";

import Navbardark from "./components/Navbars/Navbardark";
import Navbarlight from "./components/Navbars/Navbarlight";
import Herosection1 from "./components/HeroSectin1/Herosection1";
import About from "./components/About/About";
import OurWork from "./components/Our work/OurWork";
import OurServices from "./components/Services/Our Services";
import Testimonial from "./components/testimonial/Testimonial";
import Social from "./components/Social";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhyUs from "./components/why Us/WhyUs";

import FormC from "./components/Contact/FormC";
function App() {
  return (
    <div>
      <div className="sticky-top">
        <Navbardark />
        <Navbarlight />
      </div>
      <Herosection1 />
      <About />
      <OurServices />
      <WhyUs />
      <OurWork />
      <Testimonial />
      <FormC />
      <Social />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
