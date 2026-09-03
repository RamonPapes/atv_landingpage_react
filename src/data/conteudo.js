// Dados profissionais reais, conforme o perfil público da psicóloga.
export const profissional = {
  nome: "Jarsia Melo",
  crp: "03/33716",
  abordagem: "Terapia Cognitivo-Comportamental (TCC)",
  atendimento: "On-line e presencial",
  linkedin: "https://www.linkedin.com/in/jarsia-melo-1173a824/",
  linkedinRotulo: "jarsia-melo-1173a824",
  // Ainda não divulgados no perfil profissional: preencher quando forem informados.
  telefone: "",
  email: ""
};

// Formação acadêmica informada no perfil profissional.
export const formacao = [
  {
    id: 1,
    curso: "Graduação em Psicologia",
    instituicao: "Instituição a confirmar",
    periodo: ""
  },
  {
    id: 2,
    curso: "Mestrado Profissional em Educação de Jovens e Adultos (MPEJA)",
    instituicao: "Universidade do Estado da Bahia",
    periodo: "2016 – 2018"
  },
  {
    id: 3,
    curso: "Especialização em Engenharia Sanitária e Meio Ambiente — Habitação Saudável",
    instituicao: "Fiocruz — Rio de Janeiro",
    periodo: "2003 – 2005"
  },
  {
    id: 4,
    curso: "Licenciatura Plena em Ciências Biológicas — Ecotoxicologia",
    instituicao: "Universidade Católica do Salvador",
    periodo: "1997 – 2003"
  }
];

export const servicos = [
  {
    id: 1,
    icone: "◌",
    titulo: "Psicoterapia individual",
    descricao: "Espaço individual para escuta e reflexão.",
    modalidade: "On-line e presencial",
    disponivel: true
  },
  {
    id: 2,
    icone: "⌁",
    titulo: "Atendimento on-line",
    descricao: "Possibilidade de atendimento por videochamada.",
    modalidade: "On-line",
    disponivel: true
  },
  {
    id: 3,
    icone: "◇",
    titulo: "Acolhimento psicológico",
    descricao: "Momento inicial de conversa e orientação.",
    modalidade: "On-line e presencial",
    disponivel: false
  },
  {
    id: 4,
    icone: "◈",
    titulo: "Orientação Psicológica",
    descricao: "Conversa orientada sobre dúvidas, escolhas e organização da rotina.",
    modalidade: "On-line e presencial",
    disponivel: false
  }
];

// Exercício 04 — conteúdo da seção de perguntas frequentes.
export const perguntas = [
  {
    id: 1,
    pergunta: "Como funciona o primeiro contato?",
    resposta:
      "Você envia uma mensagem pelo formulário desta página e recebe um retorno com os horários disponíveis para a conversa inicial."
  },
  {
    id: 2,
    pergunta: "Qual é a duração e a frequência das sessões?",
    resposta:
      "Duração, frequência e valores são combinados na conversa inicial, de acordo com a demanda apresentada. [confirmar informações com a profissional]"
  },
  {
    id: 3,
    pergunta: "O atendimento é sigiloso?",
    resposta:
      "Sim. O sigilo profissional é previsto no Código de Ética Profissional do Psicólogo e vale também para o atendimento realizado on-line."
  },
  {
    id: 4,
    pergunta: "Existe garantia de resultado?",
    resposta:
      "Não. Cada processo é único e depende de muitos fatores. O trabalho é conduzido com transparência sobre o que pode ser oferecido, sem promessa de cura ou de resultado."
  },
  {
    id: 5,
    pergunta: "Este site substitui um atendimento?",
    resposta:
      "Não. As informações aqui publicadas são de caráter informativo e não substituem avaliação psicológica. Em situação de urgência, procure o serviço de saúde mais próximo ou ligue para o CVV no número 188."
  }
];
