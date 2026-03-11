function unknownResponse(arg: unknown): string{
    if(typeof arg === 'object' && arg != null && 'value' in arg && typeof arg['value'] == 'string'){
        return arg.value;
    } else {
        return '-';
    }
}

console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }))