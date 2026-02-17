import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from "vitest"
import { addItemToCart, cart, clearCart } from "./cart"

beforeAll(() => {
    // runs before all tests in this file
    console.log("before all ran")
})

afterAll(() => {
    // runs after all tests in this file
    console.log("after all ran")
})

beforeEach(() => {
    // runs before each test in this file
    // clearCart()
    console.log('run before each test')

})

afterEach(() => {
    // runs after each test in this file
    console.log("run after each test")
})

it("should add item to cart", () => {
    addItemToCart("apple")
    expect(cart).toContain("apple")
    expect(cart.length).toBe(1)
})

it("should add multiple items to cart", () => {
    addItemToCart("apple")
    addItemToCart("orange")
    expect(cart).toEqual(["apple", "orange"])
    expect(cart.length).toBe(2)
})