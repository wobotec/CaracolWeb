(function () {
  var corpos = {
    msg1: "Boa tarde, professor. Gostaria de perceber melhor os critérios usados na avaliação contínua da minha educanda, especialmente no componente de participação. Poderíamos marcar uma breve conversa?",
    msg2: "Caro(a) professor(a), lembramos que o prazo para lançamento das notas do 3º trimestre termina no próximo dia 20. Por favor confirme o lançamento em falta das suas turmas até essa data.",
    msg3: "Bom dia. O meu educando tem manifestado dificuldades em Estatística. Seria possível agendar uma aula de reforço gratuita? Obrigado pela atenção.",
    msg4: "Informamos que o calendário escolar do 3º trimestre foi atualizado, com ajuste nas datas de avaliação. Consulte o calendário atualizado no portal."
  };

  document.addEventListener("DOMContentLoaded", function () {
    var db = window.CaracolDB.load();
    var lista = document.getElementById("lista-msgs");

    function renderLista() {
      lista.innerHTML = "";
      db.mensagens.forEach(function (m) {
        var item = document.createElement("div");
        item.className = "msg-item";
        item.style.cssText = "padding:14px 18px;border-bottom:1px solid #eef0f5;cursor:pointer;" + (m.lida ? "" : "background:#f7f9fd;");
        item.innerHTML =
          "<div style='display:flex;justify-content:space-between'>" +
            "<strong style='font-size:12.5px'>" + m.de + "</strong>" +
            (m.lida ? "" : "<span class='pill pill-amber'>Nova</span>") +
          "</div>" +
          "<div style='font-size:12.5px;margin-top:2px'>" + m.assunto + "</div>" +
          "<div class='text-muted' style='font-size:11px;margin-top:2px'>" + m.data + "</div>";
        item.addEventListener("click", function () {
          m.lida = true;
          window.CaracolDB.save(db);
          document.getElementById("msg-assunto").textContent = m.assunto;
          document.getElementById("msg-detalhe").innerHTML =
            "<p><strong>De:</strong> " + m.de + " &middot; <span class='text-muted'>" + m.data + "</span></p><hr>" +
            "<p>" + (corpos[m.id] || "Mensagem sem conteúdo adicional.") + "</p>" +
            "<textarea class='form-control' rows='3' placeholder='Escrever resposta...'></textarea>" +
            "<button class='btn btn-primary m-t-sm' id='btnResponder'><i class='fa fa-paper-plane'></i> Enviar resposta</button>";
          document.getElementById("btnResponder").addEventListener("click", function () {
            window.caracolToast("Resposta enviada com sucesso.");
          });
          renderLista();
        });
        lista.appendChild(item);
      });
    }
    renderLista();
  });
})();
