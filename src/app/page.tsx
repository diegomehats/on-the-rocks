import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactForm />
      <Footer />
     
    </>
  );
};

export default Home;
