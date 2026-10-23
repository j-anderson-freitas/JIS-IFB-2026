import { Campus, Modalidade, Equipe, Partida, ComissaoOrganizadora, PontuacaoGeralCampus } from '@/types';

export const CAMPI: Campus[] = [
  { id: '1', nome: 'Campus Brasília', sigla: 'CBRA', cor_primaria: '#006633' },
  { id: '2', nome: 'Campus Ceilândia', sigla: 'CCEI', cor_primaria: '#007A3D' },
  { id: '3', nome: 'Campus Estrutural', sigla: 'CEST', cor_primaria: '#0A8754' },
  { id: '4', nome: 'Campus Gama', sigla: 'CGAM', cor_primaria: '#1E824C' },
  { id: '5', nome: 'Campus Planaltina', sigla: 'CPLA', cor_primaria: '#166534' },
  { id: '6', nome: 'Campus Recanto das Emas', sigla: 'CREC', cor_primaria: '#15803D' },
  { id: '7', nome: 'Campus Riacho Fundo', sigla: 'CRFI', cor_primaria: '#14532D' },
  { id: '8', nome: 'Campus Samambaia', sigla: 'CSAM', cor_primaria: '#047857' },
  { id: '9', nome: 'Campus São Sebastião', sigla: 'CSSB', cor_primaria: '#065F46' },
  { id: '10', nome: 'Campus Taguatinga', sigla: 'CTAG', cor_primaria: '#059669' },
  { id: '11', nome: 'Reitoria', sigla: 'REIT', cor_primaria: '#064E3B' },
];

export const MODALIDADES: Modalidade[] = [
  // Coletivas
  { id: 'c1', nome: 'Futsal', tipo: 'COLETIVA', categoria: 'MISTO', icone: 'Goal', formato_disputa: 'Fase de Grupos + Semifinal e Final', total_vagas_ou_inscritos: 13 },
  { id: 'c2', nome: 'Vôlei de Areia', tipo: 'COLETIVA', categoria: 'MISTO', icone: 'Sun', formato_disputa: 'Chaveamento duplo e eliminatórias', total_vagas_ou_inscritos: 16 },
  { id: 'c3', nome: 'Vôlei de Quadra', tipo: 'COLETIVA', categoria: 'MISTO', icone: 'Activity', formato_disputa: 'Grupos de 3 + Mata-mata', total_vagas_ou_inscritos: 12 },
  { id: 'c4', nome: 'Queimada', tipo: 'COLETIVA', categoria: 'MISTO', icone: 'Flame', formato_disputa: 'Eliminatória direta com repescagem', total_vagas_ou_inscritos: 8 },
  { id: 'c5', nome: 'Basquete 3x3', tipo: 'COLETIVA', categoria: 'MISTO', icone: 'Dribbble', formato_disputa: '3 grupos de 3 + fase final', total_vagas_ou_inscritos: 9 },
  { id: 'c6', nome: 'Handebol', tipo: 'COLETIVA', categoria: 'MISTO', icone: 'Trophy', formato_disputa: 'Turno único todos contra todos', total_vagas_ou_inscritos: 5 },
  { id: 'c7', nome: 'Futevôlei', tipo: 'COLETIVA', categoria: 'MISTO', icone: 'Zap', formato_disputa: 'Fase de grupos e semifinais', total_vagas_ou_inscritos: 7 },
  // Individuais
  { id: 'i1', nome: 'Caminhada / Corrida', tipo: 'INDIVIDUAL', categoria: 'MISTO', icone: 'Footprints', formato_disputa: 'Percurso de 5km e caminhada 3km', total_vagas_ou_inscritos: 104 },
  { id: 'i2', nome: 'Natação', tipo: 'INDIVIDUAL', categoria: 'MISTO', icone: 'Waves', formato_disputa: '50m livre e revezamento', total_vagas_ou_inscritos: 33 },
  { id: 'i3', nome: 'Tênis de Mesa', tipo: 'INDIVIDUAL', categoria: 'MISTO', icone: 'CircleDot', formato_disputa: 'Fase de grupos + eliminatória', total_vagas_ou_inscritos: 23 },
  { id: 'i4', nome: 'Xadrez', tipo: 'INDIVIDUAL', categoria: 'MISTO', icone: 'Crown', formato_disputa: 'Sistema Suíço em 5 rodadas', total_vagas_ou_inscritos: 23 },
  { id: 'i5', nome: 'Damas', tipo: 'INDIVIDUAL', categoria: 'MISTO', icone: 'Grid3X3', formato_disputa: 'Eliminatória simples', total_vagas_ou_inscritos: 8 },
];

