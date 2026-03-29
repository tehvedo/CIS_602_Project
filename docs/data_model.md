# Data Model and Schema

This document specifies the entities, attributes, and data structures used by the Calculator API. Since this is a stateless API, the data model focuses on the schema of the request/response payloads and the internal representation of a calculation.

---

## 1. Request Schema
The client sends a JSON object to the `/calculate` endpoint. This is the "Input Data Model."

### Entity: `CalculationRequest`
| Attribute | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| `op` | String | The operation name (e.g., "add", "sqrt") | Yes |
| `a` | Float | The primary operand | Yes |
| `b` | Float | The secondary operand | Optional (ignored for `sqrt`) |

**JSON Example:**
```json
{
  "op": "add",
  "a": 10.5,
  "b": 5.0
}
```

---

## 2. Response Schema
The API returns a JSON object representing the result or an error.

### Entity: `CalculationResult`
| Attribute | Type | Description |
| :--- | :--- | :--- |
| `result` | Float | The calculated numeric output |

### Entity: `ErrorResponse`
| Attribute | Type | Description |
| :--- | :--- | :--- |
| `error` | String | A descriptive message of the failure |
| `code` | Integer | The HTTP status code equivalent |

---

## 3. Internal Data Structure
Internally, the application uses a structured object to manage the calculation lifecycle before sending it back to the user.

### Class: `CalculationTask` (Internal)
* **Attributes:**
    * `id`: UUID (to track unique requests in CI/CD logs)
    * `timestamp`: ISO8601 string
    * `operation`: Function reference
    * `status`: ["PENDING", "COMPLETED", "FAILED"]

---

## 4. Logical Relationships
1.  **Validation -> Calculation:** The `CalculationRequest` must be successfully validated against the **Application Specifications** before it is mapped to a `CalculationTask`.
2.  **Transformation:** A successful `CalculationTask` always results in a `CalculationResult`.
3.  **Exception Mapping:** Any boundary violation or math error transforms the task into an `ErrorResponse`.

!!! info "Statelessness"
    This data model is transient. No data is persisted to a database (MongoDB/SQL). Each request is independent, ensuring the application remains stateless for easier CI/CD deployment and testing.