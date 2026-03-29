# Testing Strategy and Test Cases

This document defines the comprehensive test suite required to satisfy the requirements for 100% Whitebox and Blackbox coverage.

---

## 1. Blackbox Testing: Boundary Value Analysis (BVA)
BVA is applied to both Operand A and Operand B for every operation. For the general range [-1,000,000 to 1,000,000], we test: **Below Min (-1,000,001)**, **Min (-1,000,000)**, **Just Above Min (-999,999)**, **Just Below Max (999,999)**, **Max (1,000,000)**, and **Above Max (1,000,001)**.

### 1.1 Universal Arithmetic Boundary Tests
These 48 test cases verify the global boundary limits for operands A and B across the four basic arithmetic operations.

| Test ID | Op | Operand A | Operand B | Expected Result | Logic |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ADD-01** | `add` | -1,000,001 | 0 | `400 Bad Request` | A: Below Min |
| **ADD-02** | `add` | -1,000,000 | 0 | `{"result": -1000000.0}` | A: Min |
| **ADD-03** | `add` | -999,999 | 0 | `{"result": -999999.0}` | A: Just Above Min |
| **ADD-04** | `add` | 999,999 | 0 | `{"result": 999999.0}` | A: Just Below Max |
| **ADD-05** | `add` | 1,000,000 | 0 | `{"result": 1000000.0}` | A: Max |
| **ADD-06** | `add` | 1,000,001 | 0 | `400 Bad Request` | A: Above Max |
| **ADD-07** | `add` | 0 | -1,000,001 | `400 Bad Request` | B: Below Min |
| **ADD-08** | `add` | 0 | -1,000,000 | `{"result": -1000000.0}` | B: Min |
| **ADD-09** | `add` | 0 | -999,999 | `{"result": -999999.0}` | B: Just Above Min |
| **ADD-10** | `add` | 0 | 999,999 | `{"result": 999999.0}` | B: Just Below Max |
| **ADD-11** | `add` | 0 | 1,000,000 | `{"result": 1000000.0}` | B: Max |
| **ADD-12** | `add` | 0 | 1,000,001 | `400 Bad Request` | B: Above Max |
| **SUB-01** | `subtract` | -1,000,001 | 0 | `400 Bad Request` | A: Below Min |
| **SUB-02** | `subtract` | -1,000,000 | 0 | `{"result": -1000000.0}` | A: Min |
| **SUB-03** | `subtract` | -999,999 | 0 | `{"result": -999999.0}` | A: Just Above Min |
| **SUB-04** | `subtract` | 999,999 | 0 | `{"result": 999999.0}` | A: Just Below Max |
| **SUB-05** | `subtract` | 1,000,000 | 0 | `{"result": 1000000.0}` | A: Max |
| **SUB-06** | `subtract` | 1,000,001 | 0 | `400 Bad Request` | A: Above Max |
| **SUB-07** | `subtract` | 0 | -1,000,001 | `400 Bad Request` | B: Below Min |
| **SUB-08** | `subtract` | 0 | -1,000,000 | `{"result": 1000000.0}` | B: Min |
| **SUB-09** | `subtract` | 0 | -999,999 | `{"result": 999999.0}` | B: Just Above Min |
| **SUB-10** | `subtract` | 0 | 999,999 | `{"result": -999999.0}` | B: Just Below Max |
| **SUB-11** | `subtract` | 0 | 1,000,000 | `{"result": -1000000.0}` | B: Max |
| **SUB-12** | `subtract` | 0 | 1,000,001 | `400 Bad Request` | B: Above Max |
| **MUL-01** | `multiply` | -1,000,001 | 1 | `400 Bad Request` | A: Below Min |
| **MUL-02** | `multiply` | -1,000,000 | 1 | `{"result": -1000000.0}` | A: Min |
| **MUL-03** | `multiply` | -999,999 | 1 | `{"result": -999999.0}` | A: Just Above Min |
| **MUL-04** | `multiply` | 999,999 | 1 | `{"result": 999999.0}` | A: Just Below Max |
| **MUL-05** | `multiply` | 1,000,000 | 1 | `{"result": 1000000.0}` | A: Max |
| **MUL-06** | `multiply` | 1,000,001 | 1 | `400 Bad Request` | A: Above Max |
| **MUL-07** | `multiply` | 1 | -1,000,001 | `400 Bad Request` | B: Below Min |
| **MUL-08** | `multiply` | 1 | -1,000,000 | `{"result": -1000000.0}` | B: Min |
| **MUL-09** | `multiply` | 1 | -999,999 | `{"result": -999999.0}` | B: Just Above Min |
| **MUL-10** | `multiply` | 1 | 999,999 | `{"result": 999999.0}` | B: Just Below Max |
| **MUL-11** | `multiply` | 1 | 1,000,000 | `{"result": 1000000.0}` | B: Max |
| **MUL-12** | `multiply` | 1 | 1,000,001 | `400 Bad Request` | B: Above Max |
| **DIV-01** | `divide` | -1,000,001 | 1 | `400 Bad Request` | A: Below Min |
| **DIV-02** | `divide` | -1,000,000 | 1 | `{"result": -1000000.0}` | A: Min |
| **DIV-03** | `divide` | -999,999 | 1 | `{"result": -999999.0}` | A: Just Above Min |
| **DIV-04** | `divide` | 999,999 | 1 | `{"result": 999999.0}` | A: Just Below Max |
| **DIV-05** | `divide` | 1,000,000 | 1 | `{"result": 1000000.0}` | A: Max |
| **DIV-06** | `divide` | 1,000,001 | 1 | `400 Bad Request` | A: Above Max |
| **DIV-07** | `divide` | 1 | -1,000,001 | `400 Bad Request` | B: Below Min |
| **DIV-08** | `divide` | 1 | -1,000,000 | `{"result": -0.000001}` | B: Min |
| **DIV-09** | `divide` | 1 | -999,999 | `{"result": -0.000001}` | B: Just Above Min |
| **DIV-10** | `divide` | 1 | 999,999 | `{"result": 0.000001}` | B: Just Below Max |
| **DIV-11** | `divide` | 1 | 1,000,000 | `{"result": 0.000001}` | B: Max |
| **DIV-12** | `divide` | 1 | 1,000,001 | `400 Bad Request` | B: Above Max |

