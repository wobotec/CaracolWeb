export const socket = {
  on(event, callback) {
    if (event === "notification") {
      setInterval(() => {
        callback({
          message: "Nova notificação (mock)"
        });
      }, 10000);
    }
  },
  off() {}
};