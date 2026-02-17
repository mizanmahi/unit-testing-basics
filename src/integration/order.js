// calculateSubtotal(items) → calculates total price
// applyDiscount(subtotal, discountPercent) → applies discount
// calculateFinalPrice(items, discountPercent) → combines both

// Function 1
export function calculateSubtotal(items) {
    return items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}

// Function 2
export function applyDiscount(subtotal, discountPercent) {
    return subtotal - (subtotal * discountPercent) / 100;
}

// Integration function
export function calculateFinalPrice(items, discountPercent) {
    const subtotal = calculateSubtotal(items);
    const finalPrice = applyDiscount(subtotal, discountPercent);
    return finalPrice;
}
