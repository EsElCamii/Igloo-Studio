import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import AudioDemosSection from "../components/audio-demos-section";
import PortfolioSection from "../components/portfolio-section";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <AudioDemosSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
