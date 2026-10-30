// Dados Oficiais do JIS-IFB 2026 (Portaria nº 2245/2026, Sorteios do Congresso Técnico e Cronograma Final)
import { Campus, Modalidade, Equipe, Partida, ComissaoOrganizadora, PontuacaoGeralCampus, ParticipanteIndividual } from '@/types';

export const CAMPI: Campus[] = [
  {
    "id": "00000000-0000-0000-0001-000000000001",
    "nome": "Campus Brasília",
    "sigla": "CBRA",
    "cor_primaria": "#288C28"
  },
  {
    "id": "00000000-0000-0000-0001-000000000002",
    "nome": "Campus Ceilândia",
    "sigla": "CCEI",
    "cor_primaria": "#1E2D3C"
  },
  {
    "id": "00000000-0000-0000-0001-000000000003",
    "nome": "Campus Estrutural",
    "sigla": "CEST",
    "cor_primaria": "#E1D287"
  },
  {
    "id": "00000000-0000-0000-0001-000000000004",
    "nome": "Campus Gama",
    "sigla": "CGAM",
    "cor_primaria": "#C81414"
  },
  {
    "id": "00000000-0000-0000-0001-000000000005",
    "nome": "Campus Planaltina",
    "sigla": "CPLA",
    "cor_primaria": "#78A55A"
  },
  {
    "id": "00000000-0000-0000-0001-000000000006",
    "nome": "Campus Recanto das Emas",
    "sigla": "CREC",
    "cor_primaria": "#F57656"
  },
  {
    "id": "00000000-0000-0000-0001-000000000007",
    "nome": "Campus Riacho Fundo",
    "sigla": "CRIA",
    "cor_primaria": "#349738"
  },
  {
    "id": "00000000-0000-0000-0001-000000000008",
    "nome": "Campus Samambaia",
    "sigla": "CSAM",
    "cor_primaria": "#1E2D3C"
  },
  {
    "id": "00000000-0000-0000-0001-000000000009",
    "nome": "Campus São Sebastião",
    "sigla": "CSSE",
    "cor_primaria": "#288C28"
  },
  {
    "id": "00000000-0000-0000-0001-000000000010",
    "nome": "Campus Taguatinga",
    "sigla": "CTAG",
    "cor_primaria": "#C81414"
  },
  {
    "id": "00000000-0000-0000-0001-000000000011",
    "nome": "Reitoria",
    "sigla": "REIT",
    "cor_primaria": "#1E2D3C"
  }
];

export const MODALIDADES: Modalidade[] = [
  {
    "id": "00000000-0000-0000-0002-000000000001",
    "nome": "Futsal",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Trophy",
    "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
    "total_vagas_ou_inscritos": 12
  },
  {
    "id": "00000000-0000-0000-0002-000000000002",
    "nome": "Vôlei de Areia",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Sun",
    "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
    "total_vagas_ou_inscritos": 16
  },
  {
    "id": "00000000-0000-0000-0002-000000000003",
    "nome": "Vôlei de Quadra",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Volleyball",
    "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
    "total_vagas_ou_inscritos": 8
  },
  {
    "id": "00000000-0000-0000-0002-000000000004",
    "nome": "Basquete 3x3",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Target",
    "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
    "total_vagas_ou_inscritos": 9
  },
  {
    "id": "00000000-0000-0000-0002-000000000005",
    "nome": "Handebol",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Award",
    "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
    "total_vagas_ou_inscritos": 4
  },
  {
    "id": "00000000-0000-0000-0002-000000000006",
    "nome": "Queimada",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Flame",
    "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
    "total_vagas_ou_inscritos": 6
  },
  {
    "id": "00000000-0000-0000-0002-000000000007",
    "nome": "Futevôlei",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Footprints",
    "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
    "total_vagas_ou_inscritos": 7
  },
  {
    "id": "00000000-0000-0000-0002-000000000008",
    "nome": "Tênis de Mesa",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "CircleDot",
    "formato_disputa": "Torneio Feminino Exclusivo e Categoria Absoluto",
    "total_vagas_ou_inscritos": 23
  },
  {
    "id": "00000000-0000-0000-0002-000000000009",
    "nome": "Xadrez",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "Crown",
    "formato_disputa": "Sistema Suíço em 5 Rodadas (10-15 min nocaute)",
    "total_vagas_ou_inscritos": 23
  },
  {
    "id": "00000000-0000-0000-0002-000000000010",
    "nome": "Damas",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "Grid3X3",
    "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
    "total_vagas_ou_inscritos": 8
  },
  {
    "id": "00000000-0000-0000-0002-000000000011",
    "nome": "Natação",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "Waves",
    "formato_disputa": "Provas de 25m, 50m e 100m Livre no Campus Brasília",
    "total_vagas_ou_inscritos": 33
  },
  {
    "id": "00000000-0000-0000-0002-000000000012",
    "nome": "Caminhada e Corrida",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "Timer",
    "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
    "total_vagas_ou_inscritos": 104
  }
];

export const PONTUACAO_INICIAL: PontuacaoGeralCampus[] = [
  {
    "campus_id": "00000000-0000-0000-0001-000000000001",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000001",
      "nome": "Campus Brasília",
      "sigla": "CBRA",
      "cor_primaria": "#288C28"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000003",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000004",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000004",
      "nome": "Campus Gama",
      "sigla": "CGAM",
      "cor_primaria": "#C81414"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000005",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000005",
      "nome": "Campus Planaltina",
      "sigla": "CPLA",
      "cor_primaria": "#78A55A"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000006",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000006",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000007",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000007",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000008",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000008",
      "nome": "Campus Samambaia",
      "sigla": "CSAM",
      "cor_primaria": "#1E2D3C"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000009",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000009",
      "nome": "Campus São Sebastião",
      "sigla": "CSSE",
      "cor_primaria": "#288C28"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000010",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000010",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    }
  },
  {
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    }
  }
];

export const COMISSAO_EXEMPLO: ComissaoOrganizadora[] = [
  {
    "id": "00000000-0000-0000-0007-000000000001",
    "nome": "ARTUR LOPES DIAS",
    "matricula": "3008960",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000003",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000004",
    "subcomissao_nome": "Basquete",
    "contato": "3008960@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000002",
    "nome": "THIAGO SILVA ROCHA",
    "matricula": "3277783",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000003",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000004",
    "subcomissao_nome": "Basquete",
    "contato": "3277783@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000003",
    "nome": "MONICA LUCIANA DA SILVA PEREIRA",
    "matricula": "1154917",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000008",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000012",
    "subcomissao_nome": "Caminhada/Corrida",
    "contato": "1154917@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000008",
      "nome": "Campus Samambaia",
      "sigla": "CSAM",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000012",
      "nome": "Caminhada e Corrida",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Timer",
      "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
      "total_vagas_ou_inscritos": 104
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000004",
    "nome": "DANIELE RAMOS SIMOES",
    "matricula": "1687806",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000011",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000012",
    "subcomissao_nome": "Caminhada/Corrida",
    "contato": "1687806@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000012",
      "nome": "Caminhada e Corrida",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Timer",
      "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
      "total_vagas_ou_inscritos": 104
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000005",
    "nome": "EVERGLAD ARIADNE DE SOUZA",
    "matricula": "2275761",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000011",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000012",
    "subcomissao_nome": "Caminhada/Corrida",
    "contato": "2275761@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000012",
      "nome": "Caminhada e Corrida",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Timer",
      "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
      "total_vagas_ou_inscritos": 104
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000006",
    "nome": "TATIANA FARIAS DE SOUSA",
    "matricula": "2221839",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000011",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000012",
    "subcomissao_nome": "Caminhada/Corrida",
    "contato": "2221839@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000012",
      "nome": "Caminhada e Corrida",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Timer",
      "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
      "total_vagas_ou_inscritos": 104
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000007",
    "nome": "JEFFERSON SAMPAIO DE MOURA",
    "matricula": "2786156",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000009",
    "subcomissao_modalidade_id": null,
    "subcomissao_nome": "Coordenação",
    "contato": "2786156@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000009",
      "nome": "Campus São Sebastião",
      "sigla": "CSSE",
      "cor_primaria": "#288C28"
    },
    "subcomissao": null
  },
  {
    "id": "00000000-0000-0000-0007-000000000008",
    "nome": "JOSE ANDERSON DE FREITAS SILVA",
    "matricula": "3969720",
    "funcao": "Presidente",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000011",
    "subcomissao_modalidade_id": null,
    "subcomissao_nome": "Coordenação",
    "contato": "3969720@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": null
  },
  {
    "id": "00000000-0000-0000-0007-000000000009",
    "nome": "ADILSON CESAR DE ARAUJO",
    "matricula": "1845396",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000011",
    "subcomissao_modalidade_id": null,
    "subcomissao_nome": "Coordenação",
    "contato": "1845396@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": null
  },
  {
    "id": "00000000-0000-0000-0007-000000000010",
    "nome": "ERIC JEFFERSON MATIAS LUZ",
    "matricula": "1334622",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000001",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000001",
    "subcomissao_nome": "Futsal",
    "contato": "1334622@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000001",
      "nome": "Campus Brasília",
      "sigla": "CBRA",
      "cor_primaria": "#288C28"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000011",
    "nome": "FILIPE PINHEIRO BRANDAO",
    "matricula": "3524433",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000001",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000001",
    "subcomissao_nome": "Futsal",
    "contato": "3524433@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000001",
      "nome": "Campus Brasília",
      "sigla": "CBRA",
      "cor_primaria": "#288C28"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000012",
    "nome": "HUGO SILVA NOLETO",
    "matricula": "3007619",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000006",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000005",
    "subcomissao_nome": "Handebol",
    "contato": "3007619@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000006",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000013",
    "nome": "CLEBER DOS SANTOS FERREIRA",
    "matricula": "3008104",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000004",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000005",
    "subcomissao_nome": "Handebol",
    "contato": "3008104@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000004",
      "nome": "Campus Gama",
      "sigla": "CGAM",
      "cor_primaria": "#C81414"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000014",
    "nome": "GIANO LUIS COPETTI",
    "matricula": "1870044",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000003",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000011",
    "subcomissao_nome": "Natação",
    "contato": "1870044@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000011",
      "nome": "Natação",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Waves",
      "formato_disputa": "Provas de 25m, 50m e 100m Livre no Campus Brasília",
      "total_vagas_ou_inscritos": 33
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000015",
    "nome": "VANESSA FONSECA MACHADO",
    "matricula": "3054757",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000003",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000006",
    "subcomissao_nome": "Queimada",
    "contato": "3054757@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000016",
    "nome": "VANESSA DE DEUS DE MENDONCA",
    "matricula": "1957411",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000010",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000006",
    "subcomissao_nome": "Queimada",
    "contato": "1957411@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000010",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000017",
    "nome": "LEONARDO PIMENTA DIAS",
    "matricula": "1758194",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000008",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000008",
    "subcomissao_nome": "Tênis de Mesa / Xadrez / Damas",
    "contato": "1758194@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000008",
      "nome": "Campus Samambaia",
      "sigla": "CSAM",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000008",
      "nome": "Tênis de Mesa",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "CircleDot",
      "formato_disputa": "Torneio Feminino Exclusivo e Categoria Absoluto",
      "total_vagas_ou_inscritos": 23
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000018",
    "nome": "MILENNA MILHOMEM SENA",
    "matricula": "1596461",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000008",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000008",
    "subcomissao_nome": "Tênis de Mesa / Xadrez / Damas",
    "contato": "1596461@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000008",
      "nome": "Campus Samambaia",
      "sigla": "CSAM",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000008",
      "nome": "Tênis de Mesa",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "CircleDot",
      "formato_disputa": "Torneio Feminino Exclusivo e Categoria Absoluto",
      "total_vagas_ou_inscritos": 23
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000019",
    "nome": "GEOVANI BERNARDES DIAS JUNIOR",
    "matricula": "3543173",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000009",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000003",
    "subcomissao_nome": "Vôlei",
    "contato": "3543173@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000009",
      "nome": "Campus São Sebastião",
      "sigla": "CSSE",
      "cor_primaria": "#288C28"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000020",
    "nome": "VANESSA SOARES DOS SANTOS",
    "matricula": "1239527",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000009",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000003",
    "subcomissao_nome": "Vôlei",
    "contato": "1239527@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000009",
      "nome": "Campus São Sebastião",
      "sigla": "CSSE",
      "cor_primaria": "#288C28"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000021",
    "nome": "GILCEMAR DA SILVA BORGES JUNIOR",
    "matricula": "2318777",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000002",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000002",
    "subcomissao_nome": "Vôlei de Areia e Futevôlei",
    "contato": "2318777@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0007-000000000022",
    "nome": "MICHEL SANTOS DA SILVA",
    "matricula": "1262668",
    "funcao": "Membro",
    "lotacao_campus_id": "00000000-0000-0000-0001-000000000002",
    "subcomissao_modalidade_id": "00000000-0000-0000-0002-000000000002",
    "subcomissao_nome": "Vôlei de Areia e Futevôlei",
    "contato": "1262668@ifb.edu.br",
    "lotacao": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  }
];

