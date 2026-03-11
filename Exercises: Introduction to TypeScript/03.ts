function convertArrays(arr: string[]): [string, number]{
    let concatedTExt = arr.join('');
    
    return [
        concatedTExt,
        concatedTExt.length
    ];
}

console.log(convertArrays(['How', 'are', 'you?']))