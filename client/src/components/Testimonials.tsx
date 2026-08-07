import { Star } from 'lucide-react';

/**
 * Testimonials Section - Luxury Minimalism
 * Client testimonials in card format
 * Emphasizes trust and satisfaction
 */

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendes',
      role: 'Empresário',
      text: 'A Homes Engenharia transformou minha visão em uma residência extraordinária. O profissionalismo e atenção aos detalhes foram impressionantes do início ao fim.',
      rating: 5,
      image: 'testimonial-01',
    },
    {
      id: 2,
      name: 'Fernanda Silva',
      role: 'Médica',
      text: 'Entregaram meu projeto no prazo, dentro do orçamento e com qualidade excepcional. Recomendo para qualquer pessoa que busca excelência.',
      rating: 5,
      image: 'testimonial-02',
    },
    {
      id: 3,
      name: 'Roberto Costa',
      role: 'Empresário',
      text: 'A transparência e comunicação constante fizeram toda a diferença. Sinto-me seguro com a qualidade técnica e o acompanhamento pessoal do engenheiro.',
      rating: 5,
      image: 'testimonial-03',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="text-[#1a1a1a] mb-4">
            Histórias de Confiança e Satisfação
          </h2>
          <p className="text-[#666666] text-lg">
            Ouça de nossos clientes por que escolheram a Homes Engenharia para seus projetos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-premium animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-homes-orange text-[#E8471A]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#666666] text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="divider-line mb-6" />

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar Placeholder */}
                <img
                  src="/manus-storage/foto-4_f9f368c0.jpg"
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-[#1a1a1a] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#666666] text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-12 border-t border-[#e0e0e0]">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-3xl md:text-4xl font-bold text-[#E8471A] mb-2">
              50+
            </p>
            <p className="text-[#666666] text-sm">
              Clientes Satisfeitos
            </p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-3xl md:text-4xl font-bold text-[#E8471A] mb-2">
              4.9★
            </p>
            <p className="text-[#666666] text-sm">
              Avaliação Média
            </p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-3xl md:text-4xl font-bold text-[#E8471A] mb-2">
              100%
            </p>
            <p className="text-[#666666] text-sm">
              Recomendação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
