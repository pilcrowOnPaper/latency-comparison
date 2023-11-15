export const config = {
  regions: ["hnd1"],
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
        <h1>ap-northeast-1</h1>
    </body>
</html>
`;
