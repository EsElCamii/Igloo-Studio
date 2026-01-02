import { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { categories as equipmentCategories } from "./equipment";

type EquipmentItem = {
  name: string;
  subtitle?: string;
  image?: string;
};

const itemsByCategory: Record<string, EquipmentItem[]> = {
  microfonos: [
    { name: 'Neumann U87', subtitle: 'Condensador de gran diafragma', image: 'https://images.unsplash.com/photo-1590608897129-79da98d159df?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Shure SM7B', subtitle: 'Dinámico para voz', image: 'https://images.unsplash.com/photo-1585499193095-7a5d3aaf441d?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Royer R-121', subtitle: 'Cinta para instrumentos', image: 'https://images.unsplash.com/photo-1513619331535-016e8b3b1b09?q=80&w=1200&auto=format&fit=crop' },
  ],
  interfaces: [
    { name: 'Universal Audio Apollo', subtitle: 'Interfaz / DSP', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Focusrite Clarett', subtitle: 'Interfaz de baja latencia', image: 'https://images.unsplash.com/photo-1581092918056-0f953f55d8b2?q=80&w=1200&auto=format&fit=crop' },
  ],
  monitores: [
    { name: 'Yamaha HS8', subtitle: 'Monitores de campo cercano', image: 'https://images.unsplash.com/photo-1615837210372-cbdb7a1da7a9?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Room Treatment', subtitle: 'Paneles y trampas de graves', image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1200&auto=format&fit=crop' },
  ],
  instrumentos: [
    { name: 'Fender Stratocaster', subtitle: 'Guitarra eléctrica', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Moog Sub 37', subtitle: 'Sintetizador analógico', image: 'https://images.unsplash.com/photo-1613742742343-2b78aa9a5cc3?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Nord Stage', subtitle: 'Teclado stage', image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=1200&auto=format&fit=crop' },
  ],
};

export default function EquipmentArticlePage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const category = equipmentCategories.find((c) => c.slug === slug);
  const items = (slug && itemsByCategory[slug]) || [];

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Categoría no encontrada</h1>
          <Link href="/equipment">
            <Button>Volver al equipamiento</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link href="/equipment">
              <Button variant="ghost" className="mb-4 p-0 h-auto font-normal text-gray-600 hover:text-gray-900">
                <Icon name="arrow-left" className="w-4 h-4 mr-2" />
                Volver al Equipamiento
              </Button>
            </Link>
          </nav>

          <header className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.title}</h1>
            <p className="text-gray-600 max-w-2xl">{category.description}</p>
          </header>

          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((it, idx) => (
                <Card key={idx} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {it.image && (
                    <img src={it.image} alt={it.name} className="w-full h-40 object-cover" loading="lazy" />
                  )}
                  <CardHeader className="p-6">
                    <CardTitle className="text-lg font-semibold text-gray-900">{it.name}</CardTitle>
                  </CardHeader>
                  {it.subtitle && (
                    <CardContent className="p-6 pt-0">
                      <p className="text-sm text-gray-600">{it.subtitle}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

