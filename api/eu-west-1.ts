export const config = {
  runtime: "edge",
  regions: ["dub1"],
};

export default function handler(): Response {
  const body = JSON.stringify({
    region: "eu-west-1",
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
