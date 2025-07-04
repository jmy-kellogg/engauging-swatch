"use client";
import { useState } from "react";
import Cell from "./components/cell";

export default function Filet() {
  const [rows, setRows] = useState(() => {
    const storedTows = localStorage?.getItem("rows");
    return storedTows ? parseInt(storedTows) : 20;
  });
  const [columns, setColumns] = useState(() => {
    const storedColumns = localStorage?.getItem("columns");
    return storedColumns ? parseInt(storedColumns) : 20;
  });
  const [cellColor, setCellColor] = useState("bg-sky-300");
  const [chartKey, setChartKey] = useState(Math.random());

  const arrayFromNum = (num: number) => {
    return Array.from({ length: num }, (_v, i) => i);
  };

  const clearChart = () => {
    localStorage.clear();
    setChartKey(Math.random());
  };

  return (
    <div className="m-2 sm:justify-self-center">
      <h1 className="m-2 justify-self-center">Filet Creator</h1>
      <div className="flex flex-wrap justify-between">
        <div className="flex">
          <div className="flex flex-col m-2 w-20">
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
              onChange={(e) => {
                localStorage.setItem("columns", e.target.value);
                setColumns(parseInt(e.target.value));
              }}
              className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
            />
          </div>
          <div className="flex flex-col m-2 w-20">
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
              onChange={(e) => {
                localStorage.setItem("rows", e.target.value);
                setRows(parseInt(e.target.value));
              }}
              className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
            />
          </div>
          <div className="flex flex-col m-2 w-20">
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
              className={`${cellColor} rounded-md w-max p-2 text-gray-800 font-bold outline-1 -outline-offset-1 outline-espresso-300`}
            >
              <option value="bg-sky-300">Blue</option>
              <option value="bg-red-300">Red</option>
              <option value="bg-green-300">Green</option>
              <option value="bg-purple-300">Purple</option>
            </select>
          </div>
        </div>
        <button
          className="p-2 m-2 h-10 self-end bg-sage-300 text-gray-800 rounded-lg shadow-sm font-bold hover:cursor-pointer hover:bg-sage-500"
          onClick={clearChart}
        >
          Clear
        </button>
      </div>
      <div key={chartKey} className="border m-5 w-max">
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
    </div>
  );
}
