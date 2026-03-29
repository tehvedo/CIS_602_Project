# Data Model and Schema

This document specifies the request/response payloads and the stateless data handling logic used by the Calculator API.

---

## 1. Input Data Model (Request)
The API accepts a JSON object via a **POST** request to the `/calculate` endpoint. There is no persistent storage; the data exists only for the duration of the HTTP request.

### Request Body Schema
| Attribute | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| `op` | String | The operation name (e.g., "add", "subtract", "multiply", "divide", "sqrt", "power", "percent") | Yes |
| `a` | Number | The first operand | Yes |
| `b` | Number | The second operand | Required (except for `sqrt`) |

**Example JSON Request:**
```json
{
  "op": "add",
  "a": 10,
  "b": 20
}
```

---

## 2. Output Data Model (Response)
The API returns a JSON object. The structure of the response depends on the success or failure of the operation.

### Successful Response
On success, the API returns a single key-value pair with a **200 OK** status.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `result` | Number | The numeric output of the calculation |

**Example JSON Response:**
```json
{
  "result": 30
}
```

### Error Response
If validation fails or a mathematical error occurs (e.g., division by zero), the API returns a descriptive error message with an appropriate HTTP status code (**400** or **422**).

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `error` | String | A descriptive message explaining why the request failed |

**Example JSON Error:**
```json
{
  "error": "Division by zero"
}
```

---

## 3. Logical Flow
The application follows a linear, stateless functional flow:

1.  **Validation:** The incoming JSON is checked for the existence of `op` and numeric values for `a` and `b`.
2.  **Boundary Check:** Input values are verified to ensure they do not exceed system limits (e.g., values > 1,000,000).
3.  **Execution:** The `calculator.js` module executes the requested operation.
4.  **Serialization:** The resulting number is wrapped in a JSON object and sent as the response body.

---

## 4. Architectural Note: Statelessness
This API is strictly **stateless**.

* **No Database:** There is no persistence layer (SQL/NoSQL).
* **No Session:** The API does not track user state or previous calculations.
* **Independence:** Each request is processed in isolation, which simplifies Whitebox testing and ensures consistent results across the CI/CD pipeline and Render cloud environment.