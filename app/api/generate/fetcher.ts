export class Fetcher {
  private fetchUrl: string;
  private headers: any;

  constructor(baseApi: string, headers?: any) {
    this.fetchUrl = baseApi;
    if (headers) {
      this.headers = headers;
    }
  }

  async get(url: string): Promise<any> {
    const headers = {
      method: "GET",
      "Content-Type": "application/json",
      ...this.headers,
    };

    const res = await fetch(`${this.fetchUrl}${url}`, {
      headers,
    });

    const data = await res.json();

    return data;
  }
}
