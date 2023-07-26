const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid").v4;
const fs = require("fs");

const gameRouter = express.Router();
gameRouter.use(cors());
gameRouter.use(bodyParser.json()); // Ép kiểu từ JS sang JSON
gameRouter.use(bodyParser.urlencoded({ extended: true })); // Cho phép sử dung các phương thức có sẵn của JS

// API thêm mới danh sách user
gameRouter.post("/", (req, res) => {
  // Lấy dữ liệu từ client
  const { layer1, layer2, layer3, layer4 } = req.body;
  // Tạo một id mới
  const newId = uuidv4();
  // Tạo ra đối tượng game mới
  const newGame = {
    id: newId,
    users: [layer1, layer2, layer3, layer4],
    rounds: [],
  };
  try {
    // Đọc file game-data.json
    const gameData = JSON.parse(fs.readFileSync("./dev-data/game-data.json"));
    // Tiến hành push dữ liệu vào trong db
    gameData.push(newGame);
    // Ghi đề lại file
    fs.writeFileSync("./dev-data/game-data.json", JSON.stringify(gameData));
    // Xử lý kết quả trả về
    return res.status(201).json({
      status: 201,
      id: newId,
      userMsg: "Thêm mới thành công",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      devMsg: error,
      userMsg: "Lỗi hệ thống",
    });
  }
});
// Khi gọi API thì nó sẽ có dạng: http://localhost:8080/api/v1/games/

module.exports = gameRouter;
