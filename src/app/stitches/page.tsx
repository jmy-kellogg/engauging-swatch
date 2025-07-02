import Card from "./components/card";

export interface Stitch {
  name: string;
}

export default function Stitches() {
  const stitches: Stitch[] = [
    { name: "Chain" },
    { name: "Single Crochet" },
    { name: "Double Crochet" },
    { name: "Half Double Crochet" },
    { name: "Treble Crochet" },
    { name: "Shell Stitch" },
    { name: "Linen Stitch" },
    { name: "Even Moss Stitch" },
  ];
  return (
    <div className="m-5">
      <h1 className="m-2 justify-self-center">Stitch Library</h1>
      <div className="w-full">
        {stitches.map((stitch) => (
          <Card key={stitch.name} stitch={stitch} />
        ))}
      </div>
    </div>
  );
}