export const PARTICIPANTES_DAMAS: ParticipanteIndividual[] = [
  {
    "id": "00000000-0000-0000-0004-000000000001",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Marcio Giacomin Pinho",
    "matricula": "3000001",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0004-000000000002",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Artur Lopes Dias",
    "matricula": "3000002",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0004-000000000003",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "André Gondim do Rego",
    "matricula": "3000003",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0004-000000000004",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Joádson Rodrigues da Silva Freitas",
    "matricula": "3000004",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0004-000000000005",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Wellington Marciel",
    "matricula": "3000005",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0004-000000000006",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Denis Marques Ferreira",
    "matricula": "3000006",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0004-000000000007",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Daniel Evangelista Monteiro",
    "matricula": "3000007",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0004-000000000008",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Samuel Gabriel Assis",
    "matricula": "3000008",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  }
];

export const EQUIPES_EXEMPLO: Equipe[] = [
  {
    "id": "00000000-0000-0000-0003-000000000001",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000005",
    "nome": "Galáticos Cpla",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Galáticos Cpla",
    "capitao_matricula": "2000001",
    "capitao_email": "galticoscp@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Galáticos Cpla)",
      "Atleta 2 (Galáticos Cpla)",
      "Atleta 3 (Galáticos Cpla)",
      "Atleta 4 (Galáticos Cpla)",
      "Atleta 5 (Galáticos Cpla)",
      "Atleta 6 (Galáticos Cpla)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (A1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000005",
      "nome": "Campus Planaltina",
      "sigla": "CPLA",
      "cor_primaria": "#78A55A"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000002",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "nome": "Gato Preto - CCEI",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto - CCEI",
    "capitao_matricula": "2000002",
    "capitao_email": "gatopretoc@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto - CCEI)",
      "Atleta 2 (Gato Preto - CCEI)",
      "Atleta 3 (Gato Preto - CCEI)",
      "Atleta 4 (Gato Preto - CCEI)",
      "Atleta 5 (Gato Preto - CCEI)",
      "Atleta 6 (Gato Preto - CCEI)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (A2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000003",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000004",
    "nome": "Gama",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gama",
    "capitao_matricula": "2000003",
    "capitao_email": "gama@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gama)",
      "Atleta 2 (Gama)",
      "Atleta 3 (Gama)",
      "Atleta 4 (Gama)",
      "Atleta 5 (Gama)",
      "Atleta 6 (Gama)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (A3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000004",
      "nome": "Campus Gama",
      "sigla": "CGAM",
      "cor_primaria": "#C81414"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000004",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Os Saruês",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Os Saruês",
    "capitao_matricula": "2000004",
    "capitao_email": "ossarus@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Os Saruês)",
      "Atleta 2 (Os Saruês)",
      "Atleta 3 (Os Saruês)",
      "Atleta 4 (Os Saruês)",
      "Atleta 5 (Os Saruês)",
      "Atleta 6 (Os Saruês)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (B1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000005",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000006",
    "nome": "Canela de Ema",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Canela de Ema",
    "capitao_matricula": "2000005",
    "capitao_email": "caneladeem@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Canela de Ema)",
      "Atleta 2 (Canela de Ema)",
      "Atleta 3 (Canela de Ema)",
      "Atleta 4 (Canela de Ema)",
      "Atleta 5 (Canela de Ema)",
      "Atleta 6 (Canela de Ema)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (B2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000006",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000006",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Cachorrões",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Cachorrões",
    "capitao_matricula": "2000006",
    "capitao_email": "cachorres@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Cachorrões)",
      "Atleta 2 (Cachorrões)",
      "Atleta 3 (Cachorrões)",
      "Atleta 4 (Cachorrões)",
      "Atleta 5 (Cachorrões)",
      "Atleta 6 (Cachorrões)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (B3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000007",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Next",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Next",
    "capitao_matricula": "2000007",
    "capitao_email": "next@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Next)",
      "Atleta 2 (Next)",
      "Atleta 3 (Next)",
      "Atleta 4 (Next)",
      "Atleta 5 (Next)",
      "Atleta 6 (Next)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo C (C1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000008",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000007",
    "nome": "Deep River",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Deep River",
    "capitao_matricula": "2000008",
    "capitao_email": "deepriver@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Deep River)",
      "Atleta 2 (Deep River)",
      "Atleta 3 (Deep River)",
      "Atleta 4 (Deep River)",
      "Atleta 5 (Deep River)",
      "Atleta 6 (Deep River)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo C (C2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000007",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000009",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000003",
    "nome": "Campus Estrutural",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Campus Estrutural",
    "capitao_matricula": "2000009",
    "capitao_email": "campusestr@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Campus Estrutural)",
      "Atleta 2 (Campus Estrutural)",
      "Atleta 3 (Campus Estrutural)",
      "Atleta 4 (Campus Estrutural)",
      "Atleta 5 (Campus Estrutural)",
      "Atleta 6 (Campus Estrutural)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo C (C3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000010",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Gato Preto (Fem)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto (Fem)",
    "capitao_matricula": "2000010",
    "capitao_email": "gatopretof@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto (Fem))",
      "Atleta 2 (Gato Preto (Fem))",
      "Atleta 3 (Gato Preto (Fem))",
      "Atleta 4 (Gato Preto (Fem))",
      "Atleta 5 (Gato Preto (Fem))",
      "Atleta 6 (Gato Preto (Fem))"
    ],
    "categoria": "FEMININO",
    "preferencia_periodo": "Triangular (F1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000011",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Donas da Bola (Fem)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Donas da Bola (Fem)",
    "capitao_matricula": "2000011",
    "capitao_email": "donasdabol@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Donas da Bola (Fem))",
      "Atleta 2 (Donas da Bola (Fem))",
      "Atleta 3 (Donas da Bola (Fem))",
      "Atleta 4 (Donas da Bola (Fem))",
      "Atleta 5 (Donas da Bola (Fem))",
      "Atleta 6 (Donas da Bola (Fem))"
    ],
    "categoria": "FEMININO",
    "preferencia_periodo": "Triangular (F2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000012",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Sebastiana F.C.",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Sebastiana F.C.",
    "capitao_matricula": "2000012",
    "capitao_email": "sebastiana@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Sebastiana F.C.)",
      "Atleta 2 (Sebastiana F.C.)",
      "Atleta 3 (Sebastiana F.C.)",
      "Atleta 4 (Sebastiana F.C.)",
      "Atleta 5 (Sebastiana F.C.)",
      "Atleta 6 (Sebastiana F.C.)"
    ],
    "categoria": "FEMININO",
    "preferencia_periodo": "Triangular (F3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000013",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "campus_id": "00000000-0000-0000-0001-000000000010",
    "nome": "Voleibol_Ctag",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Voleibol_Ctag",
    "capitao_matricula": "2000013",
    "capitao_email": "voleibolct@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Voleibol_Ctag)",
      "Atleta 2 (Voleibol_Ctag)",
      "Atleta 3 (Voleibol_Ctag)",
      "Atleta 4 (Voleibol_Ctag)",
      "Atleta 5 (Voleibol_Ctag)",
      "Atleta 6 (Voleibol_Ctag)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Grupo A (A1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000010",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000014",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "campus_id": "00000000-0000-0000-0001-000000000007",
    "nome": "Deep River (Quadra)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Deep River (Quadra)",
    "capitao_matricula": "2000014",
    "capitao_email": "deepriverq@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Deep River (Quadra))",
      "Atleta 2 (Deep River (Quadra))",
      "Atleta 3 (Deep River (Quadra))",
      "Atleta 4 (Deep River (Quadra))",
      "Atleta 5 (Deep River (Quadra))",
      "Atleta 6 (Deep River (Quadra))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Grupo A (A2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000007",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000015",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "campus_id": "00000000-0000-0000-0001-000000000005",
    "nome": "CPLA (Quadra)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) CPLA (Quadra)",
    "capitao_matricula": "2000015",
    "capitao_email": "cplaquadra@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (CPLA (Quadra))",
      "Atleta 2 (CPLA (Quadra))",
      "Atleta 3 (CPLA (Quadra))",
      "Atleta 4 (CPLA (Quadra))",
      "Atleta 5 (CPLA (Quadra))",
      "Atleta 6 (CPLA (Quadra))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Grupo A (A3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000005",
      "nome": "Campus Planaltina",
      "sigla": "CPLA",
      "cor_primaria": "#78A55A"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000016",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Bora Time",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Bora Time",
    "capitao_matricula": "2000016",
    "capitao_email": "boratime@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Bora Time)",
      "Atleta 2 (Bora Time)",
      "Atleta 3 (Bora Time)",
      "Atleta 4 (Bora Time)",
      "Atleta 5 (Bora Time)",
      "Atleta 6 (Bora Time)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Grupo A (A4)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000017",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "campus_id": "00000000-0000-0000-0001-000000000006",
    "nome": "Canela de Ema (Quadra)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Canela de Ema (Quadra)",
    "capitao_matricula": "2000017",
    "capitao_email": "caneladeem@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Canela de Ema (Quadra))",
      "Atleta 2 (Canela de Ema (Quadra))",
      "Atleta 3 (Canela de Ema (Quadra))",
      "Atleta 4 (Canela de Ema (Quadra))",
      "Atleta 5 (Canela de Ema (Quadra))",
      "Atleta 6 (Canela de Ema (Quadra))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Grupo B (B1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000006",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000018",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "nome": "Gato Preto CCEI (Quadra)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto CCEI (Quadra)",
    "capitao_matricula": "2000018",
    "capitao_email": "gatopretoc@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto CCEI (Quadra))",
      "Atleta 2 (Gato Preto CCEI (Quadra))",
      "Atleta 3 (Gato Preto CCEI (Quadra))",
      "Atleta 4 (Gato Preto CCEI (Quadra))",
      "Atleta 5 (Gato Preto CCEI (Quadra))",
      "Atleta 6 (Gato Preto CCEI (Quadra))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Grupo B (B2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000019",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Titãs do Vôlei",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Titãs do Vôlei",
    "capitao_matricula": "2000019",
    "capitao_email": "titsdovlei@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Titãs do Vôlei)",
      "Atleta 2 (Titãs do Vôlei)",
      "Atleta 3 (Titãs do Vôlei)",
      "Atleta 4 (Titãs do Vôlei)",
      "Atleta 5 (Titãs do Vôlei)",
      "Atleta 6 (Titãs do Vôlei)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Grupo B (B3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000020",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Sem Didática Para Jogar (Quadra)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Sem Didática Para Jogar (Quadra)",
    "capitao_matricula": "2000020",
    "capitao_email": "semdidtica@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Sem Didática Para Jogar (Quadra))",
      "Atleta 2 (Sem Didática Para Jogar (Quadra))",
      "Atleta 3 (Sem Didática Para Jogar (Quadra))",
      "Atleta 4 (Sem Didática Para Jogar (Quadra))",
      "Atleta 5 (Sem Didática Para Jogar (Quadra))",
      "Atleta 6 (Sem Didática Para Jogar (Quadra))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Grupo B (B4)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000021",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000003",
    "nome": "Estrutural (Basquete Masc)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Estrutural (Basquete Masc)",
    "capitao_matricula": "2000021",
    "capitao_email": "estrutural@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Estrutural (Basquete Masc))",
      "Atleta 2 (Estrutural (Basquete Masc))",
      "Atleta 3 (Estrutural (Basquete Masc))",
      "Atleta 4 (Estrutural (Basquete Masc))",
      "Atleta 5 (Estrutural (Basquete Masc))",
      "Atleta 6 (Estrutural (Basquete Masc))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (M-A1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000022",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000006",
    "nome": "Canela de Ema (Basquete Masc)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Canela de Ema (Basquete Masc)",
    "capitao_matricula": "2000022",
    "capitao_email": "caneladeem@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Canela de Ema (Basquete Masc))",
      "Atleta 2 (Canela de Ema (Basquete Masc))",
      "Atleta 3 (Canela de Ema (Basquete Masc))",
      "Atleta 4 (Canela de Ema (Basquete Masc))",
      "Atleta 5 (Canela de Ema (Basquete Masc))",
      "Atleta 6 (Canela de Ema (Basquete Masc))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (M-A2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000006",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000023",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Quitados e Queimados",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Quitados e Queimados",
    "capitao_matricula": "2000023",
    "capitao_email": "quitadoseq@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Quitados e Queimados)",
      "Atleta 2 (Quitados e Queimados)",
      "Atleta 3 (Quitados e Queimados)",
      "Atleta 4 (Quitados e Queimados)",
      "Atleta 5 (Quitados e Queimados)",
      "Atleta 6 (Quitados e Queimados)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (M-A3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000024",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000010",
    "nome": "CTAG Hoopers",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) CTAG Hoopers",
    "capitao_matricula": "2000024",
    "capitao_email": "ctaghooper@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (CTAG Hoopers)",
      "Atleta 2 (CTAG Hoopers)",
      "Atleta 3 (CTAG Hoopers)",
      "Atleta 4 (CTAG Hoopers)",
      "Atleta 5 (CTAG Hoopers)",
      "Atleta 6 (CTAG Hoopers)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (M-B1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000010",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000025",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "nome": "Gato Preto CCEI (Basquete Masc)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto CCEI (Basquete Masc)",
    "capitao_matricula": "2000025",
    "capitao_email": "gatopretoc@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto CCEI (Basquete Masc))",
      "Atleta 2 (Gato Preto CCEI (Basquete Masc))",
      "Atleta 3 (Gato Preto CCEI (Basquete Masc))",
      "Atleta 4 (Gato Preto CCEI (Basquete Masc))",
      "Atleta 5 (Gato Preto CCEI (Basquete Masc))",
      "Atleta 6 (Gato Preto CCEI (Basquete Masc))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (M-B2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000026",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Sem Didática Para Jogar (Basquete Masc)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Sem Didática Para Jogar (Basquete Masc)",
    "capitao_matricula": "2000026",
    "capitao_email": "semdidtica@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Sem Didática Para Jogar (Basquete Masc))",
      "Atleta 2 (Sem Didática Para Jogar (Basquete Masc))",
      "Atleta 3 (Sem Didática Para Jogar (Basquete Masc))",
      "Atleta 4 (Sem Didática Para Jogar (Basquete Masc))",
      "Atleta 5 (Sem Didática Para Jogar (Basquete Masc))",
      "Atleta 6 (Sem Didática Para Jogar (Basquete Masc))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (M-B3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000027",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Jordan'as Tagua Clube",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Jordan'as Tagua Clube",
    "capitao_matricula": "2000027",
    "capitao_email": "jordanasta@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Jordan'as Tagua Clube)",
      "Atleta 2 (Jordan'as Tagua Clube)",
      "Atleta 3 (Jordan'as Tagua Clube)",
      "Atleta 4 (Jordan'as Tagua Clube)",
      "Atleta 5 (Jordan'as Tagua Clube)",
      "Atleta 6 (Jordan'as Tagua Clube)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Triangular (X1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000028",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Gato Preto Misto 2",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto Misto 2",
    "capitao_matricula": "2000028",
    "capitao_email": "gatopretom@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto Misto 2)",
      "Atleta 2 (Gato Preto Misto 2)",
      "Atleta 3 (Gato Preto Misto 2)",
      "Atleta 4 (Gato Preto Misto 2)",
      "Atleta 5 (Gato Preto Misto 2)",
      "Atleta 6 (Gato Preto Misto 2)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Triangular (X2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000029",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Gato Preto Misto 1",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto Misto 1",
    "capitao_matricula": "2000029",
    "capitao_email": "gatopretom@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto Misto 1)",
      "Atleta 2 (Gato Preto Misto 1)",
      "Atleta 3 (Gato Preto Misto 1)",
      "Atleta 4 (Gato Preto Misto 1)",
      "Atleta 5 (Gato Preto Misto 1)",
      "Atleta 6 (Gato Preto Misto 1)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Triangular (X3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000030",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000003",
    "nome": "CEST (Vôlei Praia)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) CEST (Vôlei Praia)",
    "capitao_matricula": "2000030",
    "capitao_email": "cestvleipr@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (CEST (Vôlei Praia))",
      "Atleta 2 (CEST (Vôlei Praia))",
      "Atleta 3 (CEST (Vôlei Praia))",
      "Atleta 4 (CEST (Vôlei Praia))",
      "Atleta 5 (CEST (Vôlei Praia))",
      "Atleta 6 (CEST (Vôlei Praia))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (M-A1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000031",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000003",
    "nome": "Estrutural (Vôlei Praia)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Estrutural (Vôlei Praia)",
    "capitao_matricula": "2000031",
    "capitao_email": "estrutural@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Estrutural (Vôlei Praia))",
      "Atleta 2 (Estrutural (Vôlei Praia))",
      "Atleta 3 (Estrutural (Vôlei Praia))",
      "Atleta 4 (Estrutural (Vôlei Praia))",
      "Atleta 5 (Estrutural (Vôlei Praia))",
      "Atleta 6 (Estrutural (Vôlei Praia))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (M-A2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000003",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000032",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "nome": "Bonde da Ceilândia",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Bonde da Ceilândia",
    "capitao_matricula": "2000032",
    "capitao_email": "bondedacei@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Bonde da Ceilândia)",
      "Atleta 2 (Bonde da Ceilândia)",
      "Atleta 3 (Bonde da Ceilândia)",
      "Atleta 4 (Bonde da Ceilândia)",
      "Atleta 5 (Bonde da Ceilândia)",
      "Atleta 6 (Bonde da Ceilândia)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo A (M-A3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000033",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Os Saruês (Vôlei Praia)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Os Saruês (Vôlei Praia)",
    "capitao_matricula": "2000033",
    "capitao_email": "ossarusvle@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Os Saruês (Vôlei Praia))",
      "Atleta 2 (Os Saruês (Vôlei Praia))",
      "Atleta 3 (Os Saruês (Vôlei Praia))",
      "Atleta 4 (Os Saruês (Vôlei Praia))",
      "Atleta 5 (Os Saruês (Vôlei Praia))",
      "Atleta 6 (Os Saruês (Vôlei Praia))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (M-B1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000034",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "nome": "IFB Ceilândia - Equipe 02",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) IFB Ceilândia - Equipe 02",
    "capitao_matricula": "2000034",
    "capitao_email": "ifbceilndi@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (IFB Ceilândia - Equipe 02)",
      "Atleta 2 (IFB Ceilândia - Equipe 02)",
      "Atleta 3 (IFB Ceilândia - Equipe 02)",
      "Atleta 4 (IFB Ceilândia - Equipe 02)",
      "Atleta 5 (IFB Ceilândia - Equipe 02)",
      "Atleta 6 (IFB Ceilândia - Equipe 02)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (M-B2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000035",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000006",
    "nome": "Canela de Ema (Vôlei Praia)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Canela de Ema (Vôlei Praia)",
    "capitao_matricula": "2000035",
    "capitao_email": "caneladeem@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Canela de Ema (Vôlei Praia))",
      "Atleta 2 (Canela de Ema (Vôlei Praia))",
      "Atleta 3 (Canela de Ema (Vôlei Praia))",
      "Atleta 4 (Canela de Ema (Vôlei Praia))",
      "Atleta 5 (Canela de Ema (Vôlei Praia))",
      "Atleta 6 (Canela de Ema (Vôlei Praia))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo B (M-B3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000006",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000036",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Sem Didática para Jogar (Praia)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Sem Didática para Jogar (Praia)",
    "capitao_matricula": "2000036",
    "capitao_email": "semdidtica@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Sem Didática para Jogar (Praia))",
      "Atleta 2 (Sem Didática para Jogar (Praia))",
      "Atleta 3 (Sem Didática para Jogar (Praia))",
      "Atleta 4 (Sem Didática para Jogar (Praia))",
      "Atleta 5 (Sem Didática para Jogar (Praia))",
      "Atleta 6 (Sem Didática para Jogar (Praia))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo C (M-C1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000037",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "nome": "Gato Preto - CCEI (Vôlei Praia)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto - CCEI (Vôlei Praia)",
    "capitao_matricula": "2000037",
    "capitao_email": "gatopretoc@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto - CCEI (Vôlei Praia))",
      "Atleta 2 (Gato Preto - CCEI (Vôlei Praia))",
      "Atleta 3 (Gato Preto - CCEI (Vôlei Praia))",
      "Atleta 4 (Gato Preto - CCEI (Vôlei Praia))",
      "Atleta 5 (Gato Preto - CCEI (Vôlei Praia))",
      "Atleta 6 (Gato Preto - CCEI (Vôlei Praia))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo C (M-C2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000038",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Sand",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Sand",
    "capitao_matricula": "2000038",
    "capitao_email": "sand@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Sand)",
      "Atleta 2 (Sand)",
      "Atleta 3 (Sand)",
      "Atleta 4 (Sand)",
      "Atleta 5 (Sand)",
      "Atleta 6 (Sand)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Grupo C (M-C3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000039",
    "modalidade_id": "00000000-0000-0000-0002-000000000007",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "MT Brothers",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) MT Brothers",
    "capitao_matricula": "2000039",
    "capitao_email": "mtbrothers@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (MT Brothers)",
      "Atleta 2 (MT Brothers)",
      "Atleta 3 (MT Brothers)",
      "Atleta 4 (MT Brothers)",
      "Atleta 5 (MT Brothers)",
      "Atleta 6 (MT Brothers)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Pontos Corridos (M1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000007",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000040",
    "modalidade_id": "00000000-0000-0000-0002-000000000007",
    "campus_id": "00000000-0000-0000-0001-000000000006",
    "nome": "Canela de Ema (Futevôlei)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Canela de Ema (Futevôlei)",
    "capitao_matricula": "2000040",
    "capitao_email": "caneladeem@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Canela de Ema (Futevôlei))",
      "Atleta 2 (Canela de Ema (Futevôlei))",
      "Atleta 3 (Canela de Ema (Futevôlei))",
      "Atleta 4 (Canela de Ema (Futevôlei))",
      "Atleta 5 (Canela de Ema (Futevôlei))",
      "Atleta 6 (Canela de Ema (Futevôlei))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Pontos Corridos (M2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000006",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000007",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000041",
    "modalidade_id": "00000000-0000-0000-0002-000000000007",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Gato Preto (Futevôlei)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto (Futevôlei)",
    "capitao_matricula": "2000041",
    "capitao_email": "gatopretof@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto (Futevôlei))",
      "Atleta 2 (Gato Preto (Futevôlei))",
      "Atleta 3 (Gato Preto (Futevôlei))",
      "Atleta 4 (Gato Preto (Futevôlei))",
      "Atleta 5 (Gato Preto (Futevôlei))",
      "Atleta 6 (Gato Preto (Futevôlei))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Pontos Corridos (M3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000007",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000042",
    "modalidade_id": "00000000-0000-0000-0002-000000000007",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Sand Stars",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Sand Stars",
    "capitao_matricula": "2000042",
    "capitao_email": "sandstars@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Sand Stars)",
      "Atleta 2 (Sand Stars)",
      "Atleta 3 (Sand Stars)",
      "Atleta 4 (Sand Stars)",
      "Atleta 5 (Sand Stars)",
      "Atleta 6 (Sand Stars)"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Pontos Corridos (M4)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000007",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000043",
    "modalidade_id": "00000000-0000-0000-0002-000000000007",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Os Saruês (Futevôlei)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Os Saruês (Futevôlei)",
    "capitao_matricula": "2000043",
    "capitao_email": "ossarusfut@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Os Saruês (Futevôlei))",
      "Atleta 2 (Os Saruês (Futevôlei))",
      "Atleta 3 (Os Saruês (Futevôlei))",
      "Atleta 4 (Os Saruês (Futevôlei))",
      "Atleta 5 (Os Saruês (Futevôlei))",
      "Atleta 6 (Os Saruês (Futevôlei))"
    ],
    "categoria": "MASCULINO",
    "preferencia_periodo": "Pontos Corridos (M5)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000007",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000044",
    "modalidade_id": "00000000-0000-0000-0002-000000000007",
    "campus_id": "00000000-0000-0000-0001-000000000010",
    "nome": "Soberanas do Taguá Clube",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Soberanas do Taguá Clube",
    "capitao_matricula": "2000044",
    "capitao_email": "soberanasd@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Soberanas do Taguá Clube)",
      "Atleta 2 (Soberanas do Taguá Clube)",
      "Atleta 3 (Soberanas do Taguá Clube)",
      "Atleta 4 (Soberanas do Taguá Clube)",
      "Atleta 5 (Soberanas do Taguá Clube)",
      "Atleta 6 (Soberanas do Taguá Clube)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Confronto Direto (X1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000010",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000007",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000045",
    "modalidade_id": "00000000-0000-0000-0002-000000000007",
    "campus_id": "00000000-0000-0000-0001-000000000007",
    "nome": "Deep River (Futevôlei)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Deep River (Futevôlei)",
    "capitao_matricula": "2000045",
    "capitao_email": "deepriverf@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Deep River (Futevôlei))",
      "Atleta 2 (Deep River (Futevôlei))",
      "Atleta 3 (Deep River (Futevôlei))",
      "Atleta 4 (Deep River (Futevôlei))",
      "Atleta 5 (Deep River (Futevôlei))",
      "Atleta 6 (Deep River (Futevôlei))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Confronto Direto (X2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000007",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000007",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000046",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Elite",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Elite",
    "capitao_matricula": "2000046",
    "capitao_email": "elite@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Elite)",
      "Atleta 2 (Elite)",
      "Atleta 3 (Elite)",
      "Atleta 4 (Elite)",
      "Atleta 5 (Elite)",
      "Atleta 6 (Elite)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000047",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "nome": "Gato Preto - CCEI (Queimada)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto - CCEI (Queimada)",
    "capitao_matricula": "2000047",
    "capitao_email": "gatopretoc@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto - CCEI (Queimada))",
      "Atleta 2 (Gato Preto - CCEI (Queimada))",
      "Atleta 3 (Gato Preto - CCEI (Queimada))",
      "Atleta 4 (Gato Preto - CCEI (Queimada))",
      "Atleta 5 (Gato Preto - CCEI (Queimada))",
      "Atleta 6 (Gato Preto - CCEI (Queimada))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000048",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Endorfinadas IFB",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Endorfinadas IFB",
    "capitao_matricula": "2000048",
    "capitao_email": "endorfinad@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Endorfinadas IFB)",
      "Atleta 2 (Endorfinadas IFB)",
      "Atleta 3 (Endorfinadas IFB)",
      "Atleta 4 (Endorfinadas IFB)",
      "Atleta 5 (Endorfinadas IFB)",
      "Atleta 6 (Endorfinadas IFB)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000049",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "campus_id": "00000000-0000-0000-0001-000000000007",
    "nome": "Deep River (Queimada)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Deep River (Queimada)",
    "capitao_matricula": "2000049",
    "capitao_email": "deepriverq@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Deep River (Queimada))",
      "Atleta 2 (Deep River (Queimada))",
      "Atleta 3 (Deep River (Queimada))",
      "Atleta 4 (Deep River (Queimada))",
      "Atleta 5 (Deep River (Queimada))",
      "Atleta 6 (Deep River (Queimada))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X4)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000007",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000050",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Sem Didática Para Jogar (Queimada)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Sem Didática Para Jogar (Queimada)",
    "capitao_matricula": "2000050",
    "capitao_email": "semdidtica@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Sem Didática Para Jogar (Queimada))",
      "Atleta 2 (Sem Didática Para Jogar (Queimada))",
      "Atleta 3 (Sem Didática Para Jogar (Queimada))",
      "Atleta 4 (Sem Didática Para Jogar (Queimada))",
      "Atleta 5 (Sem Didática Para Jogar (Queimada))",
      "Atleta 6 (Sem Didática Para Jogar (Queimada))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X5)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000051",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Donas da Bola (Queimada)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Donas da Bola (Queimada)",
    "capitao_matricula": "2000051",
    "capitao_email": "donasdabol@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Donas da Bola (Queimada))",
      "Atleta 2 (Donas da Bola (Queimada))",
      "Atleta 3 (Donas da Bola (Queimada))",
      "Atleta 4 (Donas da Bola (Queimada))",
      "Atleta 5 (Donas da Bola (Queimada))",
      "Atleta 6 (Donas da Bola (Queimada))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X6)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000052",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Fúria Ctga",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Fúria Ctga",
    "capitao_matricula": "2000052",
    "capitao_email": "friactga@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Fúria Ctga)",
      "Atleta 2 (Fúria Ctga)",
      "Atleta 3 (Fúria Ctga)",
      "Atleta 4 (Fúria Ctga)",
      "Atleta 5 (Fúria Ctga)",
      "Atleta 6 (Fúria Ctga)"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X1)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000053",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "campus_id": "00000000-0000-0000-0001-000000000007",
    "nome": "Deep River (Handebol)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Deep River (Handebol)",
    "capitao_matricula": "2000053",
    "capitao_email": "deepriverh@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Deep River (Handebol))",
      "Atleta 2 (Deep River (Handebol))",
      "Atleta 3 (Deep River (Handebol))",
      "Atleta 4 (Deep River (Handebol))",
      "Atleta 5 (Deep River (Handebol))",
      "Atleta 6 (Deep River (Handebol))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X2)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000007",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000054",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "campus_id": "00000000-0000-0000-0001-000000000002",
    "nome": "Gato Preto CCEI (Handebol)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Gato Preto CCEI (Handebol)",
    "capitao_matricula": "2000054",
    "capitao_email": "gatopretoc@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Gato Preto CCEI (Handebol))",
      "Atleta 2 (Gato Preto CCEI (Handebol))",
      "Atleta 3 (Gato Preto CCEI (Handebol))",
      "Atleta 4 (Gato Preto CCEI (Handebol))",
      "Atleta 5 (Gato Preto CCEI (Handebol))",
      "Atleta 6 (Gato Preto CCEI (Handebol))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X3)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000002",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "00000000-0000-0000-0003-000000000055",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "campus_id": "00000000-0000-0000-0001-000000000011",
    "nome": "Sem Didática Para Jogar (Handebol)",
    "avatar_url": null,
    "capitao_nome": "Capitão(ã) Sem Didática Para Jogar (Handebol)",
    "capitao_matricula": "2000055",
    "capitao_email": "semdidtica@ifb.edu.br",
    "lista_participantes": [
      "Atleta 1 (Sem Didática Para Jogar (Handebol))",
      "Atleta 2 (Sem Didática Para Jogar (Handebol))",
      "Atleta 3 (Sem Didática Para Jogar (Handebol))",
      "Atleta 4 (Sem Didática Para Jogar (Handebol))",
      "Atleta 5 (Sem Didática Para Jogar (Handebol))",
      "Atleta 6 (Sem Didática Para Jogar (Handebol))"
    ],
    "categoria": "MISTO",
    "preferencia_periodo": "Chave Única (X4)",
    "campus": {
      "id": "00000000-0000-0000-0001-000000000011",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  }
];

