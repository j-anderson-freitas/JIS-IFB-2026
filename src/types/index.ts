export type TipoModalidade = 'INDIVIDUAL' | 'COLETIVA';
export type CategoriaGenero = 'MASCULINO' | 'FEMININO' | 'MISTO';
export type StatusPartida = 'AGENDADA' | 'EM_ANDAMENTO' | 'FINALIZADA' | 'CANCELADA';

export interface Campus {
  id: string;
  nome: string;
  sigla: string;
  cor_primaria: string;
}

export interface Modalidade {
  id: string;
  nome: string;
  tipo: TipoModalidade;
  categoria: CategoriaGenero;
  icone: string;
  formato_disputa: string;
  total_vagas_ou_inscritos: number;
}

export interface Equipe {
  id: string;
  modalidade_id: string;
  campus_id: string;
  nome: string;
  avatar_url?: string | null;
  capitao_nome: string;
  capitao_matricula: string;
  capitao_email: string;
  lista_participantes: string[];
  categoria: CategoriaGenero;
  preferencia_periodo?: string | null;
  campus?: Campus;
  modalidade?: Modalidade;
}

export interface ParticipanteIndividual {
  id: string;
  modalidade_id: string;
  campus_id: string;
  nome: string;
  matricula?: string | null;
  categoria: CategoriaGenero;
  colocacao_final?: number | null;
  campus?: Campus;
  modalidade?: Modalidade;
}

export interface Partida {
  id: string;
  modalidade_id: string;
  fase: string;
  rodada: number;
  data_hora: string;
  local_jogo: string;
  status: StatusPartida;
  observacoes?: string | null;
  modalidade?: Modalidade;
  confrontos?: PartidaConfronto[];
}

export interface PartidaConfronto {
  id: string;
  partida_id: string;
  equipe_id?: string | null;
  participante_id?: string | null;
  pontuacao_final: number;
  detalhes_pontuacao?: string | null;
  vencedor: boolean;
  equipe?: Equipe;
  participante?: ParticipanteIndividual;
}

export interface ComissaoOrganizadora {
  id: string;
  nome: string;
  matricula: string;
  funcao: string;
  lotacao_campus_id?: string | null;
  subcomissao_modalidade_id?: string | null;
  subcomissao_nome?: string | null;
  contato?: string | null;
  lotacao?: Campus;
  subcomissao?: Modalidade | null;
}

export interface PontuacaoGeralCampus {
  campus_id: string;
  pontos_acumulados: number;
  ouros: number;
  pratas: number;
  bronzes: number;
  campus?: Campus;
}
