# Software Usage Guide

This Calculator provides a RESTful API for mathematical operations. You can interact with it using any HTTP client (like Postman or cURL).

---

## Available Operations
The following operations are supported by the `Calculator` logic:

### Basic Arithmetic
* **Add**: `add` (a + b)
* **Subtract**: `subtract` (a - b)
* **Multiply**: `multiply` (a × b)
* **Divide**: `divide` (a ÷ b)

### Advanced Functions
* **Power**: `power` (a^b - raises a to the power of b)
* **Square Root**: `sqrt` (√a - calculates the square root of a)
* **Percentage**: `percent` (a × b / 100 - calculates b% of a)

---

## Example API Call
To calculate a percentage (e.g., "What is 20% of 150?"), send a **POST** request to the `/calculate` endpoint:

**Endpoint:** `POST /calculate`  
**Body:**

```json
{
  "op": "percent",
  "a": 150,
  "b": 20
}
```

**Response:**

```json
{
  "result": 30
}
```

---

## Error Handling & Status Codes
The API uses standard HTTP status codes to communicate success or failure:

| Status Code | Meaning | Reason |
| :--- | :--- | :--- |
| `200 OK` | Success | The calculation was performed correctly. |
| `400 Bad Request` | Input Error | One of the operands is not a number. |
| `422 Unprocessable Entity` | Math Error | Division by zero or square root of a negative number. |

!!! info "Mathematical Constraints"
    When using the `sqrt` operation, the API only requires operand `a`. 
    Any value provided for `b` will be ignored by the logic.