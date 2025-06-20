"use client";
import { FormEvent, useState, useEffect } from "react";

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

  const convertUnit = (unit: Unit, amount: string) => {
    if (unit === "inch") {
      return (parseInt(amount) * 2.54).toString();
    } else {
      return (parseInt(amount) / 2.54).toString();
    }
  };

  const isDefaultForm = () => {
    return !gaugeStitch && !gaugeRow && !projectStitch && !projectRow;
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
    if (isDefaultForm()) {
      setDefaultForm(newUnit);
    } else {
      const gWidth = convertUnit(newUnit, gaugeWidth);
      const gHeight = convertUnit(newUnit, gaugeHeight);
      const pWidth = convertUnit(newUnit, projectWidth);
      const pHeight = convertUnit(newUnit, projectHeight);

      setGaugeWidth(gWidth);
      setGaugeHeight(gHeight);
      setProjectWidth(pWidth);
      setProjectHeight(pHeight);
    }
    setUnit(newUnit);
  };

  const setStitchCount = (gStitchCount: string) => {
    const pWidth = parseInt(projectWidth);
    const gWidth = parseInt(gaugeWidth);
    const pSwitchCount = (pWidth * parseInt(gStitchCount)) / gWidth;

    setGaugeStitch(gStitchCount);
    setProjectStitch(pSwitchCount.toString());
  };

  const setRowCount = (gRowCount: string) => {
    const pHeight = parseInt(projectHeight);
    const gHeight = parseInt(gaugeHeight);
    const pSwitchCount = (pHeight * parseInt(gRowCount)) / gHeight;

    setGaugeRow(gRowCount);
    setProjectRow(pSwitchCount.toString());
  };

  return (
    <div className="m-5 justify-self-center">
      <div className="bg-white border-1 border-gray-500 rounded-sm">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center m-2">
              <input
                checked={unit === "inch"}
                id="default-radio-1"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => updateMeasurements("inch")}
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400"
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
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => updateMeasurements("cm")}
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Centimeters
              </label>
            </div>
          </div>
          <button
            className="p-1 m-2 bg-sky-300 text-black rounded-sm font-bold hover:cursor-pointer hover:bg-sky-600 hover:text-white"
            onClick={() => setDefaultForm(unit)}
          >
            Clear
          </button>
        </div>
        <p className="ml-3">Gauge Swatch</p>
        <div className="border-1 border-gray-500 rounded-sm m-2 mt-0">
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
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                onChange={(e) => setStitchCount(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                onChange={(e) => setRowCount(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <p className="ml-3">Project</p>
        <div className="border-1 border-gray-500 rounded-sm m-2 mt-0">
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
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectStitch"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Stitch Count
              </label>
              <input
                name="projectStitch"
                type="number"
                value={projectStitch}
                onChange={(e) => setProjectStitch(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectRow"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Row Count
              </label>
              <input
                name="projectRow"
                type="number"
                value={projectRow}
                onChange={(e) => setProjectRow(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
