# Calculator API - CIS 602 Final Project

Kevin Kochanek - CIS 602 Project for Option #2

This project implements a RESTful Calculator API as part of the CIS 602 Software Testing and Quality Assurance curriculum. The system is built with Node.js and features a robust CI/CD pipeline, comprehensive automated testing, and a live production deployment on the Render Cloud Platform.

---
## Getting Started

1. **Clone the repo:** `git clone https://github.com/tehvedo/CIS_602_Project.git`
2. **Install dependencies:** `npm install`
3. **Run tests:** `npm test`
4. **Start local server:** `node .\calculator.js`

## Project Overview

The primary objective of this project is to demonstrate professional software engineering practices, specifically focusing on:
* **Test-Driven Development (TDD):** Implementing complex mathematical logic backed by unit and integration tests.
* **Structural Testing:** Achieving high code coverage through Whitebox and Blackbox testing methodologies.
* **Automation:** Utilizing GitHub Actions for Continuous Integration (Node.js CI) and automated documentation generation.
* **Cloud Infrastructure:** Deploying a live API with production-ready endpoints.

---

## Live API Access

The API is globally accessible at the following production endpoint:
**URL:** https://kochanek-calculator-api-cis-602-project.onrender.com/calculate

> **Service Availability Note:** This application is hosted on a Render Free Tier instance. The server may "spin down" after 15 minutes of inactivity. If the initial request fails or hangs, please allow approximately 60 seconds for the service to re-initialize.

---

## Quick Start Testing

To verify the live API, execute the following command in your terminal.

**For PowerShell (Windows):**
```powershell
curl.exe -X POST https://kochanek-calculator-api-cis-602-project.onrender.com/calculate -H "Content-Type: application/json" -d '{\"op\": \"add\", \"a\": 10, \"b\": 20}'
```

**For cURL (Mac/Linux/Bash):**
```bash
curl -X POST https://kochanek-calculator-api-cis-602-project.onrender.com/calculate -H "Content-Type: application/json" -d '{"op": "add", "a": 10, "b": 20}'
```

*Note: If your environment adds brackets to the URL during copy-paste, please remove them before execution.*

---

## Documentation and Testing Reports

Detailed technical documentation and testing proofs are located in the repository:

* **Usage Guide:** See `docs/usage.md` for a full list of supported operations and JSON schema requirements.
* **Testing Methodology:** See `docs/testing.md` for details on Whitebox path testing, Blackbox equivalence partitioning, and JUnit/Istanbul coverage reports.
* **GitHub Repository:** [https://github.com/tehvedo/CIS_602_Project.git]

## Local Documentation

This project uses MkDocs for documentation. To view it locally:

1. **Install MkDocs:** `pip install mkdocs-material`
2. **Launch server:** `mkdocs serve`
3. **View at:** `http://127.0.0.1:8000`

---

## Technical Stack

* **Runtime:** Node.js
* **Testing Framework:** Jest / Istanbul (NYC) for coverage
* **CI/CD:** GitHub Actions
* **Documentation:** MkDocs
* **Deployment:** Render Cloud
