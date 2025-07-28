 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { useState, useRef, useEffect } from 'react';

export default function AudioDemosSection() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const audioRef3D = useRef<HTMLAudioElement>(null);
  const audioRefBinaural = useRef<HTMLAudioElement>(null);

  // Placeholder audio URLs - replace with your actual audio files
  const audioFiles = {
    threeD: '/audio/3d-audio-demo.mp3',
    binaural: '/audio/binaural-demo.mp3'
  };

  const togglePlay = (demoType: '3d' | 'binaural') => {
    const audioRef = demoType === '3d' ? audioRef3D : audioRefBinaural;
    const otherAudioRef = demoType === '3d' ? audioRefBinaural : audioRef3D;
    
    // Pause the other audio if playing
    if (otherAudioRef.current && !otherAudioRef.current.paused) {
      otherAudioRef.current.pause();
      otherAudioRef.current.currentTime = 0;
    }

    if (activeDemo === demoType) {
      audioRef.current?.pause();
      audioRef.current && (audioRef.current.currentTime = 0);
      setActiveDemo(null);
    } else {
      audioRef.current?.play()
        .then(() => setActiveDemo(demoType))
        .catch(error => console.error('Error playing audio:', error));
    }
  };

  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      audioRef3D.current?.pause();
      audioRefBinaural.current?.pause();
    };
  }, []);

  return (
    <section id="audio-demos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experiencias de Audio Inmersivo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre la diferencia con nuestras demostraciones de audio espacial
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 3D Audio Demo Card */}
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-blue-100">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon name="music" className="w-6 h-6 text-blue-600" type="solid" />
                </div>
              </div>
              <CardTitle className="text-2xl font-semibold text-center text-gray-900">
                Audio 3D
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Experimenta el sonido que te rodea con nuestro sistema de audio 3D de última generación.
                Ideal para realidad virtual y experiencias inmersivas.
              </p>
              <div 
                className="relative pt-[56.25%] rounded-lg overflow-hidden mb-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => togglePlay('3d')}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        activeDemo === '3d' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                      }`}>
                        <div className="flex items-center justify-center w-8 h-8">
                      {activeDemo === '3d' ? (
                        <Icon name="times-circle" className="w-8 h-8" type="solid" />
                      ) : (
                        <Icon name="play" className="w-8 h-8" type="solid" />
                      )}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      {activeDemo === '3d' ? 'Reproduciendo...' : 'Presiona para reproducir demo'}
                    </p>
                  </div>
                </div>
              </div>
              <audio 
                ref={audioRef3D}
                src={audioFiles.threeD}
                onEnded={() => setActiveDemo(null)}
                className="hidden"
                preload="metadata"
              />
            </CardContent>
          </Card>

          {/* Binaural Audio Demo Card */}
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-blue-100">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon name="headphones" className="w-6 h-6 text-blue-600" type="solid" />
                </div>
              </div>
              <CardTitle className="text-2xl font-semibold text-center text-gray-900">
                Audio Binaural
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Sumérgete en un sonido tridimensional con nuestros audios binaurales. 
                Ideal para meditación, ASMR y experiencias auditivas profundas.
              </p>
              <div 
                className="relative pt-[56.25%] rounded-lg overflow-hidden mb-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => togglePlay('binaural')}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        activeDemo === 'binaural' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                      }`}>
                        <div className="flex items-center justify-center w-8 h-8">
                      {activeDemo === 'binaural' ? (
                        <Icon name="times-circle" className="w-8 h-8" type="solid" />
                      ) : (
                        <Icon name="play" className="w-8 h-8" type="solid" />
                      )}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      {activeDemo === 'binaural' ? 'Reproduciendo...' : 'Presiona para reproducir demo'}
                    </p>
                  </div>
                </div>
              </div>
              <audio 
                ref={audioRefBinaural}
                src={audioFiles.binaural}
                onEnded={() => setActiveDemo(null)}
                className="hidden"
                preload="metadata"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">¿Listo para crear algo increíble juntos?</p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Contáctanos para más información
          </button>
        </div>
      </div>
    </section>
  );
}
