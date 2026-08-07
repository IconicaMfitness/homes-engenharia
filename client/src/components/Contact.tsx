import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Luxury Minimalism
 * Contact form and information
 * Emphasis on call-to-action
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-[#f5f5f5]">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-[#E8471A] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
            Contato
          </p>
          <h2 className="text-[#1a1a1a] mb-4">
            Vamos Transformar Seu Projeto em Realidade
          </h2>
          <p className="text-[#666666] text-lg">
            Entre em contato conosco para uma consulta personalizada e sem compromisso.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-[#1a1a1a] font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#E8471A]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#E8471A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] mb-1">
                      Telefone
                    </p>
                    <a
                      href="tel:+5511999999999"
                      className="text-[#666666] hover:text-[#E8471A] transition-colors"
                    >
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#E8471A]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#E8471A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contato@homesengenharia.com.br"
                      className="text-[#666666] hover:text-[#E8471A] transition-colors"
                    >
                      contato@homesengenharia.com.br
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#E8471A]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#E8471A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] mb-1">
                      Endereço
                    </p>
                    <p className="text-[#666666]">
                      Av. Paulista, 1000<br />
                      São Paulo, SP 01311-100<br />
                      Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-8 border-t border-[#e0e0e0]">
              <h4 className="font-semibold text-[#1a1a1a] mb-4">
                Horário de Funcionamento
              </h4>
              <div className="space-y-2 text-[#666666] text-sm">
                <p>Segunda a Sexta: 9h - 18h</p>
                <p>Sábado: 10h - 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="card-premium space-y-6">
              {/* Name */}
              <div>
                <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#E8471A] focus:ring-1 focus:ring-homes-orange transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#E8471A] focus:ring-1 focus:ring-homes-orange transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#E8471A] focus:ring-1 focus:ring-homes-orange transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#E8471A] focus:ring-1 focus:ring-homes-orange transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Privacy Note */}
              <p className="text-[#666666] text-xs text-center">
                Seus dados estão seguros conosco. Nunca compartilhamos informações.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
