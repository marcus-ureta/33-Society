
export function isValidEmail(email: string) {
    if (email.length > 254) return false;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return emailRegex.test(email);
}

export function isValidInput(input : string, lowerBound : number, higherBound : number) {
    if(input.length < lowerBound || input.length > higherBound) return false;
    
    return true;
}