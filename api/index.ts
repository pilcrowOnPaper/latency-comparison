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
        <h1>Latency test</h1>
        <button id="start">Start</button>
        <div id="results"></div>
    </body>
    <script>
        const regions = [
            "af-south-1",
            "ap-northeast-1",
            "ap-southeast-1",
            "eu-west-1",
            "sa-east-1",
            "us-east-1",
            "us-west-1",
        ];

        document.getElementById("start").onclick = () => {
            document.getElementById("results").innerHTML = "";
            for (const region of regions) {
                getResult(region)
            }
        }

        async function getResult(region) {
            const start = performance.now();
            await fetch("/api/" + region);
            const end = performance.now();
            const result = Math.floor(end - start) + "ms";
            const p = document.createElement("p");
            p.innerText = region + ": " + result;
            document.getElementById("results").appendChild(p);
        }
    </script>
</html>
`;
