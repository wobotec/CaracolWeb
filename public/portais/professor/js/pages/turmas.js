(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();

    function render(lista) {
      var grid = document.getElementById("grid-turmas");
      grid.innerHTML = "";
      if (!lista.length) {
        grid.innerHTML = "<div class='col-lg-12'><div class='empty-state'><i class='fa fa-search'></i>Nenhuma turma encontrada.</div></div>";
        return;
      }
      lista.forEach(function (t) {
        var alunos = db.estudantes.filter(function (e) { return e.turmaId === t.id; });
        var media = alunos.length ? (alunos.reduce(function (s, e) { return s + e.media; }, 0) / alunos.length) : 0;
        var col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";
        col.innerHTML =
          "<div class='ibox'>" +
            "<div class='ibox-title'>" +
              "<h5>" + t.nome + "</h5>" +
              "<span class='pill pill-blue'>" + t.turno + "</span>" +
            "</div>" +
            "<div class='ibox-content'>" +
              "<div class='text-muted' style='margin-bottom:10px'>" + t.disciplina + " &middot; " + t.sala + " &middot; Ano " + t.ano + "</div>" +
              "<div class='row text-center' style='margin-bottom:12px'>" +
                "<div class='col-xs-4'><div class='stat-value' style='font-size:18px'>" + t.totalAlunos + "</div><div class='stat-label'>Alunos</div></div>" +
                "<div class='col-xs-4'><div class='stat-value' style='font-size:18px'>" + media.toFixed(1) + "</div><div class='stat-label'>Média</div></div>" +
                "<div class='col-xs-4'><div class='stat-value' style='font-size:18px'>" + alunos.filter(function(e){return e.status==='atencao';}).length + "</div><div class='stat-label'>Atenção</div></div>" +
              "</div>" +
              "<a href='turma-detalhes.html?id=" + t.id + "' class='btn btn-primary btn-block btn-sm'>Ver turma <i class='fa fa-arrow-right'></i></a>" +
            "</div>" +
          "</div>";
        grid.appendChild(col);
      });
    }

    render(db.turmas);

    document.getElementById("filtroTurmas").addEventListener("input", aplicarFiltros);
    document.getElementById("filtroTurno").addEventListener("change", aplicarFiltros);

    function aplicarFiltros() {
      var termo = document.getElementById("filtroTurmas").value.toLowerCase();
      var turno = document.getElementById("filtroTurno").value;
      var lista = db.turmas.filter(function (t) {
        var matchTermo = (t.nome + t.disciplina + t.sala).toLowerCase().indexOf(termo) > -1;
        var matchTurno = !turno || t.turno === turno;
        return matchTermo && matchTurno;
      });
      render(lista);
    }

    document.getElementById("formNovaTurma").addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var nova = {
        id: window.CaracolDB.uid("t"),
        nome: fd.get("nome"),
        ano: fd.get("ano") || "2026",
        turno: fd.get("turno"),
        sala: fd.get("sala") || "—",
        disciplina: fd.get("disciplina"),
        totalAlunos: 0
      };
      db.turmas.push(nova);
      window.CaracolDB.save(db);
      window.caracolToast("Turma \"" + nova.nome + "\" criada com sucesso.");
      window.jQuery("#modalNovaTurma").modal("hide");
      e.target.reset();
      render(db.turmas);
    });
  });
})();
