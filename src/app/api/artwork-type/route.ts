export const dynamic = "force-static";

export async function GET() {
  const res = await fetch(
    "https://api.artic.edu/api/v1/artwork-types?limit=25"
  );
  const data = await res.json();

  return Response.json(data);
}
