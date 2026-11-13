/* ============================================================
   CARACOL — Portal do Professor
   Camada de dados de demonstração (persistida em localStorage)
   Substituir por chamadas à API real do Sistema Caracol quando
   for feita a integração (ver comentários "INTEGRAÇÃO API").
   ============================================================ */
(function (global) {
  "use strict";

  var DB_KEY = "caracol_portal_db_v1";

  var SEED = {
    professor: {
      nome: "Prof. Carlos Mendes",
      disciplina: "Matemática e Física",
      escola: "Sistema Caracol — Núcleo de Ensino",
      email: "carlos.mendes@caracol.edu",
      avatarIniciais: "CM"
    },

    turmas: [
      { id: "t1", nome: "9ª Classe A", ano: "2026", turno: "Manhã", sala: "Sala 12", disciplina: "Matemática", totalAlunos: 32 },
      { id: "t2", nome: "9ª Classe B", ano: "2026", turno: "Manhã", sala: "Sala 14", disciplina: "Matemática", totalAlunos: 29 },
      { id: "t3", nome: "10ª Classe A", ano: "2026", turno: "Tarde", sala: "Sala 6", disciplina: "Física", totalAlunos: 27 },
      { id: "t4", nome: "11ª Classe C", ano: "2026", turno: "Tarde", sala: "Sala 3", disciplina: "Física", totalAlunos: 24 }
    ],

    estudantes: [
      { id: "e1", nome: "Ana Beatriz Fonseca", turmaId: "t1", numero: 1, encarregado: "Joana Fonseca", contacto: "923 111 222", media: 16.4, presenca: 96, status: "ativo" },
      { id: "e2", nome: "Bruno Cassoma", turmaId: "t1", numero: 2, encarregado: "Miguel Cassoma", contacto: "923 111 223", media: 12.1, presenca: 88, status: "ativo" },
      { id: "e3", nome: "Cátia Nzuzi", turmaId: "t1", numero: 3, encarregado: "Rosa Nzuzi", contacto: "923 111 224", media: 9.8, presenca: 74, status: "atencao" },
      { id: "e4", nome: "Domingos Sapalo", turmaId: "t1", numero: 4, encarregado: "Elsa Sapalo", contacto: "923 111 225", media: 14.7, presenca: 93, status: "ativo" },
      { id: "e5", nome: "Elisa Kiala", turmaId: "t2", numero: 1, encarregado: "Paulo Kiala", contacto: "923 111 226", media: 17.2, presenca: 98, status: "ativo" },
      { id: "e6", nome: "Fábio Necaca", turmaId: "t2", numero: 2, encarregado: "Sara Necaca", contacto: "923 111 227", media: 11.3, presenca: 81, status: "ativo" },
      { id: "e7", nome: "Graça Muhongo", turmaId: "t2", numero: 3, encarregado: "Isaac Muhongo", contacto: "923 111 228", media: 8.9, presenca: 65, status: "atencao" },
      { id: "e8", nome: "Hélio Tati", turmaId: "t3", numero: 1, encarregado: "Marta Tati", contacto: "923 111 229", media: 15.5, presenca: 91, status: "ativo" },
      { id: "e9", nome: "Ivete Sengue", turmaId: "t3", numero: 2, encarregado: "André Sengue", contacto: "923 111 230", media: 13.6, presenca: 89, status: "ativo" },
      { id: "e10", nome: "João Pedro Alves", turmaId: "t3", numero: 3, encarregado: "Lúcia Alves", contacto: "923 111 231", media: 10.4, presenca: 77, status: "atencao" },
      { id: "e11", nome: "Karla Bumba", turmaId: "t4", numero: 1, encarregado: "Norberto Bumba", contacto: "923 111 232", media: 18.0, presenca: 99, status: "ativo" },
      { id: "e12", nome: "Leandro Ferraz", turmaId: "t4", numero: 2, encarregado: "Cristina Ferraz", contacto: "923 111 233", media: 12.9, presenca: 84, status: "ativo" }
    ],

    tarefas: [
      { id: "a1", titulo: "Lista de exercícios — Equações do 2º grau", turmaId: "t1", tipo: "Trabalho individual", prazo: "2026-07-14", entregues: 21, total: 32, status: "aberta" },
      { id: "a2", titulo: "Projeto: Estatística no dia a dia", turmaId: "t2", tipo: "Projeto em grupo", prazo: "2026-07-20", entregues: 9, total: 29, status: "aberta" },
      { id: "a3", titulo: "Relatório de laboratório — Leis de Newton", turmaId: "t3", tipo: "Trabalho individual", prazo: "2026-07-10", entregues: 27, total: 27, status: "encerrada" },
      { id: "a4", titulo: "Ficha de revisão — Movimento Circular", turmaId: "t4", tipo: "Ficha", prazo: "2026-06-30", entregues: 18, total: 24, status: "atrasada" },
      { id: "a5", titulo: "Trabalho de casa — Funções Quadráticas", turmaId: "t1", tipo: "Trabalho de casa", prazo: "2026-07-16", entregues: 5, total: 32, status: "aberta" }
    ],

    notas: [
      { id: "n1", estudanteId: "e1", turmaId: "t1", disciplina: "Matemática", trimestre: "3º Trimestre", tipo: "Prova", valor: 17 },
      { id: "n2", estudanteId: "e1", turmaId: "t1", disciplina: "Matemática", trimestre: "3º Trimestre", tipo: "Trabalho", valor: 15.8 },
      { id: "n3", estudanteId: "e2", turmaId: "t1", disciplina: "Matemática", trimestre: "3º Trimestre", tipo: "Prova", valor: 11.5 },
      { id: "n4", estudanteId: "e3", turmaId: "t1", disciplina: "Matemática", trimestre: "3º Trimestre", tipo: "Prova", valor: 9.2 },
      { id: "n5", estudanteId: "e4", turmaId: "t1", disciplina: "Matemática", trimestre: "3º Trimestre", tipo: "Prova", valor: 14.7 }
    ],

    presencas: [
      { data: "2026-07-08", turmaId: "t1", presentes: 30, faltas: 2, justificadas: 1 },
      { data: "2026-07-07", turmaId: "t1", presentes: 29, faltas: 3, justificadas: 1 },
      { data: "2026-07-08", turmaId: "t2", presentes: 27, faltas: 2, justificadas: 0 },
      { data: "2026-07-08", turmaId: "t3", presentes: 25, faltas: 2, justificadas: 2 },
      { data: "2026-07-08", turmaId: "t4", presentes: 22, faltas: 2, justificadas: 1 }
    ],

    comportamento: [
      { id: "c1", estudanteId: "e2", turmaId: "t1", data: "2026-07-06", criterio: "Participação e respeito", pontuacao: 4, obs: "Participativo, ocasionalmente conversa fora de hora." },
      { id: "c2", estudanteId: "e3", turmaId: "t1", data: "2026-07-05", criterio: "Assiduidade e pontualidade", pontuacao: 2, obs: "Chegou atrasado 3 vezes esta semana." },
      { id: "c3", estudanteId: "e7", turmaId: "t2", data: "2026-07-04", criterio: "Trabalho em equipa", pontuacao: 3, obs: "Melhorou a colaboração no projeto de grupo." }
    ],

    avaliacaoContinua: [
      { id: "ac1", estudanteId: "e1", turmaId: "t1", participacao: 18, trabalhosCasa: 16, testesRapidos: 17, projetos: 19, media: 17.5 },
      { id: "ac2", estudanteId: "e2", turmaId: "t1", participacao: 12, trabalhosCasa: 11, testesRapidos: 13, projetos: 12, media: 12.0 },
      { id: "ac3", estudanteId: "e3", turmaId: "t1", participacao: 8, trabalhosCasa: 9, testesRapidos: 10, projetos: 8, media: 8.8 }
    ],

    materiais: [
      { id: "m1", titulo: "Equações do 2º Grau — Slides de Aula", turmaId: "t1", tipo: "Slides", formato: "PDF", tamanho: "2.4 MB", data: "2026-07-01" },
      { id: "m2", titulo: "Vídeo-aula: Fórmula Resolvente", turmaId: "t1", tipo: "Vídeo", formato: "MP4", tamanho: "48 MB", data: "2026-07-02" },
      { id: "m3", titulo: "Guia de Estudo — Estatística Descritiva", turmaId: "t2", tipo: "Documento", formato: "DOCX", tamanho: "620 KB", data: "2026-06-28" },
      { id: "m4", titulo: "Laboratório Virtual — Leis de Newton", turmaId: "t3", tipo: "Simulação", formato: "Link", tamanho: "—", data: "2026-06-25" },
      { id: "m5", titulo: "Exercícios Resolvidos — Movimento Circular", turmaId: "t4", tipo: "Documento", formato: "PDF", tamanho: "1.1 MB", data: "2026-06-20" }
    ],

    cursos: [
      { id: "cu1", titulo: "Matemática Básica para Exames de Acesso", categoria: "Matemática", nivel: "Iniciante", inscritos: 184, aulas: 12, status: "publicado", gratuito: true },
      { id: "cu2", titulo: "Introdução à Física Mecânica", categoria: "Física", nivel: "Intermédio", inscritos: 96, aulas: 8, status: "publicado", gratuito: true },
      { id: "cu3", titulo: "Preparação para Olimpíadas de Matemática", categoria: "Matemática", nivel: "Avançado", inscritos: 41, aulas: 10, status: "rascunho", gratuito: true }
    ],

    aulasPrivadas: [
      { id: "p1", estudante: "Cátia Nzuzi", turma: "9ª Classe A", tema: "Reforço — Equações do 2º grau", data: "2026-07-11", hora: "15:00", modalidade: "Online", status: "confirmada" },
      { id: "p2", estudante: "Graça Muhongo", turma: "9ª Classe B", tema: "Reforço — Estatística", data: "2026-07-12", hora: "14:00", modalidade: "Presencial", status: "pendente" },
      { id: "p3", estudante: "João Pedro Alves", turma: "10ª Classe A", tema: "Apoio — Leis de Newton", data: "2026-07-09", hora: "16:30", modalidade: "Online", status: "confirmada" }
    ],

    mensagens: [
      { id: "msg1", de: "Rosa Nzuzi (Enc. Cátia Nzuzi)", assunto: "Dúvida sobre avaliação contínua", data: "2026-07-08 09:12", lida: false },
      { id: "msg2", de: "Coordenação Pedagógica", assunto: "Prazo de lançamento de notas — 3º Trimestre", data: "2026-07-07 17:40", lida: false },
      { id: "msg3", de: "Isaac Muhongo (Enc. Graça Muhongo)", assunto: "Pedido de aula de reforço", data: "2026-07-06 11:05", lida: true },
      { id: "msg4", de: "Secretaria Escolar", assunto: "Atualização do calendário escolar", data: "2026-07-03 08:00", lida: true }
    ],

    eventos: [
      { data: "2026-07-10", titulo: "Entrega — Relatório de Laboratório", turma: "10ª Classe A", tipo: "prazo" },
      { data: "2026-07-11", titulo: "Aula privada — Cátia Nzuzi", turma: "9ª Classe A", tipo: "aula" },
      { data: "2026-07-14", titulo: "Entrega — Lista de exercícios", turma: "9ª Classe A", tipo: "prazo" },
      { data: "2026-07-15", titulo: "Reunião de coordenação pedagógica", turma: "—", tipo: "reuniao" },
      { data: "2026-07-20", titulo: "Entrega — Projeto de Estatística", turma: "9ª Classe B", tipo: "prazo" }
    ]
  };

  function load() {
    try {
      var raw = localStorage.getItem(DB_KEY);
      if (!raw) {
        localStorage.setItem(DB_KEY, JSON.stringify(SEED));
        return JSON.parse(JSON.stringify(SEED));
      }
      return JSON.parse(raw);
    } catch (e) {
      return JSON.parse(JSON.stringify(SEED));
    }
  }

  function save(db) {
    try { localStorage.setItem(DB_KEY, JSON.stringify(db)); } catch (e) {}
  }

  function resetDemo() {
    localStorage.setItem(DB_KEY, JSON.stringify(SEED));
  }

  function uid(prefix) {
    return prefix + "_" + Math.random().toString(36).slice(2, 9);
  }

  function turmaNome(db, turmaId) {
    var t = db.turmas.filter(function (x) { return x.id === turmaId; })[0];
    return t ? t.nome : "—";
  }

  function estudanteNome(db, estudanteId) {
    var e = db.estudantes.filter(function (x) { return x.id === estudanteId; })[0];
    return e ? e.nome : "—";
  }

  function iniciais(nome) {
    var partes = (nome || "").trim().split(/\s+/);
    if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  }

  global.CaracolDB = {
    load: load,
    save: save,
    reset: resetDemo,
    uid: uid,
    turmaNome: turmaNome,
    estudanteNome: estudanteNome,
    iniciais: iniciais
  };
})(window);
