import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const ProfileSwitcher = ({ isIvan, onSwitch }: { isIvan: boolean; onSwitch: () => void }) => {
  const handleSwitch = (toIvan: boolean) => {
    if ((toIvan && !isIvan) || (!toIvan && isIvan)) {
      onSwitch();
    }
  };

  return (
    <div className="mb-10 w-full max-w-md mx-auto lg:mx-0">
      <div className="relative bg-gray-100 p-1.5 rounded-full border border-gray-200 shadow-inner">
        <div className="relative flex h-12">
          <button
            onClick={() => handleSwitch(false)}
            className={`relative z-10 flex-1 flex items-center justify-center text-sm font-semibold rounded-full transition-all duration-300 ${
              !isIvan 
                ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="relative z-10">Igloo Studios</span>
          </button>
          <button
            onClick={() => handleSwitch(true)}
            className={`relative z-10 flex-1 flex items-center justify-center text-sm font-semibold rounded-full transition-all duration-300 ${
              isIvan 
                ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="relative z-10">Dr. Iván Orozco</span>
          </button>
          <div 
            className={`absolute top-1 bottom-1 left-1 right-1/2 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
              isIvan ? 'translate-x-full' : 'translate-x-0'
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const [showIvanProfile, setShowIvanProfile] = useState(false);

  const toggleProfile = useCallback(() => {
    setShowIvanProfile(prev => !prev);
  }, []);
  const iglooStats = [
    { value: "15+", label: "Años de experiencia" },
    { value: "200+", label: "Proyectos completados" },
    { value: "50+", label: "Clientes satisfechos" },
    { value: "10+", label: "Premios ganados" },
  ];

  const ivanStats = [
    { value: "PhD", label: "Doctor en Música" },
    { value: "20+", label: "Años de experiencia" },
    { value: "100+", label: "Producciones" },
    { value: "5", label: "Premios internacionales" },
  ];

  const iglooFeatures = [
    {
      icon: <Icon name="microphone" className="w-6 h-6 text-blue-600" />,
      title: "Grabación Profesional",
      description: "Estudios equipados con tecnología de punta para obtener el mejor sonido.",
    },
    {
      icon: <Icon name="headphones" className="w-6 h-6 text-blue-600" />,
      title: "Mezcla y Masterización",
      description: "Procesamiento de audio con equipos analógicos y digitales de alta gama.",
    },
    {
      icon: <Icon name="music" className="w-6 h-6 text-blue-600" />,
      title: "Composición Musical",
      description: "Creación de piezas musicales originales para diversos proyectos.",
    },
    {
      icon: <Icon name="award" className="w-6 h-6 text-blue-600" />,
      title: "Excelencia Garantizada",
      description: "Comprometidos con la más alta calidad en cada proyecto que realizamos.",
    },
  ];

  const ivanFeatures = [
    {
      icon: <Icon name="award" className="w-6 h-6 text-blue-600" />,
      title: "Educación Musical",
      description: "Formación académica en las mejores instituciones de música del mundo.",
    },
    {
      icon: <Icon name="music" className="w-6 h-6 text-blue-600" />,
      title: "Intérprete",
      description: "Conciertos en los escenarios más prestigiosos a nivel internacional.",
    },
    {
      icon: <Icon name="bookmark" className="w-6 h-6 text-blue-600" />,
      title: "Investigación",
      description: "Publicaciones y estudios sobre teoría y práctica musical contemporánea.",
    },
    {
      icon: <Icon name="user" className="w-6 h-6 text-blue-600" />,
      title: "Mentoría",
      description: "Formación de nuevas generaciones de músicos profesionales.",
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
              <img
                src="/media/diego.jpg"
                alt="Dr. Diego Iván Orozco - Fundador de Estudios Igloo"
                className="w-full h-auto object-cover rounded-lg"
                loading="eager"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Dr. Diego Iván Orozco</h3>
                  <p className="text-blue-200">Fundador y Director Creativo</p>
                </div>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-12">
            <ProfileSwitcher isIvan={showIvanProfile} onSwitch={toggleProfile} />
          
          {showIvanProfile ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre <span className="text-blue-600">Dr. Diego Iván Orozco</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                El Dr. Diego Iván Orozco es un músico, productor y educador con más de 15 años de experiencia 
                en la industria musical. Su pasión por el sonido y la producción lo ha llevado a trabajar en 
                numerosos proyectos musicales, desde grabaciones de estudio hasta producciones en vivo.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Con una formación académica sólida y una amplia experiencia en el campo, el Dr. Orozco combina 
                conocimientos técnicos avanzados con un enfoque creativo y personalizado para cada proyecto.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre <span className="text-blue-600">Estudios Igloo</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fundado por el Dr. Diego Iván Orozco, Estudios Igloo es un espacio dedicado a la creación y producción de 
                experiencias sonoras excepcionales. Con más de 15 años de experiencia en la industria, nuestro equipo combina 
                conocimiento técnico con creatividad artística para ofrecer resultados de la más alta calidad.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestro enfoque se centra en entender las necesidades únicas de cada proyecto, trabajando 
                estrechamente con nuestros clientes para materializar su visión de manera auténtica y memorable.
              </p>
            </>
          )}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {(showIvanProfile ? ivanStats : iglooStats).map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {(showIvanProfile ? ivanFeatures : iglooFeatures).map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1 p-2 bg-blue-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contáctame
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