export const PONTUACAO_INICIAL: PontuacaoGeralCampus[] = [
  { campus_id: '1', pontos_acumulados: 48, ouros: 3, pratas: 2, bronzes: 1, campus: CAMPI[0] },
  { campus_id: '10', pontos_acumulados: 42, ouros: 2, pratas: 3, bronzes: 2, campus: CAMPI[9] },
  { campus_id: '5', pontos_acumulados: 36, ouros: 2, pratas: 1, bronzes: 3, campus: CAMPI[4] },
  { campus_id: '11', pontos_acumulados: 30, ouros: 1, pratas: 2, bronzes: 2, campus: CAMPI[10] },
  { campus_id: '4', pontos_acumulados: 25, ouros: 1, pratas: 1, bronzes: 1, campus: CAMPI[3] },
  { campus_id: '2', pontos_acumulados: 20, ouros: 1, pratas: 0, bronzes: 2, campus: CAMPI[1] },
  { campus_id: '8', pontos_acumulados: 18, ouros: 0, pratas: 2, bronzes: 1, campus: CAMPI[7] },
  { campus_id: '6', pontos_acumulados: 14, ouros: 0, pratas: 1, bronzes: 1, campus: CAMPI[5] },
  { campus_id: '9', pontos_acumulados: 12, ouros: 0, pratas: 1, bronzes: 0, campus: CAMPI[8] },
  { campus_id: '7', pontos_acumulados: 10, ouros: 0, pratas: 0, bronzes: 1, campus: CAMPI[6] },
  { campus_id: '3', pontos_acumulados: 8, ouros: 0, pratas: 0, bronzes: 1, campus: CAMPI[2] },
];

export const EQUIPES_EXEMPLO: Equipe[] = [
  {
    id: 'eq1',
    modalidade_id: 'c1',
    campus_id: '10',
    nome: 'Gaviões de Taguatinga',
    capitao_nome: 'Prof. Carlos Eduardo',
    capitao_matricula: '1948231',
    capitao_email: 'carlos.eduardo@ifb.edu.br',
    categoria: 'MISTO',
    preferencia_periodo: 'Noturno / Sábado',
    lista_participantes: ['Carlos Eduardo', 'Marcos Vinicius', 'Ana Paula', 'Juliana Lima', 'Roberto Santos', 'Luciana Silva'],
    campus: CAMPI[9],
    modalidade: MODALIDADES[0]
  },
  {
    id: 'eq2',
    modalidade_id: 'c1',
    campus_id: '1',
    nome: 'Futsal Asa Norte',
    capitao_nome: 'Fernanda Martins',
    capitao_matricula: '2049182',
    capitao_email: 'fernanda.martins@ifb.edu.br',
    categoria: 'MISTO',
    preferencia_periodo: 'Tarde / Sábado',
    lista_participantes: ['Fernanda Martins', 'Rodrigo Alves', 'Beatriz Costa', 'Lucas Pires', 'Daniel Faria'],
    campus: CAMPI[0],
    modalidade: MODALIDADES[0]
  },
  {
    id: 'eq3',
    modalidade_id: 'c2',
    campus_id: '5',
    nome: 'Cerrado Areia Planaltina',
    capitao_nome: 'Thiago Nogueira',
    capitao_matricula: '1839201',
    capitao_email: 'thiago.nogueira@ifb.edu.br',
    categoria: 'MISTO',
    preferencia_periodo: 'Manhã',
    lista_participantes: ['Thiago Nogueira', 'Camila Rocha', 'Gustavo Henrique', 'Patricia Mendes'],
    campus: CAMPI[4],
    modalidade: MODALIDADES[1]
  },
  {
    id: 'eq4',
    modalidade_id: 'c4',
    campus_id: '11',
    nome: 'Queimada Reitoria Express',
    capitao_nome: 'Julio Cesar Barbosa',
    capitao_matricula: '1728394',
    capitao_email: 'julio.barbosa@ifb.edu.br',
    categoria: 'MISTO',
    preferencia_periodo: 'Sábado o dia todo',
    lista_participantes: ['Julio Barbosa', 'Renata Moura', 'André Souza', 'Carla Dias', 'Mariana Ramos'],
    campus: CAMPI[10],
    modalidade: MODALIDADES[3]
  }
];

