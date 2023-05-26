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
    const res = await fetch(`${this.fetchUrl}${url}`, {
      headers: {
        method: "GET",
        ...this.headers,
      },
    });

    const data = await res.json();

    return data;
  }
}
