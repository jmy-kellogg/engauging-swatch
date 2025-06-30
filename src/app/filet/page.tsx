"use client";
import { useState } from "react";

export default function Filet() {
  const [rows, setRows] = useState<number>(20);
  const [columns, setColumns] = useState<number>(20);

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
      </div>
      <div className="border m-5 w-max">
        {arrayFromNum(rows).map((r) => (
          <div key={`row-${r}`} className="flex">
            {arrayFromNum(columns).map((c) => (
              <div key={`cell-${r}-${c}`} className="w-5 h-5 border"></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
