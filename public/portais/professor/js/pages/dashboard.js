(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();

    document.getElementById("hoje-label").textContent =
      new Date().toLocaleDateString("pt-PT", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });

    document.getElementById("kpi-turmas").textContent = db.turmas.length;
    document.getElementById("kpi-estudantes").textContent = db.estudantes.length;
    document.getElementById("kpi-tarefas").textContent = db.tarefas.filter(function (t) { return t.status !== "encerrada"; }).length;

    var mediaPresenca = Math.round(
      db.estudantes.reduce(function (s, e) { return s + e.presenca; }, 0) / db.estudantes.length
    );
    document.getElementById("kpi-presenca").textContent = mediaPresenca + "%";

    var statusPill = { aberta: "pill-blue", encerrada: "pill-green", atrasada: "pill-red" };
    var statusTxt = { aberta: "Aberta", encerrada: "Encerrada", atrasada: "Atrasada" };

    var tbody = document.querySelector("#tbl-prazos tbody");
    db.tarefas
      .slice()
      .sort(function (a, b) { return a.prazo.localeCompare(b.prazo); })
      .slice(0, 5)
      .forEach(function (t) {
        var tr = document.createElement("tr");
        tr.innerHTML =
          "<td><strong>" + t.titulo + "</strong><div class='text-muted' style='font-size:11px'>" + t.tipo + "</div></td>" +
          "<td>" + window.CaracolDB.turmaNome(db, t.turmaId) + "</td>" +
          "<td>" + new Date(t.prazo).toLocaleDateString("pt-PT") + "</td>" +
          "<td>" + t.entregues + " / " + t.total + "</td>" +
          "<td><span class='pill " + statusPill[t.status] + "'>" + statusTxt[t.status] + "</span></td>";
        tbody.appendChild(tr);
      });

    var tbTurmas = document.querySelector("#tbl-turmas-resumo tbody");
    db.turmas.forEach(function (t) {
      var alunos = db.estudantes.filter(function (e) { return e.turmaId === t.id; });
      var media = alunos.length ? (alunos.reduce(function (s, e) { return s + e.media; }, 0) / alunos.length) : 0;
      var presenca = alunos.length ? (alunos.reduce(function (s, e) { return s + e.presenca; }, 0) / alunos.length) : 0;
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td><a href='turma-detalhes.html?id=" + t.id + "'><strong>" + t.nome + "</strong></a></td>" +
        "<td>" + t.disciplina + "</td>" +
        "<td>" + t.totalAlunos + "</td>" +
        "<td>" + media.toFixed(1) + " val.</td>" +
        "<td>" + presenca.toFixed(0) + "%</td>";
      tbTurmas.appendChild(tr);
    });

    var msgBox = document.getElementById("lista-mensagens");
    db.mensagens.slice(0, 4).forEach(function (m) {
      var div = document.createElement("div");
      div.className = "m-b-sm";
      div.style.paddingBottom = "8px";
      div.style.borderBottom = "1px solid #eef0f5";
      div.innerHTML =
        "<div style='display:flex;justify-content:space-between'>" +
        "<strong style='font-size:12.5px'>" + m.de + "</strong>" +
        (m.lida ? "" : "<span class='pill pill-amber'>Nova</span>") +
        "</div>" +
        "<div class='text-muted' style='font-size:12px'>" + m.assunto + "</div>";
      msgBox.appendChild(div);
    });

    var evBox = document.getElementById("lista-eventos");
    db.eventos.slice(0, 5).forEach(function (ev) {
      var div = document.createElement("div");
      div.className = "m-b-sm";
      div.style.paddingBottom = "8px";
      div.style.borderBottom = "1px solid #eef0f5";
      div.innerHTML =
        "<strong style='font-size:12.5px'>" + new Date(ev.data).toLocaleDateString("pt-PT", { day: "2-digit", month: "short" }) + "</strong> — " + ev.titulo +
        "<div class='text-muted' style='font-size:11.5px'>" + ev.turma + "</div>";
      evBox.appendChild(div);
    });

    var apBox = document.getElementById("lista-aulas-privadas");
    db.aulasPrivadas.slice(0, 3).forEach(function (p) {
      var div = document.createElement("div");
      div.className = "m-b-sm";
      div.style.paddingBottom = "8px";
      div.style.borderBottom = "1px solid #eef0f5";
      div.innerHTML =
        "<strong style='font-size:12.5px'>" + p.estudante + "</strong>" +
        "<div class='text-muted' style='font-size:11.5px'>" + p.tema + " — " + new Date(p.data).toLocaleDateString("pt-PT") + " às " + p.hora + "</div>";
      apBox.appendChild(div);
    });
  });
})();
