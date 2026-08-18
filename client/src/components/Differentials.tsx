import { Award, Zap, Users, Shield } from 'lucide-react';

/**
 * Differentials Section - Luxury Minimalism
 * Key differentials with icons and descriptions
 * Emphasizes competitive advantages
 */

export default function Differentials() {
  const differentials = [
    {
      icon: Award,
      title: 'Planejamento',
      description: 'Cada etapa começa antes da execução.',
    },
    {
      icon: Zap,
      title: 'Responsabilidade técnica',
      description: 'Engenharia presente nas decisões que fazem a diferença.',
    },
    {
      icon: Users,
      title: 'Transparência',
      description: 'Clareza durante todo o processo para decisões mais seguras.',
    },
    {
      icon: Shield,
      title: 'Acompanhamento',
      description: 'O cliente acompanha a evolução da obra de perto.',
    },
  ];

  return (
    <section id="differentials" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
            Diferenciais
          </p>
          <h2 className="text-[#1a1a1a] mb-4">
            O que orienta a nossa forma de construir
          </h2>
          <p className="text-[#666666] text-lg">
            Planejamento, engenharia presente e relacionamento próximo durante toda a jornada.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card-premium group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 bg-[#f5f5f5] group-hover:bg-[#E8471A]/10 rounded-lg transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#E8471A]" />
                </div>

                {/* Content */}
                <h3 className="text-[#1a1a1a] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-[#666666] mb-6">
            Vamos conversar sobre o seu projeto?
          </p>
          <button className="btn-primary">
            Falar com um engenheiro
          </button>
        </div>
      </div>
    </section>
  );
}
