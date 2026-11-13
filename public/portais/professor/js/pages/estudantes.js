(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();

    var selTurma = document.getElementById("filtroTurmaEst");
    var selTurmaModal = document.getElementById("selectTurmaModal");
    db.turmas.forEach(function (t) {
      var opt1 = document.createElement("option"); opt1.value = t.id; opt1.textContent = t.nome;
      selTurma.appendChild(opt1);
      var opt2 = document.createElement("option"); opt2.value = t.id; opt2.textContent = t.nome;
      selTurmaModal.appendChild(opt2);
    });

    function render(lista) {
      var tbody = document.querySelector("#tbl-estudantes tbody");
      tbody.innerHTML = "";
      if (!lista.length) {
        tbody.innerHTML = "<tr><td colspan='8'><div class='empty-state'><i class='fa fa-search'></i>Nenhum estudante encontrado.</div></td></tr>";
        return;
      }
      lista.forEach(function (e) {
        var pill = e.status === "atencao" ? "pill-red" : "pill-green";
        var pillTxt = e.status === "atencao" ? "Requer atenção" : "Regular";
        var tr = document.createElement("tr");
        tr.innerHTML =
          "<td><span class='avatar-circle sm'>" + window.CaracolDB.iniciais(e.nome) + "</span>" + e.nome + "</td>" +
          "<td>" + window.CaracolDB.turmaNome(db, e.turmaId) + "</td>" +
          "<td>" + e.encarregado + "</td>" +
          "<td>" + e.contacto + "</td>" +
          "<td>" + e.media.toFixed(1) + "</td>" +
          "<td>" + e.presenca + "%</td>" +
          "<td><span class='pill " + pill + "'>" + pillTxt + "</span></td>" +
          "<td><a href='turma-detalhes.html?id=" + e.turmaId + "' class='btn btn-xs btn-outline btn-primary'>Ver turma</a></td>";
        tbody.appendChild(tr);
      });
    }
    render(db.estudantes);

    function aplicarFiltros() {
      var termo = document.getElementById("filtroEstudantes").value.toLowerCase();
      var turma = selTurma.value;
      var status = document.getElementById("filtroStatusEst").value;
      render(db.estudantes.filter(function (e) {
        var mT = (e.nome + " " + e.encarregado).toLowerCase().indexOf(termo) > -1;
        var mTu = !turma || e.turmaId === turma;
        var mS = !status || e.status === status;
        return mT && mTu && mS;
      }));
    }
    document.getElementById("filtroEstudantes").addEventListener("input", aplicarFiltros);
    selTurma.addEventListener("change", aplicarFiltros);
    document.getElementById("filtroStatusEst").addEventListener("change", aplicarFiltros);

    document.getElementById("formNovoEstudante").addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var turmaId = fd.get("turmaId");
      var numero = db.estudantes.filter(function (x) { return x.turmaId === turmaId; }).length + 1;
      var novo = {
        id: window.CaracolDB.uid("e"),
        nome: fd.get("nome"),
        turmaId: turmaId,
        numero: numero,
        encarregado: fd.get("encarregado") || "—",
        contacto: fd.get("contacto") || "—",
        media: 0,
        presenca: 100,
        status: "ativo"
      };
      db.estudantes.push(novo);
      var t = db.turmas.filter(function (x) { return x.id === turmaId; })[0];
      if (t) t.totalAlunos += 1;
      window.CaracolDB.save(db);
      window.caracolToast("Estudante \"" + novo.nome + "\" matriculado com sucesso.");
      window.jQuery("#modalNovoEstudante").modal("hide");
      e.target.reset();
      render(db.estudantes);
    });
  });
})();
