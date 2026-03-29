const express = require('express');
const app = express();
app.use(express.json());

// Global constants for Boundary Value Analysis
const LIMIT = 1000000;

/**
 * Validation logic to ensure 100% Whitebox/Blackbox compliance.
 * Handles type checking, global boundaries, and operation-specific constraints.
 */
const validate = (op, a, b) => {
    // 1. Type Validation: Inputs must be numbers
    // Note: sqrt only requires operand 'a'
    const isBRequired = !['sqrt'].includes(op);
    if (typeof a !== 'number' || (isBRequired && typeof b !== 'number')) {
        return { valid: false, code: 400, error: "Inputs must be numeric" };
    }

    // 2. Global Boundary Validation: Operand A must be within [-1M, 1M]
    if (a < -LIMIT || a > LIMIT) {
        return { valid: false, code: 400, error: "Operand A out of range [-1,000,000, 1,000,000]" };
    }

    // 3. Global Boundary Validation: Operand B must be within [-1M, 1M] (if required)
    if (isBRequired && (b < -LIMIT || b > LIMIT)) {
        return { valid: false, code: 400, error: "Operand B out of range [-1,000,000, 1,000,000]" };
    }

    // 4. Operation-Specific Constraints
    switch (op) {
        case 'divide':
            if (b === 0) return { valid: false, code: 422, error: "Division by zero" };
            break;
        case 'sqrt':
            if (a < 0) return { valid: false, code: 422, error: "Square root of negative number" };
            break;
        case 'power':
            // Exponent (B) specifically restricted to [0, 50] per testing.md
            if (b < 0 || b > 50) {
                return { valid: false, code: 400, error: "Exponent must be between 0 and 50" };
            }
            break;
        case 'percent':
            // Percentage (B) specifically restricted to [0, 100] per testing.md
            if (b < 0 || b > 100) {
                return { valid: false, code: 400, error: "Percentage must be between 0 and 100" };
            }
            break;
    }

    return { valid: true };
};

app.post('/calculate', (req, res) => {
    const { op, a, b } = req.body;
    const validation = validate(op, a, b);

    if (!validation.valid) {
        return res.status(validation.code).json({ error: validation.error });
    }

    let result;
    try {
        switch (op) {
            case 'add': 
                result = a + b; 
                break;
            case 'subtract': 
                result = a - b; 
                break;
            case 'multiply': 
                result = a * b; 
                break;
            case 'divide': 
                result = a / b; 
                break;
            case 'power': 
                result = Math.pow(a, b); 
                break;
            case 'sqrt': 
                result = Math.sqrt(a); 
                break;
            case 'percent': 
                result = (a * b) / 100; 
                break;
            default: 
                return res.status(400).json({ error: "Invalid operation" });
        }

        // Return result rounded to 8 decimal places to ensure precision matching in tests
        return res.json({ result: parseFloat(result.toFixed(8)) });
        
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = app;