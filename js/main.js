/**
 * Portfólio Tiago Barreto — Vibecode & Gestor de Tráfego Meta ADS e Google ADS
 * Estrutura Vanilla JavaScript Modular e Leve
 */

// ============================================================================
// BASE DE DADOS DOS PROJETOS DO PORTFÓLIO (Modelos Reais dos Clientes)
// ============================================================================
const PORTFOLIO_PROJECTS = {
  'detailing-it': {
    id: 'detailing-it',
    title: 'Car Detailing',
    category: 'Site Italiano de Estética Automóvel',
    badge: 'Car Detailing — Itália',
    shortDesc: 'Site Italiano de Estética Automóvel',
    fullDesc: 'Website profissional de estética automóvel e car detailing desenvolvido para o mercado italiano. Interface elegante com apresentação de serviços de polimento técnico, vitrificação cerâmica, proteção de pintura e agendamento direto.',
    imageWebp: 'images/project-1-detailing-it.webp',
    imagePng: 'images/project-1-detailing-it.png',
    client: 'Pro Detailing Studio',
    year: '2024',
    tags: ['Vibecode', 'Estética Automóvel', 'UI/UX Premium', 'SEO Local'],
    metrics: '+120% em pedidos de cotação | Carregamento ultrarrápido em mobile',
    projectUrl: 'https://magnaniup.github.io/auto-estetica/'
  },
  'detailing-es': {
    id: 'detailing-es',
    title: 'Detailing Car',
    category: 'Site Espanhol de Car Care',
    badge: 'Car Care & Detailing — Espanha',
    shortDesc: 'Site Espanhol de Car Care',
    fullDesc: 'Plataforma especializada em serviços de car care e detalhe automotivo de alta precisão para o mercado espanhol. Catálogo visual de tratamentos automotivos, polimento cerâmico e foco em conversão qualificada.',
    imageWebp: 'images/project-2-detailing-es.webp',
    imagePng: 'images/project-2-detailing-es.png',
    client: 'A.S. Top Clean Detailing',
    year: '2024',
    tags: ['Car Care', 'Alta Conversão', 'Design Moderno', 'Vibecode'],
    metrics: 'Taxa de conversão de 12.4% | Redução substancial no custo por lead',
    projectUrl: 'https://magnaniup.github.io/detailing-car/'
  },
  'construcao-pt': {
    id: 'construcao-pt',
    title: 'Construção & Obras',
    category: 'Site Português de Construção Civil',
    badge: 'Construção Civil — Portugal',
    shortDesc: 'Site Português de Obras e Remodelações',
    fullDesc: 'Website institucional e comercial desenvolvido para a Veldriva Construções, especialista em obras e remodelações na Grande Lisboa. Destaque para galeria de obras concluídas, estimativa de orçamento e integração com campanhas Google Ads.',
    imageWebp: 'images/project-3-construcao-pt.webp',
    imagePng: 'images/project-3-construcao-pt.png',
    client: 'Veldriva Construções',
    year: '2024',
    tags: ['Construção Civil', 'SEO Lisboa', 'Google Ads', 'Captação B2C/B2B'],
    metrics: '80+ pedidos de orçamento/mês | 1º lugar no ranking de pesquisas locais',
    projectUrl: 'https://magnaniup.github.io/construcao-remodelacao/'
  },
  'estetica-br': {
    id: 'estetica-br',
    title: 'Estética Profissional',
    category: 'Site Brasileiro de Cursos de Estética',
    badge: 'Saúde & Estética — Brasil',
    shortDesc: 'Site Brasileiro de Cursos e Procedimentos',
    fullDesc: 'Landing page premium de alta conversão para cursos e atendimentos na área da estética avançada. Design sofisticado e feminino, com depoimentos em vídeo, antes/depois interativo e fluxo otimizado de matrículas.',
    imageWebp: 'images/project-4-estetica-br.webp',
    imagePng: 'images/project-4-estetica-br.png',
    client: 'Amanda Sandole Estética',
    year: '2024',
    tags: ['Cursos de Estética', 'CRO & Vendas', 'Meta Ads', 'Design Sofisticado'],
    metrics: '+210% em novas alunas | Retorno sobre investimento de 4.8x em tráfego',
    projectUrl: 'https://site-estetica-woad.vercel.app/'
  },
  'eletrica-br': {
    id: 'eletrica-br',
    title: 'Ar-Condicionado & Elétrica',
    category: 'Site Brasileiro de Climatização',
    badge: 'Instalação & Manutenção — Brasil',
    shortDesc: 'Site Brasileiro de Serviços Técnicos',
    fullDesc: 'Website corporativo e de geração de leads para empresa de climatização, manutenção preventiva de ar-condicionado e instalações elétricas prediais. Canal direto com equipa técnica e solicitação instantânea de visitas.',
    imageWebp: 'images/project-5-eletrica-br.webp',
    imagePng: 'images/project-5-eletrica-br.png',
    client: 'KS Elétrica e Ar-Condicionado',
    year: '2024',
    tags: ['Climatização', 'Elétrica Predial', 'Google Ads', 'Atendimento Rápido'],
    metrics: '+95 chamadas qualificadas/mês | Redução de 40% no custo por lead',
    projectUrl: 'https://magnaniup.github.io/Modelo-eletrica/'
  },
  'psicologa-br': {
    id: 'psicologa-br',
    title: 'Psicologia Clínica',
    category: 'Site Brasileiro de Psicologia',
    badge: 'Saúde & Bem-Estar — Brasil',
    shortDesc: 'Site Brasileiro de Psicologia Clínica',
    fullDesc: 'Website acolhedor e seguro para consultório de psicologia clínica presencial e online. Estrutura desenhada para transmitir empatia, ética e credibilidade, facilitando o agendamento de consultas com privacidade garantida.',
    imageWebp: 'images/project-6-psicologa-br.webp',
    imagePng: 'images/project-6-psicologa-br.png',
    client: 'Dra. Mariana Lopes',
    year: '2024',
    tags: ['Psicologia Clínica', 'Consultas Online', 'Ética & Confiança', 'SEO Orgânico'],
    metrics: 'Consultório com agenda completa em 60 dias | +160% em procura orgânica',
    projectUrl: 'https://magnaniup.github.io/site-psicologa/'
  }
};

