import { motion } from 'motion/react';
import { Scissors, Sparkles, Palette, Droplets, Zap } from 'lucide-react';

const serviceCategories = [
  {
    icon: Scissors,
    title: 'CORTE',
    items: [
      { name: 'Corte' }
    ]
  },
  {
    icon: Palette,
    title: 'TINTES',
    items: [
      { name: 'Gloss' },
      { name: 'Matiz' },
      { name: 'Retoque + Matiz' },
      { name: 'Tinte parejo' }
    ]
  },
  {
    icon: Sparkles,
    title: 'EFECTO DE COLOR',
    items: [
      { name: 'Sin decoloración' },
      { name: 'Efecto de color' },
      { name: 'Retoque (5 meses Max)' },
      { name: 'Contour' }
    ]
  },
  {
    icon: Droplets,
    title: 'TRATAMIENTOS',
    items: [
      { name: 'Renaissance Circle' },
      { name: 'Love Curl' },
      { name: 'Love Smoothing' },
      { name: 'NouNou' },
      { name: 'Heart Of Glass' },
      { name: 'Oibutter + oil liquid' },
      { name: 'Keratin Wonder' }
    ]
  },
  {
    icon: Zap,
    title: 'KERATINAS',
    items: [
      { name: 'Keratina Molecular (Antifrizz + poliprotehina)' },
      { name: 'Curly Botox' },
      { name: 'Poliprotehina' },
      { name: 'Alaciado Ultra' }
    ]
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-4xl md:text-5xl tracking-wide text-black">
            EXCELENCIA EN CADA DETALLE
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <category.icon size={40} className="text-black" />
              </div>
              
              <h3 className="text-2xl text-center mb-8 tracking-wider font-light">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="pb-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700 text-sm leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
