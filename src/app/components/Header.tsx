import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-black px-4 py-2 md:px-6 md:py-3"
          >
            <span className="text-xl md:text-2xl lg:text-3xl tracking-[0.2em] text-white font-semibold whitespace-nowrap uppercase">
              Haverst studio
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {['inicio', 'servicios', 'galería', 'testimonios', 'contacto'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-wide whitespace-nowrap"
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => scrollToSection('contacto')}
              className="bg-white text-black px-6 py-2 text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Reservar Cita
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 flex flex-col gap-4 pb-4"
          >
            {['inicio', 'servicios', 'galería', 'testimonios', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-wide text-left py-2"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors mt-2"
            >
              Reservar Cita
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
