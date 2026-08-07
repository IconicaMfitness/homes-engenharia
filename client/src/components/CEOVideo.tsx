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

          {/* Video Player */}
          <div className="animate-fade-in">
            <video
              controls
              className="w-full h-auto rounded-xl overflow-hidden shadow-lg"
              poster="/manus-storage/hero_cda9e3f3.jpg"
            >
              <source src="/manus-storage/ceo_video_1271696d.mp4" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
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
