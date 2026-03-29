# Calculator API Project Overview

Welcome to the documentation for the **JavaScript Mini Calculator REST API**. This project was developed as part of the **CIS 602** curriculum to demonstrate proficiency in Software Engineering principles, automated testing, and CI/CD pipelines.

---

## Project Objective
The goal of this project is to build a robust, stateless mathematical engine using **JavaScript** that can be easily tested and deployed. 

We focus on the following key areas:

* **Functional Accuracy:** Ensuring all JS math operations return precise results.
* **Input Security:** Implementing strict boundaries to prevent system-level errors or overflows.
* **Automated Quality:** Using GitHub Actions to trigger automated test suites on every push.

## Core Technologies
* **Language:** JavaScript (Node.js)
* **API Framework:** Express.js
* **Testing Suite:** Jest / Mocha (Whitebox & Blackbox testing)
* **Documentation:** [MkDocs](https://www.mkdocs.org/)
* **CI/CD:** GitHub Actions for automated verification and deployment.

## Documentation Sections
* **[Usage Guide](usage.md):** Instructions on how to interact with the API endpoints.
* **[Specifications](specs.md):** Detailed requirements, input ranges, and expected behaviors.
* **[Data Model](data_model.md):** Schema definitions for requests and responses.
* **[Testing Methods](testing.md):** Defines the comprehensive test suite required to satisfy the requirements for 100% Whitebox and Blackbox coverage.

---

!!! success "CI/CD Status"
    This project is integrated with GitHub Actions. Every commit is automatically verified against our **Statement Coverage**, **Path Coverage**, and **Boundary Value Analysis (BVA)** test suites.