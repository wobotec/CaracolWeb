import ChangePassword from "./ChangePassword";
import NotificationPreferences from "./NotificationPreferences";

export default function Settings() {
  return (
    <div className="min-vh-100 min-vw-100 d-flex align-items-center justify-content-center bg-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h2 className="text-center mb-4">Configurações</h2>

            <div className="row g-4">
              <div className="col-12">
                <ChangePassword />M .
              </div>

              <div className="col-12">
                <NotificationPreferences />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
