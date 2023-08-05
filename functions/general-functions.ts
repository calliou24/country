

export const size = (toValidate: string | any[] | null | undefined) => {
    if(toValidate === null || toValidate === undefined) return 0
    return  toValidate?.length
}

export function isEmpty(value: any): boolean {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string" || Array.isArray(value)) {
        return value.length === 0;
    }

    if (typeof value === "object") {
        return Object.keys(value).length === 0;
    }

    return false;
}