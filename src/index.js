const express = require("express");
const { CreateServer } = require("./server");
const realtimeServer = require("./realtimeServer");
const path = require("path");

const app = express();
const httpServer = CreateServer(app);

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(require("./routes"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Start server
httpServer.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

// Realtime server socket.io server
realtimeServer(httpServer);
