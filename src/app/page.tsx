'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Trophy, Calendar, Users, FileText, Award, MapPin, Clock, 
  ChevronRight, Shield, Activity, Flame, Goal, Sun, Zap, Target,
  Footprints, Waves, CircleDot, Crown, Grid3X3, Search, Info, Radio, Loader2
} from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { 
  getCampi, 
  getModalidades, 
  getPontuacaoGeral, 
  getEquipes, 
  getPartidas, 
  getComissao 
} from '@/lib/api';
import { Campus, Modalidade, Equipe, Partida, ComissaoOrganizadora, PontuacaoGeralCampus } from '@/types';

type TabType = 'inicio' | 'classificacao' | 'equipes' | 'cronograma' | 'modalidades' | 'comissao' | 'regulamento';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [filtroCampus, setFiltroCampus] = useState<string>('todos');
  const [filtroModalidade, setFiltroModalidade] = useState<string>('todas');
  const [buscaEquipe, setBuscaEquipe] = useState<string>('');
  const [equipeSelecionada, setEquipeSelecionada] = useState<Equipe | null>(null);

  // Estados da base de dados
  const [campi, setCampi] = useState<Campus[]>([]);
  const [modalidades, setModalidades] = useState<Modalidade[]>([]);
  const [pontuacao, setPontuacao] = useState<PontuacaoGeralCampus[]>([]);
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const [partidas, setPartidas] = useState<Partida[]>([]);
  const [comissao, setComissao] = useState<ComissaoOrganizadora[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  // Carga dos dados e inscrição Realtime
  useEffect(() => {
    async function carregarTodosDados() {
      try {
        const [c, m, p, eq, pt, cm] = await Promise.all([
          getCampi(),
          getModalidades(),
          getPontuacaoGeral(),
          getEquipes(),
          getPartidas(),
          getComissao()
        ]);
        setCampi(c);
        setModalidades(m);
        setPontuacao(p);
        setEquipes(eq);
        setPartidas(pt);
        setComissao(cm);
      } catch (err) {
        console.error('Erro ao buscar dados do Supabase:', err);
      } finally {
        setCarregando(false);
      }
    }

    carregarTodosDados();

    // Escuta em tempo real se o Supabase estiver configurado
    if (isSupabaseConfigured && supabase) {
      const client = supabase;
      const channel = client
        .channel('realtime_jis_updates')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'partida' }, async () => {
          const pts = await getPartidas();
          setPartidas(pts);
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'partida_confronto' }, async () => {
          const pts = await getPartidas();
          setPartidas(pts);
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'pontuacao_geral_campus' }, async () => {
          const ptc = await getPontuacaoGeral();
          setPontuacao(ptc);
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'equipe' }, async () => {
          const eqs = await getEquipes();
          setEquipes(eqs);
        })
        .subscribe();

      return () => {
        client.removeChannel(channel);
      };
    }
  }, []);

  // Filtrar equipes
  const equipesFiltradas = equipes.filter(eq => {
    const matchCampus = filtroCampus === 'todos' || eq.campus_id === filtroCampus;
    const matchMod = filtroModalidade === 'todas' || eq.modalidade_id === filtroModalidade;
    const matchBusca = eq.nome.toLowerCase().includes(buscaEquipe.toLowerCase()) ||
                       eq.capitao_nome.toLowerCase().includes(buscaEquipe.toLowerCase());
    return matchCampus && matchMod && matchBusca;
  });

  const getModalidadeIcon = (nome: string) => {
    switch (nome) {
      case 'Futsal': return <Goal className="w-5 h-5 text-emerald-600" />;
      case 'Vôlei de Areia': return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Vôlei': return <Activity className="w-5 h-5 text-blue-500" />;
      case 'Queimada': return <Flame className="w-5 h-5 text-rose-500" />;
      case 'Basquete 3x3': return <Target className="w-5 h-5 text-orange-500" />;
      case 'Handebol': return <Trophy className="w-5 h-5 text-indigo-500" />;
      case 'Futevôlei': return <Zap className="w-5 h-5 text-yellow-500" />;
      case 'Caminhada / Corrida': return <Footprints className="w-5 h-5 text-green-600" />;
      case 'Natação': return <Waves className="w-5 h-5 text-cyan-500" />;
      case 'Tênis de Mesa': return <CircleDot className="w-5 h-5 text-red-500" />;
      case 'Xadrez': return <Crown className="w-5 h-5 text-purple-600" />;
      case 'Damas': return <Grid3X3 className="w-5 h-5 text-stone-600" />;
      default: return <Award className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. TOPO: Ticker de Alertas e Status da Conexão */}
      <div className="bg-[#F2DF7F] border-b border-amber-300 text-[#1E2D3C] text-xs sm:text-sm font-semibold py-2 px-4 shadow-sm flex items-center justify-between overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-2 mx-auto">
          <span className="bg-[#1E2D3C] text-white px-2 py-0.5 rounded text-[11px] uppercase tracking-wider font-bold">Aviso Oficial</span>
          <span>🏐 12 Modalidades Esportivas • 🏃 191 Atletas Individuais • ⚽ 70 Equipes Coletivas • Sorteio das chaves a ser realizado pela Comissão!</span>
        </div>
      </div>

      {/* 2. HEADER HERO */}
      <header className="bg-[#1E2D3C] text-white border-b-4 border-[#288C28] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo e Título */}
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl p-2 shadow-xl border-2 border-[#E1D287] flex-shrink-0 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/logo-jogos.png" 
                  alt="Logo dos Jogos de Integração IFB" 
                  fill 
                  className="object-contain p-1" 
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-[#288C28]/30 text-[#E1D287] border border-[#E1D287]/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  Edição 2026 • Servidores IFB
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Jogos de Integração dos Servidores
                </h1>
                <p className="text-sm sm:text-base text-slate-300 font-medium mt-1 flex items-center justify-center md:justify-start gap-2">
                  <span>Instituto Federal de Brasília</span>
                  <span>•</span>
                  <span className="text-[#E1D287]">11 Campi e Reitoria</span>
                </p>
              </div>
            </div>

            {/* Marca Oficial IFB e Indicador Supabase */}
            <div className="flex flex-row md:flex-col items-center md:items-end gap-3 flex-shrink-0">
              <div className="relative w-28 h-12 bg-white/95 rounded-lg px-2 py-1 shadow-md flex items-center justify-center border border-slate-200">
                <Image 
                  src="/images/logo-ifb.png" 
                  alt="Instituto Federal de Brasília" 
                  width={90} 
                  height={40} 
                  className="object-contain"
                />
              </div>

              {/* Status do Banco */}
              <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-700 text-xs font-medium">
                {isSupabaseConfigured ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Radio className="w-3.5 h-3.5" /> Supabase Ao Vivo
                    </span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="text-slate-300">Modo Demonstração</span>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Navegação por Abas */}
        <div className="bg-[#15202B] border-t border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 scrollbar-none">
              {[
                { id: 'inicio', label: 'Início & Ao Vivo', icon: Activity },
                { id: 'classificacao', label: 'Tabela de Pontos', icon: Trophy },
                { id: 'equipes', label: 'Equipes & Atletas', icon: Users },
                { id: 'cronograma', label: 'Cronograma', icon: Calendar },
                { id: 'modalidades', label: 'Modalidades', icon: Award },
                { id: 'comissao', label: 'Comissão', icon: Shield },
                { id: 'regulamento', label: 'Regulamento', icon: FileText },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as TabType)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#288C28] text-white shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#E1D287]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* 3. CONTEÚDO PRINCIPAL (SPA TABS) */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {carregando ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-[#288C28]" />
            <p className="text-sm font-bold">Carregando dados dos Jogos...</p>
          </div>
        ) : (
          <>
            {/* ==================== ABA 1: INÍCIO ==================== */}
            {activeTab === 'inicio' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Jogos em Destaque / Ao Vivo */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-extrabold text-[#1E2D3C] flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                        Partidas e Rodadas em Destaque
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">Resultados parciais e confrontos em andamento</p>
                    </div>
                    <button 
                      onClick={() => setActiveTab('cronograma')} 
                      className="text-xs font-bold text-[#288C28] hover:underline flex items-center gap-1"
                    >
                      Ver todas as partidas <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {partidas.slice(0, 3).map((p) => (
                      <div key={p.id} className="bg-white rounded-2xl border-2 border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                          <span className="font-bold text-[#1E2D3C] flex items-center gap-1.5">
                            {getModalidadeIcon(p.modalidade?.nome || '')}
                            {p.modalidade?.nome}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full font-bold text-[11px] ${
                            p.status === 'EM_ANDAMENTO' ? 'bg-amber-100 text-amber-800 animate-pulse' :
                            p.status === 'FINALIZADA' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                          }`}
                          >
                            {p.status === 'EM_ANDAMENTO' ? 'Em Andamento' : p.status === 'FINALIZADA' ? 'Encerrado' : 'Agendado'}
                          </span>
                        </div>

                        {/* Confronto */}
                        <div className="space-y-3 py-2">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-slate-800 truncate max-w-[170px]">
                              {p.confrontos?.[0]?.equipe?.nome || 'Equipe a definir'}
                            </span>
                            <span className="text-lg font-black bg-slate-100 text-[#1E2D3C] px-2.5 py-1 rounded-lg border border-slate-200">
                              {p.confrontos?.[0]?.pontuacao_final ?? 0}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-slate-800 truncate max-w-[170px]">
                              {p.confrontos?.[1]?.equipe?.nome || 'Aguardando sorteio'}
                            </span>
                            <span className="text-lg font-black bg-slate-100 text-[#1E2D3C] px-2.5 py-1 rounded-lg border border-slate-200">
                              {p.confrontos?.[1]?.pontuacao_final ?? 0}
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                          <span className="flex items-center gap-1 truncate">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {p.local_jogo?.split('-')[0] || 'Local IFB'}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {p.fase}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Top 3 Pódio Parcial + Origem do Projeto */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Pódio Parcial */}
                  <div className="bg-white rounded-2xl border-2 border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-black text-[#1E2D3C] flex items-center gap-2 mb-1">
                        <Trophy className="w-5 h-5 text-amber-500" />
                        Pódio Parcial - Troféu Eficiência
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">Soma acumulada de pontos de todos os campi</p>

                      <div className="space-y-3">
                        {pontuacao.slice(0, 3).map((item, idx) => (
                          <div key={item.campus_id} className={`flex items-center justify-between p-3 rounded-xl border-2 ${
                            idx === 0 ? 'bg-amber-50/60 border-amber-300' : 
                            idx === 1 ? 'bg-slate-50 border-slate-300' : 'bg-orange-50/50 border-orange-200'
                          }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-xs ${
                                idx === 0 ? 'bg-amber-400 text-amber-950' :
                                idx === 1 ? 'bg-slate-300 text-slate-800' : 'bg-amber-600 text-white'
                              }`}
                              >
                                {idx + 1}º
                              </span>
                              <div>
                                <p className="font-bold text-sm text-[#1E2D3C]">{item.campus?.nome}</p>
                                <p className="text-[11px] text-slate-500">
                                  🥇 {item.ouros}  🥈 {item.pratas}  🥉 {item.bronzes}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-black text-[#288C28]">{item.pontos_acumulados}</span>
                              <span className="text-[10px] text-slate-400 block">pts</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => setActiveTab('classificacao')} 
                      className="mt-5 w-full bg-slate-100 hover:bg-slate-200 text-[#1E2D3C] py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      Ver Classificação Completa
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Institucional / Origem */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#288C28] uppercase tracking-wider mb-2">
                        <Shield className="w-4 h-4" />
                        Sobre o JIS-IFB 2026
                      </div>
                      <h3 className="text-xl font-black text-[#1E2D3C] mb-3">
                        Integração, Saúde e Espírito Esportivo entre os Servidores
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Os Jogos de Integração dos Servidores do IFB representam o momento oficial de confraternização, promoção da qualidade de vida e fortalecimento dos laços institucionais entre os docentes e técnicos-administrativos de todas as unidades.
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                        <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                          <span className="text-2xl font-black text-[#288C28]">{campi.length || 11}</span>
                          <span className="text-[11px] text-slate-500 font-bold block">Unidades</span>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                          <span className="text-2xl font-black text-[#F57656]">{modalidades.length || 12}</span>
                          <span className="text-[11px] text-slate-500 font-bold block">Modalidades</span>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                          <span className="text-2xl font-black text-[#1E2D3C]">{equipes.length || 70}</span>
                          <span className="text-[11px] text-slate-500 font-bold block">Equipes</span>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                          <span className="text-2xl font-black text-amber-500">191</span>
                          <span className="text-[11px] text-slate-500 font-bold block">Individuais</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-slate-500 font-medium">Portaria da Reitora nº 120/2026 • Comissão Central Organizadora</span>
                      <button 
                        onClick={() => setActiveTab('regulamento')} 
                        className="bg-[#1E2D3C] hover:bg-[#283849] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                        Consultar Regulamento Oficial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== ABA 2: CLASSIFICAÇÃO GERAL ==================== */}
            {activeTab === 'classificacao' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#1E2D3C] flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-amber-500" />
                      Tabela Geral de Pontuação • Troféu Eficiência
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Classificação geral computada por medalhas e pontuação das provas</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#1E2D3C] text-white text-xs uppercase tracking-wider font-extrabold">
                          <th className="py-3.5 px-4 text-center w-16">Pos.</th>
                          <th className="py-3.5 px-4">Campus / Lotação</th>
                          <th className="py-3.5 px-4 text-center">🥇 Ouro</th>
                          <th className="py-3.5 px-4 text-center">🥈 Prata</th>
                          <th className="py-3.5 px-4 text-center">🥉 Bronze</th>
                          <th className="py-3.5 px-4 text-right font-black">Pontos Totais</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-sm font-medium">
                        {pontuacao.map((item, index) => (
                          <tr key={item.campus_id} className={`hover:bg-slate-50/80 transition-colors ${index < 3 ? 'bg-amber-50/30' : ''}`}
                          >
                            <td className="py-3.5 px-4 text-center font-bold text-slate-700">
                              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black ${
                                index === 0 ? 'bg-amber-400 text-amber-950' :
                                index === 1 ? 'bg-slate-200 text-slate-800' :
                                index === 2 ? 'bg-amber-600 text-white' : 'text-slate-500'
                              }`}
                              >
                                {index + 1}º
                              </span>
                            </td>
                            <td className="py-3.5 px-4 font-bold text-[#1E2D3C] flex items-center gap-2.5">
                              <span className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.campus?.cor_primaria }}></span>
                              <span>{item.campus?.nome}</span>
                              <span className="text-xs text-slate-400 font-mono font-normal">({item.campus?.sigla})</span>
                            </td>
                            <td className="py-3.5 px-4 text-center font-bold text-slate-700">{item.ouros}</td>
                            <td className="py-3.5 px-4 text-center font-bold text-slate-700">{item.pratas}</td>
                            <td className="py-3.5 px-4 text-center font-bold text-slate-700">{item.bronzes}</td>
                            <td className="py-3.5 px-4 text-right font-black text-base text-[#288C28]">
                              {item.pontos_acumulados}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== ABA 3: EQUIPES & ATLETAS ==================== */}
            {activeTab === 'equipes' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#1E2D3C] flex items-center gap-2">
                      <Users className="w-6 h-6 text-[#288C28]" />
                      Equipes Coletivas e Participantes
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Consulte os times inscritos por campus e modalidade</p>
                  </div>
                </div>

                {/* Filtros e Busca */}
                <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Buscar por time ou capitão..." 
                      value={buscaEquipe}
                      onChange={(e) => setBuscaEquipe(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#288C28]"
                    />
                  </div>
                  <select 
                    value={filtroCampus}
                    onChange={(e) => setFiltroCampus(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#288C28]"
                  >
                    <option value="todos">Todos os Campi</option>
                    {campi.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
                  </select>
                  <select 
                    value={filtroModalidade}
                    onChange={(e) => setFiltroModalidade(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#288C28]"
                  >
                    <option value="todas">Todas as Modalidades</option>
                    {modalidades.filter(m => m.tipo === 'COLETIVA').map(m => (
                      <option key={m.id} value={m.id}>{m.nome}</option>
                    ))}
                  </select>
                </div>

                {/* Grade de Equipes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {equipesFiltradas.map((eq) => (
                    <div key={eq.id} className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#1E2D3C] to-slate-700 text-[#E1D287] flex items-center justify-center font-black text-lg border-2 border-slate-200 shadow-xs flex-shrink-0 overflow-hidden relative">
                              {eq.avatar_url ? (
                                <Image src={eq.avatar_url} alt={eq.nome} fill className="object-cover" />
                              ) : (
                                eq.nome.substring(0, 2).toUpperCase()
                              )}
                            </div>
                            <div>
                              <h4 className="font-extrabold text-sm text-[#1E2D3C] leading-snug">{eq.nome}</h4>
                              <span className="text-xs font-semibold text-[#288C28] flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: eq.campus?.cor_primaria }}></span>
                                {eq.campus?.nome}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-bold border border-slate-200">
                            {eq.modalidade?.nome}
                          </span>
                        </div>

                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5 text-xs text-slate-600 mb-3">
                          <p><strong>Capitão(ã):</strong> {eq.capitao_nome} {eq.capitao_matricula ? `(${eq.capitao_matricula})` : ''}</p>
                          {eq.capitao_email && <p><strong>E-mail:</strong> {eq.capitao_email}</p>}
                          <p><strong>Período:</strong> {eq.preferencia_periodo || 'A definir'}</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => setEquipeSelecionada(eq)}
                        className="w-full bg-[#1E2D3C] hover:bg-[#283849] text-white py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                      >
                        Ver {eq.lista_participantes?.length || 0} Integrantes
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Modal de Participantes */}
                {equipeSelecionada && (
                  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300 animate-scaleUp">
                      <div className="flex items-center justify-between border-b pb-3 mb-4">
                        <div>
                          <h3 className="font-black text-lg text-[#1E2D3C]">{equipeSelecionada.nome}</h3>
                          <p className="text-xs text-[#288C28] font-bold">{equipeSelecionada.campus?.nome} • {equipeSelecionada.modalidade?.nome}</p>
                        </div>
                        <button onClick={() => setEquipeSelecionada(null)} className="text-slate-400 hover:text-slate-700 font-bold text-lg">✕</button>
                      </div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Relação de Participantes Cadastrados</p>
                      <ul className="divide-y divide-slate-100 max-h-60 overflow-y-auto pr-1">
                        {equipeSelecionada.lista_participantes?.map((p: string, idx: number) => (
                          <li key={idx} className="py-2 text-sm text-slate-700 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-xs flex items-center justify-center font-bold">{idx + 1}</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => setEquipeSelecionada(null)} 
                        className="mt-5 w-full bg-[#288C28] text-white py-2 rounded-xl font-bold text-sm hover:bg-[#1D6B1D]"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ==================== ABA 4: CRONOGRAMA ==================== */}
            {activeTab === 'cronograma' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#1E2D3C] flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-[#F57656]" />
                    Cronograma dos Jogos e Rodadas
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">Horários, locais e confrontos por data</p>
                </div>

                {/* Alerta de Chaveamentos */}
                <div className="bg-emerald-50 border-2 border-emerald-300 p-4 rounded-2xl flex items-start gap-3 shadow-xs">
                  <Info className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-900 leading-relaxed">
                    <p className="font-bold text-sm mb-0.5">Chaveamentos e Grupos Oficiais Homologados</p>
                    <p>Os sorteios de chaves e a composição de todos os grupos foram homologados pela Comissão no Congresso Técnico (27/10/2026). O cronograma abaixo reflete todas as 115 partidas e eventos agendados com datas, horários e locais definitivos.</p>
                  </div>
                </div>

                {/* Lista de Partidas */}
                <div className="space-y-3">
                  {partidas.map((p) => (
                    <div key={p.id} className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                          {getModalidadeIcon(p.modalidade?.nome || '')}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-[#288C28]">{p.modalidade?.nome}</span>
                            <span className="text-xs text-slate-400">•</span>
                            <span className="text-xs text-slate-600 font-semibold">{p.fase}</span>
                          </div>
                          <h4 className="font-extrabold text-base text-[#1E2D3C]">
                            {p.confrontos?.[0]?.equipe?.nome || 'A definir'} vs {p.confrontos?.[1]?.equipe?.nome || 'A definir'}
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                        <span className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {p.local_jogo || 'Local a definir'}
                        </span>
                        <span className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {p.data_hora ? new Date(p.data_hora).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '--:--'}h
                        </span>
                        <span className={`px-3 py-1 rounded-full font-bold ${
                          p.status === 'FINALIZADA' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                        }`}
                        >
                          Placar: {p.confrontos?.[0]?.pontuacao_final ?? 0} x {p.confrontos?.[1]?.pontuacao_final ?? 0}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== ABA 5: MODALIDADES ==================== */}
            {activeTab === 'modalidades' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#1E2D3C] flex items-center gap-2">
                    <Award className="w-6 h-6 text-[#288C28]" />
                    Modalidades e Formatos de Disputa
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">12 esportes oficiais homologados para a edição de 2026</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modalidades.map((m) => (
                    <div key={m.id} className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                              {getModalidadeIcon(m.nome)}
                            </div>
                            <div>
                              <h4 className="font-extrabold text-base text-[#1E2D3C]">{m.nome}</h4>
                              <span className="text-[11px] font-bold text-slate-400 uppercase">{m.tipo} • {m.categoria}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                          <strong>Formato:</strong> {m.formato_disputa}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#288C28]">
                        <span>Inscrições Registradas:</span>
                        <span className="bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          {m.total_vagas_ou_inscritos} {m.tipo === 'COLETIVA' ? 'Equipes' : 'Atletas'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== ABA 6: COMISSÃO ORGANIZADORA ==================== */}
            {activeTab === 'comissao' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gradient-to-r from-[#1E2D3C] to-[#283849] rounded-2xl text-white p-6 shadow-md border-b-4 border-[#288C28]">
                  <span className="text-xs font-bold text-[#E1D287] uppercase tracking-wider block mb-1">Portaria da Reitora do IFB</span>
                  <h2 className="text-xl sm:text-2xl font-black mb-2">Comissão Central Organizadora dos Jogos 2026</h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    Equipe composta por 22 membros designados por portaria oficial para planejar, articular, fiscalizar as regras e conduzir as subcomissões de cada modalidade esportiva.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {comissao.map((m) => (
                    <div key={m.id} className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-xs flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#1E2D3C] flex items-center justify-center font-bold flex-shrink-0">
                        <Shield className="w-5 h-5 text-[#288C28]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-sm text-[#1E2D3C]">{m.nome}</h4>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {m.subcomissao_nome || m.subcomissao?.nome || 'Coordenação'}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#288C28]">{m.funcao}</p>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-[11px] text-slate-500 font-medium">
                          <span>Lotação: {m.lotacao?.nome || 'IFB'}</span>
                          <span>•</span>
                          <span>SIAPE: {m.matricula}</span>
                          {m.contato && (
                            <>
                              <span>•</span>
                              <a href={`mailto:${m.contato}`} className="text-[#F57656] hover:underline font-mono">
                                {m.contato}
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== ABA 7: REGULAMENTO ==================== */}
            {activeTab === 'regulamento' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#1E2D3C] flex items-center gap-2">
                      <FileText className="w-6 h-6 text-[#288C28]" />
                      Regulamento Geral dos Jogos
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Normas, disposições e critérios de participação</p>
                  </div>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert('O arquivo PDF completo do Regulamento Geral está sincronizado com o Google Docs oficial e estará disponível para download direto.'); }}
                    className="bg-[#288C28] hover:bg-[#1D6B1D] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" />
                    Baixar PDF Oficial
                  </a>
                </div>

                <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-xs">
                  <div className="border-b pb-4">
                    <h3 className="text-base font-bold text-[#1E2D3C] mb-1">Artigo 1º - Da Finalidade e Participação</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Os Jogos de Integração dos Servidores têm como finalidade promover a saúde física e mental, o intercâmbio esportivo e a integração entre docentes e técnicos administrativos de todos os Campi do IFB e da Reitoria.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="text-base font-bold text-[#1E2D3C] mb-1">Artigo 2º - Dos Critérios de Inscrição e Equipes</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      É permitido a cada Campus inscrever mais de uma equipe por modalidade coletiva. Todos os integrantes devem ser servidores ativos ou colaboradores vinculados formalmente ao IFB.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="text-base font-bold text-[#1E2D3C] mb-1">Artigo 3º - Da Pontuação do Troféu Eficiência</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A pontuação final de cada Campus é obtida pela somatória dos pontos atribuídos aos 1º, 2º e 3º colocados em todas as modalidades oficiais (10 pontos para ouro, 7 para prata, 4 para bronze e 1 ponto por equipe participante inscrita).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1E2D3C] mb-1">Artigo 4º - Disciplina e Fair Play</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A Comissão Central e as subcomissões zelarão pelo espírito esportivo, aplicando as penalidades cabíveis em caso de conduta antidesportiva, prevalecendo sempre a camaradagem e o respeito mútuo.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

      </main>

      {/* 4. FOOTER INSTITUCIONAL */}
      <footer className="bg-[#1E2D3C] text-slate-400 text-xs border-t-4 border-[#288C28] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center">
              <Image src="/images/logo-ifb.png" alt="IFB" fill className="object-contain p-0.5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Instituto Federal de Brasília (IFB)</p>
              <p className="text-slate-400 text-[11px]">Jogos de Integração dos Servidores 2026 • Comissão Central Organizadora</p>
            </div>
          </div>
          <p className="text-slate-400 text-xs">
            Desenvolvido para os Servidores do IFB • Next.js, Tailwind & Supabase
          </p>
        </div>
      </footer>
    </div>
  );
}
