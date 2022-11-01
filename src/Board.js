import React from "react";
import Square from "./Square";

export default function Board(props) {
  let x, y, knightHere;
  const squares = [];
  for (let i = 0; i < 64; i++) {
    x = parseInt(i / 8);
    y = i % 8;
    knightHere = props.knightPosition[0] === x &&
      props.knightPosition[1] === y;
    squares.push(
      <Square key={i} x={x} y={y} knightHere={knightHere}
        setKnightPosition={props.setKnightPosition}
        knightPosition={props.knightPosition} />
    );
  }
  return (
    <div style={{
      width: "100%", height: "100%", backgroundColor: "lightgreen",
      display: "flex", flexWrap: "wrap", position: "absolute",
    }}>
      {squares}
    </div>
  )
}