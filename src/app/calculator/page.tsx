"use client";
import { FormEvent, useState } from "react";

type Unit = "inch" | "cm";

export default function Artworks() {
  const [unit, setUnit] = useState<Unit>("inch");
  const [keywords, setKeywords] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="m-5 justify-self-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-white border-1 border-gray-500 rounded-sm">
          <div className="flex">
            <div className="flex items-center m-2">
              <input
                checked={unit === "inch"}
                id="default-radio-1"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => setUnit("inch")}
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Inch
              </label>
            </div>
            <div className="flex items-center m-2">
              <input
                checked={unit === "cm"}
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => setUnit("cm")}
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Centimeter
              </label>
            </div>
          </div>
          <p className="ml-3">Gauge Swatch</p>
          <div className="border-1 border-gray-500 rounded-sm m-2 mt-0">
            <div>
              <input
                name="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="gauge width"
                className="m-3 rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <input
                name="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="gauge hight"
                className="m-3 rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            <div>
              <input
                name="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="stitch count"
                className="m-3 rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <input
                name="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="row count"
                className="m-3 rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <p className="ml-3">Project</p>
          <div className="border-1 border-gray-500 rounded-sm m-2 mt-0">
            <div>
              <input
                name="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="width"
                className="m-3 rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <input
                name="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="hight"
                className="m-3 rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div>
              <input
                name="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="stitch count"
                className="m-3 rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <input
                name="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="row count"
                className="m-3 rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
