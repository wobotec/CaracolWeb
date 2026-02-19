import { Input } from "../../../Input/input";
import Button from "../../../Button/button";

export default function ProfileForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input
        label="Nome"
        placeholder="Digite seu nome"
      />

      <Input
        label="Email"
        type="email"
        placeholder="email@exemplo.com"
      />

      <Button variant="primary">
        Salvar alterações
      </Button>
    </form>
  );
}
