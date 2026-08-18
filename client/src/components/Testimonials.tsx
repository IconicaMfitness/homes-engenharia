/**
 * Testimonials Section - Luxury Minimalism
 * Relationship principles in card format
 * Avoids unverified customer claims while preserving the established presentation
 */

export default function Testimonials() {
  const principles = [
    {
      id: 1,
      title: 'Transparência',
      text: 'Informações claras para que cada decisão seja tomada com segurança durante a jornada da obra.',
    },
    {
      id: 2,
      title: 'Acompanhamento',
      text: 'Presença técnica e comunicação próxima em cada etapa que transforma projeto em construção.',
    },
    {
      id: 3,
      title: 'Responsabilidade',
      text: 'Engenharia aplicada aos detalhes que sustentam uma execução bem conduzida.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
            Relacionamento
          </p>
          <h2 className="text-[#1a1a1a] mb-4">
            Uma obra bem conduzida se constrói com confiança
          </h2>
          <p className="text-[#666666] text-lg">
            Uma relação próxima, informações claras e responsabilidade técnica do início ao fim.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="card-premium animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Principle */}
              <p className="text-[#666666] text-sm leading-relaxed mb-6 italic">
                {principle.text}
              </p>

              {/* Divider */}
              <div className="divider-line mb-6" />

              {/* Principle label */}
              <div className="flex items-center gap-3">
                <img
                  src={`${import.meta.env.BASE_URL}assets/foto-4.jpg`}
                  alt="Detalhe de obra Homes Engenharia"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-[#1a1a1a] text-sm">
                    {principle.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
