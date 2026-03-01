import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  const whatsappNumber = '4951039034';
  const whatsappLink = `https://wa.me/52${whatsappNumber}?text=Hola,%20me%20gustaría%20agendar%20una%20cita`;

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
            Contáctanos
          </div>
          <h2 className="text-4xl md:text-5xl tracking-wide text-black">
            AGENDA TU CITA
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-gray-50 p-4">
                <MapPin size={28} className="text-black" />
              </div>
              <div>
                <h3 className="uppercase tracking-wider mb-2 text-sm font-semibold">Dirección</h3>
                <p className="text-gray-600 text-sm">
                  Calle Sta. Elena 67<br />
                  Lomas de Santa Teresa<br />
                  47254 Villa Hidalgo, Jal.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-gray-50 p-4">
                <Phone size={28} className="text-black" />
              </div>
              <div>
                <h3 className="uppercase tracking-wider mb-2 text-sm font-semibold">Teléfono</h3>
                <p className="text-gray-600 text-lg font-medium">495 103 9034</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-gray-50 p-4">
                <Clock size={28} className="text-black" />
              </div>
              <div>
                <h3 className="uppercase tracking-wider mb-2 text-sm font-semibold">Horario</h3>
                <p className="text-gray-600 text-sm">
                  Lunes - Viernes: 9:00 - 20:00<br />
                  Sábado: 10:00 - 18:00<br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-black text-white px-12 py-4 uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Agendar Cita por WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
