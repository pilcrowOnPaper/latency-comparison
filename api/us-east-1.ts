export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

export default function handler(): Response {
  const body = JSON.stringify({
    region: "us-east-1",
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
