import type { Stitch } from "../page.tsx";

interface Props {
  stitch: Stitch;
}

export default function Card({ stitch }: Props) {
  return (
    <div className="border rounded-md shadow-sm m-2">
      <h2 className="m-2 justify-self-center">{stitch.name}</h2>
    </div>
  );
}
