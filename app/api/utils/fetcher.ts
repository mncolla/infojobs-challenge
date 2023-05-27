export class Fetcher {
  private fetchUrl: string;
  private headers: any;

  constructor(baseApi: string, headers?: any) {
    this.fetchUrl = baseApi;
    this.headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  async get(url: string): Promise<any> {
    const raw = await fetch(`${this.fetchUrl}${url}`, {
      method: "GET",
      headers: {
        ...this.headers,
      },
    });

    const res = await raw.json();

    return res;
  }

  async put(url: string, body: any): Promise<any> {
    try {
      const raw = await fetch(`${this.fetchUrl}${url}`, {
        method: "PUT",
        headers: {
          ...this.headers,
        },
        body: JSON.stringify(body),
      });

      const res = await raw.json();

      return res;
    } catch (error) {
      console.log("error", error);
    }
  }
}
