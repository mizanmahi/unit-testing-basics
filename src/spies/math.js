// export function add(a, b) {
//     return a + b;
// }

// export function calculateTotal(a, b) {
//     const result = add(a, b);
//     return `Total is ${result}`;
// }


export function add(a, b) {
    return a + b;
}

export function calculateTotal(a, b, addFn = add) {
    const result = addFn(a, b);
    return `Total is ${result}`;
}