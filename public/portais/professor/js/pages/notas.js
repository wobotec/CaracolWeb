(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var selTurma = document.getElementById("notaTurma");
    db.turmas.forEach(function (t) {
      var opt = document.createElement("option"); opt.value = t.id; opt.textContent = t.nome + " — " + t.disciplina;
      selTurma.appendChild(opt);
    });

    function classificacao(v) {
      if (v === "" || v === null || isNaN(v)) return "<span class='text-muted'>—</span>";
      v = parseFloat(v);
      if (v >= 14) return "<span class='pill pill-green'>Muito Bom</span>";
      if (v >= 10) return "<span class='pill pill-blue'>Positivo</span>";
      return "<span class='pill pill-red'>Insuficiente</span>";
    }

    function render() {
      var turmaId = selTurma.value;
      var turma = db.turmas.filter(function (t) { return t.id === turmaId; })[0];
      var alunos = db.estudantes.filter(function (e) { return e.turmaId === turmaId; });
      document.getElementById("notaResumo").textContent = alunos.length + " estudante(s)";
      var tbody = document.querySelector("#tbl-notas tbody");
      tbody.innerHTML = "";
      alunos.forEach(function (e) {
        var notasAluno = db.notas.filter(function (n) { return n.estudanteId === e.id; });
        var ultimas = notasAluno.slice(-3).map(function (n) { return n.tipo + ": " + n.valor; }).join(" &middot; ") || "Sem registos";
        var tr = document.createElement("tr");
        tr.innerHTML =
          "<td>" + e.numero + "</td>" +
          "<td><span class='avatar-circle sm'>" + window.CaracolDB.iniciais(e.nome) + "</span>" + e.nome + "</td>" +
          "<td><input type='number' min='0' max='20' step='0.1' class='form-control input-sm nota-input' data-est='" + e.id + "' value='" + e.media.toFixed(1) + "'></td>" +
          "<td class='td-class'>" + classificacao(e.media) + "</td>" +
          "<td class='text-muted' style='font-size:11.5px'>" + ultimas + "</td>";
        tbody.appendChild(tr);
      });

      tbody.querySelectorAll(".nota-input").forEach(function (inp) {
        inp.addEventListener("input", function () {
          inp.closest("tr").querySelector(".td-class").innerHTML = classificacao(inp.value);
        });
      });
    }

    selTurma.addEventListener("change", render);
    render();

    document.getElementById("btnGuardarNotas").addEventListener("click", function () {
      var turmaId = selTurma.value;
      var turma = db.turmas.filter(function (t) { return t.id === turmaId; })[0];
      var trimestre = document.getElementById("notaTrimestre").value;
      var tipo = document.getElementById("notaTipo").value;
      var inputs = document.querySelectorAll(".nota-input");
      inputs.forEach(function (inp) {
        var estId = inp.dataset.est;
        var valor = parseFloat(inp.value);
        if (isNaN(valor)) return;
        db.notas.push({
          id: window.CaracolDB.uid("n"),
          estudanteId: estId,
          turmaId: turmaId,
          disciplina: turma ? turma.disciplina : "",
          trimestre: trimestre,
          tipo: tipo,
          valor: valor
        });
        var est = db.estudantes.filter(function (e) { return e.id === estId; })[0];
        if (est) est.media = valor;
      });
      window.CaracolDB.save(db);
      window.caracolToast("Notas lançadas e guardadas com sucesso.");
      render();
    });
  });
})();
