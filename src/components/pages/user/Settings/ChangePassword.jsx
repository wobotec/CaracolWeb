import { Input } from "../../../Input/input";
import  Button  from "../../../Button/button";

export default function ChangePassword() {
  return (
    <form className="flex flex-col gap-4">
      <Input
        label="Senha atual"
        type="password"
      />

      <Input
        label="Nova senha"
        type="password"
      />

      <Input
        label="Confirmar nova senha"
        type="password"
        error="As senhas não coincidem"
      />

      <button variant="warning">
        Alterar senha
      </button>
    </form>
  );
}
