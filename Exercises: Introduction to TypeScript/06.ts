function isNonEmptyStringArray(arg: unknown): arg is string[] {
    return Array.isArray(arg) && arg.length > 0 && arg.every(item => typeof item === 'string');
}

console.log(isNonEmptyStringArray(['Hello', 'World']));