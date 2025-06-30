"use client";
import { useState } from "react";
import Modal from "./component/modal";
import { RoundType } from "./component/modal";

type Unit = "inch" | "cm";

export default function Calculator() {
  const [unit, setUnit] = useState<Unit>("inch");
  const [stitchRound, setStichRound] = useState<RoundType>("nearest");
  const [rowRound, setRowRound] = useState<RoundType>("nearest");
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

  const roundDict = {
    nearest: Math.round,
    down: Math.floor,
    up: Math.ceil,
    even: (count: number) => {
      const rounded = Math.round(count);
      if (rounded % 2 === 0) {
        return rounded;
      } else {
        const up = Math.abs(count - (rounded + 1));
        const down = Math.abs(count - (rounded - 1));
        return up < down ? rounded + 1 : rounded - 1;
      }
    },
    odd: (count: number) => {
      const rounded = Math.round(count);
      if (rounded % 2 === 1) {
        return rounded;
      } else {
        const up = Math.abs(count - rounded + 1);
        const down = Math.abs(count - rounded - 1);
        return up < down ? rounded + 1 : rounded - 1;
      }
    },
    oddUp: (count: number) => {
      const rounded = Math.round(count);
      return rounded % 2 === 1 ? rounded : rounded + 1;
    },
    oddDown: (count: number) => {
      const rounded = Math.round(count);
      return rounded % 2 === 1 ? rounded : rounded - 1;
    },
    evenUp: (count: number) => {
      const rounded = Math.round(count);
      return rounded % 2 === 0 ? rounded : rounded + 1;
    },
    evenDown: (count: number) => {
      const rounded = Math.round(count);
      return rounded % 2 === 0 ? rounded : rounded - 1;
    },
  };

  const setDefaultForm = (newUnit: Unit) => {
    const gaugeSize = defaultUnits["gauge"][newUnit];
    const projectSize = defaultUnits["project"][newUnit];

    setGaugeWidth(gaugeSize);
    setGaugeHeight(gaugeSize);
    setProjectWidth(projectSize);
    setProjectHeight(projectSize);
    setProjectStitch("");
    setProjectRow("");
  };

  const updateMeasurements = (newUnit: Unit) => {
    setDefaultForm(newUnit);
    setUnit(newUnit);
  };

  const setStitchCount = (stitchRound: RoundType) => {
    if (!projectWidth || !gaugeWidth || !gaugeStitch) return;
    const pWidth = parseInt(projectWidth);
    const gWidth = parseInt(gaugeWidth);
    const gStitchCount = parseInt(gaugeStitch);
    const pSwitchCount = roundDict[stitchRound](
      (pWidth * gStitchCount) / gWidth
    );

    setProjectStitch(pSwitchCount.toString());
  };

  const setRowCount = (rowRound: RoundType) => {
    if (!projectHeight || !gaugeHeight || !gaugeRow) return;
    const pHeight = parseInt(projectHeight);
    const gHeight = parseInt(gaugeHeight);
    const gRowCount = parseInt(gaugeRow);
    const pRowCount = roundDict[rowRound]((pHeight * gRowCount) / gHeight);

    setProjectRow(pRowCount.toString());
  };

  const calculateRows = () => {
    setStitchCount(stitchRound);
    setRowCount(rowRound);
  };

  const roundStitches = (roundType: RoundType) => {
    setStichRound(roundType);
    if (projectStitch) setStitchCount(roundType);
  };

  const roundRows = (roundType: RoundType) => {
    setRowRound(roundType);
    if (projectRow) setRowCount(roundType);
  };

  return (
    <div className="m-5 justify-self-center">
      <div className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-espresso-500 dark:border-espresso-300">
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
                className="ms-2 text-sm font-medium text-gray-900 dark:text-espresso-100 hover:cursor-pointer"
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
                className="ms-2 text-sm font-medium text-gray-900 dark:text-espresso-100 hover:cursor-pointer"
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
        <div className="border border-gray-400 rounded-sm m-2 mt-0 dark:border-espresso-200">
          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="gaugeWith"
                className="text-sm font-medium text-gray-900 dark:text-espresso-100"
              >
                Width
              </label>
              <input
                name="gaugeWith"
                type="number"
                value={gaugeWidth}
                onChange={(e) => setGaugeWidth(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="gaugeHeight"
                className="text-sm font-medium text-gray-900 dark:text-espresso-100"
              >
                Height
              </label>
              <input
                name="gaugeHeight"
                type="number"
                value={gaugeHeight}
                onChange={(e) => setGaugeHeight(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="gaugeStitch"
                className="text-sm font-medium text-gray-900 dark:text-espresso-100"
              >
                Stitch Count
              </label>
              <input
                name="gaugeStitch"
                type="number"
                value={gaugeStitch}
                onChange={(e) => setGaugeStitch(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="gaugeRow"
                className="text-sm font-medium text-gray-900 dark:text-espresso-100"
              >
                Row count
              </label>
              <input
                name="gaugeRow"
                type="number"
                value={gaugeRow}
                onChange={(e) => setGaugeRow(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
              />
            </div>
          </div>
        </div>
        <p className="ml-3">Project</p>
        <div className="border border-gray-400 rounded-sm m-2 mt-0 dark:border-espresso-200">
          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectWidth"
                className="text-sm font-medium text-gray-900 dark:text-espresso-100"
              >
                Width
              </label>
              <input
                name="projectWidth"
                type="number"
                value={projectWidth}
                onChange={(e) => setProjectWidth(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectHeight"
                className="text-sm font-medium text-gray-900 dark:text-espresso-100"
              >
                Height
              </label>
              <input
                name="projectHeight"
                type="number"
                value={projectHeight}
                onChange={(e) => setProjectHeight(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectStitch"
                className="flex text-sm font-medium text-gray-900 dark:text-espresso-100"
              >
                Stitch Count
                <Modal
                  onSubmit={roundStitches}
                  title="Round Stitches"
                  iconType="vertical"
                />
              </label>
              <input
                name="projectStitch"
                type="number"
                value={projectStitch}
                onChange={(e) => setProjectStitch(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
              />
            </div>
            <div className="flex flex-col m-3">
              <label
                htmlFor="projectRow"
                className="flex text-sm font-medium text-gray-900 dark:text-espresso-100"
              >
                Row Count
                <Modal
                  onSubmit={roundRows}
                  title="Round Rows"
                  iconType="horizontal"
                />
              </label>
              <input
                name="projectRow"
                type="number"
                value={projectRow}
                onChange={(e) => setProjectRow(e.target.value)}
                className="rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-espresso-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 sm:text-sm/6 dark:text-espresso-100 dark:bg-espresso"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
