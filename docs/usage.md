# Software Usage Guide

This Calculator provides a RESTful API for mathematical operations. It is currently deployed in a production environment with full CI/CD integration.

---

## Live API Endpoint
The application is deployed on the **Render Cloud Platform**:
**URL:** `https://kochanek-calculator-api-cis-602-project.onrender.com/calculate`

> **Note:** As this is hosted on a Free Tier instance, the server may spin down after 15 minutes of inactivity. Please allow up to 60 seconds for the first request to wake the service.

---

## How to Send Requests

### 1. Using PowerShell (Windows)
Run this single-line command to test the live API:

```powershell
curl.exe -X POST https://kochanek-calculator-api-cis-602-project.onrender.com/calculate -H "Content-Type: application/json" -d '{\"op\": \"add\", \"a\": 10, \"b\": 20}'
```

### 2. Using cURL (Mac/Linux/Bash)
Run this single-line command to test the live API:

```bash
curl -X POST https://kochanek-calculator-api-cis-602-project.onrender.com/calculate -H "Content-Type: application/json" -d '{"op": "add", "a": 10, "b": 20}'
```

> **Important:** If your Markdown viewer automatically turns the URLs above into clickable links, ensure you remove any extra brackets `[...]` or parentheses `(...)` added to the URL before running the command in your terminal.

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

## Request Format
All requests must be **POST** requests with a JSON body.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `op` | String | Operation: `add`, `subtract`, `multiply`, `divide`, `sqrt`, `power`, `percent` |
| `a` | Number | The first operand (required for all operations) |
| `b` | Number | The second operand (required for all except `sqrt`) |

### Example API Call
To calculate a percentage (e.g., "What is 20% of 150?"):

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
| `400 Bad Request` | Input Error | Missing parameters, non-numeric input, or boundary limit exceeded (> 1,000,000). |
| `422 Unprocessable Entity` | Math Error | Division by zero or square root of a negative number. |
| `500 Internal Error` | System Error | Unexpected system failure (verified via Whitebox path testing). |

!!! info "Mathematical Constraints"
    When using the `sqrt` operation, the API only requires operand `a`. 
    Any value provided for `b` will be ignored by the logic.