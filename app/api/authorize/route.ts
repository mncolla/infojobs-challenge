import { NextResponse } from "next/server";

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;
const redirectURI = process.env.REDIRECT_URI;

const BASE_URL_API = "https://www.infojobs.net";

export async function GET(request: Request) {
  const code = request.headers.get("InfoJobs-Code");
  const headers = {
    method: "POST",
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(
      `${BASE_URL_API}oauth/authorize?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectURI}`,
      {
        headers,
      }
    );

    const data = await res.json();

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.error();
  }
}
