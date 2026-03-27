function Operator(
    param: string | number |string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number
)  {
    if(operation === 'Index' && typeof param !== 'number'){
        return param[operand];
    } else if(operation === 'Length' && typeof param !== 'number'){
        return param.length % operand;
    } else if(operation === 'Add' && !Array.isArray(param)){
        return Number(param) + operand;
    }

}