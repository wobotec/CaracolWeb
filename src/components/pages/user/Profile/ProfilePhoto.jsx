import { Input } from "../../../Input/input";

export default function ProfilePhoto() {
  return (
    <div className="card bg-white border border-secondary text-center h-100">
      <div className="card-body d-flex flex-column align-items-center">
        <img
          src="/default-avatar.png"
          alt="Foto de perfil"
          className="img-thumbnail rounded-circle mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />

        <h5 className="mb-3">Foto de Perfil</h5>

        <div className="mb-3 w-100">
  <label className="form-label">Alterar foto</label>
  <input
    type="file"
    className="form-control form-control-sm"
  />
</div>
      </div>
    </div>
  );
}

