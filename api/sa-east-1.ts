export const config = {
    runtime: "edge",
    regions: ["gru1"],
  };
  
  export default function handler(): Response {
    const body = JSON.stringify({
      region: "sa-east-1",
    });
    return new Response(body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  