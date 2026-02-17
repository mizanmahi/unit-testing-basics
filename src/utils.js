// 1
// export function formatePrice(price) {
//     return price.toFixed(2)
// }

// 2
// export function formatePrice(price) {
//     if (!price) {
//         return "0.00"
//     }

//     return price.toFixed(2)

// }

//3
export function formatePrice(price) {
    if (!price) {
        return "0.00"
    }

    const num = Number(price) // "10" => 10, "sdfsfsf" => NAN

    if (Number.isNaN(num)) {
        throw new Error("Invalid input: price is not a valid number")
    }

    return num.toFixed(2)
}

export function add(numbers) {
    let sum = 0

    for (let num of numbers) {
        sum += +num
    }

    return sum
}


export function calculateSubtotal(items) {
    return items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}