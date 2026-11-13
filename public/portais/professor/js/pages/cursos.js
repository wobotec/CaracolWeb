(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();

    document.getElementById("cu-total").textContent = db.cursos.length;
    document.getElementById("cu-inscritos").textContent = db.cursos.reduce(function (s, c) { return s + c.inscritos; }, 0);
    document.getElementById("cu-publicados").textContent = db.cursos.filter(function (c) { return c.status === "publicado"; }).length;

    var grid = document.getElementById("grid-cursos");
    db.cursos.forEach(function (c) {
      var col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";
      var pill = c.status === "publicado" ? "pill-green" : "pill-gray";
      var pillTxt = c.status === "publicado" ? "Publicado" : "Rascunho";
      col.innerHTML =
        "<div class='ibox'>" +
          "<div class='ibox-title'><h5>" + c.titulo + "</h5><span class='pill " + pill + "'>" + pillTxt + "</span></div>" +
          "<div class='ibox-content'>" +
            "<div class='text-muted' style='margin-bottom:10px'>" + c.categoria + " &middot; Nível " + c.nivel + " &middot; " + c.aulas + " aulas</div>" +
            "<span class='pill pill-blue'><i class='fa fa-gift'></i> Gratuito</span>" +
            "<div class='row text-center m-t-sm'>" +
              "<div class='col-xs-6'><div class='stat-value' style='font-size:18px'>" + c.inscritos + "</div><div class='stat-label'>Inscritos</div></div>" +
              "<div class='col-xs-6'><div class='stat-value' style='font-size:18px'>" + c.aulas + "</div><div class='stat-label'>Aulas</div></div>" +
            "</div>" +
            "<button class='btn btn-outline btn-primary btn-block btn-sm m-t-sm btn-toggle-status' data-id='" + c.id + "'>" +
              (c.status === "publicado" ? "Despublicar" : "Publicar curso") +
            "</button>" +
          "</div>" +
        "</div>";
      grid.appendChild(col);
    });

    grid.querySelectorAll(".btn-toggle-status").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var c = db.cursos.filter(function (x) { return x.id === btn.dataset.id; })[0];
        c.status = c.status === "publicado" ? "rascunho" : "publicado";
        window.CaracolDB.save(db);
        window.caracolToast("Curso \"" + c.titulo + "\" atualizado.");
        window.location.reload();
      });
    });
  });
})();
