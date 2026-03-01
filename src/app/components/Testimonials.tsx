import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    text: 'El mejor salón de belleza en el que he estado. El servicio es impecable y el ambiente es simplemente maravilloso.',
    rating: 5
  },
  {
    name: 'Laura Martínez',
    text: 'Profesionales increíbles que realmente entienden lo que quieres. Salgo siempre sintiéndome renovada y hermosa.',
    rating: 5
  },
  {
    name: 'Ana Rodríguez',
    text: 'La atención al detalle es excepcional. Cada visita es una experiencia de lujo que vale totalmente la pena.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4">
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl tracking-wide">
            LO QUE DICEN NUESTRAS CLIENTAS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="white" className="text-white" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-sm tracking-wider uppercase text-gray-400">
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
