export const config = {
    runtime: "edge",
    regions: ["sfo1"],
  };
  
  export default function handler(): Response {
    const body = JSON.stringify({
      region: "us-west-1",
    });
    return new Response(body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  