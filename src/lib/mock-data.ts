// Dados Oficiais do JIS-IFB 2026 (Portaria nº 2245/2026, Sorteios do Congresso Técnico e Cronograma Final)
import { Campus, Modalidade, Equipe, Partida, ComissaoOrganizadora, PontuacaoGeralCampus, ParticipanteIndividual } from '@/types';

export const CAMPI: Campus[] = [
  {
    "id": "1",
    "nome": "Campus Brasília",
    "sigla": "CBRA",
    "cor_primaria": "#288C28"
  },
  {
    "id": "2",
    "nome": "Campus Ceilândia",
    "sigla": "CCEI",
    "cor_primaria": "#1E2D3C"
  },
  {
    "id": "3",
    "nome": "Campus Estrutural",
    "sigla": "CEST",
    "cor_primaria": "#E1D287"
  },
  {
    "id": "4",
    "nome": "Campus Gama",
    "sigla": "CGAM",
    "cor_primaria": "#C81414"
  },
  {
    "id": "5",
    "nome": "Campus Planaltina",
    "sigla": "CPLA",
    "cor_primaria": "#78A55A"
  },
  {
    "id": "6",
    "nome": "Campus Recanto das Emas",
    "sigla": "CREC",
    "cor_primaria": "#F57656"
  },
  {
    "id": "7",
    "nome": "Campus Riacho Fundo",
    "sigla": "CRIA",
    "cor_primaria": "#349738"
  },
  {
    "id": "8",
    "nome": "Campus Samambaia",
    "sigla": "CSAM",
    "cor_primaria": "#1E2D3C"
  },
  {
    "id": "9",
    "nome": "Campus São Sebastião",
    "sigla": "CSSE",
    "cor_primaria": "#288C28"
  },
  {
    "id": "10",
    "nome": "Campus Taguatinga",
    "sigla": "CTAG",
    "cor_primaria": "#C81414"
  },
  {
    "id": "11",
    "nome": "Reitoria",
    "sigla": "REIT",
    "cor_primaria": "#1E2D3C"
  }
];

export const MODALIDADES: Modalidade[] = [
  {
    "id": "1",
    "nome": "Futsal",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Trophy",
    "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
    "total_vagas_ou_inscritos": 12
  },
  {
    "id": "2",
    "nome": "Vôlei de Areia",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Sun",
    "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
    "total_vagas_ou_inscritos": 16
  },
  {
    "id": "3",
    "nome": "Vôlei de Quadra",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Volleyball",
    "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
    "total_vagas_ou_inscritos": 8
  },
  {
    "id": "4",
    "nome": "Basquete 3x3",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Target",
    "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
    "total_vagas_ou_inscritos": 9
  },
  {
    "id": "5",
    "nome": "Handebol",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Award",
    "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
    "total_vagas_ou_inscritos": 4
  },
  {
    "id": "6",
    "nome": "Queimada",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Flame",
    "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
    "total_vagas_ou_inscritos": 6
  },
  {
    "id": "7",
    "nome": "Futevôlei",
    "tipo": "COLETIVA",
    "categoria": "MISTO",
    "icone": "Footprints",
    "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
    "total_vagas_ou_inscritos": 7
  },
  {
    "id": "8",
    "nome": "Tênis de Mesa",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "CircleDot",
    "formato_disputa": "Torneio Feminino Exclusivo e Categoria Absoluto",
    "total_vagas_ou_inscritos": 23
  },
  {
    "id": "9",
    "nome": "Xadrez",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "Crown",
    "formato_disputa": "Sistema Suíço em 5 Rodadas (10-15 min nocaute)",
    "total_vagas_ou_inscritos": 23
  },
  {
    "id": "10",
    "nome": "Damas",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "Grid3X3",
    "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
    "total_vagas_ou_inscritos": 8
  },
  {
    "id": "11",
    "nome": "Natação",
    "tipo": "INDIVIDUAL",
    "categoria": "MISTO",
    "icone": "Waves",
    "formato_disputa": "Provas de 25m, 50m e 100m Livre no Campus Brasília",
    "total_vagas_ou_inscritos": 33
  },
  {
    "id": "12",
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
    "campus_id": "1",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "1",
      "nome": "Campus Brasília",
      "sigla": "CBRA",
      "cor_primaria": "#288C28"
    }
  },
  {
    "campus_id": "2",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    }
  },
  {
    "campus_id": "3",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    }
  },
  {
    "campus_id": "4",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "4",
      "nome": "Campus Gama",
      "sigla": "CGAM",
      "cor_primaria": "#C81414"
    }
  },
  {
    "campus_id": "5",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "5",
      "nome": "Campus Planaltina",
      "sigla": "CPLA",
      "cor_primaria": "#78A55A"
    }
  },
  {
    "campus_id": "6",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "6",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    }
  },
  {
    "campus_id": "7",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "7",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    }
  },
  {
    "campus_id": "8",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "8",
      "nome": "Campus Samambaia",
      "sigla": "CSAM",
      "cor_primaria": "#1E2D3C"
    }
  },
  {
    "campus_id": "9",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "9",
      "nome": "Campus São Sebastião",
      "sigla": "CSSE",
      "cor_primaria": "#288C28"
    }
  },
  {
    "campus_id": "10",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "10",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    }
  },
  {
    "campus_id": "11",
    "pontos_acumulados": 0,
    "ouros": 0,
    "pratas": 0,
    "bronzes": 0,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    }
  }
];

