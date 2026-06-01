import { PracticeArea, Lawyer, FAQItem, Office } from './types';

export const HERO_BG_IMAGE = '/images/law_office_hero_1780114338234.png';

export const FOUNDERS: Lawyer[] = [
  {
    id: 'luis-genovez',
    name: 'Dr. Luis Henrique Genovez',
    role: 'Advogado Sócio-Fundador',
    specialties: ['Direito Civil', 'Direito Previdenciário', 'Direito Tributário'],
    image: '/images/dr_luis_genovez_1780114296056.png',
    oab: 'OAB/SC 39.442',
    linkedin: 'https://linkedin.com',
    email: 'luis@benettigenovez.com.br',
    bio: 'Mais de 10 anos de atuação especializada, focado na segurança de transações imobiliárias complexas, defesa em litígios civis e direito contratual corporativo.'
  },
  {
    id: 'gustavo-benetti',
    name: 'Dr. Gustavo Benetti',
    role: 'Advogado Sócio-Fundador',
    specialties: ['Direito Penal', 'Direito Trabalhista', 'Direito Empresarial'],
    image: '/images/dr_gustavo_benetti_1780114315603.png',
    oab: 'OAB/SC 41.229',
    linkedin: 'https://linkedin.com',
    email: 'gustavo@benettigenovez.com.br',
    bio: 'Graduado e pós-graduado com vasta experiência em Direito Penal Econômico, planejamento estratégico de contingenciamento trabalhista e proteção patrimonial empresarial.'
  }
];

