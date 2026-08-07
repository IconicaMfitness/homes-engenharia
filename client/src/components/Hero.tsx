import { ArrowRight } from 'lucide-react';

/**
 * Hero Section - Luxury Minimalism
 * Large hero with background placeholder, headline, and CTA
 * Asymmetric layout with generous whitespace
 */

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase">
                Excelência em Construção
              </p>
              <h1 className="text-[#1a1a1a] leading-tight">
                Residências Premium que Refletem Seu Estilo
              </h1>
              <p className="text-[#666666] text-lg md:text-xl leading-relaxed max-w-lg">
                Transformamos visões em realidade. Cada projeto é uma obra-prima de engenharia, design e dedicação.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Ver Portfólio
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-[#e0e0e0]">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#E8471A]">15+</p>
                  <p className="text-sm text-[#666666] mt-1">Anos de Experiência</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#E8471A]">50+</p>
                  <p className="text-sm text-[#666666] mt-1">Obras Entregues</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#E8471A]">100%</p>
                  <p className="text-sm text-[#666666] mt-1">Satisfação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="animate-fade-in">
            <img
              src="/manus-storage/hero_cda9e3f3.jpg"
              alt="Fachada Homes Engenharia"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
