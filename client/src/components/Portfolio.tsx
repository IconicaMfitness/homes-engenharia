import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * Portfolio Section - Luxury Minimalism
 * Filterable portfolio with cards for ongoing and completed projects
 * Premium gallery layout with modal support
 */

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const assetBase = import.meta.env.BASE_URL;

  const projects = [
    {
      id: 1,
      title: 'Obra em andamento',
      category: 'ongoing',
      area: 'Arquitetura',
      year: 'Planejamento',
      image: `${assetBase}assets/obra-4.jpg`,
    },
    {
      id: 2,
      title: 'Obra em andamento',
      category: 'ongoing',
      area: 'Execução',
      year: 'Acompanhamento',
      image: `${assetBase}assets/obra-5.jpg`,
    },
    {
      id: 3,
      title: 'Obra em andamento',
      category: 'ongoing',
      area: 'Detalhes',
      year: 'Execução',
      image: `${assetBase}assets/obra-6.jpg`,
    },
    {
      id: 4,
      title: 'Obra concluída',
      category: 'completed',
      area: 'Arquitetura',
      year: 'Acabamentos',
      image: `${assetBase}assets/foto-1.jpg`,
    },
    {
      id: 5,
      title: 'Obra concluída',
      category: 'completed',
      area: 'Detalhes',
      year: 'Acabamentos',
      image: `${assetBase}assets/foto-2.jpg`,
    },
    {
      id: 6,
      title: 'Obra concluída',
      category: 'completed',
      area: 'Execução',
      year: 'Entrega',
      image: `${assetBase}assets/foto-3.jpg`,
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
            O projeto ganha vida nos detalhes.
          </h2>
          <p className="text-[#666666] text-lg">
            Conheça algumas das obras que traduzem nossa forma de trabalhar.
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
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

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
                    Ver imagens
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
