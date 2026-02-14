import { Input } from "../../../Input/input";
export default function ProfilePhoto() {
  return (
    <div className="text-center">
      <img
        src="/default-avatar.png"
        alt="Foto de perfil"
        className="img-thumbnail mb-3"
      />

     <Input
  label="Foto de perfil"
  type="file"
/>

    </div>
  );
}
