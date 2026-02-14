import ProfileForm from "./ProfileForm";
import ProfilePhoto from "./ProfilePhoto";

export default function Profile() {
  return (
    <div className="container mt-4">
      <h2>Meu Perfil</h2>
      <div className="row">
        <div className="col-md-4">
          <ProfilePhoto />
        </div>
        <div className="col-md-8">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
