(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var params = new URLSearchParams(window.location.search);
    var turmaId = params.get("id") || (db.turmas[0] && db.turmas[0].id);
    var turma = db.turmas.filter(function (t) { return t.id === turmaId; })[0];

    if (!turma) {
      document.getElementById("turma-nome").textContent = "Turma não encontrada";
      return;
    }

    document.getElementById("bc-turma").textContent = turma.nome;
    document.getElementById("turma-nome").textContent = turma.nome;
    document.getElementById("turma-meta").textContent =
      turma.disciplina + " · " + turma.sala + " · Turno " + turma.turno + " · Ano " + turma.ano;

    var alunos = db.estudantes.filter(function (e) { return e.turmaId === turma.id; });
    var media = alunos.length ? (alunos.reduce(function (s, e) { return s + e.media; }, 0) / alunos.length) : 0;
    var presenca = alunos.length ? (alunos.reduce(function (s, e) { return s + e.presenca; }, 0) / alunos.length) : 0;
    var atencao = alunos.filter(function (e) { return e.status === "atencao"; }).length;

    document.getElementById("td-total").textContent = alunos.length;
    document.getElementById("td-media").textContent = media.toFixed(1);
    document.getElementById("td-presenca").textContent = presenca.toFixed(0) + "%";
    document.getElementById("td-atencao").textContent = atencao;

    function render(lista) {
      var tbody = document.querySelector("#tbl-estudantes-turma tbody");
      tbody.innerHTML = "";
      lista.forEach(function (e) {
        var tr = document.createElement("tr");
        var pill = e.status === "atencao" ? "pill-red" : "pill-green";
        var pillTxt = e.status === "atencao" ? "Requer atenção" : "Regular";
        tr.innerHTML =
          "<td>" + e.numero + "</td>" +
          "<td><span class='avatar-circle sm'>" + window.CaracolDB.iniciais(e.nome) + "</span>" +
          "<a href='estudantes.html?id=" + e.id + "'>" + e.nome + "</a></td>" +
          "<td>" + e.encarregado + "</td>" +
          "<td>" + e.contacto + "</td>" +
          "<td>" + e.media.toFixed(1) + "</td>" +
          "<td>" + e.presenca + "%</td>" +
          "<td><span class='pill " + pill + "'>" + pillTxt + "</span></td>";
        tbody.appendChild(tr);
      });
    }
    render(alunos);

    document.getElementById("filtroTurmaEstudantes").addEventListener("input", function (e) {
      var termo = e.target.value.toLowerCase();
      render(alunos.filter(function (a) { return a.nome.toLowerCase().indexOf(termo) > -1; }));
    });
  });
})();
