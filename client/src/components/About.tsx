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
              src="/manus-storage/about_6b7adad3.jpg"
              alt="Equipe Homes Engenharia"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="order-1 md:order-2 space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase">
                Sobre Nós
              </p>
              <h2 className="text-[#1a1a1a]">
                Engenharia e Paixão por Detalhes
              </h2>
              <p className="text-[#666666] text-lg leading-relaxed">
                A Homes Engenharia nasceu da visão de criar residências que transcendem o comum. Com mais de 15 anos de experiência, combinamos excelência técnica com design contemporâneo para entregar projetos que se tornam patrimônios.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#E8471A] rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Confiabilidade</h4>
                  <p className="text-[#666666] text-sm">Cada compromisso é honrado com precisão e profissionalismo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#E8471A] rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Inovação</h4>
                  <p className="text-[#666666] text-sm">Tecnologia de ponta aplicada a cada etapa do projeto.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#E8471A] rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Qualidade</h4>
                  <p className="text-[#666666] text-sm">Padrões internacionais em materiais e execução.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="btn-secondary">
                Conheça Nossa História
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
