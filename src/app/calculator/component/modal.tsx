import { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [roundType, setRoundType] = useState("nearest");

  return (
    <>
      {showModal && (
        <div
          id="default-modal"
          className="absolute bg-white p-4 w-xs ml-27 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between p-1 border-b border-slate-300 rounded-t">
            <h3>Round Stitch</h3>
          </div>
          <div className="flex items-center m-2">
            <input
              checked={roundType === "nearest"}
              id="default-radio-1"
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-sky-300 hover:cursor-pointer"
              onChange={() => setRoundType("nearest")}
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400 hover:cursor-pointer"
            >
              Round to Nearest
            </label>
          </div>
          <div className="flex items-center m-2">
            <input
              checked={roundType === "up"}
              id="default-radio-1"
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-sky-300 hover:cursor-pointer"
              onChange={() => setRoundType("up")}
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400 hover:cursor-pointer"
            >
              Round Up
            </label>
          </div>
          <div className="flex items-center m-2">
            <input
              checked={roundType === "down"}
              id="default-radio-1"
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-sky-300 hover:cursor-pointer"
              onChange={() => setRoundType("down")}
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400 hover:cursor-pointer"
            >
              Round Down
            </label>
          </div>
          <div className="flex items-center m-2">
            <input
              checked={roundType === "even"}
              id="default-radio-1"
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-sky-300 hover:cursor-pointer"
              onChange={() => setRoundType("even")}
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400 hover:cursor-pointer"
            >
              Round to Even
            </label>
          </div>
          <div className="flex items-center m-2">
            <input
              checked={roundType === "odd"}
              id="default-radio-1"
              type="radio"
              name="default-radio"
              className="w-4 h-4 text-sky-300 hover:cursor-pointer"
              onChange={() => setRoundType("odd")}
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400 hover:cursor-pointer"
            >
              Round to Odd
            </label>
          </div>
        </div>
      )}
      <button
        className="hover:cursor-pointer"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </>
  );
}

export default Modal;
