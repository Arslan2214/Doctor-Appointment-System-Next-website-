import Navbar from "@/components/Navbar";
import HeroSection from "./(Page Sections)/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <p className="font-semibold text-3xl mt-28 text-center">
        Hello from Home-Page
      </p>
    </>
  );
}
