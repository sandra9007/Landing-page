import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import KeyFeature from "../components/KeyFeature";
import Screenshot from "../components/Screenshot";
import Target from "../components/Target";
import Benefit from "../components/Benefit";
import Footer from "../components/Footer";
const MotoMall = () => {
  return (
    <div className="min-h-screen bg-[#020202]">
      <Navbar />
      <Hero />
      <KeyFeature />
      <Screenshot />
      <Target />
      <Benefit />
      <Footer />
    </div>
  );
};

export default MotoMall;
