import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useRef } from 'react';

// Mezcla de videos e imágenes con tamaños variados
const galleryItems = [
  { type: 'video', url: '/vd2.mp4', alt: 'Video 2', size: 'xlarge' },
  { type: 'image', url: '/ftheader.jpeg', alt: 'FT Header', size: 'large' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.01.56 PM.jpeg', alt: 'Trabajo 1', size: 'small' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.02.12 PM.jpeg', alt: 'Trabajo 2', size: 'small' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.06.39 PM.jpeg', alt: 'Trabajo 9', size: 'small' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.07.12 PM.jpeg', alt: 'Trabajo 10', size: 'small' },
  { type: 'video', url: '/vd1.mp4', alt: 'Video 1', size: 'xlarge' },
  { type: 'image', url: '/image.png', alt: 'Image', size: 'small' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.04.07 PM.jpeg', alt: 'Trabajo 5', size: 'small' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.03.20 PM.jpeg', alt: 'Trabajo destacado', size: 'certificate' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.02.59 PM.jpeg', alt: 'Certificado 1', size: 'certificate' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.04.34 PM.jpeg', alt: 'Trabajo 6', size: 'small' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.06.05 PM.jpeg', alt: 'Trabajo 8', size: 'small' },
  { type: 'image', url: '/WhatsApp Image 2026-03-01 at 1.05.21 PM.jpeg', alt: 'Certificado 2', size: 'certificate' },
  { type: 'video', url: '/vd3.mp4', alt: 'Video 3', size: 'xlarge' }
];

const VideoItem = ({ url, alt }: { url: string; alt: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silenciar errores de autoplay
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={url}
      className="w-full h-full object-cover"
      loop
      muted
      playsInline
      autoPlay
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export function Gallery() {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'xlarge':
        return 'col-span-2 row-span-2 md:col-span-2 md:row-span-2';
      case 'large':
        return 'col-span-2 row-span-1 md:col-span-2 md:row-span-1';
      case 'certificate':
        return 'col-span-2 row-span-2 md:col-span-2 md:row-span-3';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getObjectFit = (size: string) => {
    return size === 'certificate' ? 'object-contain' : 'object-cover';
  };

  return (
    <section id="galería" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
            Galería
          </div>
          <h2 className="text-4xl md:text-5xl tracking-wide text-black">
            HAVERST STUDIO
          </h2>
        </motion.div>

        {/* Grid tipo masonry con elementos mezclados */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-lg shadow-md group ${getSizeClasses(item.size)} ${
                item.size === 'certificate' ? 'bg-white p-2' : ''
              }`}
            >
              {item.type === 'video' ? (
                <>
                  <VideoItem url={item.url} alt={item.alt} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none"></div>
                </>
              ) : (
                <>
                  <ImageWithFallback
                    src={item.url}
                    alt={item.alt}
                    className={`w-full h-full ${getObjectFit(item.size)}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
