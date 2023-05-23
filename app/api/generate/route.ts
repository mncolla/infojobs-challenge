const infoJobsToken =
  "MDAxN2M0MzU3MGUwNDQyNmIyN2U2YmM4Yzc1YTg0NmE6RE55dEFsM29GTGxLdlFSNUVqcm10d1hud09iN3ExTWtuQkhJNXZMN1Q4Rm8yTWxqeXU=";
const accessToken = "9a2387ae-4ebf-4fad-9d14-f14a91544791";

export async function GET(request: Request) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${infoJobsToken}, Bearer ${accessToken}`,
  };

  try {
    const res = await fetch("https://api.infojobs.net/api/6/candidate", {
      headers,
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {}
}
