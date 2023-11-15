export const config = {
  regions: ["iad1"],
};

export default function handler(): Response {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; utf-8",
    },
  });
}

const html = `
  <!DOCTYPE html>
  <html>
      <body>
          <h1>us-east-1</h1>
      </body>
  </html>
  `;
