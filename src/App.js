import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Board";

export default function App() {
  const [knightPosition, setKnightPosition] = useState([0, 0]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Board knightPosition={knightPosition}
        setKnightPosition={setKnightPosition} />
    </DndProvider>
  );
}