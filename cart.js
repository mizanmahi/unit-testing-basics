export let cart = []

export function addItemToCart(item) {
    cart.push(item)
    return cart
}

export function clearCart() {
    cart = []
}