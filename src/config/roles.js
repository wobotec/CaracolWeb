// Perfis de acesso do sistema Caracol e para onde cada um deve ser enviado após o login.
//
//  funcionario  -> painel administrativo (React, rotas "/...")
//  professor    -> /portais/professor/   (HTML estático)
//  aluno        -> /portais/aluno/       (HTML estático)
//  encarregado  -> /portais/encarregado/ (HTML estático)

export const ROLES = {
  FUNCIONARIO: 'funcionario',
  PROFESSOR: 'professor',
  ALUNO: 'aluno',
  ENCARREGADO: 'encarregado',
}

// Nomes alternativos que a API pode devolver para o mesmo perfil.
const ALIASES = {
  funcionario: ROLES.FUNCIONARIO,
  funcionário: ROLES.FUNCIONARIO,
  staff: ROLES.FUNCIONARIO,
  admin: ROLES.FUNCIONARIO,
  administrador: ROLES.FUNCIONARIO,
  secretaria: ROLES.FUNCIONARIO,
  secretário: ROLES.FUNCIONARIO,
  direcao: ROLES.FUNCIONARIO,
  direção: ROLES.FUNCIONARIO,

  professor: ROLES.PROFESSOR,
  docente: ROLES.PROFESSOR,
  teacher: ROLES.PROFESSOR,

  aluno: ROLES.ALUNO,
  estudante: ROLES.ALUNO,
  student: ROLES.ALUNO,

  encarregado: ROLES.ENCARREGADO,
  responsavel: ROLES.ENCARREGADO,
  responsável: ROLES.ENCARREGADO,
  pai: ROLES.ENCARREGADO,
  parent: ROLES.ENCARREGADO,
  guardian: ROLES.ENCARREGADO,
}

export function normalizeRole(raw) {
  if (!raw || typeof raw !== 'string') return null
  return ALIASES[raw.trim().toLowerCase()] ?? null
}

export const ROLE_LABELS = {
  [ROLES.FUNCIONARIO]: 'Funcionário',
  [ROLES.PROFESSOR]: 'Professor',
  [ROLES.ALUNO]: 'Aluno',
  [ROLES.ENCARREGADO]: 'Encarregado de educação',
}

const BASE = import.meta.env.BASE_URL // normalmente "/"

// Página inicial de cada portal estático.
const PORTAL_HOME = {
  [ROLES.ALUNO]: `${BASE}portais/aluno/dashboard.html`,
  [ROLES.PROFESSOR]: `${BASE}portais/professor/dashboard.html`,
  [ROLES.ENCARREGADO]: `${BASE}portais/encarregado/index.html`,
}

/**
 * Destino de um perfil depois do login.
 *  - { external: false, path }  -> navegar dentro do React (react-router)
 *  - { external: true,  url }   -> portal HTML estático (window.location)
 */
export function homeFor(role) {
  const r = normalizeRole(role)
  if (r && PORTAL_HOME[r]) return { external: true, url: PORTAL_HOME[r] }
  return { external: false, path: '/' }
}
