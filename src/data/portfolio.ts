export const personalInfo = {
  firstName: "Hevenicio",
  lastName: "Silva",
  roles: ["Cientista de Dados", "Desenvolvedor de IA", "Físico"],
  headline: "Cientista de Dados & Desenvolvedor de IA",
  description:
    "Possuo habilidade em aprender novas linguagens e ferramentas de programação. Ótima capacidade de concentração e organização, bem como facilidade para trabalhar em equipe.",
  email: "venn19@hotmail.com.br",
  phone: "(61) 99285-9117",
  location: "Brasília, DF",
  stats: [
    { value: "7+", label: "ANOS DE\nEXPERIÊNCIA" },
    { value: "6+", label: "PROJETOS\nPROFISSIONAIS" },
  ],
  socials: {
    linkedin: "https://linkedin.com/in/hevenicio",
    github: "https://github.com/Hevenicio",
    email: "mailto:venn19@hotmail.com.br",
  },
};

export const aboutTabs = [
  {
    id: "ia",
    title: "IA & Dados",
    icon: "Code2",
    description:
      "Desenvolvimento de soluções de IA generativa com RAG e LangChain, pipelines de Machine Learning, Visão Computacional com U-Net, NLP com HuggingFace e dashboards interativos com Qlik Sense, Metabase e Streamlit.",
  },
  {
    id: "dev",
    title: "Dev",
    icon: "Code2",
    description:
      "Desenvolvimento full-stack com Python, SQL, Docker, APIs RESTful (FastAPI, Django), versionamento com Git/GitHub/GitLab, containerização e automação de processos com Web Scraping e ETL.",
  },
  {
    id: "bio",
    title: "Bio",
    icon: "User",
    description:
      "Graduado em Física e Mestre em Engenharia Biomédica pela UnB, com pós-graduação em Ciência de Dados. Combino pensamento analítico com habilidades de programação para resolver problemas complexos em IA e análise de dados.",
  },
];

export const timeline = [
  {
    date: "2026 – atual",
    title: "Assistente de Pesquisa em Ciência de Dados",
    description:
      "IPEDF — Desenvolvimento de dashboards com Metabase e SQL, manipulação de grandes bases de dados e automação com Python.",
  },
  {
    date: "2025",
    title: "Cientista de Dados / Desenvolvedor de IA",
    description:
      "CIIA — Soluções ponta-a-ponta para processamento de áudio, diarização com Pyannote, transcrição com Whisper, APIs RESTful e Docker.",
  },
  {
    date: "2024 – 2026",
    title: "Residente em Ciência de Dados",
    description:
      "MPDFT — IA generativa com RAG/LangChain para consulta jurídica, dashboards com Qlik Sense e otimização de queries SQL/ETL.",
  },
  {
    date: "2024 – 2025",
    title: "Cientista de Dados e IA",
    description:
      "R5Co — Automação via Web Scraping, PLN para análise textual e testes de métricas em LLMs para criação de Chatbots.",
  },
  {
    date: "2023",
    title: "Estágio em Ciência de Dados",
    description:
      "CGEE — Análises exploratórias, modelos de aprendizado de máquina e prototipagem de ferramentas de visualização de dados.",
  },
  {
    date: "2019 – 2024",
    title: "Tutor Acadêmico",
    description:
      "UnB — Tutor de Cálculo I e Introdução à Ciência da Computação (Python), auxiliando alunos e preparando material didático.",
  },
];

export const education = [
  {
    date: "2024 – 2025",
    title: "Pós-Graduação em Ciência de Dados",
    institution: "Instituto Sendtko — Chapecó, SC",
  },
  {
    date: "2021 – 2024",
    title: "Mestrado em Engenharia Biomédica",
    institution: "Universidade de Brasília (UnB)",
    detail: "Segmentação não-supervisionada via U-Net em imagens de TC.",
  },
  {
    date: "2014 – 2019",
    title: "Graduação em Física",
    institution: "Universidade de Brasília (UnB)",
  },
];

export const projects = [
  {
    title: "IA Generativa Jurídica (RAG)",
    description:
      "Sistema de consulta jurídica inteligente utilizando RAG com LangChain para o MPDFT, integrando múltiplas fontes de dados.",
    technologies: ["Python", "LangChain", "RAG", "LLMs"],
    github: "https://github.com/Hevenicio",
    gradient: "from-forest to-forest/70",
  },
  {
    title: "Pipeline de Áudio & Transcrição",
    description:
      "Processamento de áudio em larga escala com diarização de locutores (Pyannote) e transcrição via Whisper, com interface Streamlit.",
    technologies: ["Python", "Whisper", "Pyannote", "Streamlit", "Docker"],
    github: "https://github.com/Hevenicio",
    gradient: "from-secondary to-muted",
  },
  {
    title: "Segmentação U-Net em TC",
    description:
      "Segmentação não-supervisionada de imagens de tomografia computadorizada utilizando redes U-Net — dissertação de mestrado.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    github: "https://github.com/Hevenicio",
    gradient: "from-mint-dark/30 to-forest/50",
  },
  {
    title: "Hackathon Forecast Big Data — 1º Lugar",
    description:
      "Modelo preditivo de maior acurácia para previsão de vendas semanais, superando o baseline da Big Data Corp.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Feature Engineering"],
    github: "https://github.com/Hevenicio",
    gradient: "from-primary/20 to-accent/30",
  },
];

export const techStack = [
  "Python", "SQL", "Docker", "Git",
  "LangChain", "RAG", "HuggingFace", "NLP",
  "Scikit-learn", "TensorFlow", "OpenCV", "Streamlit",
  "Qlik Sense", "Metabase", "FastAPI", "PostgreSQL",
  "Pandas", "NumPy", "Matplotlib", "LaTeX",
];

export const navLinks = [
  { label: "<Início/>", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];