export const PARTIDAS_EXEMPLO: Partida[] = [
  {
    "id": "00000000-0000-0000-0005-000000000001",
    "modalidade_id": "00000000-0000-0000-0002-000000000009",
    "fase": "Etapa Primeiro Lance",
    "rodada": 1,
    "data_hora": "2026-11-03T08:30:00Z",
    "local_jogo": "Campus Samambaia Xadrez Etapa",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:30 | Campus Samambaia Xadrez Etapa \"Primeiro Lance\" (Matutino) Sistema Suíço em 5 Rodadas (10-15 min nocaute)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000009",
      "nome": "Xadrez",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Crown",
      "formato_disputa": "Sistema Suíço em 5 Rodadas (10-15 min nocaute)",
      "total_vagas_ou_inscritos": 23
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000002",
    "modalidade_id": "00000000-0000-0000-0002-000000000010",
    "fase": "Final",
    "rodada": 1,
    "data_hora": "2026-11-03T14:00:00Z",
    "local_jogo": "Campus Samambaia Jogo de Damas Etapa",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:00 | Campus Samambaia Jogo de Damas Etapa \"Primeiro Lance\" (Vespertino) Fase de Grupos (Chaves de 4) + Semifinais, 3º Lugar e Final",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000010",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000003",
    "modalidade_id": "00000000-0000-0000-0002-000000000008",
    "fase": "Etapa Primeiro Lance",
    "rodada": 1,
    "data_hora": "2026-11-04T09:00:00Z",
    "local_jogo": "Campus Samambaia T",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 09:00 | Campus Samambaia Tênis de Mesa Etapa \"Primeiro Lance\" (Dia Único) Torneio Feminino Exclusivo e Categoria Absoluto (Geral)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000008",
      "nome": "Tênis de Mesa",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "CircleDot",
      "formato_disputa": "Torneio Feminino Exclusivo e Categoria Absoluto",
      "total_vagas_ou_inscritos": 23
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000004",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-05T08:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 08:30 | Campus Ceilândia Vôlei de Areia Masc. Rodada 1 - Grupo A Vôlei Areia M-A1 x Vôlei Areia M-A2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000005",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-05T09:15:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:15 | Campus Ceilândia Vôlei de Areia Masc. Rodada 1 - Grupo B Vôlei Areia M-B1 x Vôlei Areia M-B2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000006",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-05T10:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:00 | Campus Ceilândia Vôlei de Areia Masc. Rodada 1 - Grupo C Vôlei Areia M-C1 x Vôlei Areia M-C2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000007",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-05T10:45:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:45 | Campus Ceilândia Vôlei de Areia Masc. Rodada 1 - Grupo D Vôlei Areia M-D1 x Vôlei Areia M-D2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000008",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-05T14:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:00 | Campus Ceilândia Vôlei de Areia Fem. Semifinal 1 Vôlei Areia F1 x Vôlei Areia F2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000009",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-05T14:45:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:45 | Campus Ceilândia Vôlei de Areia Misto Triangular - Rodada 1 Vôlei Areia X1 x Vôlei Areia X2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000010",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-05T15:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:30 | Campus Ceilândia Vôlei de Areia Masc. Rodada 2 - Grupo A (Descanso de 5h p/ A2) Vôlei Areia M-A2 x Vôlei Areia M-A3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000011",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-05T16:15:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 16:15 | Campus Ceilândia Vôlei de Areia Masc. Rodada 2 - Grupo B (Descanso de 5h p/ B2) Vôlei Areia M-B2 x Vôlei Areia M-B3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000012",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-05T17:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 17:00 | Campus Ceilândia Vôlei de Areia Masc. Rodada 2 - Grupo C (Descanso de 5h p/ C2) Vôlei Areia M-C2 x Vôlei Areia M-C3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000013",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-06T14:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 14:00 | Campus Taguatinga Vôlei (Quadra Misto) Rodada 1 - Grupo A (Jogo 1) Vôlei Misto A1 x Vôlei Misto A2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000014",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-06T15:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 15:00 | Campus Taguatinga Vôlei (Quadra Misto) Rodada 1 - Grupo A (Jogo 2) Vôlei Misto A3 x Vôlei Misto A4",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000015",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-06T16:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 16:00 | Campus Taguatinga Vôlei (Quadra Misto) Rodada 1 - Grupo B (Jogo 1) Vôlei Misto B1 x Vôlei Misto B2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000016",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-06T17:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 17:00 | Campus Taguatinga Vôlei (Quadra Misto) Rodada 1 - Grupo B (Jogo 2) Vôlei Misto B3 x Vôlei Misto B4",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000017",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-09T08:30:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 08:30 | Campus São Sebastião Futsal Masculino Rodada 1 - Grupo A Futsal M-A1 x Futsal M-A2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000001",
        "partida_id": "00000000-0000-0000-0005-000000000017",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 1 - Grupo A Futsal M-A1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 1 - Grupo A Futsal M-A1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000002",
        "partida_id": "00000000-0000-0000-0005-000000000017",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-A2",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-A2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000018",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-09T09:30:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 09:30 | Campus São Sebastião Futsal Masculino Rodada 1 - Grupo B Futsal M-B1 x Futsal M-B2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000003",
        "partida_id": "00000000-0000-0000-0005-000000000018",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 1 - Grupo B Futsal M-B1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 1 - Grupo B Futsal M-B1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000004",
        "partida_id": "00000000-0000-0000-0005-000000000018",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-B2",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-B2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000019",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-09T10:30:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 10:30 | Campus São Sebastião Futsal Masculino Rodada 1 - Grupo C Futsal M-C1 x Futsal M-C2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000005",
        "partida_id": "00000000-0000-0000-0005-000000000019",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 1 - Grupo C Futsal M-C1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 1 - Grupo C Futsal M-C1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000006",
        "partida_id": "00000000-0000-0000-0005-000000000019",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-C2",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-C2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000020",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T08:30:00Z",
    "local_jogo": "Campus Gama Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:30 | Campus Gama Futsal Masculino Rodada 2 - Grupo A Futsal M-A2 x Futsal M-A3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000007",
        "partida_id": "00000000-0000-0000-0005-000000000020",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Futsal Masculino Rodada 2 - Grupo A Futsal M-A2",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Futsal Masculino Rodada 2 - Grupo A Futsal M-A2",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000008",
        "partida_id": "00000000-0000-0000-0005-000000000020",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-A3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-A3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000021",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T09:30:00Z",
    "local_jogo": "Campus Gama Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:30 | Campus Gama Futsal Masculino Rodada 2 - Grupo B Futsal M-B2 x Futsal M-B3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000009",
        "partida_id": "00000000-0000-0000-0005-000000000021",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Futsal Masculino Rodada 2 - Grupo B Futsal M-B2",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Futsal Masculino Rodada 2 - Grupo B Futsal M-B2",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000010",
        "partida_id": "00000000-0000-0000-0005-000000000021",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-B3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-B3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000022",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T10:30:00Z",
    "local_jogo": "Campus Gama Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:30 | Campus Gama Futsal Masculino Rodada 2 - Grupo C Futsal M-C2 x Futsal M-C3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000011",
        "partida_id": "00000000-0000-0000-0005-000000000022",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Futsal Masculino Rodada 2 - Grupo C Futsal M-C2",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Futsal Masculino Rodada 2 - Grupo C Futsal M-C2",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000012",
        "partida_id": "00000000-0000-0000-0005-000000000022",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-C3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-C3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000023",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-10T11:30:00Z",
    "local_jogo": "Campus Gama Futsal Feminino Triangular",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 11:30 | Campus Gama Futsal Feminino Triangular - Rodada 1 Futsal F1 x Futsal F2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000013",
        "partida_id": "00000000-0000-0000-0005-000000000023",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Futsal Feminino Triangular - Rodada 1 Futsal F1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Futsal Feminino Triangular - Rodada 1 Futsal F1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000014",
        "partida_id": "00000000-0000-0000-0005-000000000023",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal F2",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal F2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000024",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T14:00:00Z",
    "local_jogo": "Campus Gama V",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:00 | Campus Gama Vôlei (Quadra Misto) Rodada 2 - Grupo A (Jogo 1) Vôlei Misto A1 x Vôlei Misto A3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000025",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T15:00:00Z",
    "local_jogo": "Campus Gama V",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:00 | Campus Gama Vôlei (Quadra Misto) Rodada 2 - Grupo A (Jogo 2) Vôlei Misto A2 x Vôlei Misto A4",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000026",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T16:00:00Z",
    "local_jogo": "Campus Gama V",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 16:00 | Campus Gama Vôlei (Quadra Misto) Rodada 2 - Grupo B (Jogo 1) Vôlei Misto B1 x Vôlei Misto B3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000027",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T17:00:00Z",
    "local_jogo": "Campus Gama V",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 17:00 | Campus Gama Vôlei (Quadra Misto) Rodada 2 - Grupo B (Jogo 2) Vôlei Misto B2 x Vôlei Misto B4",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000028",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-11T08:30:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 08:30 | Campus Gama Queimada Mista Classificatória - Rodada 1 (Jogo 1) Queimada X1 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000029",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-11T08:50:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 08:50 | Campus Gama Queimada Mista Classificatória - Rodada 1 (Jogo 2) Queimada X2 x Queimada X5 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000030",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-11T09:10:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 09:10 | Campus Gama Queimada Mista Classificatória - Rodada 1 (Jogo 3) Queimada X3 x Queimada X4 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000031",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-11T09:30:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 09:30 | Campus Gama Queimada Mista Classificatória - Rodada 2 (Jogo 4) Queimada X1 x Queimada X5 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000032",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-11T09:50:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 09:50 | Campus Gama Queimada Mista Classificatória - Rodada 2 (Jogo 5) Queimada X4 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000033",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-11T10:10:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 10:10 | Campus Gama Queimada Mista Classificatória - Rodada 2 (Jogo 6) Queimada X2 x Queimada X3 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000034",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-11T10:30:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 10:30 | Campus Gama Queimada Mista Classificatória - Rodada 3 (Jogo 7) Queimada X1 x Queimada X4 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000035",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-11T10:50:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 10:50 | Campus Gama Queimada Mista Classificatória - Rodada 3 (Jogo 8) Queimada X3 x Queimada X5 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000036",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-11T11:10:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 11:10 | Campus Gama Queimada Mista Classificatória - Rodada 3 (Jogo 9) Queimada X2 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000037",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-11T14:00:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:00 | Campus Gama Queimada Mista Classificatória - Rodada 4 (Jogo 10) Queimada X1 x Queimada X3 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000038",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-11T14:20:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:20 | Campus Gama Queimada Mista Classificatória - Rodada 4 (Jogo 11) Queimada X2 x Queimada X4 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000039",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-11T14:40:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:40 | Campus Gama Queimada Mista Classificatória - Rodada 4 (Jogo 12) Queimada X5 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000040",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-11T15:00:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 15:00 | Campus Gama Queimada Mista Classificatória - Rodada 5 (Jogo 13) Queimada X1 x Queimada X2 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000041",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-11T15:20:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 15:20 | Campus Gama Queimada Mista Classificatória - Rodada 5 (Jogo 14) Queimada X3 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000042",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-11T15:40:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 15:40 | Campus Gama Queimada Mista Classificatória - Rodada 5 (Jogo 15) Queimada X4 x Queimada X5 (15 min corridos)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000043",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-11T16:15:00Z",
    "local_jogo": "Campus Gama Queimada Mista Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:15 | Campus Gama Queimada Mista Semifinal 1 (Jogo 16) 1º Geral Classificatória x 4º Geral Classificatória",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000044",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-11T16:35:00Z",
    "local_jogo": "Campus Gama Queimada Mista Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:35 | Campus Gama Queimada Mista Semifinal 2 (Jogo 17) 2º Geral Classificatória x 3º Geral Classificatória",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000045",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-11T16:55:00Z",
    "local_jogo": "Campus Gama Queimada Mista Disputa de",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:55 | Campus Gama Queimada Mista Disputa de 3º Lugar (Jogo 18) Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000015",
        "partida_id": "00000000-0000-0000-0005-000000000045",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000006",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000016",
        "partida_id": "00000000-0000-0000-0005-000000000045",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000006",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000046",
    "modalidade_id": "00000000-0000-0000-0002-000000000006",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-11T17:15:00Z",
    "local_jogo": "Campus Gama Queimada Mista Final",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 17:15 | Campus Gama Queimada Mista Final (Jogo 19) Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000006",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000017",
        "partida_id": "00000000-0000-0000-0005-000000000046",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000006",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000018",
        "partida_id": "00000000-0000-0000-0005-000000000046",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000006",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000047",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-12T08:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 08:30 | Campus Ceilândia Vôlei de Areia Misto Triangular - Rodada 2 Vôlei Areia X2 x Vôlei Areia X3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000048",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-12T09:15:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:15 | Campus Ceilândia Vôlei de Areia Masc. Rodada 3 - Grupo A Vôlei Areia M-A1 x Vôlei Areia M-A3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000049",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-12T10:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:00 | Campus Ceilândia Vôlei de Areia Masc. Rodada 3 - Grupo B Vôlei Areia M-B1 x Vôlei Areia M-B3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000050",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-12T10:45:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:45 | Campus Ceilândia Vôlei de Areia Masc. Rodada 3 - Grupo C Vôlei Areia M-C1 x Vôlei Areia M-C3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000051",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-12T11:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 11:30 | Campus Ceilândia Vôlei de Areia Masc. Rodada 2 - Grupo D Vôlei Areia M-D2 x Vôlei Areia M-D1",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000052",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-12T14:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:30 | Campus Ceilândia Vôlei de Areia Fem. Semifinal 2 Vôlei Areia F3 x Vôlei Areia F4",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000053",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-12T15:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:30 | Campus Ceilândia Vôlei de Areia Misto Triangular - Rodada 3 (Decisivo) Vôlei Areia X1 x Vôlei Areia X3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000054",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-13T14:00:00Z",
    "local_jogo": "Campus Planaltina V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 14:00 | Campus Planaltina Vôlei (Quadra Misto) Rodada 3 - Grupo A (Jogo 1) Vôlei Misto A1 x Vôlei Misto A4",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000055",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-13T15:00:00Z",
    "local_jogo": "Campus Planaltina V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 15:00 | Campus Planaltina Vôlei (Quadra Misto) Rodada 3 - Grupo A (Jogo 2) Vôlei Misto A2 x Vôlei Misto A3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000056",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-13T16:00:00Z",
    "local_jogo": "Campus Planaltina V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 16:00 | Campus Planaltina Vôlei (Quadra Misto) Rodada 3 - Grupo B (Jogo 1) Vôlei Misto B1 x Vôlei Misto B4",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000057",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-13T17:00:00Z",
    "local_jogo": "Campus Planaltina V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 17:00 | Campus Planaltina Vôlei (Quadra Misto) Rodada 3 - Grupo B (Jogo 2) Vôlei Misto B2 x Vôlei Misto B3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000058",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-16T14:30:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 14:30 | Campus Taguatinga Vôlei (Quadra Misto) Semifinal 1 1º Grupo A x 2º Grupo B",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000019",
        "partida_id": "00000000-0000-0000-0005-000000000058",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Semifinal 1 1º Grupo A",
        "vencedor": false,
        "equipe": {
          "nome": "Semifinal 1 1º Grupo A",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000003",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000020",
        "partida_id": "00000000-0000-0000-0005-000000000058",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Grupo B",
        "vencedor": false,
        "equipe": {
          "nome": "2º Grupo B",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000003",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000059",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-16T16:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 16:00 | Campus Taguatinga Vôlei (Quadra Misto) Semifinal 2 1º Grupo B x 2º Grupo A",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000021",
        "partida_id": "00000000-0000-0000-0005-000000000059",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Semifinal 2 1º Grupo B",
        "vencedor": false,
        "equipe": {
          "nome": "Semifinal 2 1º Grupo B",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000003",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000022",
        "partida_id": "00000000-0000-0000-0005-000000000059",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Grupo A",
        "vencedor": false,
        "equipe": {
          "nome": "2º Grupo A",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000003",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000060",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-17T08:30:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:30 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 1 (Jogo 1) Handebol X1 x Handebol X2 (2x15 min)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000061",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-17T09:20:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:20 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 1 (Jogo 2) Handebol X3 x Handebol X4 (2x15 min)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000062",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-17T10:30:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:30 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 2 (Jogo 3) Handebol X1 x Handebol X3 (2x15 min)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000063",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-17T11:20:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 11:20 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 2 (Jogo 4) Handebol X2 x Handebol X4 (2x15 min)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000064",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-17T14:30:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:30 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 3 (Jogo 5) Handebol X1 x Handebol X4 (Descanso de 3h)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000065",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-17T15:20:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:20 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 3 (Jogo 6) Handebol X2 x Handebol X3 (Descanso de 3h)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000066",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-17T16:30:00Z",
    "local_jogo": "Campus Planaltina Futsal Feminino Triangular",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 16:30 | Campus Planaltina Futsal Feminino Triangular - Rodada 2 Futsal F2 x Futsal F3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000023",
        "partida_id": "00000000-0000-0000-0005-000000000066",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Planaltina Futsal Feminino Triangular - Rodada 2 Futsal F2",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Planaltina Futsal Feminino Triangular - Rodada 2 Futsal F2",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000024",
        "partida_id": "00000000-0000-0000-0005-000000000066",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal F3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal F3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000067",
    "modalidade_id": "00000000-0000-0000-0002-000000000011",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-18T14:00:00Z",
    "local_jogo": "Campus Brasília Natação Finais Diretas Cronometradas",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:00 | Campus Brasília Natação Finais Diretas Cronometradas 25m Livre, 50m Livre e 100m Livre (Masc. e Fem.)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000011",
      "nome": "Natação",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Waves",
      "formato_disputa": "Provas de 25m, 50m e 100m Livre no Campus Brasília",
      "total_vagas_ou_inscritos": 33
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000068",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T08:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 08:30 | Campus Ceilândia Vôlei de Areia Fem. Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000025",
        "partida_id": "00000000-0000-0000-0005-000000000068",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lei de Areia Fem. Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "lei de Areia Fem. Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000026",
        "partida_id": "00000000-0000-0000-0005-000000000068",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000069",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T09:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:30 | Campus Ceilândia Vôlei de Areia Masc. Semifinal 1 1º Geral x Melhor 2º Colocado Geral",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000027",
        "partida_id": "00000000-0000-0000-0005-000000000069",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lei de Areia Masc. Semifinal 1 1º Geral",
        "vencedor": false,
        "equipe": {
          "nome": "lei de Areia Masc. Semifinal 1 1º Geral",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000028",
        "partida_id": "00000000-0000-0000-0005-000000000069",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Melhor 2º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "Melhor 2º Colocado Geral",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000070",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T10:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:30 | Campus Ceilândia Vôlei de Areia Masc. Semifinal 2 2º Geral x 3º Geral",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000029",
        "partida_id": "00000000-0000-0000-0005-000000000070",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lei de Areia Masc. Semifinal 2 2º Geral",
        "vencedor": false,
        "equipe": {
          "nome": "lei de Areia Masc. Semifinal 2 2º Geral",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000030",
        "partida_id": "00000000-0000-0000-0005-000000000070",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "3º Geral",
        "vencedor": false,
        "equipe": {
          "nome": "3º Geral",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000071",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T14:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:30 | Campus Ceilândia Vôlei de Areia Masc. Disputa de 3º Lugar (Descanso de 4h) Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000031",
        "partida_id": "00000000-0000-0000-0005-000000000071",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000032",
        "partida_id": "00000000-0000-0000-0005-000000000071",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000072",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T15:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:30 | Campus Ceilândia Vôlei de Areia Masc. Final (Descanso de 4h) Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000033",
        "partida_id": "00000000-0000-0000-0005-000000000072",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000034",
        "partida_id": "00000000-0000-0000-0005-000000000072",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000073",
    "modalidade_id": "00000000-0000-0000-0002-000000000002",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T16:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 16:30 | Campus Ceilândia Vôlei de Areia Fem. Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000002",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000035",
        "partida_id": "00000000-0000-0000-0005-000000000073",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lei de Areia Fem. Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "lei de Areia Fem. Final Vencedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000036",
        "partida_id": "00000000-0000-0000-0005-000000000073",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000002",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000074",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-23T14:30:00Z",
    "local_jogo": "Campus Taguatinga Handebol Misto Adaptado Semifinal",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 14:30 | Campus Taguatinga Handebol Misto Adaptado Semifinal 1 1º Colocado Geral x 4º Colocado Geral",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000037",
        "partida_id": "00000000-0000-0000-0005-000000000074",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Taguatinga Handebol Misto Adaptado Semifinal 1 1º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Taguatinga Handebol Misto Adaptado Semifinal 1 1º Colocado Geral",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000005",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000038",
        "partida_id": "00000000-0000-0000-0005-000000000074",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "4º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "4º Colocado Geral",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000005",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000075",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-23T15:30:00Z",
    "local_jogo": "Campus Taguatinga Handebol Misto Adaptado Semifinal",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 15:30 | Campus Taguatinga Handebol Misto Adaptado Semifinal 2 2º Colocado Geral x 3º Colocado Geral",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000039",
        "partida_id": "00000000-0000-0000-0005-000000000075",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Taguatinga Handebol Misto Adaptado Semifinal 2 2º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Taguatinga Handebol Misto Adaptado Semifinal 2 2º Colocado Geral",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000005",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000040",
        "partida_id": "00000000-0000-0000-0005-000000000075",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "3º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "3º Colocado Geral",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000005",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000076",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T08:30:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:30 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo A - Jogo 1) Basquete 3x3 M-A1 x Basquete 3x3 M-A2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000041",
        "partida_id": "00000000-0000-0000-0005-000000000076",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000042",
        "partida_id": "00000000-0000-0000-0005-000000000076",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000077",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T08:50:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:50 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo B - Jogo 1) Basquete 3x3 M-B1 x Basquete 3x3 M-B2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000043",
        "partida_id": "00000000-0000-0000-0005-000000000077",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000044",
        "partida_id": "00000000-0000-0000-0005-000000000077",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000078",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-24T09:10:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:10 | Campus Gama Basquete 3x3 Misto Triangular (Jogo 1) Basquete 3x3 X1 x Basquete 3x3 X2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000045",
        "partida_id": "00000000-0000-0000-0005-000000000078",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000046",
        "partida_id": "00000000-0000-0000-0005-000000000078",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000079",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T09:30:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:30 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo A - Jogo 2) Basquete 3x3 M-A2 x Basquete 3x3 M-A3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000047",
        "partida_id": "00000000-0000-0000-0005-000000000079",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A2",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000048",
        "partida_id": "00000000-0000-0000-0005-000000000079",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000080",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T09:50:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:50 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo B - Jogo 2) Basquete 3x3 M-B2 x Basquete 3x3 M-B3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000049",
        "partida_id": "00000000-0000-0000-0005-000000000080",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B2",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000050",
        "partida_id": "00000000-0000-0000-0005-000000000080",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000081",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-24T10:10:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:10 | Campus Gama Basquete 3x3 Misto Triangular (Jogo 2) Basquete 3x3 X2 x Basquete 3x3 X3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000051",
        "partida_id": "00000000-0000-0000-0005-000000000081",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X2",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000052",
        "partida_id": "00000000-0000-0000-0005-000000000081",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000082",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T10:30:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:30 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo A - Jogo 3) Basquete 3x3 M-A1 x Basquete 3x3 M-A3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000053",
        "partida_id": "00000000-0000-0000-0005-000000000082",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000054",
        "partida_id": "00000000-0000-0000-0005-000000000082",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000083",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T10:50:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:50 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo B - Jogo 3) Basquete 3x3 M-B1 x Basquete 3x3 M-B3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000055",
        "partida_id": "00000000-0000-0000-0005-000000000083",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000056",
        "partida_id": "00000000-0000-0000-0005-000000000083",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000084",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-24T11:10:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 11:10 | Campus Gama Basquete 3x3 Misto Triangular (Jogo 3) Basquete 3x3 X1 x Basquete 3x3 X3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000057",
        "partida_id": "00000000-0000-0000-0005-000000000084",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000058",
        "partida_id": "00000000-0000-0000-0005-000000000084",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000085",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-24T14:00:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:00 | Campus Gama Basquete 3x3 Masc. Semifinal 1 1º Grupo A x 2º Grupo B",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000059",
        "partida_id": "00000000-0000-0000-0005-000000000085",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Masc. Semifinal 1 1º Grupo A",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Masc. Semifinal 1 1º Grupo A",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000060",
        "partida_id": "00000000-0000-0000-0005-000000000085",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Grupo B",
        "vencedor": false,
        "equipe": {
          "nome": "2º Grupo B",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000086",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-24T14:25:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:25 | Campus Gama Basquete 3x3 Masc. Semifinal 2 1º Grupo B x 2º Grupo A",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000061",
        "partida_id": "00000000-0000-0000-0005-000000000086",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Masc. Semifinal 2 1º Grupo B",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Masc. Semifinal 2 1º Grupo B",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000062",
        "partida_id": "00000000-0000-0000-0005-000000000086",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Grupo A",
        "vencedor": false,
        "equipe": {
          "nome": "2º Grupo A",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000087",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Final",
    "rodada": 1,
    "data_hora": "2026-11-24T14:50:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:50 | Campus Gama Basquete 3x3 Misto Final 1º do Triangular x 2º do Triangular",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000063",
        "partida_id": "00000000-0000-0000-0005-000000000087",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Misto Final 1º do Triangular",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Misto Final 1º do Triangular",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000064",
        "partida_id": "00000000-0000-0000-0005-000000000087",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º do Triangular",
        "vencedor": false,
        "equipe": {
          "nome": "2º do Triangular",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000088",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-24T15:15:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:15 | Campus Gama Basquete 3x3 Masc. Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000065",
        "partida_id": "00000000-0000-0000-0005-000000000088",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Masc. Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Masc. Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000066",
        "partida_id": "00000000-0000-0000-0005-000000000088",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000089",
    "modalidade_id": "00000000-0000-0000-0002-000000000004",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-24T15:40:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:40 | Campus Gama Basquete 3x3 Masc. Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000004",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000067",
        "partida_id": "00000000-0000-0000-0005-000000000089",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Masc. Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Masc. Final Vencedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000068",
        "partida_id": "00000000-0000-0000-0005-000000000089",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000004",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000090",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-25T14:00:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:00 | Campus São Sebastião Futsal Masculino Rodada 3 - Grupo A Futsal M-A1 x Futsal M-A3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000069",
        "partida_id": "00000000-0000-0000-0005-000000000090",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 3 - Grupo A Futsal M-A1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 3 - Grupo A Futsal M-A1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000070",
        "partida_id": "00000000-0000-0000-0005-000000000090",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-A3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-A3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000091",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-25T15:00:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 15:00 | Campus São Sebastião Futsal Masculino Rodada 3 - Grupo B Futsal M-B1 x Futsal M-B3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000071",
        "partida_id": "00000000-0000-0000-0005-000000000091",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 3 - Grupo B Futsal M-B1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 3 - Grupo B Futsal M-B1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000072",
        "partida_id": "00000000-0000-0000-0005-000000000091",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-B3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-B3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000092",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-25T16:00:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:00 | Campus São Sebastião Futsal Masculino Rodada 3 - Grupo C Futsal M-C1 x Futsal M-C3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000073",
        "partida_id": "00000000-0000-0000-0005-000000000092",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 3 - Grupo C Futsal M-C1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 3 - Grupo C Futsal M-C1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000074",
        "partida_id": "00000000-0000-0000-0005-000000000092",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-C3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-C3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000093",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-25T17:00:00Z",
    "local_jogo": "Campus São Sebastião Futsal Feminino Triangular",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 17:00 | Campus São Sebastião Futsal Feminino Triangular - Rodada 3 (Decisivo) Futsal F1 x Futsal F3",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000075",
        "partida_id": "00000000-0000-0000-0005-000000000093",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal F1",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal F1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000076",
        "partida_id": "00000000-0000-0000-0005-000000000093",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal F3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal F3",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000094",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-26T08:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 08:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 1 (Jogo 1) Futevôlei M1 x Futevôlei M2 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000095",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-26T09:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 1 (Jogo 2) Futevôlei M3 x Futevôlei M4 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000096",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-26T09:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 2 (Jogo 3) Futevôlei M1 x Futevôlei M5 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000097",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-26T10:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 2 (Jogo 4) Futevôlei M2 x Futevôlei M3 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000098",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-26T10:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 3 (Jogo 5) Futevôlei M4 x Futevôlei M5 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000099",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Final",
    "rodada": 1,
    "data_hora": "2026-11-26T11:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 11:00 | Campus Ceilândia Futevôlei Misto Final Única (Melhor de 3 sets de 12 pts) Futevôlei X1 x Futevôlei X2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000100",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-26T14:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 3 (Jogo 6) Futevôlei M1 x Futevôlei M3 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000101",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-26T14:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 4 (Jogo 7) Futevôlei M2 x Futevôlei M5 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000102",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-26T15:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 4 (Jogo 8) Futevôlei M1 x Futevôlei M4 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000103",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-26T15:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 5 (Jogo 9) Futevôlei M3 x Futevôlei M5 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000104",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-26T16:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 16:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 5 (Jogo 10) Futevôlei M2 x Futevôlei M4 (1 set de 18 pts)",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000105",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-27T15:00:00Z",
    "local_jogo": "Campus Planaltina Futsal Masculino Playoff Preliminar",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 15:00 | Campus Planaltina Futsal Masculino Playoff Preliminar (2ºs Colocados) 2º Melhor 2º Colocado x 3º Melhor 2º Colocado",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000077",
        "partida_id": "00000000-0000-0000-0005-000000000105",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Melhor 2º Colocado",
        "vencedor": false,
        "equipe": {
          "nome": "2º Melhor 2º Colocado",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000078",
        "partida_id": "00000000-0000-0000-0005-000000000105",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "3º Melhor 2º Colocado",
        "vencedor": false,
        "equipe": {
          "nome": "3º Melhor 2º Colocado",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000106",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-1T15:00:00Z",
    "local_jogo": "Campus Brasília Futsal Masculino Playoff Final",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:00 | Campus Brasília Futsal Masculino Playoff Final (Vaga na Semifinal) 1º Melhor 2º Colocado x Vencedor Playoff Preliminar",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000079",
        "partida_id": "00000000-0000-0000-0005-000000000106",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "1º Melhor 2º Colocado",
        "vencedor": false,
        "equipe": {
          "nome": "1º Melhor 2º Colocado",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000080",
        "partida_id": "00000000-0000-0000-0005-000000000106",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Playoff Preliminar",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Playoff Preliminar",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000107",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-2T14:30:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:30 | Campus Taguatinga Vôlei (Quadra Misto) Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000081",
        "partida_id": "00000000-0000-0000-0005-000000000107",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000003",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000082",
        "partida_id": "00000000-0000-0000-0005-000000000107",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000003",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000108",
    "modalidade_id": "00000000-0000-0000-0002-000000000003",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-2T16:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:00 | Campus Taguatinga Vôlei (Quadra Misto) Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000003",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000083",
        "partida_id": "00000000-0000-0000-0005-000000000108",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Final Vencedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000003",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000084",
        "partida_id": "00000000-0000-0000-0005-000000000108",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000003",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000109",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-03T14:00:00Z",
    "local_jogo": "Campus Estrutural Handebol Misto Adaptado Disputa de",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:00 | Campus Estrutural Handebol Misto Adaptado Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000085",
        "partida_id": "00000000-0000-0000-0005-000000000109",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Estrutural Handebol Misto Adaptado Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Estrutural Handebol Misto Adaptado Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000005",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000086",
        "partida_id": "00000000-0000-0000-0005-000000000109",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000005",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000110",
    "modalidade_id": "00000000-0000-0000-0002-000000000005",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-03T15:00:00Z",
    "local_jogo": "Campus Estrutural Handebol Misto Adaptado Final Vencedor Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:00 | Campus Estrutural Handebol Misto Adaptado Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000005",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000087",
        "partida_id": "00000000-0000-0000-0005-000000000110",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Estrutural Handebol Misto Adaptado Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Estrutural Handebol Misto Adaptado Final Vencedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000005",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000088",
        "partida_id": "00000000-0000-0000-0005-000000000110",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000005",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000111",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-03T16:00:00Z",
    "local_jogo": "Campus Estrutural Futsal Masculino Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 16:00 | Campus Estrutural Futsal Masculino Semifinal 1 1º Colocado Geral entre Líderes x Vencedor do Playoff",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000089",
        "partida_id": "00000000-0000-0000-0005-000000000111",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "deres",
        "vencedor": false,
        "equipe": {
          "nome": "deres",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000090",
        "partida_id": "00000000-0000-0000-0005-000000000111",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor do Playoff",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor do Playoff",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000112",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-03T17:00:00Z",
    "local_jogo": "Campus Estrutural Futsal Masculino Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 17:00 | Campus Estrutural Futsal Masculino Semifinal 2 2º Colocado Geral entre Líderes x 3º Colocado Geral entre Líderes",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": []
  },
  {
    "id": "00000000-0000-0000-0005-000000000113",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-04T14:30:00Z",
    "local_jogo": "Campus Brasília Futsal Masculino Disputa de",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 14:30 | Campus Brasília Futsal Masculino Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000091",
        "partida_id": "00000000-0000-0000-0005-000000000113",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lia Futsal Masculino Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "lia Futsal Masculino Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000092",
        "partida_id": "00000000-0000-0000-0005-000000000113",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  },
  {
    "id": "00000000-0000-0000-0005-000000000114",
    "modalidade_id": "00000000-0000-0000-0002-000000000001",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-04T16:00:00Z",
    "local_jogo": "Campus Brasília Futsal Masculino Final Vencedor Semifinal",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 16:00 | Campus Brasília Futsal Masculino Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "00000000-0000-0000-0002-000000000001",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "00000000-0000-0000-0006-000000000093",
        "partida_id": "00000000-0000-0000-0005-000000000114",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lia Futsal Masculino Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "lia Futsal Masculino Final Vencedor Semifinal 1",
          "id": "00000000-0000-0000-0003-000000000998",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "00000000-0000-0000-0006-000000000094",
        "partida_id": "00000000-0000-0000-0005-000000000114",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "00000000-0000-0000-0003-000000000999",
          "modalidade_id": "00000000-0000-0000-0002-000000000001",
          "campus_id": "00000000-0000-0000-0001-000000000011",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      }
    ]
  }
];
