import { Icon } from "@/components/ui/icon";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#007FFF" }}>
                <Icon name="music" className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold">
                Estudios <span style={{ color: "#007FFF" }}>Igloo</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas en producción musical de vanguardia, audio 3D y tecnologías inmersivas. 
              Dirigido por el Dr. Diego Iván Orozco, ofrecemos servicios únicos que combinan 
              excelencia técnica con creatividad artística.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Icon name="instagram" className="text-xl" type="brands" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Síguenos en Facebook"
              >
                <Icon name="facebook" className="text-xl" type="brands" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Síguenos en YouTube"
              >
                <Icon name="youtube" className="text-xl" type="brands" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Síguenos en LinkedIn"
              >
                <Icon name="linkedin" className="text-xl" type="brands" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicios" className="hover:text-white transition-colors">Grabación Profesional</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Producción Musical</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Audio 3D</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Audio AR/XR</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Clases de Atmósfera</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Consultoría Técnica</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="map-marker-alt" className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">Av. Tecnológico 123, Ciudad de México</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="phone" className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">+52 55 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="envelope" className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">info@estudiosigloo.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {currentYear} Estudios Igloo. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Icon name="instagram" className="w-5 h-5" type="brands" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
