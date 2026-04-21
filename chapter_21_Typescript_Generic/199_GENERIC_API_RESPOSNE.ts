function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T } {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponse<string>(200, "admin");
console.log(userResp);

let flagResp = wrapResponse<boolean>(200, true);
console.log(flagResp);

let countResp = wrapResponse<number>(200, 42);
console.log(countResp);

let listResp = wrapResponse<string[]>(200, ["item1", "item2", "item3"]);
console.log(listResp);

//output: { statusCode: 200, data: 'admin' }
//output: { statusCode: 200, data: true }
//output: { statusCode: 200, data: 42 }
//output: { statusCode: 200, data: [ 'item1', 'item2', 'item3' ] }
