export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

export default function handler(): Response {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}

const html = `
<!DOCTYPE html>
<html>
    <body>
        <p id="us-east-1">us-east-1:</p>
        <p id="ap-northeast-1">ap-northeast-1:</p>
        <p id="ap-southeast-1">ap-southeast-1:</p>
        <p id="eu-west-1">eu-west-1:</p>
    </body>
    <script>
        Promise.all([usEast1(), apNorthEast1(),apSouthEast1(), euWest1()]);

        async function usEast1() {
            document.getElementById("us-east-1").innerText = "us-east-1:"
            const start = performance.now();
            await fetch("/api/us-east-1");
            const end = performance.now();
            const result = Math.floor(end - start) + "ms";
            document.getElementById("us-east-1").innerText = "us-east-1: " + result;
        }

        async function apNorthEast1() {
            document.getElementById("ap-northeast-1").innerText = "ap-northeast-1:"
            const start = performance.now();
            await fetch("/api/ap-northeast-1");
            const end = performance.now();
            const result = Math.floor(end - start) + "ms";
            document.getElementById("ap-northeast-1").innerText = "ap-northeast-1: " + result;
        }

        async function apSouthEast1() {
            document.getElementById("ap-southeast-1").innerText = "ap-southeast-1:"
            const start = performance.now();
            await fetch("/api/ap-northeast-1");
            const end = performance.now();
            const result = Math.floor(end - start) + "ms";
            document.getElementById("ap-southeast-1").innerText = "ap-southeast-1: " + result;
        }

        async function euWest1() {
            document.getElementById("eu-west-1").innerText = "eu-west-1:"
            const start = performance.now();
            await fetch("/api/eu-west-1");
            const end = performance.now();
            const result = Math.floor(end - start) + "ms";
            document.getElementById("eu-west-1").innerText = "eu-west-1: " + result;
        }
    </script>
</html>
`;
