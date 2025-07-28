import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

export default function ServicesSection() {
  const services = [
    {
      title: "Producción Musical",
      description: "Grabación, mezcla y masterización profesional para artistas y bandas. Calidad de estudio en cada proyecto.",
      icon: <Icon name="music" className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Diseño Sonoro",
      description: "Creación de atmósferas y efectos de sonido únicos para proyectos audiovisuales y multimedia.",
      icon: <Icon name="headphones" className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Audio 3D & Espacial",
      description: "Tecnologías de audio inmersivo para realidad virtual y experiencias interactivas.",
      icon: <Icon name="wave-square" className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Locución & Doblaje",
      description: "Servicios profesionales de locución para publicidad, documentales y contenido multimedia.",
      icon: <Icon name="microphone" className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Postproducción de Audio",
      description: "Edición y mejora de audio para cine, televisión y proyectos digitales.",
      icon: <Icon name="desktop" className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Audio para Videojuegos",
      description: "Diseño de sonido interactivo y bandas sonoras inmersivas para videojuegos.",
      icon: <Icon name="video" className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones de audio profesionales diseñadas para llevar tu proyecto al siguiente nivel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">¿Necesitas algo más personalizado?</p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Hablemos sobre tu proyecto
          </button>
        </div>
      </div>
    </section>
  );
}
