import { expect, it, describe } from "vitest"
import { add, calculateSubtotal, formatePrice } from "./utils"


describe("formatePrice()", () => {

    it("should format integer price correctly", () => {
        // AAA
        // arrange
        let number = 20
        let expected = number.toFixed(2)
        // act
        const result = formatePrice(number)
        // assert
        expect(result).toBe(expected)
    })


    it("should handle empty argument", () => {
        expect(formatePrice()).toBe("0.00")
    })

    it("should handle string numbers", () => {
        expect(formatePrice("10")).toBe("10.00")
    })

    it("should throw error for non-numeric strings", () => {

        // try {
        //     formatePrice("abc")
        // } catch (error) {
        //     // expect(error).toBeInstanceOf(Error)
        //     // expect(error).toBeDefined()
        //     // expect(error.message).toBe("Invalid input: price is not a valid number")
        // }

        function runFormatPrice() {
            formatePrice("abc")
        }

        expect(runFormatPrice).toThrow("Invalid input: price is not a valid number")
    })
})

describe('calculateSubTotal()', () => {
    it("should calculate subtotal correctly", () => {
        // AAA

        // arrange
        const items = [
            { price: 100, quantity: 2 }, // 200
            { price: 50, quantity: 1 },  // 50
        ];

        const expected = items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0)


        // act
        const result = calculateSubtotal(items)

        // assert
        expect(result).toBe(expected);
    });
})



// describe("add()", () => {

//     it("should add numbers correctly", () => {
//         //AAA

//         const numbers = [2, 3, 5, 4, 13]
//         const expectedSum = numbers.reduce((acc, curr) => acc + curr, 0)

//         const result = add(numbers)

//         expect(result).toBe(expectedSum)
//     })

//     it("should add string numbers correctly", () => {
//         const numbers = ["2", "5"]
//         const expectedSum = numbers.reduce((acc, curr) => acc + +curr, 0)
//         const result = add(numbers)
//         expect(result).toBe(expectedSum)
//     })
// })



