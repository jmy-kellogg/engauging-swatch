"use client";
import { useState } from "react";
import Cell from "./components/cell";

export default function Filet() {
  const [rows, setRows] = useState<number>(20);
  const [columns, setColumns] = useState<number>(20);
  const [cellColor, setCellColor] = useState("bg-sky-500");

  const arrayFromNum = (num: number) => {
    return Array.from({ length: num }, (v, i) => i);
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col m-3 w-20">
          <label
            htmlFor="width"
            className="text-sm font-medium text-gray-900 dark:text-espresso-100"
          >
            Width
          </label>
          <input
            name="width"
            type="number"
            value={columns}
            onChange={(e) => setColumns(parseInt(e.target.value))}
            className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
          />
        </div>
        <div className="flex flex-col m-3 w-20">
          <label
            htmlFor="height"
            className="text-sm font-medium text-gray-900 dark:text-espresso-100"
          >
            Height
          </label>
          <input
            name="height"
            type="number"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
            className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
          />
        </div>
        <div className="flex flex-col m-3 w-20">
          <label
            htmlFor="color"
            className="text-sm font-medium text-gray-900 dark:text-espresso-100"
          >
            Color
          </label>
          <select
            id="color"
            name="color"
            onChange={(e) => setCellColor(e.target.value)}
            className="rounded-md p-2 text-base outline-1 -outline-offset-1 outline-espresso-300"
          >
            <option value="bg-sky-500">Blue</option>
            <option value="bg-red-500">Red</option>
            <option value="bg-green-500">Green</option>
            <option value="bg-purple-500">Purple</option>
          </select>
        </div>
      </div>
      <div className="border m-5 w-max">
        {arrayFromNum(rows).map((r) => (
          <div key={`row-${r}`} className="flex">
            {arrayFromNum(columns).map((c) => (
              <Cell
                key={`cell-${r}-${c}`}
                color={cellColor}
                row={r}
                column={c}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
