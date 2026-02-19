import ChangePassword from "./ChangePassword";
import NotificationPreferences from "./NotificationPreferences";

export default function Settings() {
  return (
    <div className="container mt-4">
      <h2>Configurações</h2>
      <ChangePassword />
      <NotificationPreferences />
    </div>
  );
}
