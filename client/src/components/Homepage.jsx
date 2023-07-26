import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [layer1, setLayer1] = useState("");
  const [layer2, setLayer2] = useState("");
  const [layer3, setLayer3] = useState("");
  const [layer4, setLayer4] = useState("");
  const navigate = useNavigate();

  // Hàm thêm mới user
  const handleSubmit = () => {
    // Tạo một danh sách user mới
    const newListUser = {
      layer1: layer1,
      layer2: layer2,
      layer3: layer3,
      layer4: layer4,
    };

    // Gọi API thêm mới user
    axios
      .post("http://localhost:8080/api/v1/games", newListUser)
      .then((res) => {
        if (res.data.status === 201) {
          navigate(`/game-detail/${res.data.id}`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ maxWidth: "80%" }} className="container">
      <div className="mb-3">
        <label className="form-label">Layer 1</label>
        <input
          value={layer1}
          onChange={(e) => setLayer1(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Layer 2</label>
        <input
          value={layer2}
          onChange={(e) => setLayer2(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Layer 3</label>
        <input
          value={layer3}
          onChange={(e) => setLayer3(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Layer 4</label>
        <input
          value={layer4}
          onChange={(e) => setLayer4(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary">
        Create game
      </button>
    </div>
  );
}
