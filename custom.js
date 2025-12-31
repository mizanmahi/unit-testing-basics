function add(a, b) {
    return a + b;
}


function expect(received) {
    return {
        // matcher
        toBe(expected) {
            if (received === expected) {
                console.log("✅ Test Passed")
            } else {
                console.log(`❌ Test Failed: expected ${expected}, got ${received}`)
            }
        }
    }
}


expect(add(3, 2)).toBe(6)