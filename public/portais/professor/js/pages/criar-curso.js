(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    document.getElementById("formCurso").addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var novo = {
        id: window.CaracolDB.uid("cu"),
        titulo: fd.get("titulo"),
        categoria: fd.get("categoria"),
        nivel: fd.get("nivel"),
        inscritos: 0,
        aulas: parseInt(fd.get("aulas"), 10) || 1,
        status: "rascunho",
        gratuito: true
      };
      db.cursos.push(novo);
      window.CaracolDB.save(db);
      window.caracolToast("Curso \"" + novo.titulo + "\" criado como rascunho.");
      setTimeout(function () { window.location.href = "cursos.html"; }, 700);
    });
  });
})();
