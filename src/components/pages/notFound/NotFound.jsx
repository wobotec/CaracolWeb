import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div class="gray-bg">
      <div class="middle-box text-center animated fadeInDown">
        <h1>404</h1>
        <h3 className="font-bold">Página não encontrada</h3>

        <div class="error-desc">
          Desculpe, mas a página que você está procurando não foi encontrada. Verifique se há erros na URL e, em seguida, clique no botão de atualizar do seu navegador ou tente acessar outra página em nosso aplicativo.          
          <br/><Link to="/"   className="btn btn-primary m-t">Dashboard</Link>          
        </div>
      </div>
    </div>
  )
}
