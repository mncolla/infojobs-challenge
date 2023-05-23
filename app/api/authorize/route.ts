const CLIENT_SECRET = "DNytAl3oFLlKvQR5EjrmtwXnwOb7q1MknBHI5vL7T8Fo2Mljyu";
const REDIRECT_URI = "https://infojobs-challenge.vercel.app";
const CLIENT_ID = "0017c43570e04426b27e6bc8c75a846a";

export async function GET(request: Request) {
  const code = request.headers.get("InfoJobs-Code");
  const headers = {
    method: "POST",
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(
      `https://www.infojobs.net/oauth/authorize?grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&redirect_uri=${REDIRECT_URI}`,
      {
        headers,
      }
    );

    const data = await res.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {}
}
