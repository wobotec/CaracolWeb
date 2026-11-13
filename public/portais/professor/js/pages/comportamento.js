(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    ["compTurma", "selectTurmaComp"].forEach(function (id) {
      var sel = document.getElementById(id);
      db.turmas.forEach(function (t) {
        var opt = document.createElement("option"); opt.value = t.id; opt.textContent = t.nome;
        sel.appendChild(opt);
      });
    });

    var selEstComp = document.getElementById("selectEstComp");
    function popularEstudantes(turmaId) {
      selEstComp.innerHTML = "";
      db.estudantes.filter(function (e) { return e.turmaId === turmaId; }).forEach(function (e) {
        var opt = document.createElement("option"); opt.value = e.id; opt.textContent = e.nome;
        selEstComp.appendChild(opt);
      });
    }
    document.getElementById("selectTurmaComp").addEventListener("change", function (e) { popularEstudantes(e.target.value); });
    if (db.turmas[0]) popularEstudantes(db.turmas[0].id);

    // Star rating
    var starWrap = document.getElementById("starRate");
    starWrap.querySelectorAll("i").forEach(function (star) {
      star.addEventListener("click", function () {
        var v = parseInt(star.dataset.v, 10);
        document.getElementById("pontuacaoInput").value = v;
        starWrap.querySelectorAll("i").forEach(function (s2) {
          s2.classList.toggle("active", parseInt(s2.dataset.v, 10) <= v);
        });
      });
    });

    function badgePontuacao(p) {
      if (p >= 4) return "pill-green";
      if (p === 3) return "pill-blue";
      return "pill-red";
    }

    function render(lista) {
      var tbody = document.querySelector("#tbl-comportamento tbody");
      tbody.innerHTML = "";
      if (!lista.length) {
        tbody.innerHTML = "<tr><td colspan='6'><div class='empty-state'><i class='fa fa-smile-o'></i>Nenhuma observação registada.</div></td></tr>";
        return;
      }
      lista.slice().reverse().forEach(function (c) {
        var tr = document.createElement("tr");
        tr.innerHTML =
          "<td>" + new Date(c.data).toLocaleDateString("pt-PT") + "</td>" +
          "<td>" + window.CaracolDB.estudanteNome(db, c.estudanteId) + "</td>" +
          "<td>" + window.CaracolDB.turmaNome(db, c.turmaId) + "</td>" +
          "<td>" + c.criterio + "</td>" +
          "<td><span class='pill " + badgePontuacao(c.pontuacao) + "'>" + c.pontuacao + " / 5</span></td>" +
          "<td class='text-muted'>" + (c.obs || "—") + "</td>";
        tbody.appendChild(tr);
      });
    }
    render(db.comportamento);

    function aplicarFiltros() {
      var turma = document.getElementById("compTurma").value;
      var termo = document.getElementById("compFiltro").value.toLowerCase();
      render(db.comportamento.filter(function (c) {
        var mT = !turma || c.turmaId === turma;
        var texto = (window.CaracolDB.estudanteNome(db, c.estudanteId) + " " + c.criterio).toLowerCase();
        return mT && texto.indexOf(termo) > -1;
      }));
    }
    document.getElementById("compTurma").addEventListener("change", aplicarFiltros);
    document.getElementById("compFiltro").addEventListener("input", aplicarFiltros);

    document.getElementById("formComportamento").addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var novo = {
        id: window.CaracolDB.uid("c"),
        estudanteId: fd.get("estudanteId"),
        turmaId: fd.get("turmaId"),
        data: new Date().toISOString().slice(0, 10),
        criterio: fd.get("criterio"),
        pontuacao: parseInt(fd.get("pontuacao"), 10),
        obs: fd.get("obs")
      };
      db.comportamento.push(novo);
      window.CaracolDB.save(db);
      window.caracolToast("Observação de comportamento registada.");
      window.jQuery("#modalComportamento").modal("hide");
      e.target.reset();
      render(db.comportamento);
    });
  });
})();
