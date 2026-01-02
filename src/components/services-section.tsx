import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Link } from 'wouter';

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
    <section id="servicios" className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="fixed inset-0 -z-10 h-screen w-full">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/media/background_2.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0.3,
            filter: 'grayscale(50%) contrast(1.1) brightness(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones de audio profesionales diseñadas para llevar tu proyecto al siguiente nivel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
          {/* Tall Equipment card that visually joins two cards vertically */}
          <Link href="/equipment">
            <Card className="group h-full md:row-span-2 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white/90 z-0" />
              <CardHeader className="relative z-10 p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Icon name="gamepad" className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Equipamiento</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 p-6 pt-0 flex flex-col gap-4">
                <p className="text-sm text-gray-600">
                  Explora nuestro estudio: micrófonos, interfaces, monitores, instrumentos y más. 
                  Conoce el detalle de cada equipo que utilizamos para lograr resultados profesionales.
                </p>
                <span className="inline-flex items-center text-blue-600 font-medium">
                  Ver equipamiento
                  <i className="fas fa-chevron-right ml-2 text-xs" />
                </span>
              </CardContent>
              <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Icon name="headphones" className="w-40 h-40 text-blue-600" />
              </div>
            </Card>
          </Link>
          
          {services.map((service, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
              <CardHeader className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
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
