import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@/components/ui/icon';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Icon name="envelope" className="w-6 h-6 text-blue-600" />,
      title: "Correo Electrónico",
      value: "info@estudiosigloo.com",
      link: "mailto:info@estudiosigloo.com"
    },
    {
      icon: <Icon name="phone" className="w-6 h-6 text-blue-600" />,
      title: "Teléfono",
      value: "+52 55 1234 5678",
      link: "tel:+525512345678"
    },
    {
      icon: <Icon name="map-marker-alt" className="w-6 h-6 text-blue-600" />,
      title: "Ubicación",
      value: "Av. Tecnológico 123, Col. Nápoles, CDMX",
      link: "https://goo.gl/maps/example"
    },
    {
      icon: <Icon name="clock" className="w-6 h-6 text-blue-600" />,
      title: "Horario",
      value: "Lun - Vie: 10:00 - 19:00",
      link: "#"
    }
  ];

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(/media/diego.jpg)',
            filter: 'grayscale(100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envíanos un mensaje</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Cuéntanos más sobre tu proyecto..."
                  className="w-full"
                  required
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="paper-plane" className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
              <p className="text-gray-600 mb-8">
                Estamos aquí para responder cualquier pregunta que puedas tener. Contáctanos y te responderemos 
                lo antes posible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start space-x-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-gray-900 mb-4">Síguenos en redes sociales</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Instagram', icon: 'instagram', url: '#' },
                  { name: 'Facebook', icon: 'facebook', url: '#' },
                  { name: 'YouTube', icon: 'youtube', url: '#' },
                  { name: 'Spotify', icon: 'music', url: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    {/* Replace with actual icon component */}
                    <span className="text-lg">{social.icon === 'music' ? '🎵' : social.icon[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
