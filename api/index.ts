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
        <p id="us-east-1">us-east-1:</p>
        <p id="ap-northeast-1">ap-northeast-1:</p>
    </body>
    <script>
        Promise.all([usEast1(), apNorthEast1()]);

        async function usEast1 () {
            document.getElementById("us-east-1").innerText = ""
            const start = now();
            await fetch("/api/us-east-1");
            const end = now();
            const result = end - start + "ms";
            document.getElementById("us-east-1").innerText = result;
        }

        async function apNorthEast1 () {
            document.getElementById("ap-northeast-1").innerText = ""
            const start = now();
            await fetch("/api/ap-northeast-1");
            const end = now();
            const result = end - start + "ms";
            document.getElementById("ap-northeast-1").innerText = result;
        }
    </script>
</html>
`;
