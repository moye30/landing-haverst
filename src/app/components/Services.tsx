import { motion } from 'motion/react';
import { Scissors, Sparkles, Palette, Droplets, Zap } from 'lucide-react';

const serviceCategories = [
  {
    icon: Scissors,
    title: 'CORTE',
    items: [
      { name: 'Corte', price: '$350.00' }
    ]
  },
  {
    icon: Palette,
    title: 'TINTES',
    items: [
      { name: 'Gloss', price: '$300.00' },
      { name: 'Matiz', price: '$600.00 - $800.00' },
      { name: 'Retoque + Matiz', price: '$1400.00 - $1700.00' },
      { name: 'Tinte parejo', price: '$1500.00 - $2400.00' }
    ]
  },
  {
    icon: Sparkles,
    title: 'EFECTO DE COLOR',
    items: [
      { name: 'Sin decoloración', price: '$1900.00 - $2700.00' },
      { name: 'Efecto de color', price: '$2900.00 - $3700.00' },
      { name: 'Retoque (5 meses Max)', price: '$2800.00' },
      { name: 'Contour', price: '$900.00' }
    ]
  },
  {
    icon: Droplets,
    title: 'TRATAMIENTOS',
    items: [
      { name: 'Renaissance Circle', price: '$600.00' },
      { name: 'Love Curl', price: '$700.00' },
      { name: 'Love Smoothing', price: '$700.00' },
      { name: 'NouNou', price: '$700.00' },
      { name: 'Heart Of Glass', price: '$700.00' },
      { name: 'Oibutter + oil liquid', price: '$800.00 - $900.00' },
      { name: 'Keratin Wonder', price: '$1200.00 - $1500.00' }
    ]
  },
  {
    icon: Zap,
    title: 'KERATINAS',
    items: [
      { name: 'Keratina Molecular (Antifrizz + poliprotehina)', price: '$1600.00 - $2800.00' },
      { name: 'Curly Botox', price: '$800.00' },
      { name: 'Poliprotehina', price: '$1600.00 - $2800.00' },
      { name: 'Alaciado Ultra', price: '$2000.00 - $3000.00' }
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
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex justify-between items-start gap-4 pb-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700 text-sm leading-tight flex-1">
                      {item.name}
                    </span>
                    <span className="text-black font-medium text-sm whitespace-nowrap">
                      {item.price}
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
