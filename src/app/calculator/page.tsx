"use client";
import { useState } from "react";
import Modal from "./component/modal";

type Unit = "inch" | "cm";

export default function Artworks() {
  const [unit, setUnit] = useState<Unit>("inch");
  // Gauge Section
  const [gaugeWidth, setGaugeWidth] = useState("4");
  const [gaugeHeight, setGaugeHeight] = useState("4");
  const [gaugeStitch, setGaugeStitch] = useState("");
  const [gaugeRow, setGaugeRow] = useState("");
  // Project Section
  const [projectWidth, setProjectWidth] = useState("1");
  const [projectHeight, setProjectHeight] = useState("1");
  const [projectStitch, setProjectStitch] = useState("");
  const [projectRow, setProjectRow] = useState("");

  const defaultUnits = {
    gauge: {
      inch: "4",
      cm: "10",
    },
    project: {
      inch: "1",
      cm: "1",
    },
  };

  const setDefaultForm = (newUnit: Unit) => {
    const gaugeSize = defaultUnits["gauge"][newUnit];
    const projectSize = defaultUnits["project"][newUnit];

    setGaugeWidth(gaugeSize);
    setGaugeHeight(gaugeSize);
    setProjectWidth(projectSize);
    setProjectHeight(projectSize);
  };

  const updateMeasurements = (newUnit: Unit) => {
    setDefaultForm(newUnit);
    setUnit(newUnit);
  };

  const setStitchCount = () => {
    const pWidth = parseInt(projectWidth);
    const gWidth = parseInt(gaugeWidth);
    const gStitchCount = parseInt(gaugeStitch);
    const pSwitchCount = Math.round((pWidth * gStitchCount) / gWidth);

    setProjectStitch(pSwitchCount.toString());
  };

  const setRowCount = () => {
    const pHeight = parseInt(projectHeight);
    const gHeight = parseInt(gaugeHeight);
    const gRowCount = parseInt(gaugeStitch);
    const pRowCount = Math.round((pHeight * gRowCount) / gHeight);

    setProjectRow(pRowCount.toString());
  };

  const calculateRows = () => {
    setStitchCount();
    setRowCount();
  };

  return (
    <div className="m-5 justify-self-center">
      <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center m-2">
              <input
                checked={unit === "inch"}
                id="default-radio-1"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-sky-300 hover:cursor-pointer"
                onChange={() => updateMeasurements("inch")}
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400 hover:cursor-pointer"
              >
                Inches
              </label>
            </div>
            <div className="flex items-center m-2">
              <input
                checked={unit === "cm"}
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-sky-300 hover:cursor-pointer"
                onChange={() => updateMeasurements("cm")}
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400 hover:cursor-pointer"
              >
                Centimeters
              </label>
            </div>
          </div>
          <div className="flex">
            <button
              className="px-2 py-1 m-1 bg-sage-300 text-gray-800 rounded-lg shadow-sm font-bold hover:cursor-pointer hover:bg-sage-500"
              onClick={calculateRows}
            >
              Calculate
            </button>
            <button
              className="px-2 py-1 m-1 bg-sky-300 text-gray-800 rounded-lg shadow-sm font-bold hover:cursor-pointer hover:bg-sky-500"
              onClick={() => setDefaultForm(unit)}
            >
              Clear
            </button>
          </div>
        </div>
        <p className="ml-3">Gauge Swatch</p>
        <div className="border border-gray-400 rounded-sm m-2 mt-0">
          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="gaugeWith"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Width
              </label>
              <input
                name="gaugeWith"
                type="number"
                value={gaugeWidth}
                onChange={(e) => setGaugeWidth(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="gaugeHeight"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Height
              </label>
              <input
                name="gaugeHeight"
                type="number"
                value={gaugeHeight}
                onChange={(e) => setGaugeHeight(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="gaugeStitch"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Stitch Count
              </label>
              <input
                name="gaugeStitch"
                type="number"
                value={gaugeStitch}
                onChange={(e) => setGaugeStitch(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="gaugeRow"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Row count
              </label>
              <input
                name="gaugeRow"
                type="number"
                value={gaugeRow}
                onChange={(e) => setGaugeRow(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <p className="ml-3">Project</p>
        <div className="border border-gray-400 rounded-sm m-2 mt-0">
          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectWidth"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Width
              </label>
              <input
                name="projectWidth"
                type="number"
                value={projectWidth}
                onChange={(e) => setProjectWidth(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectHeight"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Height
              </label>
              <input
                name="projectHeight"
                type="number"
                value={projectHeight}
                onChange={(e) => setProjectHeight(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectStitch"
                className="flex text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Stitch Count
                <Modal />
              </label>
              <input
                name="projectStitch"
                type="number"
                value={projectStitch}
                onChange={(e) => setProjectStitch(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectRow"
                className="flex text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Row Count
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
              </label>
              <input
                name="projectRow"
                type="number"
                value={projectRow}
                onChange={(e) => setProjectRow(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
