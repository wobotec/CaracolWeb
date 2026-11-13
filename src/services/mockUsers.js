// Utilizadores de DEMONSTRAÇÃO, usados apenas quando VITE_API_URL não está definido.
// Quando houver backend, este ficheiro deixa de ser usado (e pode ser apagado):
// a API é que decide o perfil (role) de quem faz login.

export const MOCK_USERS = [
  {
    id: 1,
    name: 'Admin',
    role: 'funcionario',
    identifiers: ['admin@admin.com'],
    password: '123456',
  },
  {
    id: 2,
    name: 'Prof. Carlos Mendes',
    role: 'professor',
    identifiers: ['carlos.mendes@caracol.edu'],
    password: 'Caracol2026!',
  },
  {
    id: 3,
    name: 'Rafael Andrade Souza',
    role: 'aluno',
    identifiers: ['2024104532', 'rafael.souza@aluno.caracol.edu.br'],
    password: '123456',
  },
  {
    id: 4,
    name: 'Maria Silva',
    role: 'encarregado',
    identifiers: ['maria.silva@encarregado.caracol.edu.br'],
    password: '123456',
  },
]
