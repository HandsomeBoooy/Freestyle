export const deepCopy = obj => {
    let res = obj.length > 0 ? [] : {};
    for (let key in obj) {
            if (Object.keys(obj[key]).length && (typeof obj[key] === 'object' || typeof obj[key] === 'array')) {
                    res[key] = deepCopy(obj[key]);
            } else {
                    res[key] = obj[key];
            }
    }
    return res;
}