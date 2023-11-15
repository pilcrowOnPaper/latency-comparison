export const config = {
  runtime: "edge",
  regions: ["hnd1"],
};

export default function handler(): Response {
  const body = JSON.stringify({
    region: "ap-northeast-1",
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
