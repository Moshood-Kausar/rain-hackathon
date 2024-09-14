import About from "./components/About";
import Category from "./components/Category";
import HowToRegister from "./components/HowToRegister";
import WhyParticipate from "./components/WhyParticipate";

export default function Home() {
  return (
    <>
      <div className="container">Welcome to RAIN HACKATHON WEBSITE</div>

      <About />

      <Category />

      <WhyParticipate />

      <HowToRegister />
    </>
  );
}
