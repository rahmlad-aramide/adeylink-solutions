import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { BecomeAgent } from "./components/BecomeAgent";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Pricing } from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Features />
      <Services />
      <BecomeAgent />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
