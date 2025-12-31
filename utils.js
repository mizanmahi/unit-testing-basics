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