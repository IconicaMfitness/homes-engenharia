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
                Engenharia de detalhes
              </p>
              <h1 className="text-[#1a1a1a] leading-tight">
                Grandes projetos começam com uma engenharia à altura.
              </h1>
              <p className="text-[#666666] text-lg md:text-xl leading-relaxed max-w-lg">
                Da arquitetura à execução, conduzimos cada etapa da sua obra com planejamento, responsabilidade técnica e atenção aos detalhes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Falar com um engenheiro
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Conhecer nossos projetos
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-[#e0e0e0]">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#E8471A]">+10</p>
                  <p className="text-sm text-[#666666] mt-1">anos de experiência</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#E8471A]">5</p>
                  <p className="text-sm text-[#666666] mt-1">anos de garantia</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#E8471A]">Arquitetura</p>
                  <p className="text-sm text-[#666666] mt-1">integrada à engenharia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="animate-fade-in">
            <img
              src={`${import.meta.env.BASE_URL}assets/hero.jpg`}
              alt="Fachada Homes Engenharia"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
