/*
 * Guard dos portais estáticos (aluno / professor / encarregado).
 *
 * Uso, no <head> de cada página do portal:
 *   <script src="../auth-guard.js" data-role="aluno"></script>
 *
 * Lê a sessão criada pelo login unificado (localStorage["auth-storage"]) e:
 *   - sem sessão ou token expirado  -> /login
 *   - sessão de outro perfil        -> envia para o portal do perfil correto
 *   - perfil certo                  -> mostra a página
 *
 * ATENÇÃO: isto é controle de acesso de interface. A proteção real dos dados
 * tem de ser feita pelo backend (validar o token e o perfil em cada pedido).
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'auth-storage';
  var script = document.currentScript;
  var required = script && script.getAttribute('data-role');
  // Raiz da aplicação, deduzida do próprio endereço deste script.
  var base = script.src.replace(/portais\/auth-guard\.js(\?.*)?$/, '');

  var HOME = {
    aluno: 'portais/aluno/dashboard.html',
    professor: 'portais/professor/dashboard.html',
    encarregado: 'portais/encarregado/index.html'
  };
  var ALIAS = {
    funcionario: 'funcionario', 'funcion\u00e1rio': 'funcionario', staff: 'funcionario',
    admin: 'funcionario', administrador: 'funcionario', secretaria: 'funcionario',
    professor: 'professor', docente: 'professor', teacher: 'professor',
    aluno: 'aluno', estudante: 'aluno', student: 'aluno',
    encarregado: 'encarregado', responsavel: 'encarregado', 'respons\u00e1vel': 'encarregado',
    pai: 'encarregado', parent: 'encarregado', guardian: 'encarregado'
  };

  function readSession() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var st = (JSON.parse(raw) || {}).state || {};
      if (!st.token || !st.user) return null;
      return st;
    } catch (e) { return null; }
  }

  function expired(token) {
    if (token === 'fake-jwt-token') return false; // token de demonstração
    try {
      var p = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      return !!p.exp && Date.now() > p.exp * 1000;
    } catch (e) { return true; } // token ilegível = inválido
  }

  function logout() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    location.replace(base + 'login');
  }

  window.CaracolAuth = {
    logout: logout,
    getUser: function () { var s = readSession(); return s ? s.user : null; }
  };

  // Esconde a página até confirmar o acesso (evita "flash" de conteúdo protegido).
  var root = document.documentElement;
  root.style.visibility = 'hidden';

  var session = readSession();
  if (!session || expired(session.token)) {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    location.replace(base + 'login');
    return;
  }

  var role = ALIAS[String((session.user && session.user.role) || '').toLowerCase()];
  if (role !== required) {
    // Perfil errado: leva cada um ao seu lugar.
    location.replace(base + (HOME[role] || 'login'));
    return;
  }

  root.style.visibility = '';

  // Qualquer elemento com data-logout termina a sessão.
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-logout]');
    if (el) { e.preventDefault(); logout(); }
  }, true);
})();
