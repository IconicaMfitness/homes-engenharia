import { CheckCircle2 } from 'lucide-react';

/**
 * Process Section - Luxury Minimalism
 * Timeline-style process steps with icons
 * Clear, organized workflow presentation
 */

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Entendemos sua visão, necessidades e expectativas. Avaliamos o projeto e apresentamos uma proposta personalizada.',
      icon: '💬',
    },
    {
      number: '02',
      title: 'Projeto e Planejamento',
      description: 'Desenvolvimento detalhado do projeto arquitetônico e de engenharia, com cronograma e orçamento precisos.',
      icon: '📐',
    },
    {
      number: '03',
      title: 'Aprovações e Licenças',
      description: 'Gestão completa de aprovações junto aos órgãos competentes e obtenção de todas as licenças necessárias.',
      icon: '✅',
    },
    {
      number: '04',
      title: 'Execução da Obra',
      description: 'Construção com rigoroso controle de qualidade, utilizando materiais premium e equipes especializadas.',
      icon: '🏗️',
    },
    {
      number: '05',
      title: 'Acompanhamento Técnico',
      description: 'Supervisão constante do engenheiro responsável, garantindo conformidade com o projeto e padrões de qualidade.',
      icon: '👨‍💼',
    },
    {
      number: '06',
      title: 'Entrega e Garantia',
      description: 'Entrega final com documentação completa, garantia técnica e suporte pós-obra para sua tranquilidade.',
      icon: '🎉',
    },
  ];

  return (
    <section id="process" className="section-padding bg-[#f5f5f5]">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
            Metodologia
          </p>
          <h2 className="text-[#1a1a1a] mb-4">
            Processo de Trabalho Transparente
          </h2>
          <p className="text-[#666666] text-lg">
            Cada etapa é cuidadosamente planejada e executada para garantir excelência e transparência do início ao fim.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-premium group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number and Icon */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-bold text-[#e0e0e0] group-hover:text-[#E8471A] transition-colors duration-300">
                  {step.number}
                </span>
                <span className="text-3xl">{step.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-[#1a1a1a] font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Check Icon */}
              <div className="mt-4 pt-4 border-t border-[#e0e0e0]">
                <CheckCircle2 className="w-5 h-5 text-[#E8471A]" />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16 hidden lg:block">
          <div className="relative h-1 bg-gradient-to-r from-[#E8471A] via-homes-orange to-[#e0e0e0] rounded-full" />
          <p className="text-center text-[#666666] text-sm mt-4">
            Processo contínuo e integrado do início ao fim
          </p>
        </div>
      </div>
    </section>
  );
}
