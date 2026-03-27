function optionalMultiplier(
    val1?: number | string,
    val2?: number | string,
    val3?: number | string
): number {
    let realvalues = [val1, val2, val3]
    .filter(val => val !== undefined)
    .map(Number);

    if(realvalues.length === 0) {
        return 1;
    }
    return realvalues.reduce((acc, val) => acc * val);
    
}