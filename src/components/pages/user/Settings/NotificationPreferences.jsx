import { Input } from "../../../Input/input";

export default function NotificationPreferences() {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <Input
        label="Receber notificações por email"
        type="checkbox"
      />

      <Input
        label="Receber notificações no sistema"
        type="checkbox"
      />
    </div>
  );
}
