import { describe, it, expect } from "vitest";
import {
    calculateSubtotal,
    applyDiscount,
    calculateFinalPrice,
} from "./order";

describe("Unit Tests", () => {
    it("calculateSubtotal works correctly", () => {
        const items = [
            { price: 100, quantity: 2 }, // 200
            { price: 50, quantity: 1 },  // 50
        ];

        expect(calculateSubtotal(items)).toBe(250);
    });

    it("applyDiscount works correctly", () => {
        expect(applyDiscount(200, 10)).toBe(180);
    });
});


describe("Integration Test", () => {
    it("calculateFinalPrice integrates both functions correctly", () => {
        const items = [
            { price: 100, quantity: 2 }, // 200
            { price: 50, quantity: 1 },  // 50
        ];

        // subtotal = 250
        // 10% discount = 25
        // final = 225
        expect(calculateFinalPrice(items, 10)).toBe(225);
    });
});

