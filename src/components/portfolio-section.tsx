import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Álbum "Resonancias"',
    description: 'Producción musical completa para artista independiente',
    category: 'Música',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/proyecto/1'
  },
  {
    id: '2',
    title: 'Bosque Sonoro VR',
    description: 'Experiencia de audio inmersivo para realidad virtual',
    category: 'Audio 3D',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1470&q=80',
    link: '/proyecto/2'
  },
  {
    id: '3',
    title: 'Documental "Voces del Desierto"',
    description: 'Diseño de sonido y postproducción',
    category: 'Cine',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#'
  },
  {
    id: '4',
    title: 'Videojuego "Echoes"',
    description: 'Banda sonora y efectos de sonido interactivos',
    category: 'Videojuegos',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#'
  },
  {
    id: '5',
    title: 'Instalación Sonora "Ecos"',
    description: 'Arte sonoro interactivo para museo',
    category: 'Arte',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#'
  },
  {
    id: '6',
    title: 'Podcast "Sonidos Ocultos"',
    description: 'Producción y diseño de sonido',
    category: 'Podcast',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#'
  }
];

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'música':
      return <Icon name="music" className="w-5 h-5" />;
    case 'audio 3d':
      return <Icon name="headphones" className="w-5 h-5" />;
    case 'videojuegos':
      return <Icon name="gamepad" className="w-5 h-5" />;
    default:
      return <Icon name="play" className="w-5 h-5" />;
  }
};

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Trabajo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora algunos de nuestros proyectos más recientes y descubre nuestra pasión por el sonido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={project.link}
              className="group relative block overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="flex items-center text-sm text-white mb-2">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
          >
            Ver más proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}
