export const config = {
  runtime: "edge",
  regions: ["sin1"],
};

export default function handler(): Response {
  const body = JSON.stringify({
    region: "ap-southeast-1",
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
