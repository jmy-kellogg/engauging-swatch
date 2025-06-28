import { useState } from "react";

export type RoundType =
  | "nearest"
  | "up"
  | "down"
  | "odd"
  | "even"
  | "oddUp"
  | "evenUp"
  | "oddDown"
  | "evenDown";

interface Props {
  onSubmit: (roundType: RoundType) => void;
  title?: string;
  iconType?: "vertical" | "horizontal";
}

interface RoundTypeOption {
  id: RoundType;
  label?: string;
}

function Modal({ onSubmit, title, iconType }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [roundType, setRoundType] = useState<RoundType>("nearest");
  const roundTypes: RoundTypeOption[] = [
    { id: "nearest", label: "Round to Nearest" },
    { id: "up", label: "Round Up" },
    { id: "down", label: "Round Down" },
    { id: "even", label: "Round to Even" },
    { id: "evenUp", label: "Round Up to Even" },
    { id: "evenDown", label: "Round Down to Even" },
    { id: "odd", label: "Round to Odd" },
    { id: "oddUp", label: "Round Up to Odd" },
    { id: "oddDown", label: "Round Down to Odd" },
  ];

  return (
    <>
      {showModal && (
        <div
          id="default-modal"
          className="absolute bg-white p-4 w-xs ml-27 rounded-lg shadow-lg border dark:bg-espresso-500 dark:border-espresso-200"
        >
          <div className="flex items-center justify-between p-1 border-b border-espresso-300 rounded-t dark:text-espresso-100">
            <h3>{title ? title : "Round Options"}</h3>
          </div>
          {roundTypes.map(({ id, label }) => (
            <div key={id} className="flex items-center m-2">
              <input
                checked={roundType === id}
                id={id}
                type="radio"
                name={id}
                className="w-4 h-4 text-sky-300 hover:cursor-pointer"
                onChange={() => setRoundType(id)}
              />
              <label
                htmlFor={id}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-espresso-100 hover:cursor-pointer"
              >
                {label}
              </label>
            </div>
          ))}
          <button
            className="px-2 py-1 m-1 bg-sage-300 text-gray-800 rounded-lg shadow-sm font-bold hover:cursor-pointer hover:bg-sage-500"
            onClick={() => {
              onSubmit(roundType);
              setShowModal(false);
            }}
          >
            Submit
          </button>
        </div>
      )}
      <button
        className="hover:cursor-pointer"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        {iconType === "vertical" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 mx-1"
            id="vertical-filter"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            id="horizontal-filter"
            className="size-5 mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        )}
      </button>
    </>
  );
}

export default Modal;
