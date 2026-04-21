class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getAuthHeader(): string {
        return "Bearer " + this.apiKey;
    }

    public sendRequest(path: string): void {
        console.log("GET " + this.baseURL + path);
        console.log("Auth: " + this.getAuthHeader());
        console.log("Timeout: " + this.timeout + "ms");
    }

}

class UserAPIClient extends APIClient {
    getUsers(): void {
        console.log("Fetching users (timeout: " + this.timeout + "ms)");
        console.log("URL: " + this.baseURL + "/users");
    }
}

let client = new APIClient("https://api.staging.com", "key_secret_123", 5000);
console.log("Base URL:", client.baseURL);
client.sendRequest("/health");

//output: Base URL: https://api.staging.com
//output: GET https://api.staging.com/health
//output: Auth: Bearer key_secret_123
//output: Timeout: 5000ms
