import React from "react";
import { useDrag } from "react-dnd";

export default function Knight(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "knight",
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  }));
  return (
    <span ref={drag} style={{
      color: props.blackKnight ? "white" : "black", cursor: "move",
      fontSize: 40, fontWeight: "bolder", display: "flex",
      justifyContent: "center", alignItems: "center",
      opacity: isDragging ? 0.5 : 1,
    }}>
      {"\u2658"}
    </span>
  )
}