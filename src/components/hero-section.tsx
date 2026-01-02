import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section
      id="inicio"
      aria-labelledby="main-heading"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Background Image - Horizontally flipped, positioned more to the left */}
      <div 
        className="
          absolute top-0 right-10 
          h-full w-[60%] 
          bg-cover bg-center bg-no-repeat 
          hidden lg:block 
          opacity-70
          [transform:scaleX(-1)]
        " 
        style={{ 
          backgroundImage: "url('/media/upscalemedia-transformed.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Mobile Background Image - Subtle */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage: "url('/media/upscalemedia-transformed.jpeg')",
          transform: "scaleX(-1)",
          opacity: "0.1",
        }}
      />
      {/* Content Container - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
          {/* Left Side - Content - More compact */}
          <article className="text-gray-900 space-y-6 lg:max-w-lg">
            <header>
              <h1 id="main-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-black">
                <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">Estudios <span style={{ color: "#007FFF" }}>Igloo</span></span>
                </span>
              </h1>
              {/* Split services into two lines for better fit */}
              <div className="text-lg md:text-xl font-light mb-4 text-gray-700 leading-relaxed">
                <div>Producción Musical | Audio 3D</div>
                <div>Realidad Aumentada | XR</div>
              </div>
            </header>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed" itemProp="description">
              Dirigido por el <strong itemProp="founder" itemScope itemType="https://schema.org/Person">
                <span itemProp="honorificPrefix">Dr.</span> <span itemProp="givenName">Diego Iván</span> <span itemProp="familyName">Orozco</span>
              </strong>,<br />
              <span itemProp="founder" itemScope itemType="https://schema.org/Person">
                <span itemProp="jobTitle">Especialista en audio inmersivo</span>
              </span>
              <br />
              <span itemProp="about" itemScope itemType="https://schema.org/Thing">
                <span itemProp="name">Producción musical de vanguardia</span>
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("servicios")}
                className="transform hover:scale-105 transition-all font-semibold px-6 py-3 text-base text-white hover:opacity-90"
                style={{ backgroundColor: "#007FFF" }}
                aria-label="Explorar nuestros servicios de audio profesional"
              >
                Explorar Servicios
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacto")}
                className="border-2 transform hover:scale-105 transition-all font-semibold px-6 py-3 text-base bg-white hover:text-white"
                style={{ 
                  borderColor: "#007FFF", 
                  color: "#007FFF"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#007FFF";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#007FFF";
                }}
                aria-label="Reservar una sesión en nuestro estudio"
              >
                Reservar Sesión
              </Button>
            </div>
          </article>
          {/* Right Side - Space for microphone image (more visible now) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ color: "#007FFF" }}>
        <Icon name="chevron-down" className="h-5 w-5" />
      </div>
    </section>
  );
}
