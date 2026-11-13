(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var sel = document.getElementById("selectTurmaTarefa");
    db.turmas.forEach(function (t) {
      var opt = document.createElement("option"); opt.value = t.id; opt.textContent = t.nome;
      sel.appendChild(opt);
    });

    document.getElementById("formTarefa").addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var turmaId = fd.get("turmaId");
      var turma = db.turmas.filter(function (t) { return t.id === turmaId; })[0];
      var nova = {
        id: window.CaracolDB.uid("a"),
        titulo: fd.get("titulo"),
        turmaId: turmaId,
        tipo: fd.get("tipo"),
        prazo: fd.get("prazo"),
        entregues: 0,
        total: turma ? turma.totalAlunos : 0,
        status: "aberta"
      };
      db.tarefas.push(nova);
      window.CaracolDB.save(db);
      window.caracolToast("Tarefa \"" + nova.titulo + "\" publicada com sucesso.");
      setTimeout(function () { window.location.href = "tarefas.html"; }, 700);
    });
  });
})();
