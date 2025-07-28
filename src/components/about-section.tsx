import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export default function AboutSection() {
  const stats = [
    { value: "15+", label: "Años de experiencia" },
    { value: "200+", label: "Proyectos completados" },
    { value: "50+", label: "Clientes satisfechos" },
    { value: "10+", label: "Premios ganados" },
  ];

  const features = [
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

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Dr. Diego Iván Orozco en el estudio"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Dr. Diego Iván Orozco</h3>
                  <p className="text-blue-200">Fundador y Director Creativo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-12">
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

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
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
