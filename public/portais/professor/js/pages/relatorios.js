(function () {
  function barRow(label, value, max, color, suffix) {
    var pct = Math.max(2, Math.round((value / max) * 100));
    var valorTxt = (typeof value === "number" ? value.toFixed(1) : value) + (suffix || "");
    return "<div style='margin-bottom:14px'>" +
      "<div style='display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px'>" +
      "<span>" + label + "</span><strong>" + valorTxt + "</strong></div>" +
      "<div class='progress'><div class='progress-bar' style='width:" + pct + "%;background-color:" + color + "'></div></div></div>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();

    var mediaBox = document.getElementById("rel-media-turma");
    db.turmas.forEach(function (t) {
      var alunos = db.estudantes.filter(function (e) { return e.turmaId === t.id; });
      var media = alunos.length ? (alunos.reduce(function (s, e) { return s + e.media; }, 0) / alunos.length) : 0;
      mediaBox.innerHTML += barRow(t.nome, media, 20, "#2457c9", " val.");
    });

    var presBox = document.getElementById("rel-presenca-turma");
    db.turmas.forEach(function (t) {
      var alunos = db.estudantes.filter(function (e) { return e.turmaId === t.id; });
      var presenca = alunos.length ? (alunos.reduce(function (s, e) { return s + e.presenca; }, 0) / alunos.length) : 0;
      presBox.innerHTML += barRow(t.nome, presenca, 100, "#1f9d63", "%");
    });

    var tarBox = document.getElementById("rel-tarefas");
    db.tarefas.forEach(function (t) {
      var pct = (t.entregues / t.total) * 100;
      tarBox.innerHTML += barRow(t.titulo, pct, 100, "#d68a1a", "%");
    });

    var atencaoBody = document.getElementById("rel-atencao");
    var comAtencao = db.estudantes.filter(function (e) { return e.status === "atencao"; });
    if (!comAtencao.length) {
      atencaoBody.innerHTML = "<tr><td colspan='4'><div class='empty-state'><i class='fa fa-smile-o'></i>Nenhum estudante em situação de atenção.</div></td></tr>";
    }
    comAtencao.forEach(function (e) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td><span class='avatar-circle sm'>" + window.CaracolDB.iniciais(e.nome) + "</span>" + e.nome + "</td>" +
        "<td>" + window.CaracolDB.turmaNome(db, e.turmaId) + "</td>" +
        "<td><span class='pill pill-red'>" + e.media.toFixed(1) + "</span></td>" +
        "<td>" + e.presenca + "%</td>";
      atencaoBody.appendChild(tr);
    });
  });
})();
