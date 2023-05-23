export async function GET(request: Request) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic YmI2OWMxODNhYTlkNDMzYzhmMzVhMzI1NWRiMmY4YjI6REFOYkNwamM3Y3hnaWVnVG9OUGtvMUo2bWVzUDM4dVlrZ0RnTHduNmpxYVlFYTVqcWw=`,
  };

  try {
    const res = await fetch("https://api.infojobs.net/api/2/curriculum", {
      headers,
    });

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {}
}
