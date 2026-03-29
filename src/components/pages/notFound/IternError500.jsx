export default function NotFound() {
  return (
    <body class="gray-bg">
      <div class="middle-box text-center animated fadeInDown">
        <h1>404</h1>
        <h3 class="font-bold">PErro do Servidor Interno</h3>

        <div class="error-desc">
        O servidor encontrou um problema inesperado que impediu a conclusão da solicitação. Pedimos desculpas.
        Você pode voltar à página principal:
          <br/><a href="index.html" class="btn btn-primary m-t">Dashboard</a>
        </div>
      </div>
    </body>
  )
}
