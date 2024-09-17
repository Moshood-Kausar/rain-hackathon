import About from "./components/About";
import Category from "./components/Category";
import Hero from "./components/Hero";
import HowToRegister from "./components/HowToRegister";
import Navbar from "./components/Navbar";
import Prizes from "./components/Prizes";
import WhyParticipate from "./components/WhyParticipate";
import TeamGuide from "./components/TeamGuide";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className="bg-hero">
        <div className="bg-[url('/hero-stars.png')]">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="bg-[url('/stars.png')]">
        <div className="container mx-auto">
          <About />
          <Category />
          <WhyParticipate />
          <Prizes />
          <TeamGuide />
          <HowToRegister />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
