# Caracol Web (unificado)

Um único projeto, um único login. Quem entra é identificado pelo **perfil (role)** e enviado à sua área:

| Perfil        | Destino após o login                     | Tecnologia                |
|---------------|------------------------------------------|---------------------------|
| funcionario   | `/` (painel administrativo)              | React (`src/`)            |
| professor     | `/portais/professor/dashboard.html`      | HTML estático (`public/portais/professor`) |
| aluno         | `/portais/aluno/dashboard.html`          | HTML estático (`public/portais/aluno`) |
| encarregado   | `/portais/encarregado/index.html`        | HTML estático (`public/portais/encarregado`) |

## Como funciona

- **Login único:** `src/components/pages/auth/Login.jsx`. O campo aceita e-mail ou matrícula.
- **Perfis e destinos:** `src/config/roles.js` (aliases aceitos: docente, estudante, responsável, admin, etc.).
- **Sessão:** guardada em `localStorage["auth-storage"]` (`{ state: { token, user: { role, ... } } }`).
- **Painel React:** `PrivateRoute` só deixa entrar `funcionario`; os outros perfis são enviados ao seu portal.
- **Portais estáticos:** cada página carrega `public/portais/auth-guard.js`, que exige sessão válida **e** o perfil certo
  (senão volta ao `/login` ou ao portal correto). Links "Sair" usam o atributo `data-logout`.
- Os `login.html` antigos dos portais de aluno/professor apenas redirecionam para `/login`.

## Backend

Sem `VITE_API_URL` o sistema usa contas de demonstração (`src/services/mockUsers.js`, listadas na tela de login).
Com a API, `POST {VITE_API_URL}/login` com `{ email, password }` (em `email` vai e-mail ou matrícula) deve devolver:

```json
{ "token": "<jwt>", "user": { "id": 1, "name": "...", "role": "aluno" } }
```

Se `role` faltar ou não for reconhecido, o login é recusado.

> O guard dos portais é controle de interface. A proteção real dos dados deve ser feita no backend,
> validando token e perfil em cada pedido.

## Desenvolvimento e deploy

Node 22.x · `npm install` · `npm run dev` · `npm run build` (Vercel: ver `vercel.json`).
