import { NextRequest } from "next/server";
import type { Artworks } from "../route";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keywords = searchParams.get("keywords");
  let data = [];

  if (keywords) {
    const resp = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${keywords}&limit=25`
    );
    const respJson = await resp.json();
    const respData: Artworks = respJson.data || [];

    const idQuery = respData.map(({ id }) => id).join(",");
    const detailsResp = await fetch(
      `https://api.artic.edu/api/v1/artworks?ids=${idQuery}`
    );
    const detailsData = await detailsResp.json();
    data = detailsData.data || [];
  }

  return Response.json(data);
}
