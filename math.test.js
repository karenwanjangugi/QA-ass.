const {add, subtract, multiply, divide } = require("./math");

test('adds 2 + 3 to equal 5', () => { //description; what we are testing
    expect(add(2, 3)).toBe(5); //call back; contains actual logic
});

test('subtracts 8 - 3 to equal 5', () => { 
    expect(subtract(8, 3)).toBe(5); 
});

test('mutiplies 2 * 3 to equal 6', () => { 
    expect(multiply(2, 3)).toBe(6); 
});

test('divides 6 / 3 to equal 2', () => { 
    expect(divide(6, 3)).toBe(2); 
});


