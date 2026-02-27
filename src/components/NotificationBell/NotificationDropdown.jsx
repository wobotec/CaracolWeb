export default function NotificationDropdown() {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

  return (
    <div className="dropdown">

      <button onClick={markAllAsRead} className="mark-all">
  Marcar todas como lidas
</button>
      <div className="dropdown-header">
        <strong>Notificações</strong>

        <button onClick={markAllAsRead} className="mark-all">
          Marcar todas como lidas
        </button>
      </div>

      {notifications.length === 0 && (
        <p className="empty">Sem notificações</p>
      )}

      {notifications.map(n => (
        <div
          key={n.id}
          className={`notification-item ${n.read ? "read" : "unread"}`}
          onClick={() => markAsRead(n.id)}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
}