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
              CEO e engenheiro responsável
            </p>
            <h2 className="text-[#1a1a1a] mb-4">
              Quem assume sua obra precisa entender de engenharia.
            </h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Na Homes Engenharia, você não fala apenas com uma empresa. Você conta com profissionais que entendem o projeto, acompanham a execução e assumem a responsabilidade técnica por cada etapa.
            </p>
          </div>

          {/* Vídeo: a hospedagem externa pode ser conectada posteriormente sem mudar o layout. */}
          <div className="animate-fade-in">
            <img
              src={`${import.meta.env.BASE_URL}assets/hero.jpg`}
              alt="Apresentação institucional da Homes Engenharia"
              className="w-full h-auto rounded-xl overflow-hidden shadow-lg"
            />
          </div>

          {/* Context */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold text-[#1a1a1a] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E8471A] rounded-full" />
                Responsabilidade técnica
              </h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                O projeto é entendido com critério antes que a execução comece.
              </p>
            </div>
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold text-[#1a1a1a] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E8471A] rounded-full" />
                Acompanhamento próximo
              </h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Presença técnica nas etapas que pedem decisão, atenção e alinhamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