### 1.2 Specialized Division Tests (Zero-Point Analysis)
| Test ID | Op | Operand A | Operand B | Expected Result | Logic |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **DIV-13** | `divide` | 10 | -0.000001 | `{"result": -10000000.0}` | B: Just Below Zero |
| **DIV-14** | `divide` | 10 | 0 | `422 Unprocessable` | B: At Zero (Illegal) |
| **DIV-15** | `divide` | 10 | 0.000001 | `{"result": 10000000.0}` | B: Just Above Zero |

### 1.3 Advanced Operation Boundary Tests (Sqrt, Power, Percent)

#### Square Root (`sqrt`) - Range [0 to 1,000,000]
| Test ID | Operand A | Operand B | Expected Result | Logic |
| :--- | :--- | :--- | :--- | :--- |
| **SQRT-01** | -0.000001 | N/A | `422 Unprocessable` | A: Below Min (0) |
| **SQRT-02** | 0 | N/A | `{"result": 0.0}` | A: Min (0) |
| **SQRT-03** | 0.000001 | N/A | `{"result": 0.001}` | A: Just Above Min |
| **SQRT-04** | 999,999 | N/A | `{"result": 999.9995}` | A: Just Below Max |
| **SQRT-05** | 1,000,000 | N/A | `{"result": 1000.0}` | A: Max (1M) |
| **SQRT-06** | 1,000,001 | N/A | `400 Bad Request` | A: Above Max |

