(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var selEst = document.getElementById("selectEstAula");
    db.estudantes.forEach(function (e) {
      var opt = document.createElement("option"); opt.value = e.id; opt.textContent = e.nome + " — " + window.CaracolDB.turmaNome(db, e.turmaId);
      selEst.appendChild(opt);
    });

    var statusPill = { confirmada: "pill-green", pendente: "pill-amber", cancelada: "pill-red" };
    var statusTxt = { confirmada: "Confirmada", pendente: "Pendente", cancelada: "Cancelada" };

    function render() {
      var tbody = document.querySelector("#tbl-aulas-privadas tbody");
      tbody.innerHTML = "";
      db.aulasPrivadas.forEach(function (p) {
        var tr = document.createElement("tr");
        tr.innerHTML =
          "<td>" + p.estudante + "</td>" +
          "<td>" + p.turma + "</td>" +
          "<td>" + p.tema + "</td>" +
          "<td>" + new Date(p.data).toLocaleDateString("pt-PT") + "</td>" +
          "<td>" + p.hora + "</td>" +
          "<td>" + p.modalidade + "</td>" +
          "<td><span class='pill " + statusPill[p.status] + "'>" + statusTxt[p.status] + "</span></td>";
        tbody.appendChild(tr);
      });
    }
    render();

    document.getElementById("formAulaPrivada").addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var est = db.estudantes.filter(function (x) { return x.id === fd.get("estudanteId"); })[0];
      db.aulasPrivadas.push({
        id: window.CaracolDB.uid("p"),
        estudante: est ? est.nome : "—",
        turma: est ? window.CaracolDB.turmaNome(db, est.turmaId) : "—",
        tema: fd.get("tema"),
        data: fd.get("data"),
        hora: fd.get("hora"),
        modalidade: fd.get("modalidade"),
        status: "pendente"
      });
      window.CaracolDB.save(db);
      window.caracolToast("Aula privada agendada. A aguardar confirmação.");
      window.jQuery("#modalAulaPrivada").modal("hide");
      e.target.reset();
      render();
    });
  });
})();
