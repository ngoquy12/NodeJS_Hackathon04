const express = require("express");
const app = express();
const cors = require("cors");
// Import router
const gameRouter = require("./routes/game.routes");

// Use router
app.use("/api/v1/games", gameRouter);
// api: Xác định để viết api
// v1: Đánh dấu phiên bản
// games: API này viết cho đối tượng nào
app.use(cors());

app.listen(8080, () => {
  console.log(`http://localhost:8080`);
});
