import { describe, it, expect, vi } from "vitest";
import { calculateTotal } from "./math";
// import * as math from "./math";


describe("Spy Example", () => {
    // it("should call add inside calculateTotal", () => {
    //     const spy = vi.fn()

    //     const result = calculateTotal(2, 3, spy);

    //     expect(spy).toHaveBeenCalled();
    //     expect(spy).toHaveBeenCalledWith(2, 3);
    //     expect(result).toBe("Total is 5");

    //     spy.mockRestore(); // good practice
    // });


    it("should call add inside calculateTotal", () => {
        const spy = vi.fn((a, b) => a + b)

        const result = calculateTotal(2, 3, spy);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(2, 3);
        expect(result).toBe("Total is 5");

        spy.mockRestore(); // good practice
    });


    // it("should call add inside calculateTotal", () => {
    //     const spy = vi.spyOn(math, "add");

    //     const result = math.calculateTotal(2, 3);

    //     expect(spy).toHaveBeenCalled();
    //     expect(spy).toHaveBeenCalledWith(2, 3);
    //     expect(result).toBe("Total is 5");

    //     spy.mockRestore(); // good practice
    // });


    // it("should mock add function", () => {
    //     const spy = vi.spyOn(math, "add").mockReturnValue(100);

    //     const result = math.calculateTotal(2, 3);

    //     expect(spy).toHaveBeenCalledWith(2, 3);
    //     expect(result).toBe("Total is 100");

    //     spy.mockRestore();
    // })
});
