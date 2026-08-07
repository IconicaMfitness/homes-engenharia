import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * Portfolio Section - Luxury Minimalism
 * Filterable portfolio with cards for ongoing and completed projects
 * Premium gallery layout with modal support
 */

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Residência Contemporânea - Zona Sul',
      category: 'completed',
      area: '380m²',
      year: '2024',
      image: 'portfolio-01',
    },
    {
      id: 2,
      title: 'Casa Minimalista - Bairro Premium',
      category: 'completed',
      area: '250m²',
      year: '2023',
      image: 'portfolio-02',
    },
    {
      id: 3,
      title: 'Mansão com Piscina - Condomínio Fechado',
      category: 'ongoing',
      area: '520m²',
      year: '2024',
      image: 'portfolio-03',
    },
    {
      id: 4,
      title: 'Residência Duplex - Centro Expandido',
      category: 'completed',
      area: '420m²',
      year: '2023',
      image: 'portfolio-04',
    },
    {
      id: 5,
      title: 'Casa de Campo - Projeto Sustentável',
      category: 'ongoing',
      area: '300m²',
      year: '2024',
      image: 'portfolio-05',
    },
    {
      id: 6,
      title: 'Residência Moderna - Lote Especial',
      category: 'completed',
      area: '350m²',
      year: '2023',
      image: 'portfolio-06',
    },
  ];

  const filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Em Andamento', value: 'ongoing' },
    { label: 'Concluídas', value: 'completed' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-[#f5f5f5]">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
          <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
            Portfólio
          </p>
          <h2 className="text-[#1a1a1a] mb-4">
            Obras Executadas com Excelência
          </h2>
          <p className="text-[#666666] text-lg">
            Conheça os projetos que refletem nossa dedicação à qualidade e inovação.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === f.value
                  ? 'bg-[#E8471A] text-white shadow-md'
                  : 'bg-white text-[#1a1a1a] hover:bg-[#f5f5f5]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Card */}
              <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Image Placeholder */}
                <div className="placeholder-container aspect-square bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] group-hover:from-[#E8471A]/5 group-hover:to-[#E8471A]/10 transition-all duration-300">
                  <div className="placeholder-content w-full h-full">
                    <svg
                      className="placeholder-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="placeholder-text text-xs">
                      Imagem: {project.image}
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-white p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        project.category === 'ongoing'
                          ? 'bg-[#E8471A]/10 text-[#E8471A]'
                          : 'bg-[#f5f5f5] text-[#666666]'
                      }`}
                    >
                      {project.category === 'ongoing' ? 'Em Andamento' : 'Concluída'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#1a1a1a] font-semibold mb-3 group-hover:text-[#E8471A] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Details */}
                  <div className="flex items-center justify-between text-sm text-[#666666] mb-4 pb-4 border-b border-[#e0e0e0]">
                    <span>{project.area}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-[#E8471A] font-semibold hover:gap-3 transition-all duration-300">
                    Ver Detalhes
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-[#666666] mb-6">
            Quer conhecer mais detalhes sobre algum projeto?
          </p>
          <button className="btn-primary">
            Agendar Visita
          </button>
        </div>
      </div>
    </section>
  );
}
