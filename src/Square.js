import React from "react";
import { useDrop } from "react-dnd";
import Knight from "./Knight";

function canDropKnight(fromX, fromY, toX, toY) {
  const dx = Math.abs(fromX - toX);
  const dy = Math.abs(fromY - toY);
  return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
}
export default function Square(props) {
  const { x, y, setKnightPosition } = props;
  const [fromX, fromY] = props.knightPosition;
  const blackSquare = (x + y) % 2;
  const backgroundColor = blackSquare ? "black" : "white";
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "knight",
    canDrop: () => canDropKnight(fromX, fromY, x, y),
    drop: () => setKnightPosition([x, y]),
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    }),
  }), [fromX, fromY, x, y]);
  return (
    <div ref={drop} style={{
      width: "12.5%", height: "12.5%",
      backgroundColor: (canDrop ? "lightgreen" : backgroundColor)
    }}>
      {props.knightHere ?
        <Knight blackKnight={blackSquare} /> : ""}
    </div>
  )
}
