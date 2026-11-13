(function () {
  var iconMap = { Slides: "fa-file-powerpoint-o", "Vídeo": "fa-file-video-o", Documento: "fa-file-text-o", Simulação: "fa-flask" };

  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    ["matTurma", "selectTurmaMaterial"].forEach(function (id) {
      var sel = document.getElementById(id);
      db.turmas.forEach(function (t) {
        var opt = document.createElement("option"); opt.value = t.id; opt.textContent = t.nome;
        sel.appendChild(opt);
      });
    });

    function render(lista) {
      var grid = document.getElementById("grid-materiais");
      grid.innerHTML = "";
      if (!lista.length) {
        grid.innerHTML = "<div class='col-lg-12'><div class='empty-state'><i class='fa fa-book'></i>Nenhum material encontrado.</div></div>";
        return;
      }
      lista.slice().reverse().forEach(function (m) {
        var col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";
        col.innerHTML =
          "<div class='ibox'><div class='ibox-content'>" +
            "<div style='display:flex;gap:12px;align-items:flex-start'>" +
              "<div class='stat-icon blue' style='flex-shrink:0'><i class='fa " + (iconMap[m.tipo] || "fa-file") + "'></i></div>" +
              "<div>" +
                "<strong>" + m.titulo + "</strong>" +
                "<div class='text-muted' style='font-size:11.5px;margin-top:2px'>" + window.CaracolDB.turmaNome(db, m.turmaId) + " &middot; " + m.formato + " &middot; " + m.tamanho + "</div>" +
                "<div class='text-muted' style='font-size:11px;margin-top:2px'>Publicado em " + new Date(m.data).toLocaleDateString("pt-PT") + "</div>" +
              "</div>" +
            "</div>" +
            "<div class='m-t-sm text-right'><span class='pill pill-blue'>" + m.tipo + "</span></div>" +
          "</div></div>";
        grid.appendChild(col);
      });
    }
    render(db.materiais);

    function aplicarFiltros() {
      var termo = document.getElementById("matFiltro").value.toLowerCase();
      var turma = document.getElementById("matTurma").value;
      var tipo = document.getElementById("matTipo").value;
      render(db.materiais.filter(function (m) {
        return m.titulo.toLowerCase().indexOf(termo) > -1 && (!turma || m.turmaId === turma) && (!tipo || m.tipo === tipo);
      }));
    }
    document.getElementById("matFiltro").addEventListener("input", aplicarFiltros);
    document.getElementById("matTurma").addEventListener("change", aplicarFiltros);
    document.getElementById("matTipo").addEventListener("change", aplicarFiltros);

    document.getElementById("formMaterial").addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var novo = {
        id: window.CaracolDB.uid("m"),
        titulo: fd.get("titulo"),
        turmaId: fd.get("turmaId"),
        tipo: fd.get("tipo"),
        formato: "PDF",
        tamanho: "—",
        data: new Date().toISOString().slice(0, 10)
      };
      db.materiais.push(novo);
      window.CaracolDB.save(db);
      window.caracolToast("Material \"" + novo.titulo + "\" carregado com sucesso.");
      window.jQuery("#modalMaterial").modal("hide");
      e.target.reset();
      render(db.materiais);
    });
  });
})();
