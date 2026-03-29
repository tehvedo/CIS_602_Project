const request = require('supertest');
const app = require('./calculator'); // Ensure this matches your filename

describe('Calculator API - Exhaustive BVA & Whitebox Suite', () => {
    
    const runBatch = (tests) => {
        tests.forEach(({ id, op, a, b, code, res }) => {
            test(`${id}: ${op}(${a}, ${b}) -> ${code}`, async () => {
                const response = await request(app)
                    .post('/calculate')
                    .send({ op, a, b });
                
                expect(response.status).toBe(code);
                
                if (res !== undefined) {
                    // Using toBeCloseTo to handle floating point precision
                    expect(response.body.result).toBeCloseTo(res, 4);
                }
            });
        });
    };

    const allTestCases = [
        // --- 1.1 UNIVERSAL ARITHMETIC BOUNDARIES ---
        
        // ADDITION (ADD-01 to ADD-12)
        { id: 'ADD-01', op: 'add', a: -1000001, b: 0, code: 400 },
        { id: 'ADD-02', op: 'add', a: -1000000, b: 0, code: 200, res: -1000000 },
        { id: 'ADD-03', op: 'add', a: -999999, b: 0, code: 200, res: -999999 },
        { id: 'ADD-04', op: 'add', a: 999999, b: 0, code: 200, res: 999999 },
        { id: 'ADD-05', op: 'add', a: 1000000, b: 0, code: 200, res: 1000000 },
        { id: 'ADD-06', op: 'add', a: 1000001, b: 0, code: 400 },
        { id: 'ADD-07', op: 'add', a: 0, b: -1000001, code: 400 },
        { id: 'ADD-08', op: 'add', a: 0, b: -1000000, code: 200, res: -1000000 },
        { id: 'ADD-09', op: 'add', a: 0, b: -999999, code: 200, res: -999999 },
        { id: 'ADD-10', op: 'add', a: 0, b: 999999, code: 200, res: 999999 },
        { id: 'ADD-11', op: 'add', a: 0, b: 1000000, code: 200, res: 1000000 },
        { id: 'ADD-12', op: 'add', a: 0, b: 1000001, code: 400 },

        // SUBTRACTION (SUB-01 to SUB-12)
        { id: 'SUB-01', op: 'subtract', a: -1000001, b: 0, code: 400 },
        { id: 'SUB-02', op: 'subtract', a: -1000000, b: 0, code: 200, res: -1000000 },
        { id: 'SUB-03', op: 'subtract', a: -999999, b: 0, code: 200, res: -999999 },
        { id: 'SUB-04', op: 'subtract', a: 999999, b: 0, code: 200, res: 999999 },
        { id: 'SUB-05', op: 'subtract', a: 1000000, b: 0, code: 200, res: 1000000 },
        { id: 'SUB-06', op: 'subtract', a: 1000001, b: 0, code: 400 },
        { id: 'SUB-07', op: 'subtract', a: 0, b: -1000001, code: 400 },
        { id: 'SUB-08', op: 'subtract', a: 0, b: -1000000, code: 200, res: 1000000 },
        { id: 'SUB-09', op: 'subtract', a: 0, b: -999999, code: 200, res: 999999 },
        { id: 'SUB-10', op: 'subtract', a: 0, b: 999999, code: 200, res: -999999 },
        { id: 'SUB-11', op: 'subtract', a: 0, b: 1000000, code: 200, res: -1000000 },
        { id: 'SUB-12', op: 'subtract', a: 0, b: 1000001, code: 400 },

        // MULTIPLICATION (MUL-01 to MUL-12)
        { id: 'MUL-01', op: 'multiply', a: -1000001, b: 1, code: 400 },
        { id: 'MUL-02', op: 'multiply', a: -1000000, b: 1, code: 200, res: -1000000 },
        { id: 'MUL-03', op: 'multiply', a: -999999, b: 1, code: 200, res: -999999 },
        { id: 'MUL-04', op: 'multiply', a: 999999, b: 1, code: 200, res: 999999 },
        { id: 'MUL-05', op: 'multiply', a: 1000000, b: 1, code: 200, res: 1000000 },
        { id: 'MUL-06', op: 'multiply', a: 1000001, b: 1, code: 400 },
        { id: 'MUL-07', op: 'multiply', a: 1, b: -1000001, code: 400 },
        { id: 'MUL-08', op: 'multiply', a: 1, b: -1000000, code: 200, res: -1000000 },
        { id: 'MUL-09', op: 'multiply', a: 1, b: -999999, code: 200, res: -999999 },
        { id: 'MUL-10', op: 'multiply', a: 1, b: 999999, code: 200, res: 999999 },
        { id: 'MUL-11', op: 'multiply', a: 1, b: 1000000, code: 200, res: 1000000 },
        { id: 'MUL-12', op: 'multiply', a: 1, b: 1000001, code: 400 },

        // DIVISION (DIV-01 to DIV-12)
        { id: 'DIV-01', op: 'divide', a: -1000001, b: 1, code: 400 },
        { id: 'DIV-02', op: 'divide', a: -1000000, b: 1, code: 200, res: -1000000 },
        { id: 'DIV-03', op: 'divide', a: -999999, b: 1, code: 200, res: -999999 },
        { id: 'DIV-04', op: 'divide', a: 999999, b: 1, code: 200, res: 999999 },
        { id: 'DIV-05', op: 'divide', a: 1000000, b: 1, code: 200, res: 1000000 },
        { id: 'DIV-06', op: 'divide', a: 1000001, b: 1, code: 400 },
        { id: 'DIV-07', op: 'divide', a: 1, b: -1000001, code: 400 },
        { id: 'DIV-08', op: 'divide', a: 1, b: -1000000, code: 200, res: -0.000001 },
        { id: 'DIV-09', op: 'divide', a: 1, b: -999999, code: 200, res: -0.000001 },
        { id: 'DIV-10', op: 'divide', a: 1, b: 999999, code: 200, res: 0.000001 },
        { id: 'DIV-11', op: 'divide', a: 1, b: 1000000, code: 200, res: 0.000001 },
        { id: 'DIV-12', op: 'divide', a: 1, b: 1000001, code: 400 },

        // --- 1.2 SPECIALIZED DIVISION ---
        { id: 'DIV-13', op: 'divide', a: 10, b: -0.000001, code: 200, res: -10000000 },
        { id: 'DIV-14', op: 'divide', a: 10, b: 0, code: 422 },
        { id: 'DIV-15', op: 'divide', a: 10, b: 0.000001, code: 200, res: 10000000 },

        // --- 1.3 ADVANCED OPERATIONS ---
        
        // SQRT (SQRT-01 to SQRT-06)
        { id: 'SQRT-01', op: 'sqrt', a: -0.000001, code: 422 },
        { id: 'SQRT-02', op: 'sqrt', a: 0, code: 200, res: 0 },
        { id: 'SQRT-03', op: 'sqrt', a: 0.000001, code: 200, res: 0.001 },
        { id: 'SQRT-04', op: 'sqrt', a: 999999, code: 200, res: 999.9995 },
        { id: 'SQRT-05', op: 'sqrt', a: 1000000, code: 200, res: 1000 },
        { id: 'SQRT-06', op: 'sqrt', a: 1000001, code: 400 },

        // POWER (PWR-01 to PWR-12)
        { id: 'PWR-01', op: 'power', a: -1000001, b: 2, code: 400 },
        { id: 'PWR-02', op: 'power', a: -1000000, b: 2, code: 200, res: 1000000000000 },
        { id: 'PWR-03', op: 'power', a: -999999, b: 2, code: 200, res: 999998000001 },
        { id: 'PWR-04', op: 'power', a: 999999, b: 2, code: 200, res: 999998000001 },
        { id: 'PWR-05', op: 'power', a: 1000000, b: 2, code: 200, res: 1000000000000 },
        { id: 'PWR-06', op: 'power', a: 1000001, b: 2, code: 400 },
        { id: 'PWR-07', op: 'power', a: 2, b: -1, code: 400 },
        { id: 'PWR-08', op: 'power', a: 2, b: 0, code: 200, res: 1 },
        { id: 'PWR-09', op: 'power', a: 2, b: 1, code: 200, res: 2 },
        { id: 'PWR-10', op: 'power', a: 2, b: 49, code: 200, res: 562949953421312 },
        { id: 'PWR-11', op: 'power', a: 2, b: 50, code: 200, res: 1125899906842624 },
        { id: 'PWR-12', op: 'power', a: 2, b: 51, code: 400 },

        // PERCENTAGE (PCT-01 to PCT-12)
        { id: 'PCT-01', op: 'percent', a: -1000001, b: 10, code: 400 },
        { id: 'PCT-02', op: 'percent', a: -1000000, b: 10, code: 200, res: -100000 },
        { id: 'PCT-03', op: 'percent', a: -999999, b: 10, code: 200, res: -99999.9 },
        { id: 'PCT-04', op: 'percent', a: 999999, b: 10, code: 200, res: 99999.9 },
        { id: 'PCT-05', op: 'percent', a: 1000000, b: 10, code: 200, res: 100000 },
        { id: 'PCT-06', op: 'percent', a: 1000001, b: 10, code: 400 },
        { id: 'PCT-07', op: 'percent', a: 100, b: -1, code: 400 },
        { id: 'PCT-08', op: 'percent', a: 100, b: 0, code: 200, res: 0 },
        { id: 'PCT-09', op: 'percent', a: 100, b: 1, code: 200, res: 1 },
        { id: 'PCT-10', op: 'percent', a: 100, b: 99, code: 200, res: 99 },
        { id: 'PCT-11', op: 'percent', a: 100, b: 100, code: 200, res: 100 },
        { id: 'PCT-12', op: 'percent', a: 100, b: 101, code: 400 },

        // --- 1.4 INPUT VALIDATION & ERROR HANDLING ---
        { id: 'ERR-01', op: 'add', a: "ten", b: 5, code: 400 },
        { id: 'ERR-02', op: 'subtract', a: 10, b: [5], code: 400 },
        { id: 'ERR-03', op: 'modulo', a: 10, b: 5, code: 400 },
        { id: 'ERR-04', op: 'add', a: null, b: 5, code: 400 },
        { id: 'ERR-05', op: 'sqrt', a: "string", b: null, code: 400 }
    ];

    runBatch(allTestCases);

    // --- 1.5 SYSTEM RESILIENCE ---
    test('SYS-01: Should return 500 when a runtime error occurs', async () => {
        // Spy on Math.pow and force it to throw an error
        const spy = jest.spyOn(Math, 'pow').mockImplementation(() => {
            throw new Error('Simulated System Failure');
        });

        const response = await request(app)
            .post('/calculate')
            .send({ op: 'power', a: 2, b: 2 });

        expect(response.status).toBe(500);
        expect(response.body.error).toBe("Internal Server Error");

        // Restore Math.pow so it doesn't break other tests
        spy.mockRestore();
    });

});