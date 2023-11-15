export const config = {
  runtime: "edge",
  regions: ["cpt1"],
};

export default function handler(): Response {
  const body = JSON.stringify({
    region: "af-south-1",
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
