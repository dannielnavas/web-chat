module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);
  io.on("connection", (socket) => {
    const cookies = socket.handshake.headers.cookie;
    const user = cookies.split("=").pop();

    socket.on("message", (message) => {
      io.emit("message", {
        date: new Date(),
        user,
        message,
      });
    });
  });
};