// ============================================================================
// DADOS DAS CAMPANHAS DE TRÁFEGO PAGO (Reprodução Fiel ao Mockup Original)
// Estrutura editável com as métricas exatas de campanhas realizadas no Brasil
// ============================================================================
const CAMPAIGN_METRICS = [
  {
    client: 'Hair Dhábila',
    platform: 'meta',
    conversion: '64 conversas',
    ctr: '2,18%',
    impressions: '8.438'
  },
  {
    client: 'RC Hair',
    platform: 'meta',
    conversion: '52 conversas',
    ctr: '2,51%',
    impressions: '6.240'
  },
  {
    client: 'Rosana Paiva Hair',
    platform: 'meta',
    conversion: '19 conversas',
    ctr: '3,00%',
    impressions: '2.180'
  },
  {
    client: 'Jair do Gás',
    platform: 'meta',
    conversion: '122 conversas',
    ctr: '1,23%',
    impressions: '26.450'
  },
  {
    client: 'Gás Londrina',
    platform: 'google',
    conversion: '55 chamadas',
    ctr: '7,85%',
    impressions: '4.567'
  },
  {
    client: 'Setebare',
    platform: 'meta',
    conversion: '22 conversas',
    ctr: '1,42%',
    impressions: '4.380'
  },
  {
    client: 'RC Studio',
    platform: 'meta',
    conversion: '691 cliques',
    ctr: '5,69%',
    impressions: '12.144'
  }
];

