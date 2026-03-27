type successResponse = {
    text: string,
    code : 200 | 201 | 301
};
type erroesResponse = {
    text: string,
    code : 400 | 404 | 500
    printChars?: number
};
function httpResponse(responseObject: successResponse | erroesResponse) {
    if('printChars' in responseObject){
        console.log(responseObject.text.substring(0, responseObject.printChars));
    }else {
        console.log(responseObject.text);
    }
}