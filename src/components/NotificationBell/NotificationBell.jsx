import { useState } from "react";
import { useNotifications } from "../../context/NotificationContext";
import NotificationDropdown from "./NotificationDropdown";
import "./notification.css";

export default function NotificationBell() {
  const { unreadCount } = useNotifications();
  const [open, setOpen] = useState(false);

  return (
    <div className="notification-wrapper">
      <button onClick={() => setOpen(!open)} className="bell-btn">
        🔔
        {unreadCount > 0 && (
          <span className="badge">{unreadCount}</span>
        )}
      </button>

      {open && <NotificationDropdown />}
    </div>
  );
}