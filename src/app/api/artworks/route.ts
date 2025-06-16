import type { Artwork } from "./[id]/route";

export type Artworks = Artwork[];

export async function GET() {
  const resp = await fetch(
    "https://api.artic.edu/api/v1/artworks/search?sort=_score&sort_order=desc&limit=25"
  );
  const respJson = await resp.json();
  const searchData: Artworks = respJson.data || [];

  const idQuery = searchData.map(({ id }) => id).join(",");
  const detailsResp = await fetch(
    `https://api.artic.edu/api/v1/artworks?ids=${idQuery}`
  );
  const detailsData = await detailsResp.json();
  const data = detailsData.data || [];

  return Response.json(data);
}
