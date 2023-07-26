import { useState } from "react";
import Homepage from "./components/Homepage";
import GameDetail from "./components/GameDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game-detail/:id" element={<GameDetail />} />
      </Routes>
    </>
  );
}

export default App;
