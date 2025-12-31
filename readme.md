# Unit Testing Basics

A project demonstrating fundamental unit testing concepts and best practices using JavaScript and the Vitest testing framework.

## Project Overview

This is an educational project focused on learning unit testing principles. It includes practical examples of how to write effective unit tests, organize test suites, and use testing utilities properly.

## Project Structure

### Source Files

- **`utils.js`** - Utility functions for price formatting and number addition
  - `formatePrice(price)` - Formats prices to 2 decimal places with validation
  - `add(numbers)` - Sums an array of numbers

- **`cart.js`** - Shopping cart functionality
  - `cart` - State array storing cart items
  - `addItemToCart(item)` - Adds an item to the cart
  - `clearCart()` - Empties the cart

- **`custom.js`** - A custom testing utility demonstrating assertion patterns
  - Basic implementation of an `expect()` function with a `toBe()` matcher

### Test Files

- **`utils.test.js`** - Comprehensive tests for utility functions
  - Tests `formatePrice()` with various inputs (integers, strings, edge cases, errors)
  - Tests `add()` with arrays of numbers and string numbers
  - Uses `describe()` to organize tests into logical groups
  - Demonstrates the AAA pattern (Arrange-Act-Assert)

- **`cart.test.js`** - Tests for cart management
  - Tests item addition to cart
  - Tests multiple item handling
  - Uses lifecycle hooks (`beforeEach`, `afterEach`, `beforeAll`, `afterAll`) to manage test state

## Key Testing Concepts Demonstrated

### 1. **Test Hooks / Lifecycle Methods**
```javascript
beforeAll()    // Runs once before all tests
afterAll()     // Runs once after all tests
beforeEach()   // Runs before each test
afterEach()    // Runs after each test
```
Used in `cart.test.js` to clear state between tests and manage setup/teardown.

### 2. **AAA Pattern (Arrange-Act-Assert)**
```javascript
// Arrange - Set up test data
let number = 20

// Act - Execute the function
const result = formatePrice(number)

// Assert - Verify the result
expect(result).toBe(expected)
```

### 3. **Test Organization with `describe()`**
Groups related tests together for better readability and organization:
```javascript
describe("formatePrice()", () => {
    it("should format integer price correctly", () => {
        // test code
    })
})
```

### 4. **Common Assertions**
- `toBe()` - Strict equality check
- `toEqual()` - Deep equality check
- `toContain()` - Checks if array/string contains value
- `toThrow()` - Verifies function throws an error

### 5. **Error Handling**
Tests demonstrate proper error testing patterns:
```javascript
function runFormatPrice() {
    formatePrice("abc")
}
expect(runFormatPrice).toThrow("Invalid input: price is not a valid number")
```

## Setup & Installation

### Prerequisites
- Node.js

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
npm test
```

This runs all `.test.js` files with verbose output showing each test result.

## Technologies Used

- **Vitest** - Fast unit testing framework for JavaScript (v4.0.16)
- **ES6 Modules** - Modern JavaScript module syntax

## Test Coverage

### Utils Tests
- **formatePrice()** - 4 test cases
  - Integer formatting
  - String number handling
  - Empty/undefined input
  - Error handling for invalid input

- **add()** - 2 test cases
  - Array of numbers
  - Array of string numbers

### Cart Tests
- **addItemToCart()** - 2 test cases
  - Single item addition
  - Multiple item addition

## Learning Outcomes

This project teaches:
1. How to structure and organize tests
2. Using lifecycle hooks to manage test state
3. Writing descriptive test names that document behavior
4. Proper assertion and error testing patterns
5. Following the AAA pattern for clean, readable tests
6. Using `describe()` blocks to organize related tests
7. Best practices for unit testing in JavaScript

## Notes

- The `custom.js` file demonstrates a minimal custom testing framework implementation (educational purposes only - Vitest is used for actual tests)
- Tests use Vitest's assertion library and lifecycle hooks for a professional testing setup
- The cart functionality demonstrates state management patterns commonly tested in real applications
