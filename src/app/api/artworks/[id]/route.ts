import { NextRequest } from "next/server";

export interface Thumbnail {
  alt_text: string;
  height: number;
  lqip: string;
  width: number;
}
export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  thumbnail: Thumbnail | null;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const resp = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
  const respData = await resp.json();
  const data: Artwork = respData.data || {};

  return Response.json(data);
}
