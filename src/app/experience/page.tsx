//import Footer2 from "../components/Footer";
import Experience from "../components/experience";

import HeroSection2 from "../components/HeroSection2"; // Assuming you have this component

export default function Page() {
  return (
    <div>
      <HeroSection2 title="My Experience" breadcrumb="Home > Experience" />
      <Experience />
    </div>
  );
}
