import { Input } from "../../../Input/input";

export default function NotificationPreferences() {
  return (
    <div className="card bg-white border border-secondary">
      <div className="card-body">
        <h5 className="text-center mb-4">Preferências de notificação</h5>

        <div className="form-check mb-3">
          <Input
            type="checkbox"
            label="Receber notificações por email"
          />
        </div>

        <div className="form-check">
          <Input
            type="checkbox"
            label="Receber notificações no sistema"
          />
        </div>
      </div>
    </div>
  );
}
