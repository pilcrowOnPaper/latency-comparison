import type { VercelRequest, VercelResponse } from "@vercel/node";

export const config = {
  regions: ["iad1"],
};

export default function handler(
    _: VercelRequest,
    response: VercelResponse
  ): VercelResponse {
    return response
      .status(200)
      .setHeader("Content-Type", "text/html; utf-8")
      .send(html);
  }
  

const html = `
  <!DOCTYPE html>
  <html>
      <body>
          <h1>us-east-1</h1>
      </body>
  </html>
  `;
