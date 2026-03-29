# Application Specifications

This document defines the functional requirements, input constraints, and expected behaviors for the Calculator API.

---

## 1. Functional Requirements (FR)
The application must fulfill the following functional requirements:

* **R1:** Provide a stateless REST API for mathematical operations.
* **R2:** Support basic arithmetic (add, subtract, multiply, divide) and advanced functions (power, sqrt, percent).
* **R3:** Return results in a structured JSON format.
* **R4:** Implement strict input validation to prevent mathematical errors or system overflows.

---

## 2. Operation Logic
* **Addition (`add`)**: Returns the sum of a and b.
* **Subtraction (`subtract`)**: Returns a minus b.
* **Multiplication (`multiply`)**: Returns the product of a and b.
* **Division (`divide`)**: Returns a divided by b.
* **Power (`power`)**: Raises base a to the exponent b (a^b).
* **Square Root (`sqrt`)**: Returns the square root of a (√a).
* **Percentage (`percent`)**: Calculates b percent of a (Formula: (a × b) / 100).

---

## 3. Operation-Specific Input Boundaries
Testing should target the **Nominal**, **Lower Bound**, and **Upper Bound** values defined below.

| Operation | Parameter | Valid Range (Inclusive) | Violation Result |
| :--- | :--- | :--- | :--- |
| **General** | `a` and `b` | -1,000,000 to 1,000,000 | `400 Bad Request` |
| **Divide** | `b` | All except 0 | `422 Unprocessable Entity` |
| **Sqrt** | `a` | 0 to 1,000,000 | `422 Unprocessable Entity` |
| **Power** | `b` (Exp) | 0 to 50 (Integer) | `400 Bad Request` |
| **Percent** | `b` (Rate) | 0 to 100 | `400 Bad Request` |

---

## 4. Expected Outputs & Error Handling Logic

| Scenario | Operation | Input Example | Expected Output |
| :--- | :--- | :--- | :--- |
| **Lower Boundary** | `add` | `a=-1M, b=0` | `{"result": -1000000.0}` |
| **Upper Boundary** | `add` | `a=1M, b=0` | `{"result": 1000000.0}` |
| **Divide by Zero** | `divide` | `a=10, b=0` | `422 Unprocessable Entity` |
| **Negative Root** | `sqrt` | `a=-1` | `422 Unprocessable Entity` |
| **Power Limit** | `power` | `a=2, b=51` | `400 Bad Request` |
| **Invalid Type** | Any | `a="abc"` | `400 Bad Request` |
| **Precision Test** | `divide` | `a=10, b=3` | `{"result": 3.3333}` |

---

!!! danger "Validation Priority"
    The application MUST perform boundary checks before executing the calculation. For example, if a user requests `sqrt` of `-1`, the system must return `422` immediately without attempting to call a square root function.