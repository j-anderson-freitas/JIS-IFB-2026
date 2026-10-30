import { supabase, isSupabaseConfigured } from './supabase';
import { 
  CAMPI as MOCK_CAMPI, 
  MODALIDADES as MOCK_MODALIDADES, 
  PONTUACAO_INICIAL as MOCK_PONTUACAO, 
  EQUIPES_EXEMPLO as MOCK_EQUIPES, 
  PARTIDAS_EXEMPLO as MOCK_PARTIDAS, 
  COMISSAO_EXEMPLO as MOCK_COMISSAO 
} from './mock-data';
import { Campus, Modalidade, Equipe, Partida, ComissaoOrganizadora, PontuacaoGeralCampus } from '@/types';

export async function getCampi(): Promise<Campus[]> {
  if (!isSupabaseConfigured || !supabase) return MOCK_CAMPI;
  const { data, error } = await supabase.from('campus').select('*').order('nome');
  if (error || !data || data.length === 0) return MOCK_CAMPI;
  return data;
}

export async function getModalidades(): Promise<Modalidade[]> {
  if (!isSupabaseConfigured || !supabase) return MOCK_MODALIDADES;
  const { data, error } = await supabase.from('modalidade').select('*').order('nome');
  if (error || !data || data.length === 0) return MOCK_MODALIDADES;
  return data;
}

export async function getPontuacaoGeral(): Promise<PontuacaoGeralCampus[]> {
  if (!isSupabaseConfigured || !supabase) return MOCK_PONTUACAO;
  const { data, error } = await supabase
    .from('pontuacao_geral_campus')
    .select('*, campus(*)')
    .order('pontos_acumulados', { ascending: false });
  
  if (error || !data || data.length === 0) return MOCK_PONTUACAO;
  return data;
}

export async function getEquipes(): Promise<Equipe[]> {
  if (!isSupabaseConfigured || !supabase) return MOCK_EQUIPES;
  const { data, error } = await supabase
    .from('equipe')
    .select('*, campus(*), modalidade(*)')
    .order('created_at', { ascending: false });

  if (error || !data || data.length === 0) return MOCK_EQUIPES;
  return data;
}

export async function getPartidas(): Promise<Partida[]> {
  if (!isSupabaseConfigured || !supabase) return MOCK_PARTIDAS;
  const { data, error } = await supabase
    .from('partida')
    .select(`
      *,
      modalidade(*),
      confrontos:partida_confronto(*, equipe(*, campus(*)), participante:participante_individual(*))
    `)
    .order('data_hora', { ascending: true });

  if (error || !data || data.length === 0) return MOCK_PARTIDAS;
  return data;
}

export async function getComissao(): Promise<ComissaoOrganizadora[]> {
  if (!isSupabaseConfigured || !supabase) return MOCK_COMISSAO;
  const { data, error } = await supabase
    .from('comissao_organizadora')
    .select('*, lotacao:campus(*), subcomissao:modalidade(*)')
    .order('nome');

  if (error || !data || data.length === 0) return MOCK_COMISSAO;
  return data;
}
