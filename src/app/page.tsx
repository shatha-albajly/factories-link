import OurTeam from "./components/AboutUs/OurTeam";
import OurValue from "./components/AboutUs/OurValue";
import WhoAreWe from "./components/AboutUs/WhoAreWe";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <OurValue />
      <OurTeam />
      <GetStarted />
      <Footer />
    </>
  );
}
