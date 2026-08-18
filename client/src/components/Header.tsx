import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Luxury Minimalism
 * Sticky navigation with logo and menu
 * Smooth scroll effect with background transition
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Sobre', id: 'about' },
    { label: 'Processo', id: 'process' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Diferenciais', id: 'differentials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo-homes.png`}
                alt="Homes Engenharia"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#1a1a1a] font-medium text-sm hover:text-[#E8471A] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8471A] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm"
            >
              Falar com um engenheiro
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#1a1a1a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a1a1a]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#1a1a1a] font-medium text-left hover:text-[#E8471A] transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full text-sm mt-2"
              >
                Falar com um engenheiro
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
