(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var ano = 2026, mes = 6; // Julho (0-indexed)
    var nomesMes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    document.getElementById("cal-mes-label").textContent = nomesMes[mes] + " " + ano;

    var tipoClasse = { prazo: "cal-event", aula: "cal-event", reuniao: "cal-event" };
    var tipoCor = { prazo: "#2457c9", aula: "#1f9d63", reuniao: "#d68a1a" };

    var eventosPorDia = {};
    db.eventos.forEach(function (ev) {
      var dia = new Date(ev.data + "T00:00:00").getDate();
      var m = new Date(ev.data + "T00:00:00").getMonth();
      if (m !== mes) return;
      eventosPorDia[dia] = eventosPorDia[dia] || [];
      eventosPorDia[dia].push(ev);
    });

    var primeiroDia = new Date(ano, mes, 1);
    var diasNoMes = new Date(ano, mes + 1, 0).getDate();
    var offset = primeiroDia.getDay(); // 0=domingo

    var grid = document.getElementById("cal-grid");
    ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].forEach(function (d) {
      var el = document.createElement("div");
      el.style.cssText = "font-size:10.5px;font-weight:700;color:#6b7488;text-align:center;padding:4px 0;";
      el.textContent = d;
      grid.appendChild(el);
    });

    for (var i = 0; i < offset; i++) {
      var blank = document.createElement("div");
      grid.appendChild(blank);
    }

    for (var dia = 1; dia <= diasNoMes; dia++) {
      var cell = document.createElement("div");
      cell.className = "cal-day";
      var html = "<div class='num'>" + dia + "</div>";
      (eventosPorDia[dia] || []).forEach(function (ev) {
        html += "<div class='cal-event' style='background:" + tipoCor[ev.tipo] + "' title='" + ev.titulo + "'>" + ev.titulo + "</div>";
      });
      cell.innerHTML = html;
      grid.appendChild(cell);
    }

    var lista = document.getElementById("lista-eventos-todos");
    db.eventos.slice().sort(function (a,b){return a.data.localeCompare(b.data);}).forEach(function (ev) {
      var div = document.createElement("div");
      div.className = "m-b-sm";
      div.style.cssText = "padding-bottom:8px;border-bottom:1px solid #eef0f5";
      div.innerHTML = "<strong style='font-size:12.5px'>" + new Date(ev.data).toLocaleDateString("pt-PT") + "</strong> — " + ev.titulo +
        "<div class='text-muted' style='font-size:11.5px'>" + ev.turma + "</div>";
      lista.appendChild(div);
    });
  });
})();
