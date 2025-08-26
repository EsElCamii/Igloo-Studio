import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-4">Página no encontrada</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            aria-label="Volver a la página de inicio"
          >
            Volver al inicio
          </Button>
        </Link>
        <Link href="/#contacto">
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            aria-label="Contactar a Estudios Igloo"
          >
            Contáctanos
          </Button>
        </Link>
      </div>
      <div className="mt-12 text-sm text-gray-500">
        <p>¿Necesitas ayuda? <a href="mailto:contacto@estudiosigloo.com" className="text-blue-600 hover:underline">contacto@estudiosigloo.com</a></p>
      </div>
    </div>
  );
}
