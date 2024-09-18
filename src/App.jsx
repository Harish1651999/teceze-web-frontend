import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}

export default App;
