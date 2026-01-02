import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Link } from 'wouter';

type Category = {
  slug: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

const categories: Category[] = [
  {
    slug: 'microfonos',
    title: 'Micrófonos',
    description: 'Condensador, dinámicos, de cinta y arreglos estéreo para diferentes aplicaciones.',
    icon: <Icon name="microphone" className="w-8 h-8 text-blue-600" />,
  },
  {
    slug: 'interfaces',
    title: 'Interfaces y Preamps',
    description: 'Captura transparente y preamplificación de alta calidad para cada toma.',
    icon: <Icon name="desktop" className="w-8 h-8 text-blue-600" />,
  },
  {
    slug: 'monitores',
    title: 'Monitores y Acústica',
    description: 'Monitores de campo cercano y tratamiento acústico para decisiones confiables.',
    icon: <Icon name="headphones" className="w-8 h-8 text-blue-600" />,
  },
  {
    slug: 'instrumentos',
    title: 'Instrumentos',
    description: 'Guitarras, teclados, sintetizadores y percusiones para producción musical.',
    icon: <Icon name="music" className="w-8 h-8 text-blue-600" />,
  },
];

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Equipamiento</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conoce el equipo que utilizamos en el estudio. Selecciona una categoría para ver el detalle y ejemplos.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/equipment/${cat.slug}`}>
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                    <CardHeader className="p-6">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                        {cat.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">{cat.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-sm text-gray-600">{cat.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export { categories };