export const COMISSAO_EXEMPLO: ComissaoOrganizadora[] = [
  {
    "id": "com_1",
    "nome": "ARTUR LOPES DIAS",
    "matricula": "3008960",
    "funcao": "Membro",
    "lotacao_campus_id": "3",
    "subcomissao_modalidade_id": "4",
    "subcomissao_nome": "Basquete",
    "contato": "3008960@ifb.edu.br",
    "lotacao": {
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "subcomissao": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "com_2",
    "nome": "THIAGO SILVA ROCHA",
    "matricula": "3277783",
    "funcao": "Membro",
    "lotacao_campus_id": "3",
    "subcomissao_modalidade_id": "4",
    "subcomissao_nome": "Basquete",
    "contato": "3277783@ifb.edu.br",
    "lotacao": {
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "subcomissao": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "com_3",
    "nome": "MONICA LUCIANA DA SILVA PEREIRA",
    "matricula": "1154917",
    "funcao": "Membro",
    "lotacao_campus_id": "8",
    "subcomissao_modalidade_id": "12",
    "subcomissao_nome": "Caminhada/Corrida",
    "contato": "1154917@ifb.edu.br",
    "lotacao": {
      "id": "8",
      "nome": "Campus Samambaia",
      "sigla": "CSAM",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "12",
      "nome": "Caminhada e Corrida",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Timer",
      "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
      "total_vagas_ou_inscritos": 104
    }
  },
  {
    "id": "com_4",
    "nome": "DANIELE RAMOS SIMOES",
    "matricula": "1687806",
    "funcao": "Membro",
    "lotacao_campus_id": "11",
    "subcomissao_modalidade_id": "12",
    "subcomissao_nome": "Caminhada/Corrida",
    "contato": "1687806@ifb.edu.br",
    "lotacao": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "12",
      "nome": "Caminhada e Corrida",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Timer",
      "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
      "total_vagas_ou_inscritos": 104
    }
  },
  {
    "id": "com_5",
    "nome": "EVERGLAD ARIADNE DE SOUZA",
    "matricula": "2275761",
    "funcao": "Membro",
    "lotacao_campus_id": "11",
    "subcomissao_modalidade_id": "12",
    "subcomissao_nome": "Caminhada/Corrida",
    "contato": "2275761@ifb.edu.br",
    "lotacao": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "12",
      "nome": "Caminhada e Corrida",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Timer",
      "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
      "total_vagas_ou_inscritos": 104
    }
  },
  {
    "id": "com_6",
    "nome": "TATIANA FARIAS DE SOUSA",
    "matricula": "2221839",
    "funcao": "Membro",
    "lotacao_campus_id": "11",
    "subcomissao_modalidade_id": "12",
    "subcomissao_nome": "Caminhada/Corrida",
    "contato": "2221839@ifb.edu.br",
    "lotacao": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "12",
      "nome": "Caminhada e Corrida",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Timer",
      "formato_disputa": "Etapa participativa e integração no Parque da Cidade",
      "total_vagas_ou_inscritos": 104
    }
  },
  {
    "id": "com_7",
    "nome": "JEFFERSON SAMPAIO DE MOURA",
    "matricula": "2786156",
    "funcao": "Membro",
    "lotacao_campus_id": "9",
    "subcomissao_modalidade_id": null,
    "subcomissao_nome": "Coordenação",
    "contato": "2786156@ifb.edu.br",
    "lotacao": {
      "id": "9",
      "nome": "Campus São Sebastião",
      "sigla": "CSSE",
      "cor_primaria": "#288C28"
    },
    "subcomissao": null
  },
  {
    "id": "com_8",
    "nome": "JOSE ANDERSON DE FREITAS SILVA",
    "matricula": "3969720",
    "funcao": "Presidente",
    "lotacao_campus_id": "11",
    "subcomissao_modalidade_id": null,
    "subcomissao_nome": "Coordenação",
    "contato": "3969720@ifb.edu.br",
    "lotacao": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": null
  },
  {
    "id": "com_9",
    "nome": "ADILSON CESAR DE ARAUJO",
    "matricula": "1845396",
    "funcao": "Membro",
    "lotacao_campus_id": "11",
    "subcomissao_modalidade_id": null,
    "subcomissao_nome": "Coordenação",
    "contato": "1845396@ifb.edu.br",
    "lotacao": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": null
  },
  {
    "id": "com_10",
    "nome": "ERIC JEFFERSON MATIAS LUZ",
    "matricula": "1334622",
    "funcao": "Membro",
    "lotacao_campus_id": "1",
    "subcomissao_modalidade_id": "1",
    "subcomissao_nome": "Futsal",
    "contato": "1334622@ifb.edu.br",
    "lotacao": {
      "id": "1",
      "nome": "Campus Brasília",
      "sigla": "CBRA",
      "cor_primaria": "#288C28"
    },
    "subcomissao": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "com_11",
    "nome": "FILIPE PINHEIRO BRANDAO",
    "matricula": "3524433",
    "funcao": "Membro",
    "lotacao_campus_id": "1",
    "subcomissao_modalidade_id": "1",
    "subcomissao_nome": "Futsal",
    "contato": "3524433@ifb.edu.br",
    "lotacao": {
      "id": "1",
      "nome": "Campus Brasília",
      "sigla": "CBRA",
      "cor_primaria": "#288C28"
    },
    "subcomissao": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "com_12",
    "nome": "HUGO SILVA NOLETO",
    "matricula": "3007619",
    "funcao": "Membro",
    "lotacao_campus_id": "6",
    "subcomissao_modalidade_id": "5",
    "subcomissao_nome": "Handebol",
    "contato": "3007619@ifb.edu.br",
    "lotacao": {
      "id": "6",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "subcomissao": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "com_13",
    "nome": "CLEBER DOS SANTOS FERREIRA",
    "matricula": "3008104",
    "funcao": "Membro",
    "lotacao_campus_id": "4",
    "subcomissao_modalidade_id": "5",
    "subcomissao_nome": "Handebol",
    "contato": "3008104@ifb.edu.br",
    "lotacao": {
      "id": "4",
      "nome": "Campus Gama",
      "sigla": "CGAM",
      "cor_primaria": "#C81414"
    },
    "subcomissao": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "com_14",
    "nome": "GIANO LUIS COPETTI",
    "matricula": "1870044",
    "funcao": "Membro",
    "lotacao_campus_id": "3",
    "subcomissao_modalidade_id": "11",
    "subcomissao_nome": "Natação",
    "contato": "1870044@ifb.edu.br",
    "lotacao": {
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "subcomissao": {
      "id": "11",
      "nome": "Natação",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Waves",
      "formato_disputa": "Provas de 25m, 50m e 100m Livre no Campus Brasília",
      "total_vagas_ou_inscritos": 33
    }
  },
  {
    "id": "com_15",
    "nome": "VANESSA FONSECA MACHADO",
    "matricula": "3054757",
    "funcao": "Membro",
    "lotacao_campus_id": "3",
    "subcomissao_modalidade_id": "6",
    "subcomissao_nome": "Queimada",
    "contato": "3054757@ifb.edu.br",
    "lotacao": {
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "subcomissao": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "com_16",
    "nome": "VANESSA DE DEUS DE MENDONCA",
    "matricula": "1957411",
    "funcao": "Membro",
    "lotacao_campus_id": "10",
    "subcomissao_modalidade_id": "6",
    "subcomissao_nome": "Queimada",
    "contato": "1957411@ifb.edu.br",
    "lotacao": {
      "id": "10",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    },
    "subcomissao": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "com_17",
    "nome": "LEONARDO PIMENTA DIAS",
    "matricula": "1758194",
    "funcao": "Membro",
    "lotacao_campus_id": "8",
    "subcomissao_modalidade_id": "8",
    "subcomissao_nome": "Tênis de Mesa / Xadrez / Damas",
    "contato": "1758194@ifb.edu.br",
    "lotacao": {
      "id": "8",
      "nome": "Campus Samambaia",
      "sigla": "CSAM",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "8",
      "nome": "Tênis de Mesa",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "CircleDot",
      "formato_disputa": "Torneio Feminino Exclusivo e Categoria Absoluto",
      "total_vagas_ou_inscritos": 23
    }
  },
  {
    "id": "com_18",
    "nome": "MILENNA MILHOMEM SENA",
    "matricula": "1596461",
    "funcao": "Membro",
    "lotacao_campus_id": "8",
    "subcomissao_modalidade_id": "8",
    "subcomissao_nome": "Tênis de Mesa / Xadrez / Damas",
    "contato": "1596461@ifb.edu.br",
    "lotacao": {
      "id": "8",
      "nome": "Campus Samambaia",
      "sigla": "CSAM",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "8",
      "nome": "Tênis de Mesa",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "CircleDot",
      "formato_disputa": "Torneio Feminino Exclusivo e Categoria Absoluto",
      "total_vagas_ou_inscritos": 23
    }
  },
  {
    "id": "com_19",
    "nome": "GEOVANI BERNARDES DIAS JUNIOR",
    "matricula": "3543173",
    "funcao": "Membro",
    "lotacao_campus_id": "9",
    "subcomissao_modalidade_id": "3",
    "subcomissao_nome": "Vôlei",
    "contato": "3543173@ifb.edu.br",
    "lotacao": {
      "id": "9",
      "nome": "Campus São Sebastião",
      "sigla": "CSSE",
      "cor_primaria": "#288C28"
    },
    "subcomissao": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "com_20",
    "nome": "VANESSA SOARES DOS SANTOS",
    "matricula": "1239527",
    "funcao": "Membro",
    "lotacao_campus_id": "9",
    "subcomissao_modalidade_id": "3",
    "subcomissao_nome": "Vôlei",
    "contato": "1239527@ifb.edu.br",
    "lotacao": {
      "id": "9",
      "nome": "Campus São Sebastião",
      "sigla": "CSSE",
      "cor_primaria": "#288C28"
    },
    "subcomissao": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "com_21",
    "nome": "GILCEMAR DA SILVA BORGES JUNIOR",
    "matricula": "2318777",
    "funcao": "Membro",
    "lotacao_campus_id": "2",
    "subcomissao_modalidade_id": "2",
    "subcomissao_nome": "Vôlei de Areia e Futevôlei",
    "contato": "2318777@ifb.edu.br",
    "lotacao": {
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "com_22",
    "nome": "MICHEL SANTOS DA SILVA",
    "matricula": "1262668",
    "funcao": "Membro",
    "lotacao_campus_id": "2",
    "subcomissao_modalidade_id": "2",
    "subcomissao_nome": "Vôlei de Areia e Futevôlei",
    "contato": "1262668@ifb.edu.br",
    "lotacao": {
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "subcomissao": {
      "id": "2",
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
    "id": "part_damas_1",
    "modalidade_id": "10",
    "campus_id": "11",
    "nome": "Marcio Giacomin Pinho",
    "matricula": "3000001",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "10",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "part_damas_2",
    "modalidade_id": "10",
    "campus_id": "11",
    "nome": "Artur Lopes Dias",
    "matricula": "3000002",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "10",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "part_damas_3",
    "modalidade_id": "10",
    "campus_id": "11",
    "nome": "André Gondim do Rego",
    "matricula": "3000003",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "10",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "part_damas_4",
    "modalidade_id": "10",
    "campus_id": "11",
    "nome": "Joádson Rodrigues da Silva Freitas",
    "matricula": "3000004",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "10",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "part_damas_5",
    "modalidade_id": "10",
    "campus_id": "11",
    "nome": "Wellington Marciel",
    "matricula": "3000005",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "10",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "part_damas_6",
    "modalidade_id": "10",
    "campus_id": "11",
    "nome": "Denis Marques Ferreira",
    "matricula": "3000006",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "10",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "part_damas_7",
    "modalidade_id": "10",
    "campus_id": "11",
    "nome": "Daniel Evangelista Monteiro",
    "matricula": "3000007",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "10",
      "nome": "Damas",
      "tipo": "INDIVIDUAL",
      "categoria": "MISTO",
      "icone": "Grid3X3",
      "formato_disputa": "Fase de Grupos (Chaves de 4) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "part_damas_8",
    "modalidade_id": "10",
    "campus_id": "11",
    "nome": "Samuel Gabriel Assis",
    "matricula": "3000008",
    "categoria": "MISTO",
    "colocacao_final": null,
    "campus": {
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "10",
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
    "id": "eq_1",
    "modalidade_id": "1",
    "campus_id": "5",
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
      "id": "5",
      "nome": "Campus Planaltina",
      "sigla": "CPLA",
      "cor_primaria": "#78A55A"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_2",
    "modalidade_id": "1",
    "campus_id": "2",
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
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_3",
    "modalidade_id": "1",
    "campus_id": "4",
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
      "id": "4",
      "nome": "Campus Gama",
      "sigla": "CGAM",
      "cor_primaria": "#C81414"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_4",
    "modalidade_id": "1",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_5",
    "modalidade_id": "1",
    "campus_id": "6",
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
      "id": "6",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_6",
    "modalidade_id": "1",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_7",
    "modalidade_id": "1",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_8",
    "modalidade_id": "1",
    "campus_id": "7",
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
      "id": "7",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_9",
    "modalidade_id": "1",
    "campus_id": "3",
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
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_10",
    "modalidade_id": "1",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_11",
    "modalidade_id": "1",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_12",
    "modalidade_id": "1",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    }
  },
  {
    "id": "eq_13",
    "modalidade_id": "3",
    "campus_id": "10",
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
      "id": "10",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    },
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "eq_14",
    "modalidade_id": "3",
    "campus_id": "7",
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
      "id": "7",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "eq_15",
    "modalidade_id": "3",
    "campus_id": "5",
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
      "id": "5",
      "nome": "Campus Planaltina",
      "sigla": "CPLA",
      "cor_primaria": "#78A55A"
    },
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "eq_16",
    "modalidade_id": "3",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "eq_17",
    "modalidade_id": "3",
    "campus_id": "6",
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
      "id": "6",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "eq_18",
    "modalidade_id": "3",
    "campus_id": "2",
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
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "eq_19",
    "modalidade_id": "3",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "eq_20",
    "modalidade_id": "3",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    }
  },
  {
    "id": "eq_21",
    "modalidade_id": "4",
    "campus_id": "3",
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
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_22",
    "modalidade_id": "4",
    "campus_id": "6",
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
      "id": "6",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_23",
    "modalidade_id": "4",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_24",
    "modalidade_id": "4",
    "campus_id": "10",
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
      "id": "10",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_25",
    "modalidade_id": "4",
    "campus_id": "2",
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
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_26",
    "modalidade_id": "4",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_27",
    "modalidade_id": "4",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_28",
    "modalidade_id": "4",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_29",
    "modalidade_id": "4",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    }
  },
  {
    "id": "eq_30",
    "modalidade_id": "2",
    "campus_id": "3",
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
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_31",
    "modalidade_id": "2",
    "campus_id": "3",
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
      "id": "3",
      "nome": "Campus Estrutural",
      "sigla": "CEST",
      "cor_primaria": "#E1D287"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_32",
    "modalidade_id": "2",
    "campus_id": "2",
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
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_33",
    "modalidade_id": "2",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_34",
    "modalidade_id": "2",
    "campus_id": "2",
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
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_35",
    "modalidade_id": "2",
    "campus_id": "6",
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
      "id": "6",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_36",
    "modalidade_id": "2",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_37",
    "modalidade_id": "2",
    "campus_id": "2",
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
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_38",
    "modalidade_id": "2",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    }
  },
  {
    "id": "eq_39",
    "modalidade_id": "7",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "7",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "eq_40",
    "modalidade_id": "7",
    "campus_id": "6",
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
      "id": "6",
      "nome": "Campus Recanto das Emas",
      "sigla": "CREC",
      "cor_primaria": "#F57656"
    },
    "modalidade": {
      "id": "7",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "eq_41",
    "modalidade_id": "7",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "7",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "eq_42",
    "modalidade_id": "7",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "7",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "eq_43",
    "modalidade_id": "7",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "7",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "eq_44",
    "modalidade_id": "7",
    "campus_id": "10",
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
      "id": "10",
      "nome": "Campus Taguatinga",
      "sigla": "CTAG",
      "cor_primaria": "#C81414"
    },
    "modalidade": {
      "id": "7",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "eq_45",
    "modalidade_id": "7",
    "campus_id": "7",
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
      "id": "7",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "7",
      "nome": "Futevôlei",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Footprints",
      "formato_disputa": "Pontos Corridos Masc (5 equipes) e Confronto Direto Misto",
      "total_vagas_ou_inscritos": 7
    }
  },
  {
    "id": "eq_46",
    "modalidade_id": "6",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "eq_47",
    "modalidade_id": "6",
    "campus_id": "2",
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
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "eq_48",
    "modalidade_id": "6",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "eq_49",
    "modalidade_id": "6",
    "campus_id": "7",
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
      "id": "7",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "eq_50",
    "modalidade_id": "6",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "eq_51",
    "modalidade_id": "6",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    }
  },
  {
    "id": "eq_52",
    "modalidade_id": "5",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "eq_53",
    "modalidade_id": "5",
    "campus_id": "7",
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
      "id": "7",
      "nome": "Campus Riacho Fundo",
      "sigla": "CRIA",
      "cor_primaria": "#349738"
    },
    "modalidade": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "eq_54",
    "modalidade_id": "5",
    "campus_id": "2",
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
      "id": "2",
      "nome": "Campus Ceilândia",
      "sigla": "CCEI",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    }
  },
  {
    "id": "eq_55",
    "modalidade_id": "5",
    "campus_id": "11",
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
      "id": "11",
      "nome": "Reitoria",
      "sigla": "REIT",
      "cor_primaria": "#1E2D3C"
    },
    "modalidade": {
      "id": "5",
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
    "id": "part_1",
    "modalidade_id": "9",
    "fase": "Etapa Primeiro Lance",
    "rodada": 1,
    "data_hora": "2026-11-03T08:30:00Z",
    "local_jogo": "Campus Samambaia Xadrez Etapa",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:30 | Campus Samambaia Xadrez Etapa \"Primeiro Lance\" (Matutino) Sistema Suíço em 5 Rodadas (10-15 min nocaute)",
    "modalidade": {
      "id": "9",
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
    "id": "part_2",
    "modalidade_id": "10",
    "fase": "Final",
    "rodada": 1,
    "data_hora": "2026-11-03T14:00:00Z",
    "local_jogo": "Campus Samambaia Jogo de Damas Etapa",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:00 | Campus Samambaia Jogo de Damas Etapa \"Primeiro Lance\" (Vespertino) Fase de Grupos (Chaves de 4) + Semifinais, 3º Lugar e Final",
    "modalidade": {
      "id": "10",
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
    "id": "part_3",
    "modalidade_id": "8",
    "fase": "Etapa Primeiro Lance",
    "rodada": 1,
    "data_hora": "2026-11-04T09:00:00Z",
    "local_jogo": "Campus Samambaia T",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 09:00 | Campus Samambaia Tênis de Mesa Etapa \"Primeiro Lance\" (Dia Único) Torneio Feminino Exclusivo e Categoria Absoluto (Geral)",
    "modalidade": {
      "id": "8",
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
    "id": "part_4",
    "modalidade_id": "2",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-05T08:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 08:30 | Campus Ceilândia Vôlei de Areia Masc. Rodada 1 - Grupo A Vôlei Areia M-A1 x Vôlei Areia M-A2",
    "modalidade": {
      "id": "2",
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
    "id": "part_5",
    "modalidade_id": "2",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-05T09:15:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:15 | Campus Ceilândia Vôlei de Areia Masc. Rodada 1 - Grupo B Vôlei Areia M-B1 x Vôlei Areia M-B2",
    "modalidade": {
      "id": "2",
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
    "id": "part_6",
    "modalidade_id": "2",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-05T10:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:00 | Campus Ceilândia Vôlei de Areia Masc. Rodada 1 - Grupo C Vôlei Areia M-C1 x Vôlei Areia M-C2",
    "modalidade": {
      "id": "2",
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
    "id": "part_7",
    "modalidade_id": "2",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-05T10:45:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:45 | Campus Ceilândia Vôlei de Areia Masc. Rodada 1 - Grupo D Vôlei Areia M-D1 x Vôlei Areia M-D2",
    "modalidade": {
      "id": "2",
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
    "id": "part_8",
    "modalidade_id": "2",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-05T14:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:00 | Campus Ceilândia Vôlei de Areia Fem. Semifinal 1 Vôlei Areia F1 x Vôlei Areia F2",
    "modalidade": {
      "id": "2",
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
    "id": "part_9",
    "modalidade_id": "2",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-05T14:45:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:45 | Campus Ceilândia Vôlei de Areia Misto Triangular - Rodada 1 Vôlei Areia X1 x Vôlei Areia X2",
    "modalidade": {
      "id": "2",
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
    "id": "part_10",
    "modalidade_id": "2",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-05T15:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:30 | Campus Ceilândia Vôlei de Areia Masc. Rodada 2 - Grupo A (Descanso de 5h p/ A2) Vôlei Areia M-A2 x Vôlei Areia M-A3",
    "modalidade": {
      "id": "2",
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
    "id": "part_11",
    "modalidade_id": "2",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-05T16:15:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 16:15 | Campus Ceilândia Vôlei de Areia Masc. Rodada 2 - Grupo B (Descanso de 5h p/ B2) Vôlei Areia M-B2 x Vôlei Areia M-B3",
    "modalidade": {
      "id": "2",
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
    "id": "part_12",
    "modalidade_id": "2",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-05T17:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 17:00 | Campus Ceilândia Vôlei de Areia Masc. Rodada 2 - Grupo C (Descanso de 5h p/ C2) Vôlei Areia M-C2 x Vôlei Areia M-C3",
    "modalidade": {
      "id": "2",
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
    "id": "part_13",
    "modalidade_id": "3",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-06T14:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 14:00 | Campus Taguatinga Vôlei (Quadra Misto) Rodada 1 - Grupo A (Jogo 1) Vôlei Misto A1 x Vôlei Misto A2",
    "modalidade": {
      "id": "3",
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
    "id": "part_14",
    "modalidade_id": "3",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-06T15:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 15:00 | Campus Taguatinga Vôlei (Quadra Misto) Rodada 1 - Grupo A (Jogo 2) Vôlei Misto A3 x Vôlei Misto A4",
    "modalidade": {
      "id": "3",
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
    "id": "part_15",
    "modalidade_id": "3",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-06T16:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 16:00 | Campus Taguatinga Vôlei (Quadra Misto) Rodada 1 - Grupo B (Jogo 1) Vôlei Misto B1 x Vôlei Misto B2",
    "modalidade": {
      "id": "3",
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
    "id": "part_16",
    "modalidade_id": "3",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-06T17:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 17:00 | Campus Taguatinga Vôlei (Quadra Misto) Rodada 1 - Grupo B (Jogo 2) Vôlei Misto B3 x Vôlei Misto B4",
    "modalidade": {
      "id": "3",
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
    "id": "part_17",
    "modalidade_id": "1",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-09T08:30:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 08:30 | Campus São Sebastião Futsal Masculino Rodada 1 - Grupo A Futsal M-A1 x Futsal M-A2",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_17_1",
        "partida_id": "part_17",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 1 - Grupo A Futsal M-A1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 1 - Grupo A Futsal M-A1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_17_2",
        "partida_id": "part_17",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-A2",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-A2",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_18",
    "modalidade_id": "1",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-09T09:30:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 09:30 | Campus São Sebastião Futsal Masculino Rodada 1 - Grupo B Futsal M-B1 x Futsal M-B2",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_18_1",
        "partida_id": "part_18",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 1 - Grupo B Futsal M-B1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 1 - Grupo B Futsal M-B1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_18_2",
        "partida_id": "part_18",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-B2",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-B2",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_19",
    "modalidade_id": "1",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-09T10:30:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 10:30 | Campus São Sebastião Futsal Masculino Rodada 1 - Grupo C Futsal M-C1 x Futsal M-C2",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_19_1",
        "partida_id": "part_19",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 1 - Grupo C Futsal M-C1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 1 - Grupo C Futsal M-C1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_19_2",
        "partida_id": "part_19",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-C2",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-C2",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_20",
    "modalidade_id": "1",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T08:30:00Z",
    "local_jogo": "Campus Gama Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:30 | Campus Gama Futsal Masculino Rodada 2 - Grupo A Futsal M-A2 x Futsal M-A3",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_20_1",
        "partida_id": "part_20",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Futsal Masculino Rodada 2 - Grupo A Futsal M-A2",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Futsal Masculino Rodada 2 - Grupo A Futsal M-A2",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_20_2",
        "partida_id": "part_20",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-A3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-A3",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_21",
    "modalidade_id": "1",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T09:30:00Z",
    "local_jogo": "Campus Gama Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:30 | Campus Gama Futsal Masculino Rodada 2 - Grupo B Futsal M-B2 x Futsal M-B3",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_21_1",
        "partida_id": "part_21",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Futsal Masculino Rodada 2 - Grupo B Futsal M-B2",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Futsal Masculino Rodada 2 - Grupo B Futsal M-B2",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_21_2",
        "partida_id": "part_21",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-B3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-B3",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_22",
    "modalidade_id": "1",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T10:30:00Z",
    "local_jogo": "Campus Gama Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:30 | Campus Gama Futsal Masculino Rodada 2 - Grupo C Futsal M-C2 x Futsal M-C3",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_22_1",
        "partida_id": "part_22",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Futsal Masculino Rodada 2 - Grupo C Futsal M-C2",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Futsal Masculino Rodada 2 - Grupo C Futsal M-C2",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_22_2",
        "partida_id": "part_22",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-C3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-C3",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_23",
    "modalidade_id": "1",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-10T11:30:00Z",
    "local_jogo": "Campus Gama Futsal Feminino Triangular",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 11:30 | Campus Gama Futsal Feminino Triangular - Rodada 1 Futsal F1 x Futsal F2",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_23_1",
        "partida_id": "part_23",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Futsal Feminino Triangular - Rodada 1 Futsal F1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Futsal Feminino Triangular - Rodada 1 Futsal F1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_23_2",
        "partida_id": "part_23",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal F2",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal F2",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_24",
    "modalidade_id": "3",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T14:00:00Z",
    "local_jogo": "Campus Gama V",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:00 | Campus Gama Vôlei (Quadra Misto) Rodada 2 - Grupo A (Jogo 1) Vôlei Misto A1 x Vôlei Misto A3",
    "modalidade": {
      "id": "3",
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
    "id": "part_25",
    "modalidade_id": "3",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T15:00:00Z",
    "local_jogo": "Campus Gama V",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:00 | Campus Gama Vôlei (Quadra Misto) Rodada 2 - Grupo A (Jogo 2) Vôlei Misto A2 x Vôlei Misto A4",
    "modalidade": {
      "id": "3",
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
    "id": "part_26",
    "modalidade_id": "3",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T16:00:00Z",
    "local_jogo": "Campus Gama V",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 16:00 | Campus Gama Vôlei (Quadra Misto) Rodada 2 - Grupo B (Jogo 1) Vôlei Misto B1 x Vôlei Misto B3",
    "modalidade": {
      "id": "3",
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
    "id": "part_27",
    "modalidade_id": "3",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-10T17:00:00Z",
    "local_jogo": "Campus Gama V",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 17:00 | Campus Gama Vôlei (Quadra Misto) Rodada 2 - Grupo B (Jogo 2) Vôlei Misto B2 x Vôlei Misto B4",
    "modalidade": {
      "id": "3",
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
    "id": "part_28",
    "modalidade_id": "6",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-11T08:30:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 08:30 | Campus Gama Queimada Mista Classificatória - Rodada 1 (Jogo 1) Queimada X1 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_29",
    "modalidade_id": "6",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-11T08:50:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 08:50 | Campus Gama Queimada Mista Classificatória - Rodada 1 (Jogo 2) Queimada X2 x Queimada X5 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_30",
    "modalidade_id": "6",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-11T09:10:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 09:10 | Campus Gama Queimada Mista Classificatória - Rodada 1 (Jogo 3) Queimada X3 x Queimada X4 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_31",
    "modalidade_id": "6",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-11T09:30:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 09:30 | Campus Gama Queimada Mista Classificatória - Rodada 2 (Jogo 4) Queimada X1 x Queimada X5 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_32",
    "modalidade_id": "6",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-11T09:50:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 09:50 | Campus Gama Queimada Mista Classificatória - Rodada 2 (Jogo 5) Queimada X4 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_33",
    "modalidade_id": "6",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-11T10:10:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 10:10 | Campus Gama Queimada Mista Classificatória - Rodada 2 (Jogo 6) Queimada X2 x Queimada X3 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_34",
    "modalidade_id": "6",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-11T10:30:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 10:30 | Campus Gama Queimada Mista Classificatória - Rodada 3 (Jogo 7) Queimada X1 x Queimada X4 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_35",
    "modalidade_id": "6",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-11T10:50:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 10:50 | Campus Gama Queimada Mista Classificatória - Rodada 3 (Jogo 8) Queimada X3 x Queimada X5 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_36",
    "modalidade_id": "6",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-11T11:10:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 11:10 | Campus Gama Queimada Mista Classificatória - Rodada 3 (Jogo 9) Queimada X2 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_37",
    "modalidade_id": "6",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-11T14:00:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:00 | Campus Gama Queimada Mista Classificatória - Rodada 4 (Jogo 10) Queimada X1 x Queimada X3 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_38",
    "modalidade_id": "6",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-11T14:20:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:20 | Campus Gama Queimada Mista Classificatória - Rodada 4 (Jogo 11) Queimada X2 x Queimada X4 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_39",
    "modalidade_id": "6",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-11T14:40:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:40 | Campus Gama Queimada Mista Classificatória - Rodada 4 (Jogo 12) Queimada X5 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_40",
    "modalidade_id": "6",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-11T15:00:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 15:00 | Campus Gama Queimada Mista Classificatória - Rodada 5 (Jogo 13) Queimada X1 x Queimada X2 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_41",
    "modalidade_id": "6",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-11T15:20:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 15:20 | Campus Gama Queimada Mista Classificatória - Rodada 5 (Jogo 14) Queimada X3 x Queimada X6 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_42",
    "modalidade_id": "6",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-11T15:40:00Z",
    "local_jogo": "Campus Gama Queimada Mista Classificatória",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 15:40 | Campus Gama Queimada Mista Classificatória - Rodada 5 (Jogo 15) Queimada X4 x Queimada X5 (15 min corridos)",
    "modalidade": {
      "id": "6",
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
    "id": "part_43",
    "modalidade_id": "6",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-11T16:15:00Z",
    "local_jogo": "Campus Gama Queimada Mista Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:15 | Campus Gama Queimada Mista Semifinal 1 (Jogo 16) 1º Geral Classificatória x 4º Geral Classificatória",
    "modalidade": {
      "id": "6",
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
    "id": "part_44",
    "modalidade_id": "6",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-11T16:35:00Z",
    "local_jogo": "Campus Gama Queimada Mista Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:35 | Campus Gama Queimada Mista Semifinal 2 (Jogo 17) 2º Geral Classificatória x 3º Geral Classificatória",
    "modalidade": {
      "id": "6",
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
    "id": "part_45",
    "modalidade_id": "6",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-11T16:55:00Z",
    "local_jogo": "Campus Gama Queimada Mista Disputa de",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:55 | Campus Gama Queimada Mista Disputa de 3º Lugar (Jogo 18) Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": [
      {
        "id": "conf_part_45_1",
        "partida_id": "part_45",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "6",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_45_2",
        "partida_id": "part_45",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "6",
          "campus_id": "11",
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
    "id": "part_46",
    "modalidade_id": "6",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-11T17:15:00Z",
    "local_jogo": "Campus Gama Queimada Mista Final",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 17:15 | Campus Gama Queimada Mista Final (Jogo 19) Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "6",
      "nome": "Queimada",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Flame",
      "formato_disputa": "Chave Única com 6 equipes (todas contra todas) + Finais",
      "total_vagas_ou_inscritos": 6
    },
    "confrontos": [
      {
        "id": "conf_part_46_1",
        "partida_id": "part_46",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "6",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_46_2",
        "partida_id": "part_46",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "6",
          "campus_id": "11",
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
    "id": "part_47",
    "modalidade_id": "2",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-12T08:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 08:30 | Campus Ceilândia Vôlei de Areia Misto Triangular - Rodada 2 Vôlei Areia X2 x Vôlei Areia X3",
    "modalidade": {
      "id": "2",
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
    "id": "part_48",
    "modalidade_id": "2",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-12T09:15:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:15 | Campus Ceilândia Vôlei de Areia Masc. Rodada 3 - Grupo A Vôlei Areia M-A1 x Vôlei Areia M-A3",
    "modalidade": {
      "id": "2",
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
    "id": "part_49",
    "modalidade_id": "2",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-12T10:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:00 | Campus Ceilândia Vôlei de Areia Masc. Rodada 3 - Grupo B Vôlei Areia M-B1 x Vôlei Areia M-B3",
    "modalidade": {
      "id": "2",
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
    "id": "part_50",
    "modalidade_id": "2",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-12T10:45:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:45 | Campus Ceilândia Vôlei de Areia Masc. Rodada 3 - Grupo C Vôlei Areia M-C1 x Vôlei Areia M-C3",
    "modalidade": {
      "id": "2",
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
    "id": "part_51",
    "modalidade_id": "2",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-12T11:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 11:30 | Campus Ceilândia Vôlei de Areia Masc. Rodada 2 - Grupo D Vôlei Areia M-D2 x Vôlei Areia M-D1",
    "modalidade": {
      "id": "2",
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
    "id": "part_52",
    "modalidade_id": "2",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-12T14:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:30 | Campus Ceilândia Vôlei de Areia Fem. Semifinal 2 Vôlei Areia F3 x Vôlei Areia F4",
    "modalidade": {
      "id": "2",
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
    "id": "part_53",
    "modalidade_id": "2",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-12T15:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:30 | Campus Ceilândia Vôlei de Areia Misto Triangular - Rodada 3 (Decisivo) Vôlei Areia X1 x Vôlei Areia X3",
    "modalidade": {
      "id": "2",
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
    "id": "part_54",
    "modalidade_id": "3",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-13T14:00:00Z",
    "local_jogo": "Campus Planaltina V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 14:00 | Campus Planaltina Vôlei (Quadra Misto) Rodada 3 - Grupo A (Jogo 1) Vôlei Misto A1 x Vôlei Misto A4",
    "modalidade": {
      "id": "3",
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
    "id": "part_55",
    "modalidade_id": "3",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-13T15:00:00Z",
    "local_jogo": "Campus Planaltina V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 15:00 | Campus Planaltina Vôlei (Quadra Misto) Rodada 3 - Grupo A (Jogo 2) Vôlei Misto A2 x Vôlei Misto A3",
    "modalidade": {
      "id": "3",
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
    "id": "part_56",
    "modalidade_id": "3",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-13T16:00:00Z",
    "local_jogo": "Campus Planaltina V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 16:00 | Campus Planaltina Vôlei (Quadra Misto) Rodada 3 - Grupo B (Jogo 1) Vôlei Misto B1 x Vôlei Misto B4",
    "modalidade": {
      "id": "3",
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
    "id": "part_57",
    "modalidade_id": "3",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-13T17:00:00Z",
    "local_jogo": "Campus Planaltina V",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 17:00 | Campus Planaltina Vôlei (Quadra Misto) Rodada 3 - Grupo B (Jogo 2) Vôlei Misto B2 x Vôlei Misto B3",
    "modalidade": {
      "id": "3",
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
    "id": "part_58",
    "modalidade_id": "3",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-16T14:30:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 14:30 | Campus Taguatinga Vôlei (Quadra Misto) Semifinal 1 1º Grupo A x 2º Grupo B",
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": [
      {
        "id": "conf_part_58_1",
        "partida_id": "part_58",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Semifinal 1 1º Grupo A",
        "vencedor": false,
        "equipe": {
          "nome": "Semifinal 1 1º Grupo A",
          "id": "temp_a",
          "modalidade_id": "3",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_58_2",
        "partida_id": "part_58",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Grupo B",
        "vencedor": false,
        "equipe": {
          "nome": "2º Grupo B",
          "id": "temp_b",
          "modalidade_id": "3",
          "campus_id": "11",
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
    "id": "part_59",
    "modalidade_id": "3",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-16T16:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 16:00 | Campus Taguatinga Vôlei (Quadra Misto) Semifinal 2 1º Grupo B x 2º Grupo A",
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": [
      {
        "id": "conf_part_59_1",
        "partida_id": "part_59",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Semifinal 2 1º Grupo B",
        "vencedor": false,
        "equipe": {
          "nome": "Semifinal 2 1º Grupo B",
          "id": "temp_a",
          "modalidade_id": "3",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_59_2",
        "partida_id": "part_59",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Grupo A",
        "vencedor": false,
        "equipe": {
          "nome": "2º Grupo A",
          "id": "temp_b",
          "modalidade_id": "3",
          "campus_id": "11",
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
    "id": "part_60",
    "modalidade_id": "5",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-17T08:30:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:30 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 1 (Jogo 1) Handebol X1 x Handebol X2 (2x15 min)",
    "modalidade": {
      "id": "5",
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
    "id": "part_61",
    "modalidade_id": "5",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-17T09:20:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:20 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 1 (Jogo 2) Handebol X3 x Handebol X4 (2x15 min)",
    "modalidade": {
      "id": "5",
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
    "id": "part_62",
    "modalidade_id": "5",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-17T10:30:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:30 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 2 (Jogo 3) Handebol X1 x Handebol X3 (2x15 min)",
    "modalidade": {
      "id": "5",
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
    "id": "part_63",
    "modalidade_id": "5",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-17T11:20:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 11:20 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 2 (Jogo 4) Handebol X2 x Handebol X4 (2x15 min)",
    "modalidade": {
      "id": "5",
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
    "id": "part_64",
    "modalidade_id": "5",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-17T14:30:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:30 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 3 (Jogo 5) Handebol X1 x Handebol X4 (Descanso de 3h)",
    "modalidade": {
      "id": "5",
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
    "id": "part_65",
    "modalidade_id": "5",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-17T15:20:00Z",
    "local_jogo": "Campus Planaltina Handebol Misto Adaptado Classificatória",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:20 | Campus Planaltina Handebol Misto Adaptado Classificatória - Rodada 3 (Jogo 6) Handebol X2 x Handebol X3 (Descanso de 3h)",
    "modalidade": {
      "id": "5",
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
    "id": "part_66",
    "modalidade_id": "1",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-17T16:30:00Z",
    "local_jogo": "Campus Planaltina Futsal Feminino Triangular",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 16:30 | Campus Planaltina Futsal Feminino Triangular - Rodada 2 Futsal F2 x Futsal F3",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_66_1",
        "partida_id": "part_66",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Planaltina Futsal Feminino Triangular - Rodada 2 Futsal F2",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Planaltina Futsal Feminino Triangular - Rodada 2 Futsal F2",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_66_2",
        "partida_id": "part_66",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal F3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal F3",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_67",
    "modalidade_id": "11",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-18T14:00:00Z",
    "local_jogo": "Campus Brasília Natação Finais Diretas Cronometradas",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:00 | Campus Brasília Natação Finais Diretas Cronometradas 25m Livre, 50m Livre e 100m Livre (Masc. e Fem.)",
    "modalidade": {
      "id": "11",
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
    "id": "part_68",
    "modalidade_id": "2",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T08:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 08:30 | Campus Ceilândia Vôlei de Areia Fem. Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "conf_part_68_1",
        "partida_id": "part_68",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lei de Areia Fem. Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "lei de Areia Fem. Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "2",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_68_2",
        "partida_id": "part_68",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "2",
          "campus_id": "11",
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
    "id": "part_69",
    "modalidade_id": "2",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T09:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:30 | Campus Ceilândia Vôlei de Areia Masc. Semifinal 1 1º Geral x Melhor 2º Colocado Geral",
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "conf_part_69_1",
        "partida_id": "part_69",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lei de Areia Masc. Semifinal 1 1º Geral",
        "vencedor": false,
        "equipe": {
          "nome": "lei de Areia Masc. Semifinal 1 1º Geral",
          "id": "temp_a",
          "modalidade_id": "2",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_69_2",
        "partida_id": "part_69",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Melhor 2º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "Melhor 2º Colocado Geral",
          "id": "temp_b",
          "modalidade_id": "2",
          "campus_id": "11",
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
    "id": "part_70",
    "modalidade_id": "2",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T10:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:30 | Campus Ceilândia Vôlei de Areia Masc. Semifinal 2 2º Geral x 3º Geral",
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "conf_part_70_1",
        "partida_id": "part_70",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lei de Areia Masc. Semifinal 2 2º Geral",
        "vencedor": false,
        "equipe": {
          "nome": "lei de Areia Masc. Semifinal 2 2º Geral",
          "id": "temp_a",
          "modalidade_id": "2",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_70_2",
        "partida_id": "part_70",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "3º Geral",
        "vencedor": false,
        "equipe": {
          "nome": "3º Geral",
          "id": "temp_b",
          "modalidade_id": "2",
          "campus_id": "11",
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
    "id": "part_71",
    "modalidade_id": "2",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T14:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:30 | Campus Ceilândia Vôlei de Areia Masc. Disputa de 3º Lugar (Descanso de 4h) Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "conf_part_71_1",
        "partida_id": "part_71",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "2",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_71_2",
        "partida_id": "part_71",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "2",
          "campus_id": "11",
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
    "id": "part_72",
    "modalidade_id": "2",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T15:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:30 | Campus Ceilândia Vôlei de Areia Masc. Final (Descanso de 4h) Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "conf_part_72_1",
        "partida_id": "part_72",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "2",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_72_2",
        "partida_id": "part_72",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "2",
          "campus_id": "11",
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
    "id": "part_73",
    "modalidade_id": "2",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-19T16:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 16:30 | Campus Ceilândia Vôlei de Areia Fem. Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "2",
      "nome": "Vôlei de Areia",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Sun",
      "formato_disputa": "Grupos Masc (3 de 3), Semifinais Fem e Triangular Misto",
      "total_vagas_ou_inscritos": 16
    },
    "confrontos": [
      {
        "id": "conf_part_73_1",
        "partida_id": "part_73",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lei de Areia Fem. Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "lei de Areia Fem. Final Vencedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "2",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_73_2",
        "partida_id": "part_73",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "2",
          "campus_id": "11",
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
    "id": "part_74",
    "modalidade_id": "5",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-23T14:30:00Z",
    "local_jogo": "Campus Taguatinga Handebol Misto Adaptado Semifinal",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 14:30 | Campus Taguatinga Handebol Misto Adaptado Semifinal 1 1º Colocado Geral x 4º Colocado Geral",
    "modalidade": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": [
      {
        "id": "conf_part_74_1",
        "partida_id": "part_74",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Taguatinga Handebol Misto Adaptado Semifinal 1 1º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Taguatinga Handebol Misto Adaptado Semifinal 1 1º Colocado Geral",
          "id": "temp_a",
          "modalidade_id": "5",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_74_2",
        "partida_id": "part_74",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "4º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "4º Colocado Geral",
          "id": "temp_b",
          "modalidade_id": "5",
          "campus_id": "11",
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
    "id": "part_75",
    "modalidade_id": "5",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-23T15:30:00Z",
    "local_jogo": "Campus Taguatinga Handebol Misto Adaptado Semifinal",
    "status": "AGENDADA",
    "observacoes": "Segunda-feira 15:30 | Campus Taguatinga Handebol Misto Adaptado Semifinal 2 2º Colocado Geral x 3º Colocado Geral",
    "modalidade": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": [
      {
        "id": "conf_part_75_1",
        "partida_id": "part_75",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Taguatinga Handebol Misto Adaptado Semifinal 2 2º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Taguatinga Handebol Misto Adaptado Semifinal 2 2º Colocado Geral",
          "id": "temp_a",
          "modalidade_id": "5",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_75_2",
        "partida_id": "part_75",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "3º Colocado Geral",
        "vencedor": false,
        "equipe": {
          "nome": "3º Colocado Geral",
          "id": "temp_b",
          "modalidade_id": "5",
          "campus_id": "11",
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
    "id": "part_76",
    "modalidade_id": "4",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T08:30:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:30 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo A - Jogo 1) Basquete 3x3 M-A1 x Basquete 3x3 M-A2",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_76_1",
        "partida_id": "part_76",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A1",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_76_2",
        "partida_id": "part_76",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A2",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_77",
    "modalidade_id": "4",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T08:50:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 08:50 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo B - Jogo 1) Basquete 3x3 M-B1 x Basquete 3x3 M-B2",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_77_1",
        "partida_id": "part_77",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B1",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_77_2",
        "partida_id": "part_77",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B2",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_78",
    "modalidade_id": "4",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-24T09:10:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:10 | Campus Gama Basquete 3x3 Misto Triangular (Jogo 1) Basquete 3x3 X1 x Basquete 3x3 X2",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_78_1",
        "partida_id": "part_78",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X1",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_78_2",
        "partida_id": "part_78",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X2",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_79",
    "modalidade_id": "4",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T09:30:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:30 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo A - Jogo 2) Basquete 3x3 M-A2 x Basquete 3x3 M-A3",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_79_1",
        "partida_id": "part_79",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A2",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_79_2",
        "partida_id": "part_79",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A3",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_80",
    "modalidade_id": "4",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T09:50:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 09:50 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo B - Jogo 2) Basquete 3x3 M-B2 x Basquete 3x3 M-B3",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_80_1",
        "partida_id": "part_80",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B2",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_80_2",
        "partida_id": "part_80",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B3",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_81",
    "modalidade_id": "4",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-24T10:10:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:10 | Campus Gama Basquete 3x3 Misto Triangular (Jogo 2) Basquete 3x3 X2 x Basquete 3x3 X3",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_81_1",
        "partida_id": "part_81",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X2",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X2",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_81_2",
        "partida_id": "part_81",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X3",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_82",
    "modalidade_id": "4",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T10:30:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:30 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo A - Jogo 3) Basquete 3x3 M-A1 x Basquete 3x3 M-A3",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_82_1",
        "partida_id": "part_82",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A1",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_82_2",
        "partida_id": "part_82",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-A3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-A3",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_83",
    "modalidade_id": "4",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-24T10:50:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 10:50 | Campus Gama Basquete 3x3 Masc. Fase de Grupos (Grupo B - Jogo 3) Basquete 3x3 M-B1 x Basquete 3x3 M-B3",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_83_1",
        "partida_id": "part_83",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B1",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_83_2",
        "partida_id": "part_83",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 M-B3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 M-B3",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_84",
    "modalidade_id": "4",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-24T11:10:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 11:10 | Campus Gama Basquete 3x3 Misto Triangular (Jogo 3) Basquete 3x3 X1 x Basquete 3x3 X3",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_84_1",
        "partida_id": "part_84",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X1",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X1",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_84_2",
        "partida_id": "part_84",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Basquete 3x3 X3",
        "vencedor": false,
        "equipe": {
          "nome": "Basquete 3x3 X3",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_85",
    "modalidade_id": "4",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-24T14:00:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:00 | Campus Gama Basquete 3x3 Masc. Semifinal 1 1º Grupo A x 2º Grupo B",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_85_1",
        "partida_id": "part_85",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Masc. Semifinal 1 1º Grupo A",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Masc. Semifinal 1 1º Grupo A",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_85_2",
        "partida_id": "part_85",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Grupo B",
        "vencedor": false,
        "equipe": {
          "nome": "2º Grupo B",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_86",
    "modalidade_id": "4",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-24T14:25:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:25 | Campus Gama Basquete 3x3 Masc. Semifinal 2 1º Grupo B x 2º Grupo A",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_86_1",
        "partida_id": "part_86",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Masc. Semifinal 2 1º Grupo B",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Masc. Semifinal 2 1º Grupo B",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_86_2",
        "partida_id": "part_86",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Grupo A",
        "vencedor": false,
        "equipe": {
          "nome": "2º Grupo A",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_87",
    "modalidade_id": "4",
    "fase": "Final",
    "rodada": 1,
    "data_hora": "2026-11-24T14:50:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 14:50 | Campus Gama Basquete 3x3 Misto Final 1º do Triangular x 2º do Triangular",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_87_1",
        "partida_id": "part_87",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Misto Final 1º do Triangular",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Misto Final 1º do Triangular",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_87_2",
        "partida_id": "part_87",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º do Triangular",
        "vencedor": false,
        "equipe": {
          "nome": "2º do Triangular",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_88",
    "modalidade_id": "4",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-24T15:15:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:15 | Campus Gama Basquete 3x3 Masc. Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_88_1",
        "partida_id": "part_88",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Masc. Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Masc. Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_88_2",
        "partida_id": "part_88",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_89",
    "modalidade_id": "4",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-11-24T15:40:00Z",
    "local_jogo": "Campus Gama Basquete",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:40 | Campus Gama Basquete 3x3 Masc. Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "4",
      "nome": "Basquete 3x3",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Target",
      "formato_disputa": "Fase de Grupos Masc (2 grupos) e Triangular Misto + Finais",
      "total_vagas_ou_inscritos": 9
    },
    "confrontos": [
      {
        "id": "conf_part_89_1",
        "partida_id": "part_89",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Gama Basquete 3x3 Masc. Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Gama Basquete 3x3 Masc. Final Vencedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "4",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_89_2",
        "partida_id": "part_89",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "4",
          "campus_id": "11",
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
    "id": "part_90",
    "modalidade_id": "1",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-25T14:00:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:00 | Campus São Sebastião Futsal Masculino Rodada 3 - Grupo A Futsal M-A1 x Futsal M-A3",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_90_1",
        "partida_id": "part_90",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 3 - Grupo A Futsal M-A1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 3 - Grupo A Futsal M-A1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_90_2",
        "partida_id": "part_90",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-A3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-A3",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_91",
    "modalidade_id": "1",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-25T15:00:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 15:00 | Campus São Sebastião Futsal Masculino Rodada 3 - Grupo B Futsal M-B1 x Futsal M-B3",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_91_1",
        "partida_id": "part_91",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 3 - Grupo B Futsal M-B1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 3 - Grupo B Futsal M-B1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_91_2",
        "partida_id": "part_91",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-B3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-B3",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_92",
    "modalidade_id": "1",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-25T16:00:00Z",
    "local_jogo": "Campus São Sebastião Futsal Masculino Rodada",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:00 | Campus São Sebastião Futsal Masculino Rodada 3 - Grupo C Futsal M-C1 x Futsal M-C3",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_92_1",
        "partida_id": "part_92",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "o Futsal Masculino Rodada 3 - Grupo C Futsal M-C1",
        "vencedor": false,
        "equipe": {
          "nome": "o Futsal Masculino Rodada 3 - Grupo C Futsal M-C1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_92_2",
        "partida_id": "part_92",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal M-C3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal M-C3",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_93",
    "modalidade_id": "1",
    "fase": "Triangular Final",
    "rodada": 1,
    "data_hora": "2026-11-25T17:00:00Z",
    "local_jogo": "Campus São Sebastião Futsal Feminino Triangular",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 17:00 | Campus São Sebastião Futsal Feminino Triangular - Rodada 3 (Decisivo) Futsal F1 x Futsal F3",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_93_1",
        "partida_id": "part_93",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal F1",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal F1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_93_2",
        "partida_id": "part_93",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Futsal F3",
        "vencedor": false,
        "equipe": {
          "nome": "Futsal F3",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_94",
    "modalidade_id": "3",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-26T08:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 08:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 1 (Jogo 1) Futevôlei M1 x Futevôlei M2 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_95",
    "modalidade_id": "3",
    "fase": "Rodada 1",
    "rodada": 1,
    "data_hora": "2026-11-26T09:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 1 (Jogo 2) Futevôlei M3 x Futevôlei M4 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_96",
    "modalidade_id": "3",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-26T09:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 09:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 2 (Jogo 3) Futevôlei M1 x Futevôlei M5 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_97",
    "modalidade_id": "3",
    "fase": "Rodada 2",
    "rodada": 1,
    "data_hora": "2026-11-26T10:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 2 (Jogo 4) Futevôlei M2 x Futevôlei M3 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_98",
    "modalidade_id": "3",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-26T10:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 10:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 3 (Jogo 5) Futevôlei M4 x Futevôlei M5 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_99",
    "modalidade_id": "3",
    "fase": "Final",
    "rodada": 1,
    "data_hora": "2026-11-26T11:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 11:00 | Campus Ceilândia Futevôlei Misto Final Única (Melhor de 3 sets de 12 pts) Futevôlei X1 x Futevôlei X2",
    "modalidade": {
      "id": "3",
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
    "id": "part_100",
    "modalidade_id": "3",
    "fase": "Rodada 3",
    "rodada": 1,
    "data_hora": "2026-11-26T14:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 3 (Jogo 6) Futevôlei M1 x Futevôlei M3 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_101",
    "modalidade_id": "3",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-26T14:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 4 (Jogo 7) Futevôlei M2 x Futevôlei M5 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_102",
    "modalidade_id": "3",
    "fase": "Rodada 4",
    "rodada": 1,
    "data_hora": "2026-11-26T15:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 4 (Jogo 8) Futevôlei M1 x Futevôlei M4 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_103",
    "modalidade_id": "3",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-26T15:30:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:30 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 5 (Jogo 9) Futevôlei M3 x Futevôlei M5 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_104",
    "modalidade_id": "3",
    "fase": "Rodada 5",
    "rodada": 1,
    "data_hora": "2026-11-26T16:00:00Z",
    "local_jogo": "Campus Ceil",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 16:00 | Campus Ceilândia Futevôlei Masc. Pontos Corridos - Rodada 5 (Jogo 10) Futevôlei M2 x Futevôlei M4 (1 set de 18 pts)",
    "modalidade": {
      "id": "3",
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
    "id": "part_105",
    "modalidade_id": "1",
    "fase": "Fase de Grupos",
    "rodada": 1,
    "data_hora": "2026-11-27T15:00:00Z",
    "local_jogo": "Campus Planaltina Futsal Masculino Playoff Preliminar",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 15:00 | Campus Planaltina Futsal Masculino Playoff Preliminar (2ºs Colocados) 2º Melhor 2º Colocado x 3º Melhor 2º Colocado",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_105_1",
        "partida_id": "part_105",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "2º Melhor 2º Colocado",
        "vencedor": false,
        "equipe": {
          "nome": "2º Melhor 2º Colocado",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_105_2",
        "partida_id": "part_105",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "3º Melhor 2º Colocado",
        "vencedor": false,
        "equipe": {
          "nome": "3º Melhor 2º Colocado",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_106",
    "modalidade_id": "1",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-1T15:00:00Z",
    "local_jogo": "Campus Brasília Futsal Masculino Playoff Final",
    "status": "AGENDADA",
    "observacoes": "Terça-feira 15:00 | Campus Brasília Futsal Masculino Playoff Final (Vaga na Semifinal) 1º Melhor 2º Colocado x Vencedor Playoff Preliminar",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_106_1",
        "partida_id": "part_106",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "1º Melhor 2º Colocado",
        "vencedor": false,
        "equipe": {
          "nome": "1º Melhor 2º Colocado",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_106_2",
        "partida_id": "part_106",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Playoff Preliminar",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Playoff Preliminar",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_107",
    "modalidade_id": "3",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-2T14:30:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 14:30 | Campus Taguatinga Vôlei (Quadra Misto) Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": [
      {
        "id": "conf_part_107_1",
        "partida_id": "part_107",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "3",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_107_2",
        "partida_id": "part_107",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "3",
          "campus_id": "11",
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
    "id": "part_108",
    "modalidade_id": "3",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-2T16:00:00Z",
    "local_jogo": "Campus Taguatinga V",
    "status": "AGENDADA",
    "observacoes": "Quarta-feira 16:00 | Campus Taguatinga Vôlei (Quadra Misto) Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "3",
      "nome": "Vôlei de Quadra",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Volleyball",
      "formato_disputa": "2 Grupos de 4 equipes (Chave A e B) + Semifinais e Final",
      "total_vagas_ou_inscritos": 8
    },
    "confrontos": [
      {
        "id": "conf_part_108_1",
        "partida_id": "part_108",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Final Vencedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "3",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_108_2",
        "partida_id": "part_108",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "3",
          "campus_id": "11",
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
    "id": "part_109",
    "modalidade_id": "5",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-03T14:00:00Z",
    "local_jogo": "Campus Estrutural Handebol Misto Adaptado Disputa de",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 14:00 | Campus Estrutural Handebol Misto Adaptado Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": [
      {
        "id": "conf_part_109_1",
        "partida_id": "part_109",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Estrutural Handebol Misto Adaptado Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Estrutural Handebol Misto Adaptado Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "5",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_109_2",
        "partida_id": "part_109",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "5",
          "campus_id": "11",
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
    "id": "part_110",
    "modalidade_id": "5",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-03T15:00:00Z",
    "local_jogo": "Campus Estrutural Handebol Misto Adaptado Final Vencedor Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 15:00 | Campus Estrutural Handebol Misto Adaptado Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "5",
      "nome": "Handebol",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Award",
      "formato_disputa": "Chave Única com 4 equipes (todos contra todos) + Finais",
      "total_vagas_ou_inscritos": 4
    },
    "confrontos": [
      {
        "id": "conf_part_110_1",
        "partida_id": "part_110",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Campus Estrutural Handebol Misto Adaptado Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "Campus Estrutural Handebol Misto Adaptado Final Vencedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "5",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_110_2",
        "partida_id": "part_110",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "5",
          "campus_id": "11",
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
    "id": "part_111",
    "modalidade_id": "1",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-03T16:00:00Z",
    "local_jogo": "Campus Estrutural Futsal Masculino Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 16:00 | Campus Estrutural Futsal Masculino Semifinal 1 1º Colocado Geral entre Líderes x Vencedor do Playoff",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_111_1",
        "partida_id": "part_111",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "deres",
        "vencedor": false,
        "equipe": {
          "nome": "deres",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_111_2",
        "partida_id": "part_111",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor do Playoff",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor do Playoff",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_112",
    "modalidade_id": "1",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-03T17:00:00Z",
    "local_jogo": "Campus Estrutural Futsal Masculino Semifinal",
    "status": "AGENDADA",
    "observacoes": "Quinta-feira 17:00 | Campus Estrutural Futsal Masculino Semifinal 2 2º Colocado Geral entre Líderes x 3º Colocado Geral entre Líderes",
    "modalidade": {
      "id": "1",
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
    "id": "part_113",
    "modalidade_id": "1",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-04T14:30:00Z",
    "local_jogo": "Campus Brasília Futsal Masculino Disputa de",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 14:30 | Campus Brasília Futsal Masculino Disputa de 3º Lugar Perdedor Semifinal 1 x Perdedor Semifinal 2",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_113_1",
        "partida_id": "part_113",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lia Futsal Masculino Disputa de 3º Lugar Perdedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "lia Futsal Masculino Disputa de 3º Lugar Perdedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_113_2",
        "partida_id": "part_113",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Perdedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Perdedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
    "id": "part_114",
    "modalidade_id": "1",
    "fase": "Semifinal",
    "rodada": 1,
    "data_hora": "2026-12-04T16:00:00Z",
    "local_jogo": "Campus Brasília Futsal Masculino Final Vencedor Semifinal",
    "status": "AGENDADA",
    "observacoes": "Sexta-feira 16:00 | Campus Brasília Futsal Masculino Final Vencedor Semifinal 1 x Vencedor Semifinal 2",
    "modalidade": {
      "id": "1",
      "nome": "Futsal",
      "tipo": "COLETIVA",
      "categoria": "MISTO",
      "icone": "Trophy",
      "formato_disputa": "Fase de Grupos (Masc) e Triangular (Fem) + Semifinais e Finais",
      "total_vagas_ou_inscritos": 12
    },
    "confrontos": [
      {
        "id": "conf_part_114_1",
        "partida_id": "part_114",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "lia Futsal Masculino Final Vencedor Semifinal 1",
        "vencedor": false,
        "equipe": {
          "nome": "lia Futsal Masculino Final Vencedor Semifinal 1",
          "id": "temp_a",
          "modalidade_id": "1",
          "campus_id": "11",
          "capitao_nome": "",
          "capitao_matricula": "",
          "capitao_email": "",
          "lista_participantes": [],
          "categoria": "MISTO"
        }
      },
      {
        "id": "conf_part_114_2",
        "partida_id": "part_114",
        "equipe_id": null,
        "pontuacao_final": 0,
        "detalhes_pontuacao": "Vencedor Semifinal 2",
        "vencedor": false,
        "equipe": {
          "nome": "Vencedor Semifinal 2",
          "id": "temp_b",
          "modalidade_id": "1",
          "campus_id": "11",
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
