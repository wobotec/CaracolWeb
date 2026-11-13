(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    document.getElementById("perfil-escola").textContent = db.professor.escola;
    document.getElementById("perfil-turmas").textContent = db.turmas.length;
    document.getElementById("perfil-estudantes").textContent = db.estudantes.length;
    document.getElementById("perfil-cursos").textContent = db.cursos.length;

    document.getElementById("pf-nome").value = db.professor.nome;
    document.getElementById("pf-disciplina").value = db.professor.disciplina;
    document.getElementById("pf-email").value = db.professor.email;
    document.getElementById("pf-escola").value = db.professor.escola;

    document.getElementById("formPerfil").addEventListener("submit", function (e) {
      e.preventDefault();
      db.professor.nome = document.getElementById("pf-nome").value;
      db.professor.disciplina = document.getElementById("pf-disciplina").value;
      db.professor.email = document.getElementById("pf-email").value;
      db.professor.escola = document.getElementById("pf-escola").value;
      window.CaracolDB.save(db);
      window.caracolToast("Perfil atualizado com sucesso.");
      setTimeout(function () { window.location.reload(); }, 700);
    });
  });
})();