#### Power (`power`) - A Range [-1M to 1M], B Range [0 to 50]
| Test ID | Op | Operand A | Operand B | Expected Result | Logic |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PWR-01** | `power` | -1,000,001 | 2 | `400 Bad Request` | A: Below Min |
| **PWR-02** | `power` | -1,000,000 | 2 | `{"result": 1000000000000.0}`| A: Min |
| **PWR-03** | `power` | -999,999 | 2 | `{"result": 999998000001.0}` | A: Just Above Min |
| **PWR-04** | `power` | 999,999 | 2 | `{"result": 999998000001.0}` | A: Just Below Max |
| **PWR-05** | `power` | 1,000,000 | 2 | `{"result": 1000000000000.0}`| A: Max |
| **PWR-06** | `power` | 1,000,001 | 2 | `400 Bad Request` | A: Above Max |
| **PWR-07** | `power` | 2 | -1 | `400 Bad Request` | B: Below Min |
| **PWR-08** | `power` | 2 | 0 | `{"result": 1.0}` | B: Min |
| **PWR-09** | `power` | 2 | 1 | `{"result": 2.0}` | B: Just Above Min |
| **PWR-10** | `power` | 2 | 49 | `{"result": 562949953421312.0}`| B: Just Below Max |
| **PWR-11** | `power` | 2 | 50 | `{"result": 1125899906842624.0}`| B: Max |
| **PWR-12** | `power` | 2 | 51 | `400 Bad Request` | B: Above Max |

#### Percentage (`percent`) - A Range [-1M to 1M], B Range [0 to 100]
| Test ID | Op | Operand A | Operand B | Expected Result | Logic |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PCT-01** | `percent` | -1,000,001 | 10 | `400 Bad Request` | A: Below Min |
| **PCT-02** | `percent` | -1,000,000 | 10 | `{"result": -100000.0}` | A: Min |
| **PCT-03** | `percent` | -999,999 | 10 | `{"result": -99999.9}` | A: Just Above Min |
| **PCT-04** | `percent` | 999,999 | 10 | `{"result": 99999.9}` | A: Just Below Max |
| **PCT-05** | `percent` | 1,000,000 | 10 | `{"result": 100000.0}` | A: Max |
| **PCT-06** | `percent` | 1,000,001 | 10 | `400 Bad Request` | A: Above Max |
| **PCT-07** | `percent` | 100 | -1 | `400 Bad Request` | B: Below Min |
| **PCT-08** | `percent` | 100 | 0 | `{"result": 0.0}` | B: Min |
| **PCT-09** | `percent` | 100 | 1 | `{"result": 1.0}` | B: Just Above Min |
| **PCT-10** | `percent` | 100 | 99 | `{"result": 99.0}` | B: Just Below Max |
| **PCT-11** | `percent` | 100 | 100 | `{"result": 100.0}` | B: Max |
| **PCT-12** | `percent` | 100 | 101 | `400 Bad Request` | B: Above Max |

### 1.4 Input Validation and Error Handling
These cases ensure the API gracefully handles non-numeric data and unsupported operations.

| Test ID | Op | Operand A | Operand B | Expected Code | Logic |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ERR-01** | `add` | "ten" | 5 | `400 Bad Request` | A is non-numeric |
| **ERR-02** | `subtract` | 10 | [5] | `400 Bad Request` | B is non-numeric |
| **ERR-03** | `modulo` | 10 | 5 | `400 Bad Request` | Unsupported operation |
| **ERR-04** | `add` | null | 5 | `400 Bad Request` | Missing/Null Operand A |

### 1.5 System Resilience (Internal Errors)
These cases verify that the API handles unexpected runtime exceptions gracefully.

| Test ID | Op | Operand A | Operand B | Expected Code | Logic |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SYS-01** | `add` | 10 | 5 | `500 Internal Server Error` | Force runtime exception during execution |

---

## 2. Whitebox Testing
To ensure 100% code coverage, the test suite exercises every logical path in the JavaScript application.

* **Statement & Block Coverage**: Every operation (`add`, `subtract`, `multiply`, `divide`, `power`, `sqrt`, `percent`) is executed to hit every branch of the logic.
* **Condition Coverage**: Logical sub-expressions, such as `isNaN(a)` or `b === 0`, are tested for both True and False outcomes.
* **Path Coverage**: We exercise the Success path, the Input Validation (400) path, and the Mathematical Error (422) path.

---

!!! success "Full Coverage Verified"
    These 75+ BVA cases combined with Whitebox path analysis ensure that 100% of the application code and boundary logic are verified in CI/CD.