import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
export default function ProjectDetail() {
  const { id } = useParams();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Re-run effect if the ID changes
  
  // Sample portfolio data - in real app, this would come from an API
  const portfolioItems = [
    {
      id: "1",
      category: "music",
      title: "Álbum \"Resonancias\"",
      subtitle: "Producción musical completa",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      videoUrl: null,
      date: "2024",
      client: "Artistas Independientes",
      description: "Un proyecto de producción musical completa que combina elementos tradicionales con técnicas de grabación modernas. Este álbum representa la perfecta fusión entre lo clásico y lo contemporáneo.",
      fullDescription: "El álbum 'Resonancias' fue un proyecto ambicioso que involucró a múltiples artistas independientes, cada uno aportando su estilo único al proyecto. Durante seis meses de trabajo intensivo en Estudios Igloo, logramos crear una obra que trasciende géneros musicales. La producción incluyó técnicas avanzadas de grabación multicanal, uso de instrumentos acústicos de alta gama, y un proceso de mezcla que aprovecha las tecnologías más recientes en audio espacial. El resultado es un álbum que no solo suena excepcional en sistemas tradicionales, sino que también ofrece una experiencia inmersiva cuando se reproduce en sistemas de audio 3D.",
      technologies: ["Pro Tools HDX", "Neumann U87", "SSL Console", "Spatial Audio Processing"],
      features: ["Grabación multicanal", "Mezcla inmersiva", "Mastering profesional", "Audio espacial"]
    },
    {
      id: "2",
      category: "3d",
      title: "Experiencia VR \"Bosque Sonoro\"",
      subtitle: "Audio espacial inmersivo",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      date: "2024",
      client: "Museo de Ciencias Naturales",
      description: "Una experiencia de realidad virtual inmersiva que transporta a los usuarios a través de diferentes ecosistemas sonoros, utilizando audio binaural y técnicas de espacialización avanzadas.",
      fullDescription: "Bosque Sonoro es una innovadora experiencia de realidad virtual desarrollada para el Museo de Ciencias Naturales. El proyecto utilizó técnicas de grabación de campo avanzadas, incluyendo arrays microfónicos ambisónicos de orden superior, para capturar el ambiente sonoro natural de diferentes ecosistemas. La experiencia permite a los usuarios caminar virtualmente a través de bosques tropicales, desiertos, y océanos, mientras experimentan el paisaje sonoro completo de cada ambiente. El desarrollo incluyó la creación de un motor de audio espacial personalizado que responde dinámicamente a los movimientos del usuario, proporcionando una sensación de presencia sin precedentes. La integración con sistemas VR de última generación permite una inmersión total que ha sido aclamada tanto por críticos como por visitantes del museo.",
      technologies: ["Ambisonic Recording", "Unity 3D", "Custom Spatial Audio Engine", "VR Integration"],
      features: ["Audio binaural", "Respuesta dinámica", "Grabación de campo", "Integración VR"]
    }
  ];
  const project = portfolioItems.find(item => item.id === id);
  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Proyecto no encontrado</h1>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }
  const videoId = project.videoUrl ? getYouTubeVideoId(project.videoUrl) : null;
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb and Back Button */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link href="/#portfolio">
              <Button variant="ghost" className="mb-4 p-0 h-auto font-normal text-gray-600 hover:text-gray-900">
                <Icon name="arrow-left" className="w-4 h-4 mr-2" />
                Volver al Portfolio
              </Button>
            </Link>
          </nav>
          {/* Project Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-gray-100">
                {project.category === 'music' ? 'Producción Musical' : 
                 project.category === '3d' ? 'Audio 3D/XR' : 'Trabajo Académico'}
              </Badge>
              <div className="flex items-center text-gray-500 text-sm">
                <i className="fas fa-calendar mr-2"></i>
                {project.date}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <i className="fas fa-tag mr-2"></i>
                {project.client}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {project.subtitle}
            </p>
          </header>
          {/* Media Section - Optimized */}
          <section className="mb-12">
            {videoId ? (
              <div className="aspect-video mb-8">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
                  title={`Video: ${project.title}`}
                  className="w-full h-full rounded-lg shadow-lg"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                src={project.image}
                alt={`Imagen del proyecto ${project.title}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
                loading="lazy"
              />
            )}
          </section>
          {/* Project Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Descripción del Proyecto</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.description}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </section>
          {/* Technologies Used */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tecnologías Utilizadas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-sm font-medium text-gray-900">{tech}</span>
                </div>
              ))}
            </div>
          </section>
          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Destacadas</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <i className="fas fa-play-circle mr-3"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          {/* Call to Action */}
          <section className="text-center py-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Interesado en un proyecto similar?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactanos para discutir cómo podemos ayudarte a crear experiencias sonoras únicas 
              que marquen la diferencia en tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto">
                <Button size="lg" className="text-white" style={{ backgroundColor: "#007FFF" }}>
                  Iniciar Proyecto
                </Button>
              </Link>
              <Link href="/#portfolio">
                <Button size="lg" variant="outline">
                  Ver Más Proyectos
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
