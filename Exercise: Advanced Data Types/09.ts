type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function isUser(obj: any): obj is User {

    if (typeof obj !== 'object' || obj === null) {
        return false;
    }``


    if (!('id' in obj)) return false;
    const isValidId = 
        (typeof obj.id === 'number' && obj.id > 100) || 
        (typeof obj.id === 'string' && obj.id.length === 14);
    if (!isValidId) return false;


    if (!('username' in obj)) return false;
    const isValidUsername = 
        typeof obj.username === 'string' && 
        obj.username.length >= 5 && 
        obj.username.length <= 10;
    if (!isValidUsername) return false;


    if (!('passwordHash' in obj)) return false;
    const isValidHash = 
        (typeof obj.passwordHash === 'string' && obj.passwordHash.length === 20) ||
        (Array.isArray(obj.passwordHash) && 
         obj.passwordHash.length === 4 && 

         obj.passwordHash.every((hash: any) => typeof hash === 'string' && hash.length === 8));
    if (!isValidHash) return false;


    if (!('status' in obj)) return false;
    const isValidStatus = obj.status === 'Locked' || obj.status === 'Unlocked';
    if (!isValidStatus) return false;


    if ('email' in obj && typeof obj.email !== 'string') {
        return false;
    }

    return true;
}