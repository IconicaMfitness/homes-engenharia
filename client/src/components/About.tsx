/**
 * About Section - Luxury Minimalism
 * Institutional presentation with image and text
 * Asymmetric layout emphasizing content
 */

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#f5f5f5]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <img
              src={`${import.meta.env.BASE_URL}assets/about.jpg`}
              alt="Equipe Homes Engenharia"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="order-1 md:order-2 space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase">
                Sobre a Homes
              </p>
              <h2 className="text-[#1a1a1a]">
                Seu projeto merece mais do que uma obra. Merece engenharia.
              </h2>
              <p className="text-[#666666] text-lg leading-relaxed">
                Há mais de 10 anos, a Homes Engenharia une arquitetura, engenharia, planejamento e execução para conduzir residências de alto padrão, especialmente projetos a partir de 180m², com clareza em cada decisão.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#E8471A] rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Planejamento</h4>
                  <p className="text-[#666666] text-sm">Cada etapa começa antes da execução.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#E8471A] rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Responsabilidade técnica</h4>
                  <p className="text-[#666666] text-sm">Engenharia presente nas decisões que fazem a diferença.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#E8471A] rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Acompanhamento</h4>
                  <p className="text-[#666666] text-sm">O cliente acompanha a evolução da obra.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="btn-secondary">
                Conheça nossa forma de trabalhar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
