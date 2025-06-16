import Image from "next/image";
export default async function Artwork({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resp = await fetch(`http://localhost:3000/api/artworks/${id}`);
  const artwork = await resp.json();

  return (
    <div className="m-5">
      <div className="justify-self-center">
        <h1>{artwork.title}</h1>
        <h3>{artwork.artist_display}</h3>
        {artwork.image_id && (
          <Image
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            width={843}
            height={500}
            alt={artwork.thumbnail?.alt_text || artwork.title}
          />
        )}
      </div>
      <div className="my-5">
        {artwork.exhibition_history && <p>{artwork.exhibition_history}</p>}
      </div>
    </div>
  );
}
