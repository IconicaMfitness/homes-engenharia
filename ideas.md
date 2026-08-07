# Homes Engenharia - Design Strategy

## Briefing Summary
Website institucional premium para construtora de residências de alto padrão (obras acima de 180m²). Objetivo: gerar leads qualificados transmitindo confiança, autoridade, sofisticação, organização e alto nível técnico.

**Identidade Visual Base:**
- Logo: Símbolo geométrico em laranja vibrante (#E8471A) com tipografia moderna
- Público-alvo: Investidores em construção de residências premium
- Estilo: Contemporâneo, minimalista, elegante, com muito espaço em branco

---

## Design Approach: Luxury Minimalism

### Design Movement
**Luxury Minimalism** — A abordagem que combina a elegância do minimalismo com a sofisticação do design de alto padrão. Inspiração em arquitetura contemporânea, design de interiores premium e websites de grandes escritórios de arquitetura.

### Core Principles
1. **Espaço como Protagonista**: Muito ar em branco, layouts assimétricos, respiração visual generosa
2. **Tipografia Hierárquica**: Contraste forte entre display (bold, impactante) e body (legível, elegante)
3. **Detalhes Estratégicos**: Laranja (#E8471A) usado com parcimônia, criando pontos de foco e hierarquia
4. **Sofisticação Técnica**: Animações suaves e refinadas, transições fluidas, micro-interações que não distraem

### Color Philosophy
- **Branco/Off-white** (fundo principal): Transmite limpeza, modernidade, espaço
- **Preto/Charcoal** (texto principal): Contraste máximo, legibilidade, sofisticação
- **Laranja #E8471A** (accent): Ponto focal, CTAs, elementos de destaque — usado estrategicamente para não sobrecarregar
- **Cinza neutro** (suporte): Separadores, backgrounds secundários, hierarquia visual

### Layout Paradigm
- **Assimétrico com Respiração**: Não grid centralizado; layouts que favorecem o movimento visual
- **Seções com Espaço Generoso**: Padding/margin amplos, criando sensação de luxo e conforto
- **Imagens como Âncoras**: Fotografias de obras ocupam espaço estratégico, não decorativo
- **Tipografia como Estrutura**: Hierarquia clara através de tamanhos, pesos e espaçamento

### Signature Elements
1. **Linhas Horizontais Sutis**: Separadores elegantes em cinza claro, criando ritmo visual
2. **Cartões com Sombra Soft**: Cards com sombra mínima (não plana, não pesada) para profundidade
3. **Animações de Entrada Suave**: Fade-in e slide-up com easing suave, sem exagero

### Interaction Philosophy
- Hover effects sutis: mudança de cor, elevação mínima, transição de 200-250ms
- CTAs em laranja com feedback visual claro
- Navegação fluida, sem surpresas
- Modais e overlays com backdrop blur sutil

### Animation Guidelines
- **Duração**: 200-300ms para transições padrão, 400-500ms para modais
- **Easing**: `cubic-bezier(0.23, 1, 0.32, 1)` para ease-out (entrada), `cubic-bezier(0.77, 0, 0.175, 1)` para ease-in-out (movimento)
- **Propriedades**: Apenas `transform` e `opacity` para performance
- **Stagger**: 50-80ms entre itens em listas
- **Respeitar**: `prefers-reduced-motion` para acessibilidade

### Typography System
- **Display Font**: Fonte moderna, bold, para títulos principais (h1, h2) — transmite autoridade
- **Body Font**: Fonte legível, peso regular/medium, para corpo de texto
- **Hierarchy**:
  - H1: 48-56px, bold, espaçamento generoso
  - H2: 32-40px, bold, cor laranja para destaque
  - H3: 24-28px, semibold
  - Body: 16px, regular, line-height 1.6
  - Small: 14px, regular, para labels e metadados

### Brand Essence
**Posicionamento**: Construtora de residências premium que une excelência técnica com design sofisticado, para investidores que entendem que qualidade não é negociável.

**Personalidade**: 
- Confiável
- Sofisticado
- Técnico (mas acessível)

### Brand Voice
- **Tom**: Profissional, confiante, mas não arrogante. Educador, não vendedor.
- **Exemplos de Microcopy**:
  - CTA: "Solicitar Orçamento Personalizado" (não "Get Started Today")
  - Seção de Processo: "Cada projeto é único. Conheça nossa metodologia." (não "Our Process")
  - Depoimentos: "Histórias de Confiança" (não "What Clients Say")

### Wordmark & Logo
- **Logo**: Símbolo geométrico em laranja (já fornecido) — usar em header com espaço generoso
- **Wordmark**: "HOMES ENGENHARIA" em tipografia moderna, sem serifa, weight semibold
- **Favicon**: Versão simplificada do símbolo em 32x32px

### Signature Brand Color
**Laranja #E8471A** — Cor que diferencia a marca, usada estrategicamente em:
- Botões de CTA
- Títulos de destaque (h2 em seções principais)
- Ícones de diferenciais
- Hover states
- Linhas de destaque

---

## Implementation Roadmap

### Seções Principais
1. **Header/Navegação**: Logo + menu sticky, branco com texto preto, transição suave ao scroll
2. **Hero**: Imagem/vídeo de fachada premium, overlay com gradiente sutil, CTA em laranja
3. **Institucional**: Sobre a empresa, missão, visão — texto + imagem
4. **Vídeo CEO**: Seção dedicada com vídeo embarcado, contexto de autoridade técnica
5. **Processo**: 5-6 etapas com ícones, layout timeline ou cards
6. **Diferenciais**: 3-4 pontos-chave com ícones em laranja
7. **Portfólio**: Filtros (em andamento/concluídas), cards elegantes, modal/página individual
8. **Galeria**: Grid responsivo de imagens, lightbox para visualização
9. **Vídeos**: Seção de vídeos das obras, thumbnails com play overlay
10. **Depoimentos**: Carousel ou cards com citações, foto + nome do cliente
11. **CTA Final**: Chamada para ação, formulário simples ou link para contato
12. **Footer**: Informações institucionais, links, redes sociais

### Estrutura de Assets
```
/home/ubuntu/webdev-static-assets/
├── images/
│   ├── hero/
│   ├── portfolio/
│   │   ├── ongoing/
│   │   └── completed/
│   ├── gallery/
│   └── testimonials/
├── videos/
│   ├── hero/
│   ├── ceo/
│   ├── portfolio/
│   └── gallery/
└── icons/
    ├── process/
    └── differentials/
```

---

## Placeholders Strategy
Como não temos acesso às imagens/vídeos reais, usar placeholders elegantes:
- **Imagens**: Backgrounds com gradientes suaves + ícone centralizado + texto descritivo
- **Vídeos**: Thumbnail com play icon + texto "Vídeo da Obra - [Descrição]"
- **Estrutura**: Pronta para receber assets reais sem alterações de código

---

## Next Steps
1. ✅ Criar estrutura HTML/CSS base com design tokens
2. ✅ Implementar header com navegação sticky
3. ✅ Desenvolver hero section
4. ✅ Construir seções de conteúdo (Institucional, Vídeo CEO, Processo, Diferenciais)
5. ✅ Implementar portfólio com filtros e modais
6. ✅ Adicionar galeria de imagens e vídeos
7. ✅ Criar seção de depoimentos
8. ✅ Finalizar footer e responsividade
9. ✅ Otimizar performance e SEO
10. ✅ Testar acessibilidade e cross-browser
