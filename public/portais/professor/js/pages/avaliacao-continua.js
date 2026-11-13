(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var selTurma = document.getElementById("acTurma");
    db.turmas.forEach(function (t) {
      var opt = document.createElement("option"); opt.value = t.id; opt.textContent = t.nome;
      selTurma.appendChild(opt);
    });

    function calcMedia(row) {
      var vals = [row.participacao, row.trabalhosCasa, row.testesRapidos, row.projetos].map(function (v) { return parseFloat(v) || 0; });
      return (vals.reduce(function (a, b) { return a + b; }, 0) / vals.length);
    }

    function render() {
      var turmaId = selTurma.value;
      var alunos = db.estudantes.filter(function (e) { return e.turmaId === turmaId; });
      var tbody = document.querySelector("#tbl-ac tbody");
      tbody.innerHTML = "";
      alunos.forEach(function (e) {
        var row = db.avaliacaoContinua.filter(function (a) { return a.estudanteId === e.id; })[0];
        if (!row) {
          row = { id: window.CaracolDB.uid("ac"), estudanteId: e.id, turmaId: turmaId, participacao: 12, trabalhosCasa: 12, testesRapidos: 12, projetos: 12, media: 12 };
          db.avaliacaoContinua.push(row);
        }
        var tr = document.createElement("tr");
        tr.dataset.rowId = row.id;
        tr.innerHTML =
          "<td><span class='avatar-circle sm'>" + window.CaracolDB.iniciais(e.nome) + "</span>" + e.nome + "</td>" +
          "<td><input type='number' min='0' max='20' class='form-control input-sm ac-field' data-campo='participacao' value='" + row.participacao + "'></td>" +
          "<td><input type='number' min='0' max='20' class='form-control input-sm ac-field' data-campo='trabalhosCasa' value='" + row.trabalhosCasa + "'></td>" +
          "<td><input type='number' min='0' max='20' class='form-control input-sm ac-field' data-campo='testesRapidos' value='" + row.testesRapidos + "'></td>" +
          "<td><input type='number' min='0' max='20' class='form-control input-sm ac-field' data-campo='projetos' value='" + row.projetos + "'></td>" +
          "<td><strong class='td-media'>" + row.media.toFixed(1) + "</strong></td>" +
          "<td class='td-tendencia'>" + tendenciaHtml(row.media) + "</td>";
        tbody.appendChild(tr);
      });

      tbody.querySelectorAll(".ac-field").forEach(function (inp) {
        inp.addEventListener("input", function () {
          var tr = inp.closest("tr");
          var row = db.avaliacaoContinua.filter(function (a) { return a.id === tr.dataset.rowId; })[0];
          row[inp.dataset.campo] = parseFloat(inp.value) || 0;
          var media = calcMedia(row);
          row.media = media;
          tr.querySelector(".td-media").textContent = media.toFixed(1);
          tr.querySelector(".td-tendencia").innerHTML = tendenciaHtml(media);
        });
      });
    }

    function tendenciaHtml(media) {
      if (media >= 14) return "<span class='pill pill-green'><i class='fa fa-arrow-up'></i> Muito Bom</span>";
      if (media >= 10) return "<span class='pill pill-blue'>Positivo</span>";
      return "<span class='pill pill-red'><i class='fa fa-arrow-down'></i> Requer apoio</span>";
    }

    selTurma.addEventListener("change", render);
    render();

    document.getElementById("btnGuardarAC").addEventListener("click", function () {
      window.CaracolDB.save(db);
      window.caracolToast("Avaliação contínua guardada com sucesso.");
    });
  });
})();
