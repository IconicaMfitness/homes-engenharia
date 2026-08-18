import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

/**
 * Footer Component - Luxury Minimalism
 * Complete institutional footer with links and social media
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Processo', href: '#process' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="section-padding-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src={`${import.meta.env.BASE_URL}assets/logo-homes.png`}
                  alt="Homes Engenharia"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Construtora de residências premium com excelência técnica e design sofisticado.
              </p>
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-[#E8471A]/10 flex items-center justify-center hover:bg-[#E8471A] hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#E8471A] transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E8471A] transition-colors duration-300 text-sm">
                    Construção Residencial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E8471A] transition-colors duration-300 text-sm">
                    Projeto e Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E8471A] transition-colors duration-300 text-sm">
                    Consultoria Técnica
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E8471A] transition-colors duration-300 text-sm">
                    Reformas Premium
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-[#E8471A] flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+5511999999999"
                    className="text-gray-400 hover:text-[#E8471A] transition-colors duration-300 text-sm"
                  >
                    +55 (11) 99999-9999
                  </a>
                </li>
                <li className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-[#E8471A] flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:contato@homesengenharia.com.br"
                    className="text-gray-400 hover:text-[#E8471A] transition-colors duration-300 text-sm"
                  >
                    contato@homesengenharia.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-homes-orange/20 to-transparent my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Homes Engenharia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#E8471A] transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E8471A] transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#E8471A] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto"
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 300 ? 1 : 0,
          pointerEvents: typeof window !== 'undefined' && window.scrollY > 300 ? 'auto' : 'none',
        }}
        aria-label="Voltar ao topo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
