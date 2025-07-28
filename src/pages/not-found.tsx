import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Página No Encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            La página que buscas no existe o ha sido movida.
          </p>
        </div>
        <div className="space-y-4">
          <Link href="/">
            <Button 
              size="lg" 
              className="w-full text-white"
              style={{ backgroundColor: "#007FFF" }}
            >
              <Icon name="home" className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            <Icon name="arrow-left" className="w-5 h-5 mr-2" />
            Página Anterior
          </Button>
        </div>
      </div>
    </div>
  );
}
