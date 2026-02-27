import { useEffect } from "react";
import { socket } from "../services/socket";
import { useNotifications } from "../context/NotificationContext";

export function useSocket() {
  const { addNotification } = useNotifications();

  useEffect(() => {
    socket.on("notification", data => {
      addNotification({
        id: Date.now(),
        message: data.message,
        read: false
      });
    });

    return () => socket.off("notification");
  }, []);
}