/* ============================================================
   CARACOL — Portal do Professor — comportamento comum de layout
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();

    // Ativa o item de menu correspondente ao ficheiro atual
    var page = window.location.pathname.split("/").pop() || "dashboard.html";
    document.querySelectorAll("#side-menu a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === page) {
        var li = a.closest("li");
        if (li) {
          li.classList.add("active");
          var parentUl = li.closest("ul.nav-second-level");
          if (parentUl) {
            var parentLi = parentUl.closest("li");
            if (parentLi) parentLi.classList.add("active");
          }
        }
      }
    });

    // Nome do professor no topo / sidebar
    document.querySelectorAll("[data-prof-nome]").forEach(function (el) {
      el.textContent = db.professor.nome;
    });
    document.querySelectorAll("[data-prof-disciplina]").forEach(function (el) {
      el.textContent = db.professor.disciplina;
    });
    document.querySelectorAll("[data-prof-iniciais]").forEach(function (el) {
      el.textContent = window.CaracolDB.iniciais(db.professor.nome);
    });

    // Contagem de mensagens não lidas
    var naoLidas = (db.mensagens || []).filter(function (m) { return !m.lida; }).length;
    document.querySelectorAll("[data-msg-count]").forEach(function (el) {
      el.textContent = naoLidas;
      if (naoLidas === 0) el.style.display = "none";
    });

    // Toggle da sidebar é tratado nativamente pelo inspinia.js (.navbar-minimalize)

    // Logout: tratado por ../auth-guard.js (elementos com [data-logout]).

    // Reset de dados de demonstração
    document.querySelectorAll("[data-reset-demo]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        if (confirm("Repor todos os dados de demonstração do portal?")) {
          window.CaracolDB.reset();
          window.location.reload();
        }
      });
    });
  });

  // Utilitário: filtro simples de tabela por texto
  window.caracolFiltrarTabela = function (inputEl, tableSelector) {
    var termo = inputEl.value.toLowerCase();
    document.querySelectorAll(tableSelector + " tbody tr").forEach(function (tr) {
      var texto = tr.textContent.toLowerCase();
      tr.style.display = texto.indexOf(termo) > -1 ? "" : "none";
    });
  };

  window.caracolToast = function (msg, tipo) {
    var box = document.getElementById("caracol-toast-box");
    if (!box) {
      box = document.createElement("div");
      box.id = "caracol-toast-box";
      box.style.position = "fixed";
      box.style.top = "20px";
      box.style.right = "20px";
      box.style.zIndex = "99999";
      document.body.appendChild(box);
    }
    var el = document.createElement("div");
    el.className = "alert alert-" + (tipo || "success");
    el.style.boxShadow = "0 4px 14px rgba(0,0,0,.12)";
    el.style.marginBottom = "8px";
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(function () {
      el.style.transition = "opacity .4s";
      el.style.opacity = "0";
      setTimeout(function () { el.remove(); }, 400);
    }, 2600);
  };
})();
