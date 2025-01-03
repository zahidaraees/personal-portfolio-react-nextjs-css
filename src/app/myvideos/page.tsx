import HeroSection2 from "../components/HeroSection2";
import YoutubeVideo from "../components/MyVideos";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection2 title="YouTube" breadcrumb="Home > My Videos" />

      {/* Video Grid */}
      <YoutubeVideo />
    </div>
  );
}
