(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var selTurma = document.getElementById("presTurma");
    db.turmas.forEach(function (t) {
      var opt = document.createElement("option"); opt.value = t.id; opt.textContent = t.nome;
      selTurma.appendChild(opt);
    });
    document.getElementById("presData").value = "2026-07-09";

    function render() {
      var turmaId = selTurma.value;
      var alunos = db.estudantes.filter(function (e) { return e.turmaId === turmaId; });
      var tbody = document.querySelector("#tbl-presenca tbody");
      tbody.innerHTML = "";
      alunos.forEach(function (e) {
        var tr = document.createElement("tr");
        tr.innerHTML =
          "<td>" + e.numero + "</td>" +
          "<td><span class='avatar-circle sm'>" + window.CaracolDB.iniciais(e.nome) + "</span>" + e.nome + "</td>" +
          "<td class='text-center'><input type='radio' name='pres_" + e.id + "' value='presente' checked></td>" +
          "<td class='text-center'><input type='radio' name='pres_" + e.id + "' value='falta'></td>" +
          "<td class='text-center'><input type='radio' name='pres_" + e.id + "' value='justificada'></td>";
        tbody.appendChild(tr);
      });
      atualizarResumo();

      var hist = db.presencas.filter(function (p) { return p.turmaId === turmaId; }).slice(-5).reverse();
      var hb = document.getElementById("hist-presenca");
      hb.innerHTML = "";
      if (!hist.length) { hb.innerHTML = "<p class='text-muted'>Sem registos anteriores.</p>"; }
      hist.forEach(function (p) {
        var div = document.createElement("div");
        div.className = "m-b-sm";
        div.style.cssText = "padding-bottom:8px;border-bottom:1px solid #eef0f5";
        div.innerHTML = "<strong style='font-size:12.5px'>" + new Date(p.data).toLocaleDateString("pt-PT") + "</strong>" +
          "<div class='text-muted' style='font-size:11.5px'>" + p.presentes + " presentes &middot; " + p.faltas + " faltas &middot; " + p.justificadas + " justificadas</div>";
        hb.appendChild(div);
      });
    }

    function atualizarResumo() {
      var radios = document.querySelectorAll("#tbl-presenca input[type=radio]:checked");
      var p = 0, f = 0, j = 0;
      radios.forEach(function (r) {
        if (r.value === "presente") p++;
        else if (r.value === "falta") f++;
        else if (r.value === "justificada") j++;
      });
      document.getElementById("rs-presentes").textContent = p;
      document.getElementById("rs-faltas").textContent = f;
      document.getElementById("rs-justificadas").textContent = j;
    }

    document.addEventListener("change", function (e) {
      if (e.target.matches("#tbl-presenca input[type=radio]")) atualizarResumo();
    });

    document.getElementById("btnMarcarTodos").addEventListener("click", function () {
      document.querySelectorAll("#tbl-presenca input[value=presente]").forEach(function (r) { r.checked = true; });
      atualizarResumo();
    });

    document.getElementById("btnGuardarPresenca").addEventListener("click", function () {
      var turmaId = selTurma.value;
      var data = document.getElementById("presData").value;
      var p = parseInt(document.getElementById("rs-presentes").textContent, 10);
      var f = parseInt(document.getElementById("rs-faltas").textContent, 10);
      var j = parseInt(document.getElementById("rs-justificadas").textContent, 10);
      db.presencas.push({ data: data, turmaId: turmaId, presentes: p, faltas: f, justificadas: j });
      window.CaracolDB.save(db);
      window.caracolToast("Presença de " + new Date(data).toLocaleDateString("pt-PT") + " registada com sucesso.");
      render();
    });

    selTurma.addEventListener("change", render);
    render();
  });
})();
