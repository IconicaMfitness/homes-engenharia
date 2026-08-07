import { Play } from 'lucide-react';

/**
 * CEO Video Section - Luxury Minimalism
 * Dedicated section for CEO/Technical Lead video
 * Emphasizes authority and personal connection
 */

export default function CEOVideo() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
              Conheca Quem Lidera
            </p>
            <h2 className="text-[#1a1a1a] mb-4">
              Mensagem do CEO e Engenheiro Responsável
            </h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Conheça a visão e o compromisso técnico de quem assina cada projeto e acompanha pessoalmente a execução de todas as nossas obras.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="animate-fade-in">
            <div className="placeholder-container aspect-video rounded-xl overflow-hidden shadow-lg hover-lift">
              <div className="placeholder-content w-full h-full bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0]">
                <Play className="placeholder-icon text-[#E8471A]" />
                <div className="placeholder-text max-w-xs">
                  <p className="font-semibold">Vídeo do CEO</p>
                  <p className="text-xs mt-1">Apresentação institucional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Context */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold text-[#1a1a1a] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E8471A] rounded-full" />
                Experiência Comprovada
              </h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Mais de 15 anos liderando projetos de alto padrão, com formação em Engenharia Civil e especialização em gestão de obras premium.
              </p>
            </div>
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold text-[#1a1a1a] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E8471A] rounded-full" />
                Acompanhamento Pessoal
              </h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Cada obra recebe atenção técnica pessoal, garantindo que os padrões de qualidade sejam mantidos do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
