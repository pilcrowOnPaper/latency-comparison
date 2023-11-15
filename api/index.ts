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
    .setHeader("Content-Type", "text/html; charset=utf-8")
    .send(html);
}

const html = `
<!DOCTYPE html>
<html>
    <body>
        <p id="us-east-1">us-east-1:</p>
        <p id="ap-northeast-1">ap-northeast-1:</p>
    </body>
    <script>
        Promise.all([usEast1(), apNorthEast1()]);

        async function usEast1 () {
            document.getElementById("us-east-1").innerText = ""
            const start = performance.now();
            await fetch("/api/us-east-1");
            const end = performance.now();
            const result = end - start + "ms";
            document.getElementById("us-east-1").innerText = result;
        }

        async function apNorthEast1 () {
            document.getElementById("ap-northeast-1").innerText = ""
            const start = performance.now();
            await fetch("/api/ap-northeast-1");
            const end = performance.now();
            const result = end - start + "ms";
            document.getElementById("ap-northeast-1").innerText = result;
        }
    </script>
</html>
`;
