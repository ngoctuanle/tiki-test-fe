export function TKTESTBoolValue(value: any): boolean{
    return Boolean(value);
}

export function TKTESTNumberValue(value: any): number {
    const number = Number(value);
    return !isNaN(number) ? number : 0;
}

export function TKTESTStringValue(value: any): string {
    return value ? `${value}` : '';
}