export const PARTIDAS_EXEMPLO: Partida[] = [
  {
    id: 'p1',
    modalidade_id: 'c1',
    fase: 'Fase de Grupos - Rodada 1',
    rodada: 1,
    data_hora: '2026-11-07T09:00:00Z',
    local_jogo: 'Ginásio Poliesportivo - Campus Taguatinga',
    status: 'EM_ANDAMENTO',
    modalidade: MODALIDADES[0],
    confrontos: [
      { id: 'cf1', partida_id: 'p1', equipe_id: 'eq1', pontuacao_final: 3, vencedor: false, equipe: EQUIPES_EXEMPLO[0] },
      { id: 'cf2', partida_id: 'p1', equipe_id: 'eq2', pontuacao_final: 2, vencedor: false, equipe: EQUIPES_EXEMPLO[1] }
    ]
  },
  {
    id: 'p2',
    modalidade_id: 'c2',
    fase: 'Classificatória Areia',
    rodada: 1,
    data_hora: '2026-11-07T10:30:00Z',
    local_jogo: 'Quadra de Areia - Campus Planaltina',
    status: 'AGENDADA',
    modalidade: MODALIDADES[1],
    confrontos: [
      { id: 'cf3', partida_id: 'p2', equipe_id: 'eq3', pontuacao_final: 0, vencedor: false, equipe: EQUIPES_EXEMPLO[2] },
      { id: 'cf4', partida_id: 'p2', pontuacao_final: 0, vencedor: false }
    ]
  },
  {
    id: 'p3',
    modalidade_id: 'c4',
    fase: 'Quartas de Final',
    rodada: 1,
    data_hora: '2026-11-07T14:00:00Z',
    local_jogo: 'Quadra 2 - Campus Brasília',
    status: 'FINALIZADA',
    modalidade: MODALIDADES[3],
    confrontos: [
      { id: 'cf5', partida_id: 'p3', equipe_id: 'eq4', pontuacao_final: 12, vencedor: true, equipe: EQUIPES_EXEMPLO[3] },
      { id: 'cf6', partida_id: 'p3', pontuacao_final: 8, vencedor: false }
    ]
  }
];

export const COMISSAO_EXEMPLO: ComissaoOrganizadora[] = [
  { id: 'm1', nome: 'Prof. Coordenador Geral', matricula: '1548291', funcao: 'Presidente da Comissão Central', lotacao: CAMPI[10], subcomissao: MODALIDADES[0] },
  { id: 'm2', nome: 'Secretária Executiva', matricula: '1827402', funcao: 'Secretaria e Comunicação', lotacao: CAMPI[0], subcomissao: MODALIDADES[0] },
  { id: 'm3', nome: 'Subcomissão Futsal (Coordenador)', matricula: '1948201', funcao: 'Árbitro Geral e Coordenação Futsal', lotacao: CAMPI[9], subcomissao: MODALIDADES[0] },
  { id: 'm4', nome: 'Subcomissão Vôlei / Areia', matricula: '1749204', funcao: 'Coordenação Vôlei de Quadra e Praia', lotacao: CAMPI[4], subcomissao: MODALIDADES[1] },
  { id: 'm5', nome: 'Subcomissão Corrida e Natação', matricula: '1639201', funcao: 'Coordenação Atletismo e Aquáticos', lotacao: CAMPI[1], subcomissao: MODALIDADES[7] },
  { id: 'm6', nome: 'Subcomissão Jogos de Mesa', matricula: '1439203', funcao: 'Coordenação Xadrez, Tênis de Mesa e Damas', lotacao: CAMPI[3], subcomissao: MODALIDADES[9] },
  { id: 'm7', nome: 'Subcomissão Saúde e Primeiros Socorros', matricula: '2039401', funcao: 'Atendimento Médico e Apoio Fisioterápico', lotacao: CAMPI[6] },
  { id: 'm8', nome: 'Subcomissão Logística e Transporte', matricula: '1920394', funcao: 'Gestão de Ônibus Intercampi e Alimentação', lotacao: CAMPI[7] }
];
