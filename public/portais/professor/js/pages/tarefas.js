(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var selTurma = document.getElementById("filtroTarefaTurma");
    db.turmas.forEach(function (t) {
      var opt = document.createElement("option"); opt.value = t.id; opt.textContent = t.nome;
      selTurma.appendChild(opt);
    });

    var statusPill = { aberta: "pill-blue", encerrada: "pill-green", atrasada: "pill-red" };
    var statusTxt = { aberta: "Aberta", encerrada: "Encerrada", atrasada: "Atrasada" };

    function render(lista) {
      var box = document.getElementById("lista-tarefas");
      box.innerHTML = "";
      if (!lista.length) {
        box.innerHTML = "<div class='empty-state'><i class='fa fa-tasks'></i>Nenhuma tarefa encontrada.</div>";
        return;
      }
      lista.forEach(function (t) {
        var pct = Math.round((t.entregues / t.total) * 100);
        var div = document.createElement("div");
        div.className = "ibox";
        div.innerHTML =
          "<div class='ibox-content'>" +
            "<div class='row'>" +
              "<div class='col-md-6'>" +
                "<h4 style='margin-top:0'>" + t.titulo + "</h4>" +
                "<div class='text-muted' style='margin-bottom:8px'>" + t.tipo + " &middot; " + window.CaracolDB.turmaNome(db, t.turmaId) + " &middot; Prazo: " + new Date(t.prazo).toLocaleDateString("pt-PT") + "</div>" +
                "<span class='pill " + statusPill[t.status] + "'>" + statusTxt[t.status] + "</span>" +
              "</div>" +
              "<div class='col-md-4'>" +
                "<div class='text-muted' style='font-size:11.5px;margin-bottom:4px'>Entregas: " + t.entregues + " de " + t.total + " (" + pct + "%)</div>" +
                "<div class='progress'><div class='progress-bar bg-primary' style='width:" + pct + "%;background-color:#2457c9'></div></div>" +
              "</div>" +
              "<div class='col-md-2 text-right'>" +
                "<button class='btn btn-sm btn-outline btn-primary btn-corrigir' data-id='" + t.id + "'>Corrigir</button>" +
              "</div>" +
            "</div>" +
          "</div>";
        box.appendChild(div);
      });

      box.querySelectorAll(".btn-corrigir").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var t = db.tarefas.filter(function (x) { return x.id === btn.dataset.id; })[0];
          if (t && t.entregues < t.total) {
            t.entregues += 1;
            window.CaracolDB.save(db);
            window.caracolToast("Entrega registada como corrigida. (" + t.entregues + "/" + t.total + ")");
            aplicarFiltros();
          } else {
            window.caracolToast("Todas as entregas desta tarefa já foram corrigidas.", "info");
          }
        });
      });
    }

    function aplicarFiltros() {
      var termo = document.getElementById("filtroTarefas").value.toLowerCase();
      var turma = selTurma.value;
      var status = document.getElementById("filtroTarefaStatus").value;
      render(db.tarefas.filter(function (t) {
        var mT = t.titulo.toLowerCase().indexOf(termo) > -1;
        var mTu = !turma || t.turmaId === turma;
        var mS = !status || t.status === status;
        return mT && mTu && mS;
      }));
    }

    render(db.tarefas);
    document.getElementById("filtroTarefas").addEventListener("input", aplicarFiltros);
    selTurma.addEventListener("change", aplicarFiltros);
    document.getElementById("filtroTarefaStatus").addEventListener("change", aplicarFiltros);
  });
})();
