const BASE_URL = "https://vbank.open.bankingapi.ru/"
let TOKEN = ""
let CONSENT_ID = ""

function doHTTP(url, headers, body, params) {
    url = url+"?"+new URLSearchParams(params).toString()
    // console.log(url)
    // fetch(url, {headers: headers, body:JSON.stringify(body)}).then(function(response) {
    //     console.log(response.json())
    //     return response.json()
    // }).then(function(data) {
    //     console.log(data)
    //     return data;
    // }).catch(function(err) {
    //     return {"err": true, "data": err}
    // })
    var http = new XMLHttpRequest();
    http.open("GET", url, false);
    http.setRequestHeader("Access-Control-Allow-Origin", "*");
    http.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT");
    http.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
    for (const header in headers) {
        http.setRequestHeader(header, headers[header])
    }
    http.send(body);
    return http.responseText;
}