export const TEAM_MEMBERS: Lawyer[] = [
  {
    id: 'vinicius-querino',
    name: 'Dr. Vinícius dos Passos Querino',
    role: 'Advogado Associado',
    specialties: ['Direito Civil', 'Direito Imobiliário'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=400',
    oab: 'OAB/SC 58.312',
    bio: 'Foco exclusivo em negociações imobiliárias, incorporações, contencioso cível geral de alta complexidades.'
  },
  {
    id: 'vinicius-machado',
    name: 'Dr. Vinícius Wilke Machado',
    role: 'Sócio-Pleno',
    specialties: ['Direito Penal', 'Direito Processual Penal'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
    oab: 'OAB/SC 49.330',
    bio: 'Atuação constante no Tribunal de Júri, sustentações orais, recursos perante os Tribunais Superiores e crimes contra a ordem tributária.'
  },
  {
    id: 'victor-marques',
    name: 'Dr. Victor Manoel Marques',
    role: 'Advogado Associado',
    specialties: ['Direito do Trabalho', 'Direito Civil'],
    image: 'https://images.unsplash.com/photo-1651620415048-c9377d5fdf76?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    oab: 'OAB/SC 61.121',
    bio: 'Especialista em contencioso trabalhista patronal de grande porte e lides contratuais cíveis estratégicas.'
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'ambiental',
    title: 'Direito Ambiental',
    description: 'Atuação em licenciamento, responsabilidade civil e administrativa, e elaboração de defesas ambientais complexas.',
    detailedDescription: 'Consultoria especializada para empresas na obtenção e manutenção de licenças, avaliação de riscos jurídicos em projetos industriais e imobiliários, assessoria em termos de ajustamento de conduta (TAC), além de defesa técnica estruturada em processos de infração instaurados por órgãos fiscalizadores em âmbito estadual e federal.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Atuação estratégica em conflitos cíveis, direito de propriedade, obrigações, contratos de alto nível e indenizações.',
    detailedDescription: 'Prevenção de litígios e representação em processos judiciais de alta complexidade. Elaboração e análise detalhada de estruturas contratuais nacionais e internacionais, disputas de posse e propriedade, responsabilidade civil médica e empresarial, e contencioso civil estratégico com foco na preservação de patrimônio e alcance de acordos vantajosos.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'penal',
    title: 'Direito Penal',
    description: 'Defesa técnica individualizada em inquéritos policiais, procedimentos investigativos criminais e ações penais complexas.',
    detailedDescription: 'Atuação cirúrgica na tutela da liberdade e da dignidade humana. Elaboração de planos de defesa estruturados desde a fase pré-processual, representação qualificada perante delegacias e tribunais estaduais/federados, atuação combativa em Direito Penal Econômico (crimes de "colarinho branco"), infrações fiscais e procedimentos tributários criminais.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    description: 'Assessoria completa em demandas de alta relevância, tanto no âmbito corporativo preventivo quanto no contencioso.',
    detailedDescription: 'Para empresas, realizamos auditorias internas focadas na redução contundente de passivos trabalhistas, modelagem de regimes de trabalho inteligentes e representação em procedimentos ministeriais (MPT). Para empregados de média e alta gerência, asseguramos a reparação ampla de direitos e verbas devidas decorrentes de relações de trabalho sofisticadas.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    description: 'Assessoria completa na obtenção, revisão e restauração de benefícios previdenciários e assistenciais perante o INSS.',
    detailedDescription: 'Análise aprofundada de tempo de contribuição com planejamento de aposentadorias especiais, revisões de coeficientes e cálculo de conversão de tempo insalubre ou perigoso. Atuação tanto no contencioso administrativo quanto judicial para restabelecer auxílios suspensos, bônus e pensões, garantindo a integralidade financeira do segurado.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export const OTHER_AREAS = [
  'Direito Imobiliário',
  'Direito Empresarial',
  'Direito Contratual',
  'Direito Sucessório',
  'Direito Tributário',
  'Direito Administrativo',
  'Direito de Família',
  'Direito Bancário'
];

export const STATS = [
  { value: '10+', label: 'Anos de atuação jurídica' },
  { value: '100+', label: 'Clientes empresariais atendidos' },
  { value: '250+', label: 'Demandas jurídicas conduzidas' },
  { value: '400+', label: 'Atuações processuais realizadas' }
];

export const DIFFERENTIATORS = [
  {
    id: 'etica',
    title: 'Atuação Ética e Responsável',
    description: 'Condução transparente de todas as causas, priorizando a segurança de cada etapa.'
  },
  {
    id: 'personalizado',
    title: 'Atendimento Personalizado',
    description: 'Acompanhamento e contato direto e facilitado com os sócios, garantindo agilidade e clareza.'
  },
  {
    id: 'plantao',
    title: 'Plantão Jurídico 24h',
    description: 'Suporte imediato para contingências de urgência que necessitem de atuação cirúrgica de nossa equipe.'
  },
  {
    id: 'localidade',
    title: 'Atuação Local e Nacional',
    description: 'Sede consolidada em Imbituba - SC e infraestrutura para atendimento digitalizado em todo o país.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o primeiro atendimento do escritório?',
    answer: 'O primeiro contato é focado em compreender em detalhes o problema ou a demanda. Pode ser realizado presencialmente em nosso escritório físico ou por videoconferência (WhatsApp, Zoom ou Google Meet) de forma totalmente segura e confidencial. Nesse momento, o advogado analisa os documentos e aponta os caminhos estratégicos cabíveis.'
  },
  {
    id: 'faq-2',
    question: 'O escritório atende apenas em Imbituba?',
    answer: 'Embora nossa matriz esteja sediada em Imbituba - SC, contamos com estrutura tecnológica de ponta que viabiliza o acompanhamento e a sustentação oral de processos em formato 100% digital em todos os Tribunais do Brasil. Também disponibilizamos canais de contato remotos fluidos para clientes de qualquer localidade.'
  },
  {
    id: 'faq-3',
    question: 'Como posso saber em que pé está o meu processo?',
    answer: 'Nossos clientes contam com feedback periódico ativo sobre andamentos processuais críticos. Ademais, você pode nos consultar a qualquer momento via nosso canal de WhatsApp de atendimento ou agendar uma chamada curta com o advogado responsável pela sua pasta para obter atualizações detalhadas.'
  },
  {
    id: 'faq-4',
    question: 'Quais documentos preciso apresentar para iniciar uma ação civil ou trabalhista?',
    answer: 'Para ações cíveis, em regra são necessários documentos pessoais (RG/CPF), comprovante de residência e todos os contratos, e-mails, conversas de WhatsApp ou comprovantes de pagamento relacionados ao fato. Para causas trabalhistas, adicione a CTPS (Física ou Digital), o termo de rescisão (se houver), extrato do FGTS e recibos.'
  }
];

export const OFFICES: Office[] = [
  {
    id: 'imbituba',
    city: 'Imbituba - SC',
    address: 'Av. Santa Catarina, 1205',
    neighborhood: 'Centro',
    postalCode: '88780-000',
    phone: '(48) 99121-7858',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.877028131375!2d-48.6432759!3d-28.2325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9526caf1ba9768bf%3A0xc665efb3bfda5ba6!2sAv.%20Santa%20Catarina%20-%20Imbituba%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1717041000000!5m2!1spt-BR!2sbr'
  },
  {
    id: 'sao-paulo',
    city: 'São Paulo - SP',
    address: 'Av. Paulista, 1000, Andar 14',
    neighborhood: 'Bela Vista',
    postalCode: '01310-100',
    phone: '(11) 98765-4321',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197576508933!2d-46.6521903!3d-23.564611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431797ca7b8!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1717042000000!5m2!1spt-BR!2sbr'
  }
];