// ============================================================================
// INICIALIZAÇÃO E GESTÃO DO MODAL DE DETALHES DO PROJETO
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  let lastFocusedElement = null;

  /**
   * Abre a janela modal com os dados do projeto correspondente
   * @param {string} projectId 
   */
  function openProjectModal(projectId) {
    const project = PORTFOLIO_PROJECTS[projectId];
    if (!project || !modalBackdrop || !modalBody) return;

    lastFocusedElement = document.activeElement;

    // Constrói o HTML dinâmico com os dados estruturados do projeto
    modalBody.innerHTML = `
      <span class="modal-tag">${project.badge}</span>
      <h3 class="modal-title" id="modal-project-title">${project.title}</h3>
      <p class="modal-category">${project.category}</p>

      <picture>
        <source srcset="${project.imageWebp}" type="image/webp">
        <img src="${project.imagePng}" alt="${project.title} — ${project.category}" class="modal-preview-img" width="800" height="480">
      </picture>

      <p class="modal-desc">${project.fullDesc}</p>

      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <strong>Cliente</strong>
          <span>${project.client}</span>
        </div>
        <div class="modal-meta-item">
          <strong>Ano</strong>
          <span>${project.year}</span>
        </div>
        <div class="modal-meta-item">
          <strong>Resultados & Métricas</strong>
          <span>${project.metrics}</span>
        </div>
        <div class="modal-meta-item">
          <strong>Tipologia</strong>
          <span>${project.category}</span>
        </div>
      </div>

      <div class="modal-tags-list" aria-label="Tecnologias e especialidades aplicadas">
        ${project.tags.map(tag => `<span class="modal-tag-pill">${tag}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="${project.projectUrl}" class="btn-proj btn-proj-primary" target="_blank" rel="noopener noreferrer">
          <span>Aceder ao Website</span>
          <svg class="btn-proj-icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    `;

    // Ativa a visibilidade do modal e bloqueia o scroll da página
    modalBackdrop.classList.add('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Foca o botão de fechar para acessibilidade por teclado
    if (modalCloseBtn) {
      setTimeout(() => modalCloseBtn.focus(), 50);
    }
  }

  /**
   * Fecha a janela modal e devolve o foco
   */
  function closeProjectModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Delegar cliques para os botões "Ver Detalhes" e "Ver Projeto"
  document.addEventListener('click', (event) => {
    const detailsBtn = event.target.closest('[data-action="details"]');
    if (detailsBtn) {
      event.preventDefault();
      const projectId = detailsBtn.getAttribute('data-project-id');
      if (projectId) openProjectModal(projectId);
      return;
    }

    const viewBtn = event.target.closest('[data-action="view"]');
    if (viewBtn) {
      const projectId = viewBtn.getAttribute('data-project-id');
      const project = PORTFOLIO_PROJECTS[projectId];
      if (project && project.projectUrl === '#') {
        // Se ainda não houver URL real configurado, abre a janela de detalhes para apresentar o projeto
        event.preventDefault();
        openProjectModal(projectId);
      }
      return;
    }

    // Clique no botão de fechar
    if (event.target.closest('#modal-close-btn')) {
      closeProjectModal();
      return;
    }

    // Clique no fundo (backdrop) para fechar
    if (event.target === modalBackdrop) {
      closeProjectModal();
    }
  });

  // Fecho do modal através da tecla ESC
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-open')) {
      closeProjectModal();
    }
  });

  // Suavização do scroll para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ==========================================================================
  // SLIDER / CARROSSEL DA SECÇÃO PORTFÓLIO EM DISPOSITIVOS MÓVEIS
  // ==========================================================================
  const portfolioGrid = document.querySelector('.portfolio-grid');
  const sliderDots = document.querySelectorAll('.slider-dot');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (portfolioGrid && sliderDots.length > 0 && portfolioCards.length > 0) {
    let isTicking = false;

    // Atualiza o dot ativo de acordo com a posição do scroll horizontal
    const updateActiveDot = () => {
      const scrollLeft = portfolioGrid.scrollLeft;
      const gridWidth = portfolioGrid.clientWidth;
      let closestIndex = 0;
      let minDistance = Infinity;

      portfolioCards.forEach((card, index) => {
        const cardCenter = card.offsetLeft - portfolioGrid.offsetLeft + (card.offsetWidth / 2);
        const viewCenter = scrollLeft + (gridWidth / 2);
        const distance = Math.abs(cardCenter - viewCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      sliderDots.forEach((dot, index) => {
        if (index === closestIndex) {
          dot.classList.add('is-active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('is-active');
          dot.removeAttribute('aria-current');
        }
      });

      isTicking = false;
    };

    // Listener de scroll com throttle via requestAnimationFrame
    portfolioGrid.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(updateActiveDot);
        isTicking = true;
      }
    }, { passive: true });

    // Clique nos dots para navegar suavemente para o card correspondente
    sliderDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const targetIndex = parseInt(dot.getAttribute('data-slide-index'), 10);
        const targetCard = portfolioCards[targetIndex];
        if (targetCard) {
          targetCard.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });
        }
      });
    });
  }

  // ==========================================================================
  // ETAPA 06: TABELA DE RESULTADOS DE TRÁFEGO PAGO
  // Estrutura editável e dados das campanhas conforme solicitação oficial
  // ==========================================================================
  const tableBody = document.getElementById('traffic-table-body');

  // Logótipos oficiais das plataformas Meta Ads e Google Ads
  const PLATFORM_ICONS = {
    meta: `<span class="client-icon is-meta" title="Campanha Meta Ads" aria-label="Meta Ads">
      <svg class="meta-icon" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M16.08 11.87C14.59 9.42 12.83 7.58 10.72 7.58c-3.22 0-5.58 2.71-5.58 6.46 0 3.8 2.34 6.49 5.58 6.49 2.14 0 3.91-1.86 5.36-4.34l.07-.11.07.11c1.45 2.48 3.22 4.34 5.36 4.34 3.23 0 5.58-2.7 5.58-6.49 0-3.75-2.35-6.46-5.58-6.46-2.11 0-3.87 1.84-5.36 4.27l-.14.23zm-5.36 6.1c-1.86 0-3.26-1.69-3.26-3.92 0-2.19 1.39-3.89 3.26-3.89 1.53 0 2.89 1.58 4.01 3.89-1.14 2.33-2.49 3.92-4.01 3.92zm10.56 0c-1.52 0-2.88-1.59-4.01-3.92 1.12-2.31 2.48-3.89 4.01-3.89 1.86 0 3.26 1.69 3.26 3.89 0 2.23-1.39 3.92-3.26 3.92z" fill="#0081FB"/>
      </svg>
    </span>`,
    google: `<span class="client-icon is-google" title="Campanha Google Ads" aria-label="Google Ads">
      <svg class="google-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M4.2 17.85l6.77-11.67c.93-1.63 3.03-2.22 4.67-1.28 1.63.93 2.22 3.03 1.28 4.67l-6.77 11.67c-.93 1.63-3.03 2.22-4.67 1.28-1.63-.93-2.22-3.03-1.28-4.67z" fill="#FBBC04"/>
        <path d="M17.03 4.9l6.77 11.67c.93 1.63.35 3.73-1.28 4.67-1.63.93-3.73.35-4.67-1.28l-6.77-11.67c-.93-1.63-.35-3.73 1.28-4.67 1.63-.94 3.73-.35 4.67 1.28z" fill="#4285F4"/>
        <circle cx="7.58" cy="20.42" r="3.5" fill="#34A853"/>
      </svg>
    </span>`
  };

  /**
   * Renderiza dinamicamente as linhas da tabela de campanhas de tráfego pago
   * mantendo a estrutura exata de 4 colunas com símbolos oficiais de plataforma
   */
  function renderCampaignTable() {
    if (!tableBody || typeof CAMPAIGN_METRICS === 'undefined') return;

    tableBody.innerHTML = CAMPAIGN_METRICS.map(row => {
      const platformIcon = PLATFORM_ICONS[row.platform] || PLATFORM_ICONS.meta;
      const parts = row.conversion.split(' ');
      const val = parts[0] || row.conversion;
      const unit = parts.slice(1).join(' ');

      return `
        <tr>
          <td>
            <div class="client-cell">
              ${platformIcon}
              <span>${row.client}</span>
            </div>
          </td>
          <td class="td-center">
            <span class="metric-val">${val}</span> <span class="metric-unit">${unit}</span>
          </td>
          <td class="td-center metric-val">${row.ctr}</td>
          <td class="td-center metric-val">${row.impressions}</td>
        </tr>
      `;
    }).join('');
  }

  // Se o elemento existir e estiver vazio, popula com os dados de CAMPAIGN_METRICS
  if (tableBody && tableBody.children.length === 0) {
    renderCampaignTable();
  }

  console.log('Tiago Barreto Portfolio — Inicializado com sucesso.');
});
