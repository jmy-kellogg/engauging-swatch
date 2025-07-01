"use client";
import { useState } from "react";

interface Props {
  color: string;
  row: number;
  column: number;
}

export default function Cell({ row, column, color }: Props) {
  const cellKey = `cell-${row}-${column}`;
  const [active, setActive] = useState(() => {
    const isActive = localStorage.getItem(cellKey);
    return isActive ? JSON.parse(isActive) : false;
  });

  return (
    <div
      className={`w-5 h-5 border hover:cursor-pointer ${
        active ? color : "bg-white"
      }`}
      onClick={() => {
        localStorage.setItem(cellKey, `${!active}`);
        setActive(!active);
      }}
    ></div>
  );
}
