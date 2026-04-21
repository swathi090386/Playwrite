enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " → 200 OK");
}

sendRequest(HTTPMethod.GET, "/api/users");
sendRequest(HTTPMethod.POST, "/api/users");
sendRequest(HTTPMethod.PUT, "/api/users/1");
sendRequest(HTTPMethod.DELETE, "/api/users/1");

//output: GET /api/users → 200 OK
//output: POST /api/users → 200 OK
//output: PUT /api/users/1 → 200 OK
//output: DELETE /api/users/1 → 200 OK

