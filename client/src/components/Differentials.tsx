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
      title: 'Certificações Internacionais',
      description: 'Processos certificados conforme normas ISO e padrões internacionais de qualidade e segurança.',
    },
    {
      icon: Zap,
      title: 'Tecnologia de Ponta',
      description: 'Utilização de BIM, drones, e sistemas inteligentes para otimizar execução e resultados.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados com experiência em projetos de alto padrão.',
    },
    {
      icon: Shield,
      title: 'Garantia Técnica',
      description: 'Garantia estendida de 10 anos em estrutura e 5 anos em acabamentos, com suporte contínuo.',
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
            Por Que Escolher a Homes Engenharia
          </h2>
          <p className="text-[#666666] text-lg">
            Combinamos experiência, tecnologia e dedicação para entregar resultados excepcionais.
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
            Quer conhecer mais sobre como podemos transformar seu projeto em realidade?
          </p>
          <button className="btn-primary">
            Agendar Consulta
          </button>
        </div>
      </div>
    </section>
  );
}
